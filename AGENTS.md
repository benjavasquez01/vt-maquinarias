# Agent Instructions

Read this entire file before starting any task.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Context

Marketing/lead-gen site for **VT Maquinarias** (industrial machinery, Chile).

- **Stack:** Next.js 16 App Router (Turbopack), Tailwind CSS v4, next-intl with a single
  locale `es` and `localePrefix: "never"` (clean URLs, no `/es` prefix). Middleware lives
  in `proxy.ts` (Next 16 name for middleware).
- **All user-facing copy is Spanish.** There is no language switcher in production.
- **Dev server:** `npm run dev` on port 3000, launched via `.claude/launch.json`
  (name: `dev`). Never run dev servers through plain shell commands if preview tooling
  is available.
- **Leads pipeline:** every form and the AI sales chat POST to `/api/lead`, which emails
  a structured lead via Resend and syncs HubSpot. Secrets live in `.env.local`
  (never commit; production values go in Vercel env vars).
- **AI sales chat ("Benjamin"):** `/api/chat` → Groq, model `openai/gpt-oss-120b`.

### Commands

- `npm run dev` — dev server on port 3000. Prefer launching via preview tooling /
  `.claude/launch.json` (name: `dev`), never a plain shell command.
- `npm run build` — production build (Turbopack).
- `npm run lint` — ESLint.
- There is no test framework in this project.

### Architecture

- **Routing / i18n:** every page lives under `app/[locale]/…` but URLs carry no locale
  prefix — `lib/routing.ts` defines the single locale `es` with `localePrefix: "never"`,
  and `proxy.ts` (the Next 16 middleware file) runs the next-intl middleware.
  `lib/i18n.ts` loads `messages/es.json`, which holds shared UI strings consumed via
  `useTranslations`. Always import `Link`, `useRouter`, `usePathname`, `redirect` from
  `@/lib/navigation` (next-intl wrappers), not from `next/link` / `next/navigation`.
- **Product page pattern:** each product route under `app/[locale]/fabrication/` or
  `app/[locale]/automation/` is a `page.tsx` plus a colocated `content.ts` exporting a
  `ProductPageData` object rendered by `components/product/ProductPageTemplate.tsx`
  (hero, feature sections, specs table, comparison, config options, FAQ, quote form,
  sticky bar). Product-specific sections (model browsers, hero carousels/scrolls) are
  client components colocated in the route folder and injected through the template's
  `children` / `afterSpecs` / `featureSlots` / `hide*` props.
- **Images:** an `imageId` / `heroImageId` starting with `/` resolves to `public/`;
  anything else is treated as an Unsplash photo id (legacy placeholders). Real product
  photos are WebP under `public/images/`.
- **Lead pipeline:** `app/api/lead/route.ts` is the single lead endpoint. It fans out to
  HubSpot (contact + transcript note), Resend email, and Twilio WhatsApp; each channel
  is silently skipped when its env vars are missing. All forms
  (`components/quote/QuoteForm.tsx`, `components/contact/ContactForm.tsx`,
  `components/home/ContactMiniForm.tsx`, `components/product/GenericQuoteForm.tsx`) and
  the AI chat post to it.
- **AI sales chat:** the system prompt — including product specs and the
  plegar/plegado terminology rules — lives inline in `app/api/chat/route.ts`. The model
  emits hidden `LEAD_PARTIAL:` / `LEAD_COMPLETE:` JSON lines that
  `components/ai/AISalesAgent.tsx` parses and forwards to `/api/lead`. When specs or
  terminology change on the site, update this prompt too.
- **Blog:** content comes from Sanity via `lib/sanity.ts`
  (`NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`).
- **Animations:** GSAP via `lib/gsap.ts` plus hooks in `lib/animations/`
  (`useFadeInUp`, `useStaggerReveal`, `usePinSection`, `useCountUp`); Framer Motion for
  lighter transitions. Reusable wrappers: `components/ui/FadeIn.tsx`,
  `StaggerChildren.tsx`, `AnimatedSection.tsx`.
- **Feature flags:** `lib/flags.ts` (`SHOW_VIDEO_SECTIONS` currently hides all video
  sections site-wide until real videos exist).
- **next.config.ts:** the image optimizer is disabled in development on purpose
  (Next 16.2.2 dev optimizer LRUCache crash) — dev serves images unoptimized while
  production keeps full optimization.

### Known gotchas

- Mass 404s on nested routes in dev = corrupted Turbopack cache → delete `.next` and
  restart the dev server.
- The site sets `scroll-behavior: smooth`; when driving the page from injected JS use
  `window.scrollTo({ top: X, behavior: "instant" })` or the scroll may not move.
- `/fabrication/laser-welding-machine` 307-redirects to `/fabrication/4-in-1-laser-machine`
  on purpose.
- `Button` (components/ui/Button.tsx) hardcodes `inline-flex` in its base class: passing
  `hidden md:inline-flex` via className does NOT hide it reliably. Wrap the Button in a
  `<div className="hidden md:block">` instead.

---

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. **At session start, read
the entire "Learned Rules" section before doing anything.**

### How it works

1. When the user corrects you or you make a mistake, **immediately append a new rule**
   to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATEGORY] Never/Always do X — because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[TOOL]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[CONTENT]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

### Rule format example

```
14. [CODE] Always use `bun` instead of `npm` — user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages — project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` — existing codebase pattern.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section. -->

1. [CONTENT] Never use "doblar", "doblado" or "doblez" anywhere (site copy AND the AI
   sales agent) — always "plegar", "plegado", "pliegue". User correction; industry
   terminology for plegadoras.
2. [CONTENT] All user-facing strings must be Spanish. English defaults leak from shared
   components (e.g. `ctaText = "Get a Quote"`); when creating components with default
   props, write the defaults in Spanish.
3. [UX] When reviewing or building pages, act as a professional UI/UX designer — judge
   composition, hierarchy, spacing, contrast and "does this look good?", not just
   mechanical checks like horizontal overflow. The user explicitly wants design-quality
   review ("cosas lindas"), not checkbox responsiveness.
4. [UX] Mobile is first-class: verify changes at 375px in the browser preview with
   screenshots before declaring done. Known minimums: touch targets ≥44px, form inputs
   ≥16px font (iOS zoom), no horizontal scroll without a visible affordance (peek of
   next card or an explicit "deslice →" hint), comparison content stacks on mobile.
5. [UX] Machine hero images must be fully appreciable on mobile — never crop them with
   `object-cover` into a portrait viewport and never pin them top-anchored under the
   navbar. Pattern used: confine the image to the band above the headline
   (`h-[42vh]` wrapper) with `object-contain` centered.
6. [PROCESS] Only commit when the user asks; only push when the user asks ("commit push"
   is the usual request). Commit messages in English, imperative, grouped by theme.
7. [PROCESS] Never print secrets (API keys, tokens) in output; the git remote may embed
   a token in its URL — redact it (`sed 's/ghp_[A-Za-z0-9]*/***/'`) when showing remote
   commands. Warn the user if a secret becomes exposed.
8. [DATA] Every lead-capture surface must route to `/api/lead` so data reaches
   dvasquez@vtmaquinarias.cl — when adding forms or chat flows, wire them to that
   endpoint rather than inventing new ones.
9. [CONTENT] Product/spec facts come from the user's catalog pages, not from memory —
   when the user supplies an updated catalog image, it supersedes earlier versions
   (e.g. punzones section: photos Frente/Lado, no per-punch measurements, no specific
   matrices list).
10. [TOOL] Convert user-supplied photos to WebP under `public/images/<área>/` with
    clean ASCII kebab-case filenames (no spaces, no "°") before using them in pages.
