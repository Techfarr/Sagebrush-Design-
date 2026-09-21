// Home: featured flagship section + Ag Dirt Busters callout, rendered from data/projects.js.
import { projects, byId, homepageFeaturedId } from "../data/projects.js";
import { track } from "./analytics.js";
import { esc, media, openEvidence, wireCommon } from "./ui.js";

const f = byId(homepageFeaturedId) || projects[0];
const root = document.getElementById("featured");
const homeProject = f.homeImages ? { ...f, evidence: f.evidence.map((e, i) => ({ ...e, ...f.homeImages[i] })) } : f;

root.querySelector("[data-f-context]").textContent = f.context;
root.querySelector("[data-f-problem]").textContent = f.problem;
root.querySelector("[data-f-summary]").textContent = f.summary;
root.querySelector("[data-f-tags]").innerHTML = f.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("");
root.querySelector("[data-f-evidence]").innerHTML = homeProject.evidence.map((e, i) => `
  <button type="button" class="ecard" data-index="${i}" aria-haspopup="dialog">
    ${media(e, e.title + " — screenshot")}
    <span class="body">
      <span class="eyebrow-sm">${esc(e.type)}</span>
      <h3>${esc(e.title)}</h3>
      <p>${esc(e.description)}</p>
      <span class="more">View evidence&nbsp;→</span>
    </span>
  </button>`).join("");
root.querySelectorAll(".ecard").forEach(b => b.addEventListener("click", () => openEvidence(homeProject, Number(b.dataset.index), b)));

const v = root.querySelector("[data-f-validation]");
if (f.validation) {
  v.hidden = false;
  v.querySelector("[data-v-label]").textContent = f.validation.label;
  v.querySelector("[data-v-text]").textContent = f.validation.quote ? "\u201C" + f.validation.text + "\u201D" : f.validation.text;
  v.querySelector("[data-v-attr]").textContent = "— " + f.validation.attribution;
  v.querySelector("[data-v-link]").href = "work.html#" + f.id;
  const sample = v.querySelector("[data-v-sample]");
  if (sample) { sample.hidden = !f.portfolioUrl; if (f.portfolioUrl) sample.href = f.portfolioUrl; }
} else v.hidden = true;

const adb = byId("ag-dirt-busters");
if (adb) {
  document.querySelector("[data-adb-title]").textContent = adb.title;
  const live = document.querySelector("[data-adb-live]"); live.href = adb.externalUrl;
}

const form = document.getElementById("contact-form");
if (form) form.addEventListener("submit", e => { e.preventDefault(); track("contact_submit", { form: "placeholder" }); });

wireCommon();
