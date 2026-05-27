# Implementation Plan
# VTM Tech Solutions — US Market Website

**Version:** 2.0
**Date:** April 6, 2026
**Based on PRD:** VTM_Tech_Solutions_PRD.md v1.1

---

## How to Use This Document

- `[ ]` — Not started
- `[x]` — Completed
- `[~]` — In progress
- `[!]` — Blocked / needs your decision

**🔍 REVIEW CHECKPOINT** — You test, inspect, and approve before anything after it begins.

**The rule:** Every phase ends with a live, working URL you can open in a browser and evaluate. Nothing in the next phase starts until you've signed off on the current one.

---

## Phase Structure Overview

| Phase | Name | What you get at the end |
|---|---|---|
| **1** | Foundation + One Complete Slice | A live URL with the full design system applied, one complete product page end-to-end, and both languages working |
| **2** | Full Product Catalog + Homepage | Every product page live, the full homepage, and all CTAs routing correctly |
| **3** | Animations, AI Agent & Conversion Engine | All GSAP animations, AI Sales Agent (text + voice), HubSpot integration, email sequences, WhatsApp button, live chat |
| **4** | SEO, QA, Analytics & Launch | A fully audited, search-optimized, cross-browser-tested production website ready to receive real customers |

---

---

# PHASE 1 — Foundation + One Complete Slice

**Goal:** Build the entire technical foundation and prove it works end-to-end by shipping one complete, production-quality product page. Every decision made here — design system, fonts, colors, component structure, CMS schema, i18n — sets the standard for everything that follows.

**What you'll be able to review at the end of Phase 1:** A live Vercel URL with the full brand identity applied, the navbar, the footer, and one complete fabrication product page in both English and Spanish.

---

## 1.1 — Project Infrastructure

- [ ] Create GitHub repository (`vtm-tech-solutions-web`)
- [ ] Initialize Next.js 14 project with App Router
- [ ] Configure TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Install ESLint + Prettier with shared config
- [ ] Set up absolute import aliases (`@/components`, `@/lib`, `@/styles`)
- [ ] Create `.env.local` template file with all required environment variable keys (no values — just the keys as documentation)
- [ ] Connect repository to Vercel
- [ ] Confirm a live preview URL exists and auto-deploys on every push

---

## 1.2 — Design System & Tokens

- [ ] Create `/styles/tokens.css` with all CSS custom properties:
  - `--color-red: #CB1C1D`
  - `--color-dark: #171717`
  - `--color-white: #FFFFFF`
  - `--color-gray-light: #F2F2F2`
  - `--color-gray-mid: #6B6B6B`
  - `--color-gray-border: #DEDEDE`
- [ ] Map all tokens in Tailwind `theme.extend`
- [ ] Install and configure typefaces via `next/font`:
  - Inter or Neue Haas Grotesk (headlines)
  - Freight Text or Tiempos (body)
- [ ] Build base UI component library (`/components/ui/`):
  - [ ] `Button` — variants: primary (red filled), outline, ghost, text-link with arrow
  - [ ] `Badge` — e.g., "NEW TO THE US MARKET" in brand red
  - [ ] `SectionLabel` — small uppercase overline text (category labels)
  - [ ] `Tag` — neutral pill label (industry, process type)
- [ ] Apply global `RootLayout` with font variables and base styles

---

## 1.3 — Global Layout (Navbar + Footer)

- [ ] **Navbar** (`/components/layout/Navbar.tsx`):
  - [ ] Logo left, five nav items center (Fabrication, Automation, Solutions, About, Contact)
  - [ ] EN | ES language toggle right
  - [ ] "Request Quote" CTA button right (brand red)
  - [ ] Mobile hamburger menu with full-screen drawer
  - [ ] On scroll: navbar condenses, gains frosted-glass `backdrop-filter: blur` background (CSS only for now — GSAP scroll behavior added in Phase 3)
- [ ] **Footer** (`/components/layout/Footer.tsx`):
  - [ ] Navigation columns: Fabrication, Automation, Company, Support
  - [ ] Contact: phone, email, US address
  - [ ] Social links: LinkedIn, YouTube, Instagram
  - [ ] Language toggle
  - [ ] Legal: Privacy Policy, Terms of Service
  - [ ] Copyright line

---

## 1.4 — Internationalization (i18n)

- [ ] Install `next-intl`
- [ ] Create `/messages/en.json` — English strings (nav, footer, common CTAs, form labels, error messages)
- [ ] Create `/messages/es.json` — Spanish equivalents of all keys
- [ ] Configure `i18n.ts` routing: `/en/` and `/es/` URL prefixes with `hreflang` tags
- [ ] Update `RootLayout` to accept locale and pass to `NextIntlClientProvider`
- [ ] Language toggle in Navbar switches locale and persists preference in `localStorage`
- [ ] Verify: `/` redirects to `/en/`, `/es/` loads Spanish content throughout

---

## 1.5 — CMS Setup (Sanity.io)

- [ ] Create Sanity.io project
- [ ] Define content schemas:
  - [ ] `product` — name, slug, category (fabrication | automation), hero image, hero video URL, tagline (EN+ES), overview (EN+ES), specs array, features array, FAQ array, related products (references)
  - [ ] `blogPost` — title (EN+ES), slug, body (portable text, EN+ES), thumbnail, SEO fields
  - [ ] `siteSettings` — company name, phone, email, social links, US address
  - [ ] `testimonial` — name, company, state, quote (EN+ES), photo
- [ ] Populate all 9 products in Sanity (placeholder content acceptable — real copy in Phase 2)
- [ ] Connect Sanity client to Next.js and verify data fetches correctly

---

## 1.6 — One Complete Product Page (Proof of Concept)

Build the **Fiber Laser Cutting Machine** page (`/en/fabrication/fiber-laser-cutting-machine`) to full production quality. This page becomes the template for all remaining product pages.

- [ ] Block 1 — Hero: product photo/video, headline, "Request a Quote" (red) + "Download Spec Sheet" (outline)
- [ ] Block 2 — Sticky feature scroll: placeholder images + 5 feature bullets with animated spec callouts (static for now)
- [ ] Block 3 — Technical specs table with imperial/metric toggle
- [ ] Block 4 — Product video embed (YouTube or self-hosted)
- [ ] Block 5 — Configuration options panel (static — no JS logic yet)
- [ ] Block 6 — Comparison table vs. CO2 laser
- [ ] Block 7 — Related products horizontal scroll
- [ ] Block 8 — FAQ accordion (6 questions, JSON-LD markup included)
- [ ] Block 9 — Quote CTA: sticky bottom bar on mobile, inline form on desktop
- [ ] Duplicate page renders correctly at `/es/fabrication/fiber-laser-cutting-machine` in Spanish

---

> ### 🔍 REVIEW CHECKPOINT — End of Phase 1
>
> **Live URL to review:** `[vercel-preview-url]/en/fabrication/fiber-laser-cutting-machine`
>
> **What to check — go through these one by one:**
>
> **Design system:**
> - [ ] Brand red `#CB1C1D` is correct (use browser color picker on a CTA button)
> - [ ] Headlines render in Inter/Neue Haas Grotesk
> - [ ] Body text renders in Freight Text/Tiempos
> - [ ] All backgrounds are white, light gray, or near-black — no other colors present
>
> **Navbar:**
> - [ ] All five nav items are present and correctly labeled
> - [ ] "Request Quote" button is brand red
> - [ ] Mobile hamburger opens the full-screen drawer
> - [ ] EN | ES toggle is visible and switches the language
>
> **Product page:**
> - [ ] All 9 blocks render with no missing images or broken layout
> - [ ] Imperial/metric toggle on the specs table switches the units
> - [ ] FAQ accordion opens and closes on click
> - [ ] On mobile (375px), the sticky "Get a Quote" bar is visible at the bottom
> - [ ] All CTA buttons are present and visually correct (no placeholder buttons)
>
> **Language:**
> - [ ] Navigate to `/es/fabrication/fiber-laser-cutting-machine` — all text is in Spanish
> - [ ] Switch language via the navbar toggle — URL changes and content switches
>
> **What you approve or reject:**
> - Does the overall visual identity feel sophisticated and premium?
> - Are the fonts, colors, and spacing matching what you envisioned?
> - Is there anything you want changed before we build the remaining 8 product pages on this template?
>
> ⚠️ **Do not proceed to Phase 2 until you are satisfied with the design system and this template page. Changing the design system after all pages are built is expensive.**

---

---

# PHASE 2 — Full Product Catalog + Homepage

**Goal:** Using the approved template from Phase 1, build out every remaining product page and the full homepage. At the end of Phase 2 you have a complete, navigable website — every page exists, every link works, all content is in place. No animations yet, but the full visual design is live.

**What you'll be able to review at the end of Phase 2:** The complete website — homepage, all 9 product pages, quote page, about, support, and blog — in both English and Spanish.

---

## 2.1 — Remaining Fabrication Product Pages

Using the approved Fiber Laser page as the template, build the remaining 6 fabrication pages. Real copy and specs should be in Sanity by this point.

- [ ] `/fabrication/laser-welding-machine` — all 9 blocks
- [ ] `/fabrication/laser-cleaning-machine` — all 9 blocks
- [ ] `/fabrication/cnc-press-brake` — all 9 blocks (comparison table vs. manual press brake)
- [ ] `/fabrication/shearing-machine/guillotine` — all 9 blocks
- [ ] `/fabrication/shearing-machine/swing-beam` — all 9 blocks
- [ ] `/fabrication/ironworker` — all 9 blocks
- [ ] All 6 pages verified in Spanish (`/es/fabrication/...`)

---

## 2.2 — Automation Product Pages

These pages follow a distinct template — darker, more editorial, premium. Do not reuse the fabrication template verbatim.

**Collaborative Welding Arm** (`/automation/collaborative-welding-arm`):
- [ ] Block 1 — Cinematic dark hero (robot video on black background), "Request a Demo" (red) + "Download Technical Brief" (outline), "NEW TO THE US MARKET" badge
- [ ] Block 2 — Problem → Solution two-column narrative
- [ ] Block 3 — Specs table + turntable video placeholder
- [ ] Block 4 — Application gallery grid (labeled by industry, material, process)
- [ ] Block 5 — Cobot vs. Industrial comparison table
- [ ] Block 6 — Integration & Support section
- [ ] Block 7 — ROI Calculator (inputs: parts/day, weld time per part, labor cost/hr → output: estimated payback period)
- [ ] Block 8 — FAQ accordion (JSON-LD)
- [ ] Block 9 — "Request a Demo" CTA → opens AI Sales Agent (built in Phase 3)

**Industrial Welding Arm** (`/automation/industrial-welding-arm`):
- [ ] Same 9-block structure as cobot page
- [ ] Block 5 comparison table positioned from the industrial arm's perspective
- [ ] Both pages verified in Spanish (`/es/automation/...`)

---

## 2.3 — Homepage

- [ ] **Section 1 — Hero**
  - [ ] Background video (autoplay, muted, loop, playsInline): laser cut dissolving to cobot weld
  - [ ] Dark overlay gradient
  - [ ] Headline: "The future of metal manufacturing starts here."
  - [ ] Sub-headline
  - [ ] "Explore Our Machines" (scrolls to Section 3) + "Talk to a Specialist" (opens contact drawer)
  - [ ] Thin vertical scroll indicator line at bottom center

- [ ] **Section 2 — Trust Bar**
  - [ ] Two counter placeholders: "X+ Years of Experience" + "X+ Machines Installed"
  - [ ] Two static trust badges: ISO certification + CE logo

- [ ] **Section 3 — Two-Category Product Split**
  - [ ] Left pillar (dark): 6 fabrication product cards from Sanity
  - [ ] Right pillar (light): 2 automation cards from Sanity with "NEW" badge
  - [ ] Brand-red vertical SVG divider between pillars (static line for now — animated draw in Phase 3)
  - [ ] All cards link to correct product pages

- [ ] **Section 4 — Feature Highlights (4 blocks)**
  - [ ] Block 1: "Uncompromising Precision" — copy + placeholder image (macro laser cut edge)
  - [ ] Block 2: "Fabrication to Automation — One Partner" — copy + split-screen placeholder
  - [ ] Block 3: "Support That Doesn't Disappear" — copy + placeholder image
  - [ ] Block 4: "Support That Starts Before You Buy" — copy + placeholder image

- [ ] **Section 5 — Industry Solutions Carousel**
  - [ ] Horizontal scroll: Metal Fabrication, Automotive, Aerospace, HVAC & Construction
  - [ ] Drag-to-scroll + previous/next button navigation

- [ ] **Section 6 — Social Proof**
  - [ ] 3 customer quote cards (placeholder quotes with real names/companies if available)
  - [ ] Star rating block

- [ ] **Section 7 — Blog Preview**
  - [ ] 3 latest posts from Sanity (placeholder posts if no real content yet)

- [ ] **Section 8 — Final CTA Section**
  - [ ] Dark background, headline, sub-headline
  - [ ] Inline mini-form: name, email, phone, machine of interest (dropdown), message
  - [ ] "Request Free Quote" button in brand red

- [ ] Homepage verified in Spanish (`/es/`)

---

## 2.4 — Remaining Pages

- [ ] **Quote Page** (`/quote`) — 3-step form (machine selection → shop info → contact + target delivery date), no nav header, confirmation page
- [ ] **About Page** (`/about`) — company story, team section, timeline (static), values, certifications
- [ ] **Support Page** (`/support`) — three service tiles, phone/email, downloadable resources (email-gated)
- [ ] **Contact Page** (`/contact`) — contact form, phone, email, address
- [ ] **Blog Index** (`/blog`) — article card grid from Sanity, pagination
- [ ] **Blog Article Template** (`/blog/[slug]`) — portable text renderer, quote CTA at end, related articles
- [ ] **Solutions Pages** (4 industry pages: Metal Fabrication, Automotive, Aerospace, HVAC)
- [ ] All remaining pages verified in Spanish

---

## 2.5 — Internal Linking & Navigation Integrity

- [ ] All navbar links route to correct pages
- [ ] All product card links on homepage route to correct product pages
- [ ] All "Related Products" sections link correctly
- [ ] "Get a Quote" in navbar opens the AI Sales Agent overlay (placeholder state in Phase 2 — wired up in Phase 3)
- [ ] Footer navigation links all resolve (no 404s)
- [ ] Blog post CTA links open the AI Sales Agent overlay
- [ ] Run a link checker to confirm zero 404 errors across the entire site

---

> ### 🔍 REVIEW CHECKPOINT — End of Phase 2
>
> **Live URL to review:** `[vercel-preview-url]/en/`
>
> **Full walkthrough — do this on both desktop (1280px) and mobile (375px):**
>
> **Homepage:**
> - [ ] Watch the hero video load and play automatically (no sound)
> - [ ] Scroll through all 8 sections — confirm every section is present and readable
> - [ ] Confirm the product split shows 6 fabrication cards (dark side) and 2 automation cards (light side)
> - [ ] Click every product card — confirm it routes to the correct product page (no 404s)
>
> **Product pages:**
> - [ ] Open each of the 7 fabrication product pages — scroll through all blocks on at least 3 of them
> - [ ] Open both automation pages — confirm they feel visually different from fabrication pages (darker, more editorial)
> - [ ] On the cobot page, try the ROI Calculator — enter values and confirm an output appears
> - [ ] Check that the Cobot vs. Industrial comparison table appears on both automation pages
>
> **Quote form:**
> - [ ] Complete all 3 steps of the quote form
> - [ ] Confirm the confirmation page appears after submit
> - [ ] Confirm the "target delivery date" field is present in Step 3
>
> **Language:**
> - [ ] Switch to Spanish from the homepage — spot check 5 pages (homepage, 2 product pages, quote, about)
> - [ ] Confirm 100% of content is translated — no English text should appear on Spanish pages
>
> **Content quality:**
> - [ ] All product pages: no placeholder text ("Lorem ipsum") remaining
> - [ ] All product specs are accurate (especially tolerance: ±0.05mm)
> - [ ] Machine names are spelled consistently across all pages
>
> **What you approve or reject:**
> - Is the content for each machine accurate and complete?
> - Do the automation pages feel premium and distinct from the fabrication pages?
> - Are there any layout or navigation issues to fix before animations are added?
>
> ⚠️ **Fix all content and layout issues before Phase 3. Animating a broken layout makes it harder to debug, not easier.**

---

---

# PHASE 3 — Animations, Forms & Conversion Engine

**Goal:** Layer in everything that makes the site feel alive and converts visitors into leads. GSAP scroll animations, the AI Sales Agent (the heart of the conversion system), HubSpot integration, email sequences, WhatsApp button, and live chat. At the end of Phase 3 the site is functionally complete — a real business tool.

**What you'll be able to review at the end of Phase 3:** The full, animated website with working forms, automated email follow-ups, and live chat. You can submit a real quote request and receive the follow-up email.

---

## 3.1 — Animation Infrastructure

- [ ] Install GSAP + ScrollTrigger (`gsap`, `@gsap/react`)
- [ ] Create `/lib/gsap.ts` — centralized registration of all GSAP plugins, global defaults (ease, duration)
- [ ] Create reusable animation hooks:
  - [ ] `useFadeInUp(ref, options)` — fade + `translateY` on scroll enter
  - [ ] `useStaggerReveal(parentRef, childSelector, stagger)` — sequential children reveal
  - [ ] `usePinSection(ref, options)` — GSAP `pin: true` for sticky scroll sequences
  - [ ] `useCountUp(ref, target, duration)` — animated number counter
- [ ] Install `lottie-react` for machine/robot Lottie animations
- [ ] Add Lottie JSON files to `/public/animations/`:
  - [ ] `laser-cutting.json`
  - [ ] `laser-welding.json`
  - [ ] `press-brake.json`
  - [ ] `cobot-arm.json`
  - [ ] `industrial-arm.json`
- [ ] Build `<MachineAnimation type="..." />` component — loads the correct Lottie by prop
- [ ] Build `<CountUp target={n} />` component
- [ ] Apply `prefers-reduced-motion` media query — when enabled, all GSAP animations are skipped globally

---

## 3.2 — Global Micro-interactions

- [ ] CTA buttons: `scale(1.03)` + brand red glow on hover; `scale(0.97)` on active press
- [ ] Nav links: underline expands from left on hover (`transform: scaleX(0→1)`)
- [ ] Product cards: `translateY(-8px)` + shadow deepens on hover
- [ ] Language toggle: pill slides smoothly between EN/ES on switch
- [ ] Navbar: frosted-glass backdrop activates on scroll (GSAP ScrollTrigger)
- [ ] All section headings: `useFadeInUp` on scroll enter
- [ ] All body paragraphs: `useFadeInUp` with slight delay after heading
- [ ] All card grids: `useStaggerReveal` (80ms stagger between cards)

---

## 3.3 — Homepage Animations

- [ ] **Hero:** Word-by-word headline split (GSAP `SplitText` or manual span split), each word fades + `translateY` up at 100ms stagger
- [ ] **Hero:** CTA buttons fade in 300ms after headline completes
- [ ] **Trust bar:** `useCountUp` fires on both stat counters when they enter the viewport
- [ ] **Product split divider:** Brand-red SVG vertical line draws itself via `strokeDashoffset` animation on scroll enter
- [ ] **Section 4 Feature Highlights:** `usePinSection` on all 4 blocks:
  - Each section headline locks in place while the supporting copy and image scroll past it
  - Image crossfades to the next section's image as the transition point is crossed

---

## 3.4 — Fabrication Product Page Animations

- [ ] **Block 2 — Sticky feature scroll:**
  - Left image panel pinned with `usePinSection`
  - As right-side feature bullets scroll into view, the active bullet highlights in brand red
  - Left image crossfades to the next feature's photo at each transition point
- [ ] **Block 2 — Spec callouts:** `useCountUp` on all numeric values (wattage, speed, table size)
- [ ] **Block 3 — Specs table:** rows fade in staggered on scroll enter
- [ ] **Block 7 — Related products:** `<MachineAnimation>` Lottie plays on card hover

---

## 3.5 — Automation Product Page Animations

- [ ] **Hero:** Cobot/industrial arm Lottie plays on page load, loops subtly in background
- [ ] **Block 2 — Problem/Solution:** Left column lines reveal one at a time on scroll; right column responds with a matching fade-in
- [ ] **ROI Calculator:** Output number animates with `useCountUp` each time the user changes an input value
- [ ] **Block 5 — Comparison table:** Checkmarks check themselves in row by row on scroll enter

---

## 3.6 — About Page Animation

- [ ] Timeline: each milestone dot + connecting line segment draws on scroll (SVG `strokeDashoffset`)

---

## 3.7 — AI Sales Agent (Core Build)

This is the most important component of the entire project. It replaces all quote forms and is the primary conversion mechanism sitewide.

### 3.7.1 — UI Component
- [ ] Build `<AISalesAgent />` as a full-screen overlay modal component
- [ ] Dark background (`#171717`), brand red accents, premium typography — matches site identity
- [ ] Message thread display: AI messages left-aligned, user messages right-aligned
- [ ] **Text input:** standard input field + send button at the bottom
- [ ] **Voice input button (🎤):** microphone icon next to text input
  - [ ] Integrates Web Speech API (`SpeechRecognition`) for real-time speech-to-text
  - [ ] Shows animated waveform while listening
  - [ ] Transcribed text appears in the input field before sending
- [ ] **Voice output toggle (🔊):** user can enable/disable AI speaking responses aloud
  - [ ] When enabled: each AI text response is sent to ElevenLabs API → plays as audio
- [ ] Language toggle inside the agent (EN | ES) — switches the AI's language mid-conversation
- [ ] Typing indicator ("VTM is typing...") while waiting for Claude API response
- [ ] Smooth open/close animation — slides up from bottom or fades in
- [ ] Accessible: full keyboard nav, ARIA roles, focus trap while open

### 3.7.2 — Claude API Integration
- [ ] Create `/app/api/chat/route.ts` — server-side API route (never exposes API key to client)
- [ ] Connect to Claude API (`claude-sonnet-4-6` model)
- [ ] Write the system prompt:
  - Defines the agent as a VTM Tech Solutions sales assistant
  - Lists all 9 products with brief descriptions so the agent can identify the right one
  - Lists all questions to collect: metalworking type, materials, thickness, dimensions, production volume, current equipment, timeline, name, company, email, phone, WhatsApp (optional)
  - Instructions: do not ask for information already provided; answer product questions accurately; be warm and direct; never make up specs
  - Bilingual instructions: respond in the same language the user writes in
  - Completion trigger: when all required fields are collected, output a structured JSON summary and close the conversation
- [ ] Stream responses to the UI (no waiting for full response — words appear as they generate)
- [ ] Handle errors gracefully: if API call fails, show "Something went wrong — try again or WhatsApp us directly"

### 3.7.3 — ElevenLabs Voice Output
- [ ] Create `/app/api/speak/route.ts` — server-side route that calls ElevenLabs TTS API
- [ ] Select or create a voice in ElevenLabs that fits the VTM brand (professional, clear, neutral US English)
- [ ] Create a second voice for Spanish responses
- [ ] Audio plays automatically when voice output is enabled; respects browser autoplay policies
- [ ] Cache frequently used phrases to reduce API calls and latency

### 3.7.4 — Lead Data Extraction & HubSpot
- [ ] When Claude signals conversation complete (structured JSON output), parse the lead fields:
  - Name, company, email, phone, WhatsApp, metalworking type, materials, thickness, dimensions, volume, current equipment, timeline, machines of interest
- [ ] Create or update HubSpot contact via HubSpot API — all fields mapped to custom properties
- [ ] Tag contact: `source: ai-agent`
- [ ] Store full conversation transcript as a HubSpot note on the contact record
- [ ] Fire `generate_lead` GA4 conversion event
- [ ] Send WhatsApp notification to sales team number with plain-language summary:
  > "New lead from vtmtechsolutions.com: [Name] from [Company], interested in [Machine]. Email: [x], Phone: [x]. Wants to purchase in [timeline]."

### 3.7.5 — Agent Wiring (connect to all CTAs)
- [ ] Every "Get a Quote" button sitewide → opens `<AISalesAgent />`
- [ ] Every "Request a Demo" button sitewide → opens `<AISalesAgent />` with automation-focused opening message
- [ ] "Talk to Our AI" CTA → opens `<AISalesAgent />`
- [ ] Exit-intent popup CTA → opens `<AISalesAgent />`

---

## 3.8 — HubSpot Infrastructure & Email Sequences

- [ ] Add HubSpot tracking script via `next/script` in `RootLayout`
- [ ] Create custom HubSpot contact properties for all AI agent fields (metalworking type, materials, thickness, dimensions, volume, current equipment, timeline)
- [ ] **Spec sheet email gate** → HubSpot contact creation, tagged `source: spec-sheet-download`
- [ ] **Exit-intent popup email capture** → HubSpot, tagged `source: exit-intent`
- [ ] Add Cloudflare Turnstile to the spec sheet gate (only remaining traditional form)

**Post-AI Agent conversation sequence:**
- [ ] Email 1 (immediate): Personalized summary — "Here's what we discussed" + what the specialist will prepare
- [ ] Email 2 (Day 1): Brochure for the specific machine(s) the AI identified
- [ ] Email 3 (Day 3): Customer success story from their industry
- [ ] Email 4 (Day 7): "Any questions?" follow-up from a named sales rep

**Post-Spec Sheet Download sequence:**
- [ ] Email 1 (immediate): Download link + one related product recommendation
- [ ] Email 2 (Day 3): "Is the [Machine] right for your shop?" checklist PDF
- [ ] Email 3 (Day 10): Invite to a free consultation via WhatsApp or phone

---

## 3.9 — WhatsApp Button & Live Chat

- [ ] **WhatsApp floating button:** Fixed bottom-right on all pages, `wa.me/[number]` link — no API needed
- [ ] Verify WhatsApp button click fires a `whatsapp_click` GA4 event
- [ ] **Live chat:** Install Crisp or Intercom widget (bottom-left corner) — connect to mobile app for the sales team
- [ ] Verify live chat fires a `chat_started` GA4 event

---

> ### 🔍 REVIEW CHECKPOINT — End of Phase 3
>
> **Live URL to review:** `[vercel-preview-url]/en/`
>
> **Animation quality — do each of these slowly:**
> - [ ] Open the homepage — watch the hero headline animate in word by word
> - [ ] Scroll slowly through the homepage — every section should reveal smoothly with no pop-in
> - [ ] Watch both counter stats count up as the Trust Bar scrolls into view
> - [ ] Watch the red SVG divider line draw itself between the product pillars
> - [ ] Open the Fiber Laser page — scroll slowly through Block 2. The left image must stay locked while the right side scrolls. Each feature bullet should highlight in red as it becomes active.
> - [ ] Open the Cobot Arm page — confirm the Lottie robot animation plays on page load
> - [ ] Use the ROI Calculator — change the inputs. Confirm the payback period number animates to its new value each time.
> - [ ] Enable "Reduce Motion" in your OS accessibility settings. Reload the site — all animations must be disabled.
>
> **Performance (open Chrome DevTools → Lighthouse):**
> - [ ] Run Lighthouse on the homepage — Performance score must be ≥ 90 desktop, ≥ 75 mobile
> - [ ] CLS must be < 0.1 (no layout shifts from animations loading)
>
> **Forms & CRM — test each of these with real data:**
> **AI Sales Agent — test the full flow:**
> - [ ] Click "Get a Quote" anywhere → confirm the overlay opens with a greeting message
> - [ ] Type a response → confirm the AI replies naturally within 2–3 seconds
> - [ ] Click 🎤 → speak a sentence → confirm it transcribes in real time
> - [ ] Enable 🔊 voice output → confirm the AI's next response is spoken aloud clearly
> - [ ] Switch to Spanish → confirm the agent continues in Spanish
> - [ ] Complete the full qualification (answer all questions) → confirm the closing message appears
> - [ ] Log into HubSpot → confirm the contact was created with all fields + full transcript as a note
> - [ ] Check your WhatsApp → confirm the lead summary notification arrived
> - [ ] Check your inbox → confirm the follow-up email sequence started
>
> **Spec sheet:**
> - [ ] Click "Download Spec Sheet" → confirm email gate appears → submit → confirm HubSpot contact created → confirm download link email arrives
>
> **Live chat & WhatsApp:**
> - [ ] Open the Crisp/Intercom chat widget → confirm it connects
> - [ ] Click the WhatsApp floating button → confirm it opens WhatsApp with your number pre-filled
>
> **What you approve or reject:**
> - Does the AI feel natural and intelligent, or scripted and robotic?
> - Is the voice output clear and professional?
> - Does the speech-to-text transcription work accurately?
> - Did you receive all HubSpot data and the WhatsApp notification correctly?
>
> ⚠️ **Any animation that feels slow, janky, or out of place should be flagged here. It is much easier to fix before the final QA phase.**

---

---

# PHASE 4 — SEO, QA, Analytics & Launch

**Goal:** Harden the site for real-world traffic. Every page is optimized for search, tracked for conversions, tested across all browsers and devices, and audited for accessibility. Then launch.

**What you'll be able to review at the end of Phase 4:** `https://vtmtechsolutions.com` — live, indexed, and ready for real customers.

---

## 4.1 — SEO Implementation

- [ ] Unique `<title>` tag for every page (configured in Sanity for CMS-driven pages, hardcoded for static pages)
- [ ] Unique `<meta name="description">` for every page
- [ ] Open Graph tags on all pages: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] JSON-LD structured data:
  - [ ] `Organization` — homepage
  - [ ] `Product` — all 9 product pages
  - [ ] `FAQPage` — all product pages (sourced from FAQ accordion content in Sanity)
  - [ ] `BreadcrumbList` — all interior pages
  - [ ] `BlogPosting` — all blog article pages
- [ ] `hreflang` alternate links verified on all EN/ES page pairs
- [ ] `sitemap.xml` auto-generated via `app/sitemap.ts` — includes all pages in both locales
- [ ] `robots.txt` configured: `Allow: /`, points to sitemap
- [ ] Canonical URLs set on all pages
- [ ] All images: descriptive `alt` text present
- [ ] Heading hierarchy verified: one `<h1>` per page, logical `<h2>` → `<h3>` structure (no skipped levels)

---

## 4.2 — Google Analytics 4 & Tracking

- [ ] Create GA4 property for `vtmtechsolutions.com`
- [ ] Install GA4 script via `next/script` in `RootLayout`
- [ ] Configure custom conversion events:
  - [ ] `generate_lead` — fires on quote form final submit
  - [ ] `spec_sheet_download` — fires on spec sheet email gate submit
  - [ ] `demo_requested` — fires on callback form submission
  - [ ] `whatsapp_click` — fires when WhatsApp floating button is clicked
  - [ ] `chat_started` — fires when live chat widget is opened
- [ ] Install Microsoft Clarity (heatmaps + session recordings)
- [ ] Verify all events fire correctly in GA4 DebugView

---

## 4.3 — Performance Optimization

- [ ] All images converted to WebP/AVIF and served via `next/image` with explicit `width` and `height`
- [ ] Hero videos compressed to < 8MB (use HandBrake; target H.264 or H.265)
- [ ] Lottie animations lazy-loaded — do not block initial page paint
- [ ] GSAP and ScrollTrigger dynamically imported (client-only, not in server bundle)
- [ ] Run Lighthouse on three pages: homepage, one fabrication product page, quote page
  - [ ] Performance ≥ 90 — desktop
  - [ ] Performance ≥ 75 — mobile
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1

---

## 4.4 — Accessibility Audit

- [ ] All interactive elements (buttons, links, form inputs, accordion) reachable by keyboard (Tab key)
- [ ] All interactive elements operable by keyboard (Enter / Space to activate, Escape to close)
- [ ] Color contrast ≥ 4.5:1 for all body text on their background colors
- [ ] Color contrast ≥ 3:1 for all large text and UI components
- [ ] Focus rings clearly visible on all focusable elements
- [ ] ARIA labels on all icon-only buttons (social icons, close buttons, hamburger menu)
- [ ] `prefers-reduced-motion` respected — verified again after all Phase 3 animations are in place

---

## 4.5 — Cross-Browser & Device QA

Test the full homepage + one fabrication page + one automation page + quote form on each:

- [ ] Chrome (latest) — desktop 1280px
- [ ] Chrome (latest) — mobile 375px (emulated)
- [ ] Firefox (latest) — desktop
- [ ] Safari (latest) — macOS desktop
- [ ] Safari — real iPhone (iOS 15+)
- [ ] Chrome — real Android device
- [ ] Edge (latest) — desktop

---

## 4.6 — Content & Functionality QA

- [ ] All 9 product pages: no placeholder text, no missing images, no broken videos
- [ ] All forms: submit in EN and ES — confirm confirmation messages are in the correct language
- [ ] All external links open in a new tab (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] Zero 404 errors on internal links (run `linkchecker` CLI or Screaming Frog across the whole site)
- [ ] All 9 spec sheet PDF download links resolve to real, correctly named files
- [ ] Blog: minimum 3 real published articles appear on `/en/blog` and `/es/blog`
- [ ] Footer legal links: Privacy Policy and Terms of Service pages exist and have real content
- [ ] No `console.error` or `console.warn` messages in browser DevTools on any page

---

> ### 🔍 REVIEW CHECKPOINT — Pre-Launch Approval
>
> **This is the final gate. Nothing launches until every item below is checked.**
>
> **SEO:**
> - [ ] Open `[preview-url]/sitemap.xml` — confirm all pages appear in both EN and ES
> - [ ] Open `[preview-url]/robots.txt` — confirm `Allow: /` and the sitemap URL is correct
> - [ ] Use [Google's Rich Results Test](https://search.google.com/test/rich-results) on the homepage — Organization schema must be valid
> - [ ] Use the same tool on a fabrication product page — Product + FAQPage schemas must be valid
> - [ ] Use the same tool on a blog post — BlogPosting schema must be valid
>
> **Analytics:**
> - [ ] Open GA4 DebugView, submit the quote form — `generate_lead` event must appear
> - [ ] Download a spec sheet — `spec_sheet_download` must appear
> - [ ] Open live chat — `chat_started` must appear
>
> **Performance:**
> - [ ] Share Lighthouse scores for homepage (desktop and mobile)
> - [ ] CLS must be < 0.1 on all three tested pages
>
> **Full end-to-end user walkthrough (do on real iPhone + real desktop):**
> 1. Open the homepage — hero video loads and animates in cleanly
> 2. Scroll through the full homepage end to end
> 3. Navigate to a fabrication product page — test the sticky scroll Block 2
> 4. Navigate to the cobot automation page — use the ROI Calculator
> 5. Complete the full 3-step quote form — receive the HubSpot confirmation email
> 6. Switch language to Spanish — verify 5 pages in Spanish
> 7. Click through the blog — confirm real articles are published and readable
>
> **What you approve:**
> - [ ] Visual design: does it look and feel like a sophisticated, premium US brand?
> - [ ] Content: all product specs are accurate, no typos, no placeholder text
> - [ ] Forms: lead capture is working and HubSpot receives data correctly
> - [ ] Performance: site loads fast, animations are smooth
> - [ ] Language: Spanish content is complete and professionally translated
>
> **Sign off to proceed to launch**

---

## 4.7 — Launch

- [ ] Purchase / confirm ownership of `vtmtechsolutions.com`
- [ ] Configure DNS: point domain to Vercel
- [ ] Add custom domain in Vercel project settings
- [ ] Verify SSL certificate is active (HTTPS, no browser warnings)
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable to the production domain
- [ ] Set `robots.txt` to `Allow: /` (confirm it was not set to `Disallow` during development staging)
- [ ] Remove `/dev/` test routes from production build
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit `sitemap.xml` to Bing Webmaster Tools
- [ ] Verify GA4 receives live production traffic (not debug mode)
- [ ] Test quote form on the live production URL — confirm HubSpot receives it

---

> ### 🔍 REVIEW CHECKPOINT — Post-Launch (within 24 hours)
>
> - [ ] Open `https://vtmtechsolutions.com` — loads over HTTPS, no certificate warnings
> - [ ] Open `https://vtmtechsolutions.com/sitemap.xml` — loads correctly
> - [ ] Google Search Console: sitemap accepted, no crawl errors
> - [ ] GA4 Real-Time view: live traffic appears when you visit the site
> - [ ] Submit the quote form on the live production URL — confirm HubSpot contact is created
> - [ ] Test on a real iPhone and a real Android (not browser emulation)
> - [ ] Send the URL to one trusted person — ask them to click through the site and give feedback

---

## 4.8 — Post-Launch Monitoring (Ongoing)

### First 30 Days
- [ ] Review Clarity heatmaps and session recordings — weekly
- [ ] Review GA4 quote form conversion rate — target ≥ 4%
- [ ] Review bounce rate — target < 45%
- [ ] Check Google Search Console for crawl errors or indexing issues — weekly
- [ ] Publish 2 new blog posts targeting high-priority keywords from the PRD seed list

### 30–90 Days
- [ ] A/B test 1: Hero CTA text ("Explore Our Machines" vs. "See Our Full Catalog")
- [ ] A/B test 2: Quote form layout (multi-step vs. single page)
- [ ] Review HubSpot email open rates and click rates — adjust subject lines if < 25% open rate
- [ ] Publish 4 additional blog posts
- [ ] Replace placeholder customer testimonials with real quotes from actual customers

### Ongoing
- [ ] Monthly Lighthouse audit — maintain Performance ≥ 90
- [ ] Quarterly: refresh product page photos and specs as inventory changes
- [ ] Monthly: track keyword rankings for all 19 PRD target keywords

---

---

## Master Progress Summary

| Phase | Description | Value Delivered | Status |
|---|---|---|---|
| **Phase 1** | Foundation + One Complete Slice | Live URL: full design system + one product page in EN & ES | `[ ]` Not started |
| **Phase 2** | Full Product Catalog + Homepage | Complete navigable website — all pages, all content, both languages | `[ ]` Not started |
| **Phase 3** | Animations, Forms & Conversion Engine | Animated, fully functional site — forms live, HubSpot connected, leads captured | `[ ]` Not started |
| **Phase 4** | SEO, QA, Analytics & Launch | Production-ready — indexed, tracked, tested, live on the real domain | `[ ]` Not started |

---

*Implementation plan for VTM Tech Solutions — US Market Website*
*Update checkbox status as tasks are completed. Every Review Checkpoint requires your explicit sign-off before the next phase begins.*
