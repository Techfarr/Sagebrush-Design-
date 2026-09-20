// Work: featured rows, supporting cards, and the reusable case-study lightbox (hash-driven).
import { featured, supporting, byId, categories, modalities } from "../data/projects.js";
import { track } from "./analytics.js";
import { esc, media, openEvidence, trackAdbDemo, wireCommon, wireDialog } from "./ui.js";

const SHOW_FILTERS = false; // taxonomy preserved in data; hidden for launch
let filter = "All";
const themes = ["t0", "t1", "t2", "t3"];
const match = p => !SHOW_FILTERS || filter === "All" || (p.categories || []).includes(filter);

function renderFeatured() {
  const list = featured().filter(match);
  document.getElementById("featured-rows").innerHTML = list.map((p, i) => {
    const ev = p.evidence || [];
    const dom = ev[0] || { title: p.title, type: "Evidence", slot: p.id + "-hero" };
    const isAdb = p.id === "ag-dirt-busters";
    return `
<section id="work-${esc(p.id)}" class="feature ${themes[i % 4]} ${i % 2 ? "alt" : ""}" aria-labelledby="h-${esc(p.id)}">
  <article>
    <div class="story">
      <p class="eyebrow">${esc(p.category)} · ${esc(p.context)}</p>
      <h2 id="h-${esc(p.id)}">${esc(p.title)}</h2>
      <p class="problem-line">${esc(p.problem)}</p>
      <p class="summary">${esc(p.summary)}</p>
      <ul class="bullets" aria-label="Role and proof">${p.proof.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div>
    <div class="visual">
      <button type="button" class="dominant${dom.fit === "contain" ? " contain" : ""}" data-pid="${esc(p.id)}" data-eidx="0" aria-haspopup="dialog" aria-label="View evidence: ${esc(dom.title)}">
        ${dom.src ? `<img src="${esc(dom.src)}" alt="${esc(dom.alt || dom.title)}" loading="lazy">` : `<span class="ph" data-slot="${esc(dom.slot)}">${esc(dom.title)} — screenshot</span>`}
      </button>
      <div class="caption"><span class="l">${esc(dom.type)} · ${esc(dom.title)}</span><span class="r">View evidence&nbsp;→</span></div>
      <div class="minis">${ev.slice(1).map((e, k) => `
        <button type="button" class="mini" data-pid="${esc(p.id)}" data-eidx="${k + 1}" aria-haspopup="dialog">
          ${media(e, e.title)}
          <span class="meta"><span class="type">${esc(e.type)}</span><span class="name">${esc(e.title)}</span></span>
        </button>`).join("")}</div>
    </div>
    <div class="cta">
      ${p.caseStudy ? `<button type="button" class="btn" data-case="${esc(p.id)}" aria-haspopup="dialog">View Case Study</button>` : ""}
      ${p.portfolioUrl ? `<a class="btn-ghost" href="${esc(p.portfolioUrl)}">Explore Portfolio Sample&nbsp;→</a>` : ""}
      ${isAdb ? `<a class="btn-ghost" href="${esc(p.externalUrl)}" target="_blank" rel="noopener" data-adb-demo>Try a Dirt Buster&nbsp;↗</a>` : ""}
    </div>
  </article>
</section>`;
  }).join("");
  document.getElementById("no-results").hidden = !(list.length === 0 && supporting().filter(match).length === 0);
}

function renderSupporting() {
  const list = supporting().filter(match);
  const sec = document.getElementById("more-work"); sec.hidden = list.length === 0;
  document.getElementById("supporting-cards").innerHTML = list.map(s => {
    const e0 = (s.evidence && s.evidence[0]) || { slot: s.id + "-thumb", title: s.title };
    return `
<article class="scard ${esc(s.theme)}">
  <div class="body">
    <span class="eyebrow-sm">${esc(s.category)} · ${esc(s.context)}</span>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.summary)}</p>
  </div>
  ${media(e0, e0.title + " — diagram")}
  <div class="tags">${(s.tags || []).slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
</article>`;
  }).join("");
}

function renderFilters() {
  const wrap = document.getElementById("filters"); if (!SHOW_FILTERS) { wrap.hidden = true; return; }
  wrap.hidden = false;
  wrap.innerHTML = categories.map(c => `<button type="button" data-filter="${esc(c)}" aria-pressed="${c === filter}">${esc(c)}</button>`).join("");
}
function setFilter(name) { filter = name; renderFilters(); renderFeatured(); renderSupporting(); }

document.getElementById("modalities").innerHTML = modalities.map(m => `<span class="tag">${esc(m)}</span>`).join("");

// ---- Case-study lightbox: state lives in the URL hash so links are shareable and Back works naturally.
const caseDlg = document.getElementById("case-dialog");
let caseId = null, caseOpener = null, pushed = false;

function fillCase(p) {
  const q = s => caseDlg.querySelector(s);
  q("[data-cs-label]").textContent = p.category + " · " + p.context;
  q("#case-title").textContent = p.title;
  q("[data-cs-challenge]").textContent = p.challenge || p.summary;
  q("[data-cs-role]").innerHTML = (p.role || []).slice(0, 3).map(r => `<li>${esc(r)}</li>`).join("");
  q("[data-cs-decisions]").innerHTML = (p.decisions || []).slice(0, 3).map(d => `<li>${esc(d)}</li>`).join("");
  q("[data-cs-evidence]").innerHTML = (p.evidence || []).slice(0, 4).map((e, k) => `
    <button type="button" class="ev-card" data-pid="${esc(p.id)}" data-eidx="${k}" aria-haspopup="dialog">
      ${media(e, e.title)}
      <span class="meta"><span class="type">${esc(e.type)}</span><span class="name">${esc(e.title)}</span></span>
    </button>`).join("");
  q("[data-cs-outcome]").innerHTML = (p.outcome || []).slice(0, 3).map(o => `<li>${esc(o)}</li>`).join("");
  const sample = q("[data-cs-sample]"); sample.hidden = !p.portfolioUrl; if (p.portfolioUrl) sample.href = p.portfolioUrl;
  const live = q("[data-cs-live]"); live.hidden = !p.externalUrl; if (p.externalUrl) { live.href = p.externalUrl; live.dataset.trackLink = p.id; }
}

function syncHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const p = byId(id);
  const next = p && p.caseStudy ? id : null;
  if (next === caseId) return;
  if (!next && caseId) { track("case_study_close", { project: caseId }); caseId = null; if (caseDlg.open) caseDlg.close(); return; }
  caseId = next; fillCase(p);
  track("case_study_open", { project: next, via: caseOpener ? "button" : "hash" });
  if (!caseDlg.open) caseDlg.showModal();
  caseDlg.querySelector(".dlg-close").focus();
}
function closeCase() {
  if (!caseId) return;
  if (pushed) { pushed = false; history.back(); }
  else { history.replaceState(null, "", location.pathname + location.search); syncHash(); }
}

wireDialog(caseDlg);
caseDlg.addEventListener("close", () => { if (caseId) closeCase(); if (caseOpener && document.contains(caseOpener)) caseOpener.focus(); caseOpener = null; });
window.addEventListener("hashchange", syncHash);

// ---- Delegated clicks
document.addEventListener("click", e => {
  const t = e.target.closest("[data-case],[data-eidx],[data-adb-demo],[data-filter]"); if (!t) return;
  if (t.hasAttribute("data-adb-demo")) { trackAdbDemo(); return; }
  if (t.dataset.case) { caseOpener = t; pushed = true; history.pushState(null, "", "#" + t.dataset.case); syncHash(); }
  else if (t.dataset.eidx !== undefined) { const p = byId(t.dataset.pid); if (p) openEvidence(p, Number(t.dataset.eidx), t); }
  else if (t.dataset.filter) setFilter(t.dataset.filter);
});

renderFilters(); renderFeatured(); renderSupporting(); wireCommon(); syncHash();
