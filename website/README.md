# Sagebrush Design — production site

Static HTML/CSS/JS. Deploy the contents of this folder to Netlify (publish directory: this folder, no build step).

- index.html, work.html — pages
- data/projects.js — the only place project copy lives
- js/ui.js, js/home.js, js/work.js — rendering + dialogs; js/analytics.js — track() (no backend connected)
- css/site.css
- assets/logo, assets/images, assets/projects (evidence images go here; set `src` on the evidence item in data/projects.js)

No client source material, spreadsheets, or unsanitized screenshots belong in this folder.
