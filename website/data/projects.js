// Sagebrush Design — curated, public-safe project content.
// Single source for Home featured content, Work featured/supporting rows,
// case-study lightboxes, evidence viewers, and future filters.
// Edit content here, not in the page files. No confidential material belongs in this file.

export const homepageFeaturedId = "safety-investigations";

// Filter taxonomy is preserved for later; Work hides visible filters while the portfolio is small.
export const categories = ["All", "Learning Strategy", "Project Recovery", "Digital Learning", "Agriculture", "Systems"];

export const modalities = ["eLearning", "ILT / vILT", "Facilitator support", "Job aids / performance support", "Simulation", "Digital product", "Systems / workflow", "Program leadership"];

// Record shape
// id            slug; also the shareable hash (work.html#id)
// title, category (primary, shown in eyebrow), categories (all, for filters), context (industry shown in eyebrow)
// problem       one-line framing; summary — Work-row paragraph
// challenge     case study, 2–3 sentences; role — ≤3 bullets; decisions — ≤3 items; outcome — 1–3 verified facts
// proof         Work-row proof points; tags — secondary modality/tool tags
// evidence[]    { type, title, description, slot, src?, fit?, seeing?, why?, demonstrates? } — demonstrates optional
// validation    { label, text, attribution, quote } — quote:true only for approved verbatim quotations; paraphrases render without quotation marks
// survey        optional verified survey distribution (Safety) — learner reaction only
// externalUrl   public/demo URL when applicable
// homeVisibility "featured" | "callout" | "hidden"; workVisibility "featured" | "supporting" | "hidden"; caseStudy boolean
// theme         ink | sage | clay | sand (accent choice only)

export const projects = [
  {
    id: "safety-investigations",
    title: "Safety Investigations",
    category: "Learning Strategy",
    categories: ["Learning Strategy", "Digital Learning"],
    context: "Airline operations",
    industry: "Airline / airport operations safety",
    problem: "Building a practical safety investigation system",
    summary: "Airport operations leaders needed a more consistent way to investigate incidents without defaulting to blame. Sagebrush Design built an integrated learning system: 11 Rise 360 courses used as prerequisite instruction and just-in-time reference, a four-hour facilitator-led application experience, a SharePoint resource environment, learner worksheets, facilitator guidance, and performance-support tools. Pilot evidence then drove a redesign from open discovery to guided investigation while preserving learner judgment.",
    challenge: "Safety-investigation practices varied across locations, and leaders could move too quickly from an incident to a conclusion. The solution needed to build a common investigation mindset, support critical thinking, work across different operating environments, and remain useful after the classroom experience ended.",
    role: [
      "Learning strategist and lead designer for the integrated learning system.",
      "Developed and shaped the six-step SHIELD framework used across the learning experience.",
      "Led the pilot review, redesign, resource architecture, and public-safe portfolio reconstruction."
    ],
    decisions: [
      "Used 11 short Rise 360 courses as both prerequisite instruction and modular just-in-time reference instead of one large course.",
      "Designed the ILT around critical thinking: learners separate evidence from assumptions, identify gaps, test conclusions, and revise findings as new evidence appears.",
      "After the pilot, preserved discovery but replaced unnecessary uncertainty with staged evidence, table investigation, facilitator calibration, and clearer pacing."
    ],
    outcome: [
      "Post-session survey (14 responses): 14/14 strongly agreed the training was relevant to their role and increased knowledge or skills for the job; 13/14 agreed or strongly agreed they intended to apply it within 30 days.",
      "Early post-launch feedback described the facilitated experience as an \"awesome experience,\" and another internal learning team requested the program as a reference while developing a similar investigation curriculum.",
      "These results support learner reaction, confidence, intent to apply, and implementation decisions; operational investigation-quality outcomes have not been measured."
    ],
    survey: {
      responses: 14,
      items: [
        { label: "Relevant to my role", stronglyAgree: 14, agree: 0, neutral: 0 },
        { label: "Increased knowledge and/or skills for my job", stronglyAgree: 14, agree: 0, neutral: 0 },
        { label: "Confident applying the learning", stronglyAgree: 11, agree: 3, neutral: 0 },
        { label: "Activities, examples, and practice supported learning", stronglyAgree: 12, agree: 2, neutral: 0 },
        { label: "Intend to apply within 30 days", stronglyAgree: 11, agree: 2, neutral: 1 },
        { label: "Have the resources and support to apply it", stronglyAgree: 10, agree: 4, neutral: 0 }
      ]
    },
    proof: [
      "11 Rise 360 courses designed as prerequisite learning and just-in-time reference.",
      "Four-hour facilitator-led investigation experience supported by SharePoint resources, paper worksheets, QRGs, and facilitator guidance.",
      "Pilot findings were translated into a guided-discovery redesign centered on evidence, critical thinking, and learner judgment."
    ],
    tags: ["11 Rise ELTs", "4-hour ILT", "Critical thinking", "SharePoint resources", "Pilot redesign"],
    homeImages: [
      { type: "Digital learning", title: "eLearning scenario", description: "Representative decision practice for a safety investigation.", seeing: "A representative eLearning activity asking the learner what to do first after equipment damage.", src: "assets/projects/safety-investigations/approved/elearning.png", alt: "Representative eLearning decision activity with a dented baggage cart and a traffic cone." },
      { type: "Framework", title: "SHIELD reference", description: "The six-step investigation framework used across the learning system.", seeing: "A representative SHIELD reference with six colored icons.", src: "assets/projects/safety-investigations/approved/shield.png", alt: "SHIELD reference with six colored icons for Secure the Scene, Health Check, Inform, Evidence, Listen, and Document." },
      { type: "Facilitated learning", title: "Facilitated practice", description: "Incident photographs and a worksheet support evidence-based discussion.", seeing: "Representative investigation materials for facilitated practice.", src: "assets/projects/safety-investigations/approved/facilitated-practice.png", alt: "Representative facilitated practice with incident photographs and an investigation worksheet." }
    ],
    evidence: [
      { type: "Instructional design", title: "Interview practice", description: "Representative practice contrasting leading questions with open prompts.", slot: "safety-critical-thinking", src: "assets/projects/safety-investigations/approved/interview-practice.png", alt: "Representative interview practice contrasting leading and open questions.",
        seeing: "A representative interview activity comparing a leading question with an open prompt.",
        why: "The goal was not procedural recall alone. Learners needed repeated practice slowing down the first story and asking what the evidence actually supports." },
      { type: "Design process", title: "Design process", description: "A representative storyboard connects scenes, learner decisions, and design rationale.", slot: "safety-shield", src: "assets/projects/safety-investigations/approved/design-process.png", alt: "Representative learning storyboard showing scenes, learner decisions, and design rationale.",
        seeing: "A representative learning-experience storyboard showing the reasoning behind learner activities.",
        why: "A repeatable structure reduced complexity and gave the ELTs, facilitated practice, job aids, and resource environment a common organizing language." },
      { type: "Design iteration", title: "Pilot-driven revision", description: "A representative visual of the shift from open discovery to guided investigation.", slot: "safety-validation", src: "assets/projects/safety-investigations/approved/pilot-revision.png", alt: "Representative pilot revision from open discovery to guided investigation.",
        seeing: "A representative comparison of open discovery and the guided investigation sequence developed after the pilot.",
        why: "The case study should demonstrate impact without overstating it. The evidence boundary keeps the public claim aligned with the data that actually exists." }
    ],
    validation: { label: "Verified learner response", text: "In a 14-response post-session survey, every respondent strongly agreed the training was relevant and increased knowledge or skills for the job. Early post-launch feedback also described the facilitated session as an \"awesome experience.\"", attribution: "Post-session survey and anonymized operational feedback", quote: false },
    portfolioUrl: "samples/safety-investigations/index.html",
    externalUrl: "",
    theme: "ink",
    homeVisibility: "featured",
    workVisibility: "featured",
    caseStudy: true
  },
  {
    id: "project-recovery",
    title: "Large-Scale Learning Project Recovery",
    category: "Project Recovery",
    categories: ["Project Recovery", "Learning Strategy"],
    context: "Enterprise customer service",
    industry: "Enterprise customer service / claims",
    problem: "Restarting a stalled, multi-workstream learning program",
    summary: "Two and a half months in, the program had zero approved deliverables. Samantha assumed project leadership as a subcontractor through a consulting firm, then introduced visibility, review discipline, workload alignment, and a revised delivery plan across two workstreams — and delivered on the revised timeline.",
    challenge: "An enterprise learning program with two workstreams had been running for two and a half months with no approved deliverables. Reviews were stalled, workload was misaligned, and stakeholders could not see where the work stood.",
    role: [
      "Assumed project leadership as a subcontractor through a consulting firm when the program had zero approved deliverables.",
      "Led a cross-functional team of up to 44 through changing scope and priorities.",
      "Owned the revised delivery plan and stakeholder reporting."
    ],
    decisions: [
      "Made status visible first: one tracking structure for every deliverable, review stage, and owner.",
      "Reset review discipline so approvals moved on a schedule instead of accumulating.",
      "Re-aligned team roles and workload to the revised scope rather than the original plan."
    ],
    outcome: [
      "Approvals restarted and the program delivered against the revised plan.",
      "Hundreds of learning assets delivered across two workstreams.",
      "Client program metrics are confidential and not shown here."
    ],
    proof: [
      "Assumed project leadership as a subcontractor when the program had zero approved deliverables.",
      "Led a cross-functional team of up to 44 through changing scope and priorities.",
      "Delivered hundreds of learning assets against the revised program plan."
    ],
    tags: ["Project recovery", "Learning operations", "Simulation", "Program delivery"],
    evidence: [
      { type: "Process", title: "Recovery workflow", description: "Recreated recovery sequence, review status, and stakeholder visibility structure.", slot: "recovery-workflow",
        seeing: "A process-level Before → Intervention → Delivered view plus the review flow. It is intentionally not a fake project-management dashboard.",
        why: "Nothing could be approved while nobody could see what was waiting on whom. Visibility came before any process change." },
      { type: "Digital learning", title: "System simulation", description: "Storyline simulation used when a safe practice environment was unavailable.", slot: "recovery-sim",
        seeing: "A public-safe process diagram showing the constraint, simulation response, and learner-practice value without recreating the proprietary interface.",
        why: "Learners could not practice in the live system. A simulation gave them safe reps on the real workflow." },
      { type: "Delivery", title: "Resource alignment", description: "Workload and team-role decisions tied to revised scope.", slot: "recovery-resourcing",
        seeing: "A simplified map of roles against workstreams after the reset.",
        why: "The original staffing plan assumed the original scope. Re-aligning roles to the revised scope removed the bottlenecks." }
    ],
    validation: null,
    // Future public Before → Intervention → After visualization (not rendered yet)
    timeline: {
      before: ["No approved deliverables", "Limited visibility", "Review bottlenecks"],
      intervention: ["Tracking and transparency", "Review discipline", "Workload alignment", "Stakeholder visibility"],
      after: ["Approvals moving", "Delivery against revised plan", "Hundreds of learning deliverables"]
    },
    portfolioUrl: "samples/project-recovery/index.html",
    externalUrl: "",
    theme: "sage",
    homeVisibility: "hidden",
    workVisibility: "featured",
    caseStudy: true
  },
  {
    id: "ag-dirt-busters",
    title: "Ag Dirt Busters",
    category: "Agriculture",
    categories: ["Agriculture", "Digital Learning"],
    context: "Public education · pilot",
    industry: "Agriculture / public education",
    problem: "Challenging common agriculture myths with an owned public-education product",
    summary: "A Sagebrush Design initiative built end to end: concept, learning strategy, brand, content, web experience, interaction design, SEO, and analytics/CRM planning. Live at agdirtbusters.com and in pilot.",
    challenge: "Common myths about agriculture spread faster than the facts, and most correction arrives as text nobody reads. The goal was a quick, evidence-based interaction that works on a phone at an event as well as on a kiosk or a laptop.",
    role: [
      "Owner: concept, learning strategy, brand, and content.",
      "Designed and built the web experience and interactions.",
      "Planned SEO, analytics, and CRM follow-up for the pilot."
    ],
    decisions: [
      "One myth, one decision, one evidence-based answer — no lesson to complete.",
      "Designed mobile- and QR-first so the same experience works at events, kiosks, and on the web.",
      "Set up pilot measurement before promoting the product, so results are real rather than assumed."
    ],
    outcome: [
      "Live at agdirtbusters.com and in pilot.",
      "Performance metrics will be published once real pilot data is collected — no demo data is shown as results."
    ],
    proof: [
      "Owned the concept, learning strategy, brand, and digital experience.",
      "Designed for mobile, QR, kiosk, and event-use contexts.",
      "Built a path toward pilot testing, analytics, and CRM follow-up."
    ],
    tags: ["Agriculture", "Digital product", "Interactive learning", "Web", "AI-supported development"],
    evidence: [
      { type: "Product", title: "Interactive learning experience", description: "How myths are presented and challenged on the public site.", slot: "adb-interaction", src: "assets/images/ag-dirt-busters-logo.png", fit: "contain",
        seeing: "Placeholder: replace with a real screenshot of one myth interaction from agdirtbusters.com.",
        why: "A visitor should be able to answer one myth in under a minute, then leave with the evidence." },
      { type: "System", title: "Web + analytics flow", description: "How the public experience connects to measurement and follow-up.", slot: "adb-flow",
        seeing: "A diagram of the path from QR or search to interaction, event tracking, and CRM follow-up.",
        why: "Measurement was designed in from the start so pilot results are real data, not assumptions." },
      { type: "Process", title: "Concept to pilot", description: "The product path from idea through pilot readiness.", slot: "adb-roadmap",
        seeing: "The concept-to-pilot roadmap.",
        why: "Shipping a small, measurable pilot beats a large launch with no data." }
    ],
    validation: null,
    externalUrl: "https://www.agdirtbusters.com",
    theme: "clay",
    homeVisibility: "callout",
    workVisibility: "featured",
    caseStudy: true
  },
  {
    id: "contract-fundamentals",
    title: "Contract Fundamentals",
    category: "Digital Learning",
    categories: ["Digital Learning"],
    context: "Airline contract operations",
    industry: "Airline / contract operations",
    problem: "Turning one dense source deck into learning that prevents costly contract errors",
    summary: "Contract errors and missed escalations were costing the business money, including duplicate payments. Sagebrush Design restructured a single dense presentation and limited SME input into a four-module interactive course under a very tight deadline, using Rise plus custom HTML where standard blocks fell short.",
    challenge: "Contract errors and missed escalations were costing money, including duplicate payments. The only source material was one dense presentation, SME review time was limited, and the deadline was very tight.",
    role: [
      "Sole designer and developer.",
      "Restructured the source content into a four-module path.",
      "Built custom HTML interactions inside Rise."
    ],
    decisions: [
      "Reorganized the deck around the decisions people make with contracts, not the order of the slides.",
      "Used custom HTML where standard Rise blocks could not support practice — checking a packet, tracing terms to evidence.",
      "Made best-supported instructional decisions and moved forward rather than waiting on unavailable SME time."
    ],
    outcome: [
      "A stakeholder reviewer described the finished work in writing as impressive and exactly what was needed for a demonstration.",
      "Implementation is in progress; no adoption, error-reduction, or savings figures are claimed."
    ],
    proof: [
      "Restructured dense source content into a coherent four-module path.",
      "Built custom HTML interactions where standard Rise blocks were not enough.",
      "Kept development moving under a tight timeline with best-supported instructional decisions."
    ],
    tags: ["Rise", "Custom HTML", "eLearning", "Rapid development", "AI-supported development"],
    evidence: [
      { type: "Interaction", title: "Check the Packet", description: "Sanitized custom interaction applying contract concepts.", slot: "cf-packet",
        seeing: "A sanitized version of the packet-check interaction: the learner reviews a contract packet and flags what is missing or wrong.",
        why: "The costly errors happened at the packet stage. Practice had to look like that moment." },
      { type: "Interaction", title: "The Trace", description: "How terms and evidence connect across the work.", slot: "cf-trace",
        seeing: "A sanitized trace interaction connecting a contract term to the evidence that supports it.",
        why: "Escalations were missed because people could not see the chain from term to evidence. The interaction makes the chain visible." },
      { type: "Process", title: "Source-to-course structure", description: "How the original deck became four modules.", slot: "cf-map",
        seeing: "A map from the original slide order to the four-module structure.",
        why: "Shows the restructuring decision, not just the finished screens." }
    ],
    validation: { label: "Stakeholder feedback", text: "Described in writing by a stakeholder reviewer as impressive and exactly what was needed for a demonstration.", attribution: "Stakeholder reviewer, airline contract operations", quote: false },
    portfolioUrl: "samples/contract-fundamentals/index.html",
    externalUrl: "",
    theme: "sand",
    homeVisibility: "hidden",
    workVisibility: "featured",
    caseStudy: true
  },
  {
    id: "va-learning",
    title: "Scenario and systems learning for a government call center",
    category: "Digital Learning",
    categories: ["Digital Learning"],
    context: "Government / veteran services",
    industry: "Government / veteran services",
    problem: "Preparing new-hire agents to make the right call under tightly constrained rules",
    summary: "Branching scenarios, systems practice, and workflow-based learning for new Tier 1 staff, built from authoritative knowledge sources under tight turnaround and formal review requirements.",
    proof: [],
    tags: ["eLearning", "Branching", "Systems practice", "Government"],
    evidence: [{ type: "Scenario", title: "Branching decision practice", description: "Good / OK / poor paths with consequences and recovery.", slot: "va-branch" }],
    validation: null,
    externalUrl: "",
    theme: "ink",
    homeVisibility: "hidden",
    workVisibility: "supporting",
    caseStudy: false
  },
  {
    id: "nerc-library",
    title: "NERC CIP learning library strategy",
    category: "Learning Strategy",
    categories: ["Learning Strategy", "Systems"],
    context: "Energy / utility",
    industry: "Energy / utility",
    problem: "Designing a sellable compliance-learning product before building it",
    summary: "Mapped course tracks, buyer-to-learner flow, administrator assignment, delivery options, and compliance considerations for a proposed learning library. Stopped at the proposal stage by decision.",
    proof: [],
    tags: ["Learning strategy", "Product architecture", "Systems"],
    evidence: [{ type: "Architecture", title: "Buyer-to-learner flow", description: "Purchase, seat assignment, access, completion, reporting, and recertification.", slot: "nerc-flow" }],
    validation: null,
    externalUrl: "",
    theme: "sage",
    homeVisibility: "hidden",
    workVisibility: "supporting",
    caseStudy: false
  },
  {
    id: "rural-healthcare-system",
    title: "Rural healthcare policy system",
    category: "Systems",
    categories: ["Systems"],
    context: "Rural healthcare",
    industry: "Rural healthcare",
    problem: "Giving a rural health organization one reliable place for policy",
    summary: "A SharePoint-based policy environment built from scratch: manager and employee sites, libraries, metadata, permissions, versioning, search, notifications, and an automated review/approval flow.",
    proof: [],
    tags: ["SharePoint", "Workflow", "Systems / process"],
    evidence: [{ type: "System", title: "Policy lifecycle", description: "Information architecture and approval/status flow.", slot: "rh-lifecycle" }],
    validation: null,
    externalUrl: "",
    theme: "clay",
    homeVisibility: "hidden",
    workVisibility: "supporting",
    caseStudy: false
  }
];

export const featured = () => projects.filter(p => p.workVisibility === "featured");
export const supporting = () => projects.filter(p => p.workVisibility === "supporting");
export const withCaseStudy = () => projects.filter(p => p.caseStudy);
export const byId = id => projects.find(p => p.id === id);
