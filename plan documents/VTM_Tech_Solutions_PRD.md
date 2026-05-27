# Product Requirements Document
# VTM Tech Solutions — US Market Website

**Version:** 1.1
**Date:** April 6, 2026
**Status:** Draft
**Owner:** VTM Tech Solutions

---

## 1. Executive Summary

VTM Tech Solutions is the United States expansion of VTM Maquinarias, an established metalworking machinery company based in Chile. This document outlines the requirements for a sophisticated, high-end marketing and sales website that positions VTM Tech Solutions as the premium choice for industrial metalworking and automation machinery in the US market.

The product catalog spans two distinct categories: **fabrication machinery** (fiber laser cutting, laser welding, laser cleaning, CNC press brakes, shearing machines, ironworkers) and **robotic automation** (collaborative welding arms and industrial welding arms) — a combination that sets VTM apart from pure-machinery distributors and opens the door to larger, automation-minded customers.

The website must embody the level of refinement expected from a luxury technology brand — think Leica, Bang & Olufsen, or Apple — while driving qualified leads and quote requests through a B2B sales funnel optimized for US industrial buyers.

---

## 2. Business Goals

| Goal | Metric |
|---|---|
| Generate qualified inbound leads | ≥ 50 leads/month within 6 months of launch |
| Establish brand credibility in the US market | Time-on-site ≥ 3 min, bounce rate < 45% |
| Drive product inquiries and quote requests | Quote form conversion rate ≥ 4% |
| Support bilingual buyer segments | EN/ES toggle, equal content parity |
| Rank for high-intent search terms | Top 5 Google ranking for 10 target keywords within 12 months |

---

## 3. Target Audience

### Primary: US-Based Industrial Buyers
- **Job titles:** Shop owner, operations manager, production director, plant manager
- **Company size:** Small to mid-size metal fabrication shops (5–200 employees)
- **Industries:** Metal fabrication, automotive, aerospace, construction, HVAC, custom manufacturing
- **Decision process:** 2–6 week research cycle, price-sensitive but quality-driven
- **Pain points:** Unreliable suppliers, long lead times, poor after-sales support, high import costs

### Secondary: Hispanic Business Owners in the US
- Spanish-speaking metalworking shop owners who prefer consuming content in Spanish
- Familiar with Latin American machinery suppliers, value bilingual support
- Concentrated in Texas, Florida, California, Illinois

### Tertiary: Procurement & Purchasing Agents
- Corporate buyers evaluating vendors for capital equipment
- Need spec sheets, certifications, references, and ROI data

---

## 4. Brand Identity & Design Direction

### 4.1 Brand Positioning
> "Where precision fabrication meets intelligent automation."

VTM Tech Solutions is not just a machinery supplier — it is a full-spectrum metal manufacturing solutions partner. From the first laser cut to a fully automated robotic welding cell, VTM equips shops at every stage of their evolution. The brand must communicate technological leadership, Latin American craftsmanship heritage, and US-market reliability in equal measure.

### 4.2 Visual Language
Inspired by Apple.com's product marketing pages, with the gravitas of Leica and the technical precision of Trumpf:
- **Layout:** Full-viewport hero sections, edge-to-edge imagery, disciplined grid, generous white space — nothing gratuitous, nothing arbitrary
- **Typography:** Two-typeface system: a geometric sans-serif (e.g., Inter or Neue Haas Grotesk) for headlines at 80–120px with tight tracking; a humanist serif (e.g., Freight Text or Tiempos) for longer body copy to add warmth and depth. Every typographic decision communicates intent.
- **Visual hierarchy:** Ruthless. A visitor's eye must land on the headline, travel to the product, and arrive at the CTA — with zero confusion about what to do next.
- **Color palette** (derived directly from the VTM logo):
  - Primary Dark: Near-Black `#171717` — authority, precision, primary text and dark sections
  - Brand Red: Crimson `#CB1C1D` — the hero accent; used for all primary CTAs, highlights, hover states, and key callouts
  - Background Light: Pure White `#FFFFFF` — main page background for light sections
  - Background Mid: Light Gray `#F2F2F2` — alternating section backgrounds, cards, input fields
  - Background Dark: Near-Black `#171717` — hero sections, footer, dark-mode product showcases
  - Text on Dark: White `#FFFFFF` — body copy and headlines on dark backgrounds
  - Muted Text: Medium Gray `#6B6B6B` — captions, secondary labels, placeholders
  - Borders / Dividers: Light Gray `#DEDEDE` — subtle separators, card outlines
  - **No blue, no orange.** The brand red `#CB1C1D` is the sole accent color — it carries all urgency, action, and brand energy. Use it sparingly so it always commands attention when it appears.
- **Imagery:** Cinematic, high-contrast photography and video — laser beams cutting through steel in a dark shop, a robotic arm completing a perfect weld bead, close-up macro shots of cut edges with mirror finish. No stock photography of people in hard hats pointing at clipboards. The machines are the heroes.
- **Iconography:** Custom thin-line monochrome icons; never cartoonish, never generic. Product category icons (cutting, welding, bending, automation) should feel like precision technical drawings.
- **Motion design philosophy:** Motion serves information — it never exists for decoration alone. Every animation should either reveal content, guide the eye, or communicate the precision of the product. Restrained, deliberate, expensive-feeling.
- **Negative space:** Use it aggressively. White space is not empty — it is what makes each element feel important. Crowded pages signal low-end brands.

### 4.3 Motion & Animation Philosophy
- **Scroll-triggered reveals:** Text and images fade/slide in as user scrolls (GSAP ScrollTrigger)
- **Parallax depth:** Background layers move at different speeds creating depth on hero sections
- **Sticky product specs:** Tech specs "lock" into view while user scrolls through feature highlights (Apple iPhone-style)
- **Machine animations:** SVG or Lottie animations illustrating cutting paths, laser beams, bending sequences, and robotic arm motion cycles (joint rotation, reach envelope, weld path trajectories)
- **Number counters:** Two stats only — machines sold and years of experience — count up on scroll
- **Smooth page transitions:** Route changes fade rather than snap
- **Hover micro-interactions:** Buttons, cards, and nav items respond with subtle scale/glow effects
- **Performance rule:** All animations must be GPU-accelerated (transform/opacity only). No animation that sacrifices Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms).

---

## 5. Site Architecture

```
vtmtechsolutions.com/
├── / (Home)
├── /fabrication/                        ← Fabrication machinery category hub
│   ├── /fiber-laser-cutting-machine
│   ├── /laser-welding-machine
│   ├── /laser-cleaning-machine
│   ├── /cnc-press-brake
│   ├── /shearing-machine
│   │   ├── /guillotine
│   │   └── /swing-beam
│   └── /ironworker
├── /automation/                         ← Robotic automation category hub (NEW)
│   ├── /collaborative-welding-arm       ← Cobot welding arm
│   └── /industrial-welding-arm          ← Industrial 6-axis welding robot
├── /solutions/
│   ├── /metal-fabrication
│   ├── /automotive
│   ├── /aerospace
│   └── /hvac-construction
├── /about
├── /support
│   ├── /installation
│   ├── /training
│   └── /spare-parts
├── /blog (SEO hub)
├── /quote (primary conversion page)
└── /contact
```

---

## 6. Page-by-Page Requirements

---

### 6.1 Homepage (`/`)

**Purpose:** Create immediate visual impact, communicate value proposition, route visitors to the right product or action.

#### Section 1 — Hero (Full Viewport)
- **Headline:** `"The future of metal manufacturing starts here."`
  Sub-headline: `"Precision fabrication machinery and intelligent robotic automation — engineered for US shops that refuse to settle."`
- **Background:** Autoplay cinematic video loop (no audio) — opens on a macro shot of a fiber laser cutting through stainless steel, dissolves into a collaborative welding arm completing a weld bead in a clean, modern shop environment. Video graded dark with a near-black overlay; the brand red appears only as the laser beam and the robot's indicator light.
- **Nav:** Minimal. Logo left, five nav items center (Fabrication, Automation, Solutions, About, Contact), EN|ES toggle + "Request Quote" CTA button right. On scroll, nav condenses and gains a frosted-glass `backdrop-filter: blur` background.
- **CTAs:**
  - Primary: `"Explore Our Machines"` → scrolls to two-category product split
  - Secondary: `"Talk to a Specialist"` → opens inline contact drawer (no page navigation)
- **Scroll indicator:** Thin vertical line that animates downward — refined, not a bouncing arrow
- **Bilingual toggle:** EN | ES — minimal, typographic only, top-right of nav

#### Section 2 — Trust Bar (Full Width, Sticky-ready)
Two animated counters (count up on scroll) flanked by static trust signals:
- **Counter:** `15+ Years of Industry Experience`
- **Counter:** `500+ Machines Installed`
- **Static:** `ISO 9001 Certified Equipment`
- **Static:** Logos of certifications: CE, ISO, FDA (if applicable)

#### Section 3 — Two-Category Product Split
The page divides cleanly into two pillars — **Fabrication** and **Automation** — establishing VTM's dual identity immediately.

**Left pillar — Fabrication Machinery** (`/fabrication`):
- Dark background (`#171717`), white text
- 3-column micro-grid of fabrication products: Fiber Laser Cutting, Laser Welding, Laser Cleaning, CNC Press Brake, Shearing Machine, Ironworker
- Each card: product name, one-sentence capability statement, subtle hover state revealing a key spec

**Right pillar — Robotic Automation** (`/automation`):
- Light background (`#F2F2F2`), dark text — creates a visual yin/yang contrast
- Two featured products presented large: Collaborative Welding Arm and Industrial Welding Arm
- Automation cards are larger, more editorial — they signal that this is the premium, high-ticket category
- Badge: `"NEW TO THE US MARKET"` in brand red on both automation cards

**Transition between pillars:** A thin brand-red `#CB1C1D` vertical divider line that draws itself on scroll via SVG stroke animation.

Cards animate in staggered on scroll (each 80ms apart, left-to-right within each pillar).

#### Section 4 — Why VTM Tech Solutions (Feature Highlights)
Apple-style full-viewport sticky scroll sections. Each section pins at 100vh while the content animates in, then releases to the next. Dark background throughout this block — creates a cinematic, immersive experience between the bright product grid and the next light section.

1. **Uncompromising Precision**
   — "Tolerances down to ±0.05mm. Every laser cut, every press brake bend, every robotic weld — repeatable to a standard that doesn't accept excuses."
   Visual: extreme macro of a laser cut edge, backlit.

2. **Fabrication to Automation — One Partner**
   — "Whether you're cutting your first sheet or deploying your first welding robot, you don't need a different supplier at each stage. VTM grows with you."
   Visual: split-screen — a traditional fab shop on the left morphing into a modern robotic cell on the right.

3. **Support That Doesn't Disappear After Delivery**
   — "Installation, calibration, operator training, spare parts, remote diagnostics. We measure our success by your uptime, not our invoice."
   Visual: technician working with a customer on a collaborative arm, natural lighting, authentic.

4. **Support That Starts Before You Buy**
   — "From your first question to final installation, you deal with the same team. No call centers, no ticket queues — real people who know the machines."
   Visual: close-up of a VTM technician walking a customer through a control panel, natural shop lighting, authentic.

Each section: headline locks into view (GSAP `pin: true`) while supporting copy and image scroll past it.

#### Section 5 — Industry Solutions
Horizontal scroll carousel (drag or button):
- Metal Fabrication / Automotive / Aerospace / HVAC & Construction
- Each card: industry photo, headline, short paragraph, link

#### Section 6 — Social Proof
- Video testimonials (embedded, autoplay muted on hover)
- 3–4 customer quotes with name, company, state
- Star rating aggregate (Google Reviews or Trustpilot embed)
- Before/after slider: raw cut vs. VTM laser cut result

#### Section 7 — Blog Preview (SEO Booster)
- 3 latest blog posts in card format
- Title, thumbnail, date, 1-sentence excerpt, read more link

#### Section 8 — Final CTA Section
- Full-width dark background
- Headline: `"Ready to upgrade your shop?"`
- Sub: `"Talk to a machinery specialist. No pressure. Free consultation."`
- Form: Name, Email, Phone, Machine of Interest (dropdown), Message
- CTA button: `"Request Free Quote"` — brand red `#CB1C1D`, large, full-width on mobile

#### Section 9 — Footer
- Logo + tagline
- Navigation columns: Products, Solutions, Company, Support
- Contact: phone, email, address (US office)
- Social links: LinkedIn, YouTube, Instagram
- Language toggle
- Legal: Privacy Policy, Terms of Service, Cookie Notice
- Copyright

---

### 6.2 Fabrication Product Pages (`/fabrication/[slug]`)

**Purpose:** Educate, inspire confidence, and convert with a quote or direct inquiry.

Each fabrication product page follows this template:

#### Block 1 — Hero
- Full-viewport product hero: dramatic machine photo or video
- Overlay text: Product name (large) + one-line power statement
- CTA: `"Request a Quote"` (brand red `#CB1C1D`) + `"Download Spec Sheet"` (white outline)
- Animated scroll hint

#### Block 2 — Product Overview (Apple-style sticky scroll)
As user scrolls, left side shows machine photos cycling; right side shows scrolling feature bullets:
- Key differentiators (3–5 bullets)
- Use cases ("Perfect for shops cutting stainless, aluminum, carbon steel up to X mm")
- Animated spec callouts (wattage, speed, table size, etc.) count up on scroll

#### Block 3 — Technical Specifications Table
- Clean, readable table: Parameter / Value / Notes
- Toggle between metric and imperial units
- "Download Full Spec Sheet (PDF)" CTA

#### Block 4 — Machine in Action
- Embedded YouTube video or self-hosted video player
- Cinematic footage of the specific machine performing cuts/bends/welds

#### Block 5 — Configuration Options
- Interactive configurator: user selects power (wattage), table size, optional add-ons
- Summary panel updates dynamically
- Not a pricing tool — ends with "Get Pricing for This Configuration" → quote form pre-filled

#### Block 6 — Comparison Table (optional, high-intent pages)
- VTM model vs. 2 competitors (unnamed or named)
- Checkmark table highlighting VTM advantages

#### Block 7 — Related Products
- Horizontal scroll of 3–4 complementary machines
- "Customers who viewed this also considered..."

#### Block 8 — FAQ Accordion
- 5–8 frequently asked questions per product
- Structured data markup (JSON-LD) for Google rich results

#### Block 9 — Quote CTA Banner
- Sticky bottom bar on mobile: `"Get a Quote"` button always visible
- Desktop: inline section with inline mini-form (name, email, phone, message)

---

### 6.3 Automation Product Pages (`/automation/[slug]`)

**Purpose:** These pages serve a more sophisticated, higher-budget buyer — plant managers, automation engineers, operations directors. The design must reflect that. These are not commodity product pages; they are technology showcases.

Two products in this category:

#### `/automation/collaborative-welding-arm`
A cobot (collaborative robot) welding arm designed to work safely alongside human operators without safety caging. Ideal for small-to-medium shops beginning their automation journey.

**Key differentiators to communicate:**
- No safety cage required — deploys in any shop layout
- Teachable by non-programmers (lead-through programming)
- Consistent weld quality across every cycle — eliminates human variance
- Fast ROI for shops doing repetitive weld jobs (fixtures, brackets, frames)

#### `/automation/industrial-welding-arm`
A full 6-axis industrial welding robot for high-volume, high-complexity welding applications. Designed for shops running multi-shift production.

**Key differentiators to communicate:**
- High-speed, high-repeatability (±0.05mm)
- Compatible with MIG, TIG, and plasma processes
- Integrates with conveyor lines, positioners, and vision systems
- Full cell design and integration support available from VTM

#### Page Template for Both Automation Products

**Block 1 — Cinematic Hero (Dark, Full Viewport)**
The robot is the protagonist. No clutter, no busy backgrounds. The arm is filmed in motion against pure black, lit dramatically. Brand red appears only as indicator lights and laser pointer elements on the robot itself.
- Headline: large, minimal — e.g., `"Precision. Tireless. Yours."`
- One-line sub: capability statement
- CTA: `"Request a Demo"` (brand red) + `"Download Technical Brief"` (ghost/outline)

**Block 2 — What It Solves (Problem → Solution narrative)**
Two-column layout. Left: the problem in plain language ("Your best welder can't weld 3,000 pieces a week. Your worst welder doesn't hit spec.") Right: how the arm solves it. This is empathy-first copywriting, not spec-sheet copywriting.

**Block 3 — Technical Specs + 3D/Video Showcase**
- Interactive 360° product viewer (Three.js) OR embedded high-quality turntable video
- Spec table: reach, payload, repeatability, axes, supported welding processes, power requirements, footprint
- Imperial/metric toggle

**Block 4 — Application Gallery**
A curated grid of real-world applications: automotive frames, HVAC components, structural brackets, custom fabrications. Each image labeled with industry + material + process.

**Block 5 — Cobot vs. Industrial Comparison** (shown on both pages, highlighting when to choose each)
- Clean comparison table: payload, speed, programming complexity, cage requirement, ideal production volume
- Ends with: `"Not sure which is right for your shop? Talk to our automation team."` → opens contact drawer

**Block 6 — Integration & Support**
- VTM provides: site survey, cell design, installation, programming, operator training, ongoing support
- Communicates that the buyer is not buying a machine — they're buying a production capability

**Block 7 — ROI Calculator (interactive)**
Simple calculator: user inputs number of parts/day, average weld time per part, current hourly labor cost → outputs estimated payback period. Ends with "See how these numbers apply to your specific job" → quote form.

**Block 8 — FAQ Accordion**
- JSON-LD structured data for rich results

**Block 9 — Request a Demo CTA**
- Automation products warrant a "Request a Demo" CTA rather than just a quote — higher consideration purchase
- Clicking it opens a **callback request form**: name, phone number, WhatsApp number (optional), company, best time to call, and a short message
- On submit: lead goes into HubSpot; the sales team calls them back at their own pace
- **WhatsApp floating button** (bottom-right corner, all pages): tapping it opens a WhatsApp chat directly with the sales team — no form, no friction

---

### 6.5 AI Sales Agent — Primary Conversion Mechanism

**Purpose:** Replace the traditional quote form entirely. Every primary CTA on the site ("Get a Quote", "Request a Demo") opens the AI Sales Agent — a conversational interface that qualifies the visitor through natural dialogue, supports text and voice input, and delivers a structured lead to HubSpot at the end.

#### Experience Design
- Opens as a full-screen overlay or a large centered modal — not a small chat bubble
- Dark background (`#171717`), clean typography, brand red accents — matches the site's premium aesthetic
- Two input modes always available simultaneously:
  - **Type** — standard text input
  - **🎤 Speak** — microphone button; user speaks and sees their words transcribed in real time (Web Speech API)
- AI responses are displayed as text AND spoken aloud via ElevenLabs voice synthesis
- Language auto-detected from browser locale, or user can toggle EN/ES mid-conversation
- Accessible: full keyboard navigation, ARIA labels, screen reader compatible

#### AI Conversation Flow
The agent is powered by the Claude API. It does not follow a rigid script — it reasons through the conversation, remembers prior answers, and avoids asking for information the user already provided. Approximate flow:

1. **Opening:** "Hi, I'm the VTM assistant. I'll help find the right machine for your shop. What kind of metalworking do you do?"
2. **Machine interest:** identifies which product category based on their answer
3. **Material:** what metals they work with (steel, stainless, aluminum, etc.)
4. **Thickness:** maximum material thickness they need to process
5. **Dimensions:** typical part size / sheet dimensions
6. **Volume:** weekly or monthly production volume
7. **Current equipment:** what they're using now (helps position VTM's advantage)
8. **Timeline:** how soon they're looking to purchase or replace equipment
9. **Contact details:** name, company, email, phone number, WhatsApp number (optional)
10. **Close:** "Perfect — a VTM specialist will reach out within [X] hours with a tailored recommendation."

#### Data Output
When the conversation ends, the agent extracts all collected information into a structured lead record and:
- Creates or updates a contact in **HubSpot** with all fields mapped
- Tags the contact `source: ai-agent`
- Sends a **WhatsApp notification** to the sales team with a plain-language lead summary
- Fires a `generate_lead` GA4 conversion event

#### Agent Personality & Tone
- Knowledgeable, warm, direct — like a senior sales engineer, not a customer service bot
- Never sounds scripted or robotic
- If the user asks a product question mid-qualification ("how thick can your fiber laser cut?"), the agent answers it correctly and then continues qualification
- Bilingual: switches seamlessly between English and Spanish based on the user's language

---

### 6.6 About Page (`/about`)

- Full-story of VTM: founding in Chile, expansion to the US, mission
- Team section: real photos, names, roles (builds trust)
- Timeline: animated milestone scroll (founding year → key milestones → US expansion)
- Values: Precision, Reliability, Service, Partnership
- Certifications and partnerships section

---

### 6.7 Support Page (`/support`)

- Three clear tiles: Installation, Training, Spare Parts
- Phone and email support prominently displayed
- Live chat widget integration (Intercom or Crisp)
- Downloadable resources: manuals, maintenance guides (gated behind email capture)

---

### 6.8 Blog (`/blog`)

**SEO purpose only.** Each article should target high-intent keywords.

Target keyword clusters (examples):
- "fiber laser cutting machine for sale USA"
- "best CNC press brake for small shop"
- "laser welding machine vs TIG welding"
- "how to choose a shearing machine"
- "ironworker machine buying guide"

Articles: 1,500–3,000 words, schema markup, internal links to product pages, CTA to quote form at end of every article.

---

## 7. Bilingual Requirements (EN/ES)

### 7.1 Language Toggle
- Persistent toggle in navigation (top-right): `EN | ES`
- User preference stored in localStorage
- URL structure option A (recommended): `/en/` and `/es/` prefixes with `hreflang` tags
- URL structure option B: single URL, content swapped via i18n library (Next.js `next-intl`)

### 7.2 Content Parity
- 100% of content translated — no partial translations
- Translations done by human translator (not machine-translated) for credibility
- Spanish content optimized for US Hispanic audience (neutral Spanish, not Chilean slang)
- Spanish SEO: separate keyword research for Spanish search terms

### 7.3 Localization Details
- Currency: USD only (this is the US site)
- Measurements: default to Imperial (inches, feet), toggle available for metric
- Date format: MM/DD/YYYY (English), DD/MM/YYYY (Spanish)
- Phone format: US format (+1 XXX-XXX-XXXX)

---

## 8. Technical Requirements

### 8.1 Tech Stack (Recommended)
| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG for SEO, React ecosystem, i18n support |
| Styling | Tailwind CSS + CSS custom properties | Utility-first, fast iteration |
| Animation | GSAP + ScrollTrigger | Industry standard for Apple-like scroll animations |
| 3D/Lottie | Three.js (optional) / Lottie | Machine animations, hero effects |
| CMS | Sanity.io or Contentful | Non-dev content updates, blog, product specs |
| Forms & CRM | HubSpot Free CRM + HubSpot Forms | Lead management, email sequences |
| Analytics | Google Analytics 4 + Microsoft Clarity | Conversion tracking, heatmaps |
| Hosting | Vercel | Edge CDN, instant deploys, great Next.js support |
| i18n | next-intl | File-based translations, type-safe |
| Video | Cloudflare Stream or self-hosted | Cost-effective video CDN |

### 8.2 Performance Requirements
| Metric | Target |
|---|---|
| Lighthouse Performance Score | ≥ 90 (mobile and desktop) |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Time to First Byte (TTFB) | < 800ms |
| Page weight (initial load) | < 1.5MB (excluding video) |

### 8.3 SEO Requirements
- Server-side rendering for all content pages (no client-only rendering)
- Semantic HTML5 structure (H1 → H6 hierarchy)
- Meta title and description per page (unique, optimized)
- Open Graph and Twitter Card tags
- JSON-LD structured data: Organization, Product, FAQPage, BreadcrumbList
- Sitemap.xml auto-generated
- Robots.txt configured
- Canonical URLs
- `hreflang` tags for EN/ES versions
- Image alt text on all images
- Core Web Vitals passing in Google Search Console

### 8.4 Security Requirements
- SSL/TLS certificate (HTTPS everywhere)
- CAPTCHA or honeypot on all forms (prevent spam)
- CSP headers configured
- No sensitive data in client-side code
- GDPR/CCPA cookie consent banner

### 8.5 Browser & Device Support
- Chrome, Firefox, Safari, Edge — latest 2 versions
- iOS Safari 15+, Android Chrome 90+
- Responsive breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop), 1920px (large desktop)

---

## 9. Animations — Detailed Specifications

### 9.1 Homepage Hero
- Background: `<video>` autoplay, muted, loop, playsinline — crossfades between 3 clips
- Text entrance: headline splits word-by-word, each word fades + slides up (stagger 100ms, GSAP)
- CTA buttons: fade in after headline completes (300ms delay)

### 9.2 Scroll-Triggered Section Reveals
All non-hero sections use `ScrollTrigger` with `start: "top 80%"`:
- Feature cards: `y: 60 → 0`, `opacity: 0 → 1`, stagger 80ms
- Section titles: `y: 40 → 0`, `opacity: 0 → 1`
- Full-width images: `scale: 1.05 → 1` (subtle zoom-in on reveal)

### 9.3 Product Page — Sticky Feature Scroll
Implemented with GSAP `pin: true` on the image panel:
- Left panel (image): pinned/fixed while right panel (feature list) scrolls
- Each feature bullet highlights as it enters the viewport
- Smooth image crossfade as features change

### 9.4 Statistics Counter
- Uses CountUp.js or GSAP's text plugin
- Triggers when element enters viewport
- Duration: 2 seconds, easing: `power2.out`

### 9.5 Micro-interactions
- Nav links: underline expands from left on hover (`transform: scaleX`)
- CTA buttons: subtle `scale(1.03)` + box-shadow on hover, `scale(0.97)` on active
- Product cards: `translateY(-8px)` + shadow deepens on hover
- Language toggle: pill slides between EN/ES with transition

---

## 10. Lead Generation & Sales Funnel

### 10.1 CTA Distribution Strategy

CTAs must appear repeatedly throughout every page — not just at the top. Research consistently shows that buyers are ready to act at different scroll depths. A visitor who reaches the FAQ section is more qualified than one who just landed; they deserve a CTA right there too.

**Rule:** No more than two full viewport-height sections should pass without a CTA opportunity of some kind.

**CTA types and placement map:**

| CTA | Placement | Style | Opens |
|---|---|---|---|
| `"Get a Quote"` | Nav (persistent), hero, after product specs, after feature highlights, footer | Brand red button | AI Sales Agent |
| `"Request a Demo"` | Automation product pages — hero, after ROI calculator, after FAQ | Brand red button | AI Sales Agent |
| `"Talk to Our AI"` | After trust bar, homepage Section 4, contact page | Ghost/outline button | AI Sales Agent |
| `"Download Spec Sheet"` | Product pages — after specs table, after video block | Text link or outline; email-gated | Email capture modal |
| `"WhatsApp Us"` | Floating button, bottom-right corner, all pages | WhatsApp green icon | WhatsApp chat |
| `"See Our Machines"` | Homepage hero secondary CTA, blog post footers | Text link with arrow | Scrolls to product section |

**Hierarchy:**
1. **Primary:** All quote/demo CTAs → AI Sales Agent — this is the single conversion mechanism
2. **Secondary:** "Download Spec Sheet" — email capture, feeds HubSpot sequence
3. **Ambient:** WhatsApp floating button — always visible, zero friction for users who prefer messaging

**Passive capture:** Exit-intent popup for first-time visitors — offers a "Complete Metalworking Machinery Buyer's Guide" PDF in exchange for email. Triggered only on pages where the user has scrolled at least 40% before moving to exit.

### 10.2 Email Automation (HubSpot)
Triggered sequences after each conversion event:

**After AI agent conversation completes:**
- Email 1 (immediate): "We received your information" — personalized summary of what the AI collected, confirming what the specialist will prepare
- Email 2 (Day 1): Product brochure for the specific machine(s) the AI identified as relevant
- Email 3 (Day 3): Customer success story from their industry
- Email 4 (Day 7): "Any questions?" follow-up from a named sales rep

**After spec sheet download:**
- Email 1 (immediate): Download link + one related product recommendation
- Email 2 (Day 3): "Is the [Machine] right for your shop?" checklist
- Email 3 (Day 10): Invite to a free consultation via WhatsApp or phone

### 10.3 Sales Conversion Features
- **AI Sales Agent:** The primary conversion mechanism — replaces all forms. Opened by every "Get a Quote" and "Request a Demo" CTA across the site. Powered by Claude API + ElevenLabs voice. Bilingual. Pushes structured leads to HubSpot on completion.
- **WhatsApp floating button:** Fixed bottom-right on all pages — links directly to the sales team's WhatsApp Business number via `wa.me/` link. No API required. Also receives AI agent lead summaries as notifications.
- **Financing badge:** "Financing Available — 0% for 12 months" badge on product cards
- **Availability handled via AI agent:** When users ask about delivery timelines, the AI agent acknowledges that timelines vary and that a specialist will confirm during follow-up — no false promises on the site.

---

## 11. Content Requirements

### 11.1 Copywriting Tone of Voice
The copy must feel like it was written by someone who deeply understands metalworking — not a marketing agency that just Googled "fiber laser." Two distinct registers:

**For Fabrication Machinery pages:**
- **Direct and authoritative** — the buyer is experienced, practical, and skeptical of hype
- **Outcome-first** — lead with what the machine enables, not its feature list
- **Specific, not vague** — "±0.05mm repeatability at 12m/min" beats "industry-leading precision"
- Avoid: "world-class," "state-of-the-art," "cutting-edge" — every competitor uses these words and they mean nothing
- Write for the shop owner reading this at 7am before the crew arrives

**For Automation (Cobot & Industrial Arm) pages:**
- **Visionary but grounded** — this buyer is making a larger, more transformative decision
- **Empathy-led** — acknowledge the anxiety of automating for the first time; de-risk the decision
- **ROI-anchored** — speak in payback periods, parts-per-hour, and labor cost offsets
- **Aspirational** — help the buyer picture what their shop looks like 18 months after the robot is running
- The tone should feel closer to a technology company (Tesla, Boston Dynamics) than a machinery catalog

**Universal rules:**
- Active voice. Short sentences. One idea per sentence.
- Never a paragraph longer than 4 lines on screen.
- Every page section must earn its place — if you can delete it and lose nothing, delete it.

### 11.2 Product Copy Template (each machine)
1. **Hero tagline** (max 8 words): e.g., "The last fiber laser you'll ever need."
2. **One-paragraph overview** (60–80 words): what it does, who it's for, key differentiator
3. **3–5 feature bullets** with supporting data points
4. **Use case section:** specific industries and materials
5. **FAQ section:** 6–8 questions a buyer would actually ask

### 11.3 Required Assets per Product (to be sourced/created)
- [ ] Hero product photography (professional, white/dark studio background): 1 hero + 4 detail shots
- [ ] Machine-in-action video (30–90 seconds): real shop footage, not trade show clips
- [ ] PDF specification sheet (branded, bilingual)
- [ ] Exploded diagram or labeled diagram of key components

---

## 12. Product Catalog Summary

### Fabrication Machinery

| Product | Category | Key Differentiator to Highlight |
|---|---|---|
| Fiber Laser Cutting Machine | Cutting | Speed, precision, low operating cost vs. CO2 laser |
| Laser Welding Machine | Welding | 5x faster than TIG, minimal distortion, no filler needed |
| Laser Cleaning Machine | Surface Treatment | Chemical-free, no media blasting, precise coating removal |
| CNC Press Brake | Bending | Repeatability, CNC back gauge, multi-axis options |
| Shearing Machine — Guillotine | Cutting | Heavy-gauge capacity, clean straight cuts |
| Shearing Machine — Swing Beam | Cutting | Better for thinner gauge, lower maintenance |
| Ironworker | Multi-function | Punching, shearing, notching — one machine, lower footprint |

### Robotic Automation

| Product | Category | Key Differentiator to Highlight |
|---|---|---|
| Collaborative Welding Arm (Cobot) | Automation — Entry | No safety cage, lead-through programming, fast ROI for repetitive jobs, human-safe |
| Industrial Welding Arm (6-axis) | Automation — Advanced | High-speed high-volume welding, ±0.05mm repeatability, multi-process, full cell integration |

**Navigation note:** These two categories should feel architecturally distinct on the website — Fabrication is the established, proven foundation; Automation is the forward-looking, premium tier. Visual design, copywriting tone, and page structure should reflect this distinction.

---

## 13. Analytics & Measurement

### 13.1 KPIs to Track (Google Analytics 4)
- Organic search traffic (by language)
- Quote form submissions (conversion event)
- Spec sheet downloads (lead event)
- Product page engagement (scroll depth ≥ 75%)
- Video play rate on product pages
- Chat conversations initiated
- WhatsApp button clicks
- Callback form submissions

### 13.2 Heatmap & Session Recording
- Microsoft Clarity (free): session recordings, heatmaps, click maps
- Review weekly for first 3 months post-launch

### 13.3 A/B Testing Plan (post-launch)
- Hero CTA text: "Get a Free Quote" vs. "See Our Machines"
- Quote form: multi-step vs. single-page
- Product page CTA placement: sticky bottom bar vs. inline

---

## 14. Project Phases & Milestones

| Phase | Scope | Duration |
|---|---|---|
| Phase 1: Discovery | Brand guidelines, sitemap, content audit, wireframes | 2 weeks |
| Phase 2: Design | Full Figma designs (EN + ES) — Desktop + Mobile — all pages | 3 weeks |
| Phase 3: Development | Next.js build, animations, CMS integration, forms | 5 weeks |
| Phase 4: Content | Copy, translations, photography, videos, spec sheets | 3 weeks (parallel with Phase 3) |
| Phase 5: QA | Cross-browser testing, performance audit, SEO audit | 1 week |
| Phase 6: Launch | DNS cutover, GA4 verification, sitemap submission | 1 day |
| Phase 7: Post-launch | Analytics review, CRO iteration, blog content sprint | Ongoing |

---

## 15. Out of Scope (v1.0)

- E-commerce / online purchasing (future phase)
- Customer portal / order tracking
- Machine configurator with live pricing
- AR/3D machine viewer
- API integration with ERP/inventory system
- Mobile app

---

## 16. Open Questions

1. Does VTM Tech Solutions have a US office address and phone number for the website?
2. Are there existing customer testimonials or case studies that can be used?
3. What is the preferred CRM — new HubSpot account or existing system?
4. Will professional product photography need to be commissioned, or do high-res assets exist?
5. Is there a preferred Calendly or scheduling tool for demo booking?
6. What is the target launch date?
7. Will the Chilean site (vtmaquinarias.cl) remain separate, or should the two be linked?
8. Are there any US compliance/export control considerations for certain machine types?

---

## Appendix A — Competitor Reference Sites

Sites to study for UX benchmarking:
- **Apple.com/mac** — scroll animation and product storytelling benchmark
- **bystronic.com** — B2B industrial machinery, sophisticated positioning
- **trumpf.com** — laser technology brand, premium industrial feel
- **amada.com** — metalworking machinery, US market positioning
- **accurl.com** — direct category competitor to benchmark against

---

## Appendix B — Target SEO Keywords (Seed List)

| Keyword | Intent | Priority |
|---|---|---|
| fiber laser cutting machine for sale | Transactional | High |
| buy CNC press brake USA | Transactional | High |
| laser welding machine price | Transactional | High |
| best ironworker machine for fab shop | Commercial | High |
| guillotine shearing machine supplier | Commercial | Medium |
| laser cleaning machine vs sandblasting | Informational | Medium |
| swing beam shearing machine vs guillotine | Informational | Medium |
| fiber laser cutting machine buying guide | Informational | Medium |
| metalworking machinery supplier USA | Navigational/Commercial | High |
| laser welding machine for aluminum | Commercial | Medium |
| collaborative welding robot for small shop | Commercial | High |
| cobot welding arm price USA | Transactional | High |
| industrial welding robot supplier USA | Transactional | High |
| cobot vs industrial welding robot | Informational | High |
| welding automation for metal fabrication shop | Commercial | High |
| robotic welding arm ROI | Informational | Medium |
| how to automate welding in a fab shop | Informational | Medium |

---

*Document prepared for VTM Tech Solutions — US Market Website Initiative*
*All requirements subject to revision following stakeholder review.*
