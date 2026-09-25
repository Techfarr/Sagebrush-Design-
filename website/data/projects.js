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
      { type: "Digital learning", title: "Fact or assumption practice", description: "A faithful public-safe reconstruction of the Rise interaction used to separate verified facts from assumptions.", seeing: "A sanitized reconstruction of the Rise sorting activity. The interaction structure and information hierarchy follow the delivered learning while client branding and proprietary examples are removed.", src: "assets/projects/safety-investigations/portfolio/elearning-fact-assumption.svg", fit: "contain", alt: "Sanitized reconstruction of a Rise 360 fact versus assumption interaction from Safety Investigations." },
      { type: "Facilitated learning", title: "The Reframe", description: "A faithful reconstruction of the ILT reveal that introduces new evidence after learners commit to an initial finding.", seeing: "A sanitized reconstruction of the facilitated Reframe slide, including the aligned SHIELD rail and three causation levels.", src: "assets/projects/safety-investigations/portfolio/ilt-reframe.svg", fit: "contain", alt: "Sanitized reconstruction of the Safety Investigations facilitated Reframe slide." },
      { type: "Performance support", title: "Quick Reference Guide", description: "A public-safe reconstruction of the QRG learners could take back to the operation.", seeing: "A sanitized reconstruction of the first page of the Safety Investigation Quick Reference Guide, preserving the document structure while removing client-specific procedures.", src: "assets/projects/safety-investigations/portfolio/qrg-overview.svg", fit: "contain", alt: "Sanitized reconstruction of the Safety Investigation Quick Reference Guide." }
    ],
    evidence: [
      { type: "Digital learning", title: "Fact or assumption practice", description: "Faithful public-safe reconstruction of a Rise interaction used to separate verified facts from assumptions.", slot: "safety-elearning", src: "assets/projects/safety-investigations/portfolio/elearning-fact-assumption.svg", alt: "Sanitized reconstruction of a Rise 360 fact versus assumption interaction from Safety Investigations.",
        seeing: "The interaction keeps the delivered Rise structure: two evidence categories, short work-relevant statements, and a simple sorting task. Client branding and proprietary examples are removed.",
        why: "Learners needed to practice the core discipline inside the investigation: identify what is verified before treating an interpretation as a finding." },
      { type: "Facilitated learning", title: "The Reframe", description: "Faithful reconstruction of the ILT reveal that tests an initial finding with new evidence.", slot: "safety-ilt", src: "assets/projects/safety-investigations/portfolio/ilt-reframe.svg", alt: "Sanitized reconstruction of the Safety Investigations facilitated Reframe slide.",
        seeing: "The public reconstruction preserves the delivered slide structure, SHIELD alignment, delayed evidence reveal, and three causation levels while replacing the real incident details.",
        why: "The prior hazard report was intentionally held until learners had built an initial finding. The reveal forces them to test that finding instead of defending the first story." },
      { type: "Performance support", title: "Quick Reference Guide", description: "Public-safe reconstruction of the QRG used as take-back performance support.", slot: "safety-qrg", src: "assets/projects/safety-investigations/portfolio/qrg-overview.svg", alt: "Sanitized reconstruction of the Safety Investigation Quick Reference Guide.",
        seeing: "The reconstruction follows the original QRG page structure: investigation sequence, purpose, 5 W's, and quick-reference hierarchy. Client-specific contacts, deadlines, system names, and procedures are removed.",
        why: "The program was designed for supervisors who investigate infrequently. The QRG lets them return to the essentials without replaying a full lesson." }
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
    "id": "ag-dirt-busters",
    "title": "Ag Dirt Busters",
    "category": "Agriculture",
    "categories": [
      "Agriculture",
      "Digital Learning"
    ],
    "context": "Public education \u00b7 digital product",
    "industry": "Agriculture / public education",
    "problem": "Turning everyday agriculture questions into interactive learning",
    "summary": "Sagebrush Design created Ag Dirt Busters from concept through delivery: a growing collection of illustrated lessons supported by a public website and private reporting. The two current lessons, Chocolate Milk and Food From the Store, invite kids and grown-ups to test a belief, explore the evidence, and reconsider their answer.",
    "challenge": "Everyday agriculture misconceptions needed an inviting way into evidence-based learning. The experience had to support kids and grown-ups, work for individuals and events, and connect learning activity with useful reporting as the lesson collection grows.",
    "role": [
      "Owned the product concept, learning strategy, brand, and content.",
      "Designed the illustrated lessons, public website, and event inquiry experience.",
      "Developed private reporting for learner sessions, engagement, event activity, and feedback."
    ],
    "decisions": [
      "Used a predict, explore, and check sequence so learners work with an idea before reviewing the explanation.",
      "Connected the growing lesson collection through a public website with direct lesson access and a shared event inquiry form.",
      "Separated session-level reporting from page views, with lesson and event filters and optional learner feedback."
    ],
    "outcome": [
      "A growing lesson collection, currently featuring Chocolate Milk and Food From the Store.",
      "A refreshed public website connects lesson discovery, resources, and event inquiries.",
      "A working private dashboard includes Overview, Event Report, Feedback, and Myth Submissions. Screenshot values illustrate the reporting interface; they are not presented as verified learning-impact results."
    ],
    "proof": [
      "Designed separate kid and grown-up experiences around prediction, exploration, and reflection.",
      "Connected lesson discovery, supporting resources, and event inquiries through one public website.",
      "Brought learner activity, event reporting, feedback, and submitted questions into a private dashboard."
    ],
    "tags": [
      "Interactive learning",
      "Product design",
      "Website",
      "Private reporting",
      "Learner feedback"
    ],
    "evidence": [
      {
        "type": "Public website",
        "title": "Explore the growing lesson collection",
        "description": "The refreshed website connects visitors to the current lessons: Chocolate Milk and Food From the Store.",
        "slot": "adb-website",
        "src": "assets/projects/ag-dirt-busters/public-website.jpg",
        "fit": "contain",
        "alt": "Ag Dirt Busters website with Chocolate Milk and Food From the Store topic choices and a brown cow illustration.",
        "seeing": "The published Ag Dirt Busters website, with direct lesson access and an event inquiry action.",
        "why": "The public website makes the growing lesson collection approachable and gives potential event hosts a clear inquiry path."
      },
      {
        "type": "Private reporting",
        "title": "Dashboard overview",
        "description": "Actual dashboard screenshot showing participation, answer distributions, completion, and engagement.",
        "slot": "adb-dashboard",
        "src": "assets/projects/ag-dirt-busters/dashboard-overview.png",
        "fit": "contain",
        "alt": "Ag Dirt Busters private dashboard overview with filters, metric cards, answer charts, and event summary.",
        "seeing": "An actual overview screenshot supplied by the product owner on September 25, 2026. Values shown are a point-in-time interface example, not verified outcome claims.",
        "why": "Reporting brings learner sessions, answers, and engagement together while keeping page views separate from participant counts."
      },
      {
        "type": "Learner feedback",
        "title": "Learner feedback",
        "description": "Actual feedback screenshot showing response counts, response rate, and answer distributions.",
        "slot": "adb-feedback",
        "src": "assets/projects/ag-dirt-busters/dashboard-feedback.png",
        "fit": "contain",
        "alt": "Ag Dirt Busters Feedback tab with response rate and charts for usefulness, explanation confidence, and recommendation.",
        "seeing": "An actual Feedback tab screenshot supplied by the product owner on September 25, 2026. It shows collected responses and the comments area.",
        "why": "Learner feedback gives the product owner another source of evidence for review. These responses are not a measure of long-term behavior change."
      },
      {
        "type": "Private reporting",
        "title": "Event reporting",
        "description": "Dashboard sample showing event filters, reporting metrics, and the Print / Save PDF action.",
        "slot": "adb-event-report",
        "src": "assets/projects/ag-dirt-busters/dashboard-event-report.png",
        "fit": "contain",
        "alt": "Ag Dirt Busters dashboard Event reporting view.",
        "seeing": "The Event Report view before an event is selected, with session metrics and source and audience breakdowns visible.",
        "why": "Event reporting supports review of how the experience is used in different settings."
      },
      {
        "type": "Private reporting",
        "title": "Myth submissions",
        "description": "Dashboard sample showing the read-only question submission view.",
        "slot": "adb-myth-submissions",
        "src": "assets/projects/ag-dirt-busters/dashboard-myth-submissions.png",
        "fit": "contain",
        "alt": "Ag Dirt Busters dashboard Myth submissions view.",
        "seeing": "The Myth Submissions view with test entries demonstrating the table layout. These entries are sample data, not published learner stories.",
        "why": "Submitted questions can inform future topics as the lesson collection grows."
      }
    ],
    "validation": null,
    "externalUrl": "https://agdirtbusters.com/",
    "lessonLinks": [
      {
        "title": "Try Chocolate Milk",
        "url": "https://agdirtbusters-chocolatemilkedition.netlify.app/?source=sagebrush"
      },
      {
        "title": "Try Food From the Store",
        "url": "https://agdirtbusters-foodfromthestore.netlify.app/?source=sagebrush"
      }
    ],
    "theme": "clay",
    "homeVisibility": "callout",
    "workVisibility": "featured",
    "caseStudy": true
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

