// Shared UI helpers: safe HTML, media slots, the evidence dialog, and the Ag Dirt Busters demo dialog.
import { track } from "./analytics.js";

export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Renders an <img> when the evidence item has a public asset, otherwise a labelled placeholder block.
export function media(item, label, cls = "") {
  const fit = item && item.fit === "contain" ? " contain" : "";
  if (item && item.src) return `<span class="media${fit} ${cls}"><img src="${esc(item.src)}" alt="${esc(item.alt || label)}" loading="lazy"></span>`;
  return `<span class="media ${cls}"><span class="ph" data-slot="${esc(item && item.slot || "")}">${esc(label)}</span></span>`;
}

// One evidence <dialog> per page; opener is remembered so focus returns on close.
let opener = null;
const dlg = () => document.getElementById("evidence-dialog");

export function openEvidence(project, index, trigger) {
  const ev = project.evidence[index]; if (!ev) return;
  const d = dlg(); opener = trigger || document.activeElement;
  track("evidence_open", { project: project.id, evidence: index });
  d.querySelector("[data-ev-label]").textContent = project.title + " · " + ev.type;
  d.querySelector("#ev-title").textContent = ev.title;
  const mediaWrap = d.querySelector("[data-ev-media]");
  mediaWrap.innerHTML = ev.src ? `<img src="${esc(ev.src)}" alt="${esc(ev.alt || ev.title)}">` : `<span class="ph" data-slot="${esc(ev.slot)}-large">${esc(ev.title)} — larger screenshot</span>`;
  d.querySelector("[data-ev-seeing]").textContent = ev.seeing || ev.description || "";
  d.querySelector("[data-ev-why]").textContent = ev.why || "";
  const dem = d.querySelector("[data-ev-demonstrates-wrap]");
  dem.hidden = !ev.demonstrates; d.querySelector("[data-ev-demonstrates]").textContent = ev.demonstrates || "";
  if (!d.open) d.showModal();
  d.querySelector(".dlg-close").focus();
}

// "Try a Dirt Buster" is a direct link to the live experience; this only records the click.
export function trackAdbDemo() { track("dirt_buster_demo_click", { project: "ag-dirt-busters" }); }

export function wireDialog(d) {
  d.querySelector(".dlg-close").addEventListener("click", () => d.close());
  d.addEventListener("click", e => { if (e.target === d) d.close(); });
  d.addEventListener("close", () => { if (opener && document.contains(opener)) opener.focus(); opener = null; });
}

export function wireCommon() {
  const ev = dlg(); if (ev) wireDialog(ev);
  document.querySelectorAll("[data-track-contact]").forEach(a => a.addEventListener("click", () => track("contact_cta_click", { source: a.dataset.trackContact })));
  document.querySelectorAll("[data-adb-demo]").forEach(a => a.addEventListener("click", trackAdbDemo));
  document.querySelectorAll("[data-track-link]").forEach(a => a.addEventListener("click", () => track("project_link_click", { project: a.dataset.trackLink, href: a.href })));
}
