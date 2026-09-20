// Sagebrush Design — first-party event tracking abstraction.
// Pages call track(); nothing here talks to a backend. Later: forward payloads to Supabase
// (publishable browser key + RLS only) and HubSpot attribution via setSink().
// Never place service-role keys or other privileged credentials in this file.

export const EVENTS = [
  "case_study_open", "case_study_close", "evidence_open",
  "project_link_click", "dirt_buster_demo_click",
  "contact_cta_click", "contact_submit"
];

const isDev = () => /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.hostname === "" || /netlify\.app$/.test(location.hostname) || new URLSearchParams(location.search).has("debug");

let sink = null;

export function setSink(fn) { sink = typeof fn === "function" ? fn : null; }

export function track(event, props = {}) {
  try {
    if (!EVENTS.includes(event)) { if (isDev()) console.warn("[track] unknown event:", event); return; }
    const payload = { event, ...props, page: location.pathname, referrer: document.referrer || null, ts: new Date().toISOString() };
    if (isDev()) console.info("[track]", payload);
    if (sink) sink(payload);
  } catch (e) { if (isDev()) console.warn("[track] failed", e); }
}
