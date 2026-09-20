# Sagebrush Design staging build — 2026-09-18

Current focus: finish and lock Safety Investigations, then move to Contract Fundamentals.

## Safety changes integrated
- Updated Safety case-study copy to reflect the actual architecture: 11 Rise 360 ELTs, prerequisite + just-in-time use, 4-hour facilitator-led ILT, SharePoint/resource support, paper worksheets, QRG/performance support, and facilitator guidance.
- Elevated critical thinking as a requested teaching requirement.
- Updated the pilot/redesign story from open discovery to guided investigation while preserving learner judgment and discovery.
- Added verified survey evidence, anonymized early post-launch feedback, and internal reuse/modeling evidence.
- Added the public Safety portfolio sample at `samples/safety-investigations/index.html`.
- Added real captures from the public portfolio sample as the primary Safety evidence on Home/Work.
- Added `Explore Portfolio Sample` links on Home, Work, and the Safety case-study modal.

## Public-safety rule
The client company name, logos, employee names, identifying internal URLs, and client-branded screenshots must not appear anywhere in the public build.

## Next QA
Deploy this folder to Netlify staging and test:
1. Home → Work → Safety portfolio sample → Work.
2. Work case-study hash behavior and browser Back.
3. Safety sticky navigation + active section while scrolling.
4. Safety internal example links.
5. Mobile behavior and section offsets.
6. All images/assets and external Ag Dirt Busters link.


## Contract Fundamentals integrated sample
- Added `samples/contract-fundamentals/index.html` using the approved continuous-scroll integrated sample format.
- Added public-safe playable demos: `demos/the-trace.html` and `demos/check-the-packet.html`.
- Demos preserve documented interaction mechanics but use fictionalized organization, aircraft, data, and business content.
- Added Work-page `portfolioUrl` for Contract Fundamentals.
- Kept M2 In-Tray out of the public sample for now; it remains optional if a third interaction is later justified.
