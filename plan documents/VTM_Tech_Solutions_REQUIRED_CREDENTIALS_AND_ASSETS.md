# Required APIs, Services & Assets

# VTM Tech Solutions — Everything You Need to Provide

**Version:** 1.0
**Date:** April 6, 2026

---

## How to Read This Document

This document is organized into three sections:

1. **External Services** — accounts you need to create and credentials you need to hand me
2. **Content & Assets** — files, copy, and media you need to provide
3. **MCPs (Model Context Protocol tools)** — tools I can use inside this environment to work faster and more autonomously

Each item is marked with a priority:

- 🔴 **Required** — the site cannot be built or launched without this
- 🟡 **Important** — missing this degrades functionality significantly
- 🟢 **Optional** — adds value but has a workaround

---

---

# SECTION 1 — External Services & API Credentials

For each service below, you need to create an account, then provide me with the keys or tokens listed. I will store them in `.env.local` (never committed to GitHub).

---

## 1.1 — Vercel (Hosting & Deployment)

🔴 **Required**

**What it does:** Hosts the website. Every push to GitHub auto-deploys a preview URL. Production goes live here.

**What to do:**

1. Go to [vercel.com](https://vercel.com) → create a free account
2. Connect your GitHub account to Vercel
3. Give me: your Vercel account email (so I can set up the project under your account)

**What I need from you:**

| Credential           | Where to find it | Example format     |
| -------------------- | ---------------- | ------------------ |
| Vercel account email | Your login email | you@yourdomain.com |

**Cost:** Free tier is sufficient for this project.

---

## 1.2 — GitHub (Code Repository)

🔴 **Required**

**What it does:** Stores all the code. Connects to Vercel for auto-deployment.

**What to do:**

1. Go to [github.com](https://github.com) → create a free account (or use an existing one)
2. Give me access to create a repository under your account

**What I need from you:**

| Credential                      | Where to find it                                                                                                                         | Example format               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| GitHub username                 | Your GitHub profile                                                                                                                      | `vtmtechsolutions`         |
| Personal Access Token (classic) | GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token (classic). Scopes needed:`repo`, `workflow` | `ghp_xxxxxxxxxxxxxxxxxxxx` |

**Cost:** Free.

---

## 1.3 — Sanity.io (CMS — Content Management)

🔴 **Required**

**What it does:** The backend where you and your team manage all product content, blog posts, specs, and translations — without touching code.

**What to do:**

1. Go to [sanity.io](https://sanity.io) → create a free account
2. Create a new project named `vtm-tech-solutions`
3. Set the dataset name to `production`

**What I need from you:**

| Credential              | Where to find it                                               | Example format                                                 |
| ----------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Project ID              | Sanity dashboard → your project → Settings → API            | `abc123de`                                                   |
| Dataset name            | `production` (default)                                       | `production`                                                 |
| API Token (Editor role) | Sanity dashboard → Settings → API → Tokens → Add API token | `skxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |

**Cost:** Free tier (up to 3 users, 500k API requests/month) is sufficient.

---

## 1.4 — HubSpot (CRM & Email Automation)

🔴 **Required**

**What it does:** Captures every lead from the quote form, spec sheet downloads, and contact form. Sends the automated follow-up email sequences.

**What to do:**

1. Go to [hubspot.com](https://hubspot.com) → create a free account
2. Complete the onboarding (company name: VTM Tech Solutions)

**What I need from you:**

| Credential               | Where to find it                                                                                                                     | Example format                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| HubSpot Portal ID        | HubSpot → Settings → Account Setup → Account Defaults → Hub ID                                                                   | `12345678`                                     |
| Private App Access Token | HubSpot → Settings → Integrations → Private Apps → Create a private app. Scopes needed:`crm.objects.contacts.write`, `forms` | `pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |

**Cost:** Free CRM tier is sufficient for Phase 3. Email sequences require the free Marketing Hub (or Starter at ~$20/month for advanced sequences).

---

## 1.5 — Google Analytics 4 (Traffic & Conversion Tracking)

🔴 **Required**

**What it does:** Tracks every visitor, every quote form submission, every spec sheet download. Essential for knowing what's working.

**What to do:**

1. Go to [analytics.google.com](https://analytics.google.com) → create a Google account if you don't have one
2. Create a new GA4 property named `VTM Tech Solutions`
3. Set the timezone to your US time zone (e.g., Central Time)

**What I need from you:**

| Credential         | Where to find it                                              | Example format   |
| ------------------ | ------------------------------------------------------------- | ---------------- |
| GA4 Measurement ID | GA4 → Admin → Data Streams → your stream → Measurement ID | `G-XXXXXXXXXX` |

**Cost:** Free.

---

## 1.6 — Microsoft Clarity (Heatmaps & Session Recordings)

🟡 **Important**

**What it does:** Records how real visitors interact with the site — where they click, where they stop scrolling, what confuses them. Invaluable for improving conversion rates post-launch.

**What to do:**

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com) → sign in with a Microsoft account
2. Create a new project: `vtmtechsolutions.com`

**What I need from you:**

| Credential         | Where to find it                                          | Example format |
| ------------------ | --------------------------------------------------------- | -------------- |
| Clarity Project ID | Clarity dashboard → your project → Settings → Overview | `abcde12345` |

**Cost:** Free, forever.

---

## 1.7 — WhatsApp Business (Direct Contact)

🔴 **Required**

**What it does:** Powers the floating WhatsApp button on every page. Visitors tap it and are taken directly into a WhatsApp chat with your sales team — no form, no friction. Also used as the optional WhatsApp field in the callback request form.

**What to do:**

1. Download the **WhatsApp Business** app on the phone number you want to use for sales
2. Complete the business profile setup (company name, description, hours)
3. That's it — no API or paid plan needed

**What I need from you:**

| Credential                     | Where to find it                           | Example format        |
| ------------------------------ | ------------------------------------------ | --------------------- |
| WhatsApp Business phone number | The number registered on WhatsApp Business | `+1 (713) 555-0192` |

**Cost:** Free.

---

## 1.8 — Crisp or Intercom (Live Chat)

🟡 **Important**

**What it does:** The chat widget that appears in the bottom-right corner of every page. Visitors can message your sales team in real time.

**Recommendation:** Start with **Crisp** (free tier is generous, mobile app included). Upgrade to Intercom later if you need advanced automation.

**What to do:**

1. Go to [crisp.chat](https://crisp.chat) → create a free account
2. Create a workspace: `VTM Tech Solutions`
3. Download the Crisp mobile app on your phone — this is how you'll receive and reply to chats

**What I need from you:**

| Credential       | Where to find it                                               | Example format                           |
| ---------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Crisp Website ID | Crisp dashboard → Settings → Website Settings → Integration | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |

**Cost:** Free tier includes unlimited conversations. Pro (~$25/month) adds chatbot and advanced routing.

---

## 1.9 — hCaptcha or Cloudflare Turnstile (Spam Protection)

🟡 **Important**

**What it does:** Protects all contact forms from spam bots. Cloudflare Turnstile is invisible to real users (no "click the traffic lights" puzzle).

**Recommendation:** Use **Cloudflare Turnstile** — it is free and completely frictionless for real visitors.

**What to do:**

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → create a free account
2. Go to Turnstile → Add Site → enter `vtmtechsolutions.com`

**What I need from you:**

| Credential           | Where to find it                     | Example format    |
| -------------------- | ------------------------------------ | ----------------- |
| Turnstile Site Key   | Cloudflare → Turnstile → your site | `0x4AAAAAAA...` |
| Turnstile Secret Key | Cloudflare → Turnstile → your site | `0x4AAAAAAA...` |

**Cost:** Free.

---

## 1.10 — Domain Registrar

🔴 **Required**

**What it does:** The `vtmtechsolutions.com` address itself. You point it to Vercel so the site is reachable.

**What to do:**

1. Check if `vtmtechsolutions.com` is available (use [namecheap.com](https://namecheap.com) or [porkbun.com](https://porkbun.com))
2. Purchase it if available (~$10–$15/year)
3. Log into your registrar and update the DNS nameservers to point to Vercel (I will give you the exact nameserver values when the time comes)

**What I need from you:**

| Item                        | Details                                                               |
| --------------------------- | --------------------------------------------------------------------- |
| Confirm domain is purchased | Let me know once `vtmtechsolutions.com` is yours                    |
| Registrar login access      | You will handle this directly — I do not need your login credentials |

**Cost:** ~$10–15/year.

---

## 1.11 — Video Hosting

🟡 **Important**

**What it does:** Serves hero videos and product demo videos without slowing down the website. Self-hosting large video files on Vercel is not recommended.

**Options:**

| Option                       | Best for                                                    | Cost                              |
| ---------------------------- | ----------------------------------------------------------- | --------------------------------- |
| **YouTube** (unlisted) | Product demo videos in Block 4 of product pages             | Free                              |
| **Cloudflare Stream**  | Hero background videos (autoplay loops) — fastest delivery | $5/month per 1,000 minutes stored |
| **Vimeo**              | If you prefer a cleaner player without YouTube branding     | ~$20/month                        |

**Recommendation:** Use **YouTube (unlisted)** for demo videos + **Cloudflare Stream** for hero loops.

**What I need from you:**

| Credential                   | Where to find it                       | Example format   |
| ---------------------------- | -------------------------------------- | ---------------- |
| Cloudflare Stream Account ID | Cloudflare → Stream → Overview       | `abc123...`    |
| Cloudflare Stream API Token  | Cloudflare → My Profile → API Tokens | `xxxxxxxxxxxx` |

---

## 1.12 — Google Search Console

🟡 **Important**

**What it does:** Tells Google your site exists, monitors how it appears in search results, and alerts you to indexing errors. Required to submit the sitemap at launch.

**What to do:**

1. Go to [search.google.com/search-console](https://search.google.com/search-console) → sign in with the same Google account used for GA4
2. Add property: `vtmtechsolutions.com`
3. Verify ownership via DNS TXT record (I will provide the exact record value)

**What I need from you:**

| Item                   | Details                                                                        |
| ---------------------- | ------------------------------------------------------------------------------ |
| Access to DNS settings | You will need to add a TXT record at your domain registrar to verify ownership |

**Cost:** Free.

---

## 1.13 — GSAP Club License (SplitText plugin)

🟡 **Important**

**What it does:** GSAP's `SplitText` plugin enables the word-by-word headline animation on the hero section. It is part of GSAP Club (paid tier).

**What to do:**

1. Go to [gsap.com/pricing](https://gsap.com/pricing) → purchase a Club GSAP plan
2. The **"Club GSAP" plan** at $99/year covers commercial use

**What I need from you:**

| Credential          | Where to find it                                                        | Example format                           |
| ------------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| GSAP Club npm token | GSAP dashboard after purchase → Installation → private registry token | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |

**Alternative if you prefer not to purchase:** I can replicate the word-split animation using a custom CSS/JS approach without SplitText — slightly more code but same visual result. Let me know.

**Cost:** $99/year.

---

## 1.14 — Font Licenses (if using paid typefaces)

🟡 **Important**

**What it does:** The two-typeface system (geometric sans + humanist serif) requires licensing if using premium fonts.

**Two scenarios:**

**Option A — Free fonts (no license needed):**

- Headline: **Inter** (free, Google Fonts)
- Body: **Lora** or **Source Serif 4** (free, Google Fonts)
- I handle this entirely — nothing needed from you.

**Option B — Premium fonts (license required, more refined result):**

- Headline: **Neue Haas Grotesk** → [fonts.com](https://fonts.com) ~$200/year web license
- Body: **Freight Text Pro** → [fonts.com](https://fonts.com) ~$200/year web license

**What I need from you:** Your decision — Option A or Option B. If Option B, the web font files (`.woff2`) from your license.

**Recommendation:** Start with Option A (Inter + Lora). The design system will still look premium, and you can upgrade fonts later without changing anything structural.

---

---

# SECTION 2 — Content & Assets You Must Provide

These are not software credentials — they are the actual content that makes the website yours. No one else can create these for you.

---

## 2.1 — Product Photography

🔴 **Required**

For each of the 9 machines, I need:

| Asset          | Spec                                                                                         | Quantity         |
| -------------- | -------------------------------------------------------------------------------------------- | ---------------- |
| Hero shot      | Machine on white or very dark background, professional studio lighting, minimum 2400×1600px | 1 per machine    |
| Detail shots   | Close-ups of key components (control panel, cutting head, torch, etc.)                       | 3–4 per machine |
| In-action shot | Machine running in a real shop environment                                                   | 1 per machine    |

**Total:** ~45–54 images

If you do not have professional photos yet, flag which machines are missing. I can design the pages with placeholder imagery that is swapped in later — but the final site needs real product photos.

---

## 2.2 — Product Videos

🟡 **Important**

| Asset                 | Spec                                                                                                   | Where used                |
| --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| Hero background video | Cinematic shop footage — laser cutting + cobot welding, 30–60 sec loop, no sound, minimum 1920×1080 | Homepage hero             |
| Product demo video    | Machine in operation, 30–90 sec, can be uploaded to YouTube (unlisted)                                | Each product page Block 4 |
| Cobot arm demo video  | Collaborative arm completing a weld cycle in a real shop                                               | Automation hero + Block 3 |

If videos do not exist yet, the pages will use static images as fallback. Videos can be added after launch.

---

## 2.3 — Lottie Animation Files

🟡 **Important**

These are the animated illustrations for the machine animation feature. Options:

**Option A — Commission a Lottie animator:** Find a designer on [lottiefiles.com/marketplace](https://lottiefiles.com/marketplace) or Upwork to create custom animations for each machine. Budget: $50–$150 per animation.

**Option B — Use existing Lottie files:** Browse [lottiefiles.com](https://lottiefiles.com) for free or paid animations that are close enough. I can adapt them.

**Option C — Use CSS/SVG animations instead:** I build simplified SVG path animations (laser beam path, robot arm rotation). Less detailed but no external cost.

**What I need from you:** Your preferred option. If Option A, provide the `.json` Lottie files once they are created.

---

## 2.4 — Product Copy & Specifications

🔴 **Required**

For each of the 9 machines, I need the real, accurate specifications to populate the spec tables on the product pages. This includes:

- Model name(s) and variant options
- Power/wattage options (where applicable)
- Working area / table size
- Precision tolerance (confirmed: ±0.05mm)
- Cutting/welding speed
- Compatible materials and thicknesses
- Machine dimensions and weight
- Power requirements (voltage, phase)
- Any certifications specific to the machine (CE, etc.)
- Price range (optional — only if you want it displayed; otherwise handled via quote)

**Format:** A spreadsheet or PDF is fine — I will enter it into Sanity.

---

## 2.5 — Spec Sheet PDFs

🟡 **Important**

The site has "Download Spec Sheet" on every product page (email-gated). I need one branded PDF per machine.

If these do not exist yet, I can create simple, branded spec sheet templates in the site's visual identity and export them as PDFs — I just need the specs from 2.4 above.

---

## 2.6 — Company Information

🔴 **Required**

| Item                                             | Example                                            |
| ------------------------------------------------ | -------------------------------------------------- |
| US office address (or "coming soon" placeholder) | 1234 Industrial Blvd, Suite 100, Houston, TX 77001 |
| US phone number                                  | +1 (713) 555-0192                                  |
| US email address                                 | info@vtmtechsolutions.com                          |
| LinkedIn company page URL                        | linkedin.com/company/vtmtechsolutions              |
| YouTube channel URL                              | youtube.com/@vtmtechsolutions                      |
| Instagram handle                                 | @vtmtechsolutions                                  |

---

## 2.7 — Logo Files

🔴 **Required**

| File                                                  | Format needed                         |
| ----------------------------------------------------- | ------------------------------------- |
| Full logo (horizontal or stacked) on white background | SVG + PNG (minimum 800px wide)        |
| Full logo on dark/black background                    | SVG + PNG                             |
| Logo mark only (icon without wordmark)                | SVG — for favicon and small contexts |
| Logo in all-white (for dark hero sections)            | SVG                                   |

You already shared an SVG of the logo — I have the mark. I need the full wordmark versions listed above.

---

## 2.8 — Customer Testimonials

🟢 **Optional (but highly recommended)**

For the Social Proof section. Ideally 3–5 real customer quotes:

| Item needed per testimonial                            |
| ------------------------------------------------------ |
| Customer first name + last name                        |
| Company name                                           |
| US state                                               |
| Quote (2–4 sentences about their experience with VTM) |
| Photo (headshot, at least 400×400px) — optional      |

If you have video testimonials, even better — those go in the video testimonial slots on the homepage.

---

## 2.9 — Blog Content

🟡 **Important**

The site needs a minimum of 3 published blog posts at launch for the blog preview section on the homepage to work. These should target high-priority SEO keywords from the PRD.

**Suggested first 3 articles:**

1. "Fiber Laser vs. CO2 Laser: Which Is Right for Your Shop?" — targets `fiber laser cutting machine for sale USA`
2. "Cobot vs. Industrial Welding Robot: How to Choose" — targets `cobot welding arm price USA`
3. "The Complete Guide to Buying a CNC Press Brake" — targets `buy CNC press brake USA`

**Options:**

- You write them (1,500–3,000 words each, I format and publish to Sanity)
- You hire a technical copywriter familiar with metal fabrication
- I draft them based on the product specs you provide (you review and approve before publishing)

---

## 2.10 — Spanish Translation

🔴 **Required**

All site content must be translated by a human translator (not machine-translated). The target dialect is **neutral Spanish** appropriate for US Hispanic audiences — not Chilean regional Spanish.

**Scope:** Every piece of text on the site — navigation, all 9 product pages, homepage, about, support, blog posts, form labels, email sequences.

**My role:** I build the i18n infrastructure and the English version completely. I insert the Spanish text into the translation files once you provide it. If you are providing translations yourself or via a translator, I will export a structured JSON file with all English strings — your translator fills in the Spanish values for each key.

---

---

# SECTION 3 — MCPs (Model Context Protocol Tools)

MCPs are tools I can use inside this development environment to work more autonomously — without stopping to ask you for information I could look up myself.

The following MCPs would meaningfully speed up development. You would install these once and I could use them throughout the project.

---

## 3.1 — GitHub MCP

🔴 **Required for autonomous development**

**What it lets me do:** Create and manage the GitHub repository, create branches, commit code, open pull requests — all without you having to copy-paste code manually.

**How to install:**

```bash
npx @modelcontextprotocol/create-server github
```

Or use the Claude Code built-in GitHub integration via settings.

**Credentials needed:** The GitHub Personal Access Token from Section 1.2.

---

## 3.2 — Filesystem MCP

🔴 **Already active**

I already have filesystem access to `c:/NLP_6/`. This is sufficient for reading and writing files locally. Once the project is initialized in a subfolder (e.g., `c:/NLP_6/vtm-tech-solutions/`), I can read and write all project files directly.

**Nothing additional needed.**

---

## 3.3 — Vercel MCP

🟡 **Important**

**What it lets me do:** Deploy to Vercel, check deployment status, manage environment variables, and read build logs — without you having to log into Vercel manually.

**How to install:**
Add this to your Claude Code MCP settings:

```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "@vercel/mcp-adapter"],
      "env": {
        "VERCEL_TOKEN": "your_vercel_token_here"
      }
    }
  }
}
```

**Credentials needed:**

- Vercel Token: Vercel dashboard → Settings → Tokens → Create Token

---

## 3.4 — Sanity MCP

🟡 **Important**

**What it lets me do:** Read and write content directly to your Sanity CMS — create product entries, update specs, publish blog posts — without you having to log into the Sanity Studio.

**How to install:**

```json
{
  "mcpServers": {
    "sanity": {
      "command": "npx",
      "args": ["-y", "@sanity/mcp-server"],
      "env": {
        "SANITY_PROJECT_ID": "your_project_id",
        "SANITY_DATASET": "production",
        "SANITY_TOKEN": "your_api_token"
      }
    }
  }
}
```

**Credentials needed:** Sanity Project ID + API Token from Section 1.3.

---

## 3.5 — Web Fetch / Browser MCP

🟢 **Optional**

**What it lets me do:** Visit web pages during development to verify that deployed URLs look correct, test live forms, or research competitor sites referenced in the PRD.

**Already available** via the built-in `WebFetch` tool in this environment. No additional setup needed.

---

---

# SECTION 4 — Summary Checklist

Use this as your action list. Check each item off as you complete it.

## Accounts to Create

- [ ] Vercel account → provide email
- [ ] GitHub account → provide username + Personal Access Token
- [ ] Sanity.io account → provide Project ID + API Token
- [ ] HubSpot account → provide Portal ID + Private App Token
- [ ] Google account (for GA4 + Search Console) → provide GA4 Measurement ID
- [ ] Microsoft Clarity account → provide Project ID
- [ ] WhatsApp Business → provide phone number in international format
- [ ] Crisp account → provide Website ID
- [ ] Cloudflare account → provide Turnstile Site Key + Secret Key
- [ ] Cloudflare Stream (if using for video) → provide Account ID + API Token

## Purchases

- [ ] Domain: `vtmtechsolutions.com` (~$10–15/year)
- [ ] GSAP Club license (~$99/year) — OR confirm you want the free CSS alternative
- [ ] Font license (if choosing Option B premium fonts) — OR confirm free fonts are acceptable
- [ ] Crisp Pro (optional, ~$25/month) — free tier is fine to start

## Decisions Needed From You

- [ ] Fonts: **Option A** (free — Inter + Lora) or **Option B** (paid — Neue Haas Grotesk + Freight Text)?
- [ ] GSAP SplitText: **purchase Club GSAP** or **use free CSS alternative**?
- [ ] Lottie animations: **commission custom** / **buy from marketplace** / **use CSS/SVG instead**?
- [ ] Video: do you have existing footage, or does this need to be produced?
- [ ] Blog content: will you write it, hire a writer, or shall I draft it for your review?
- [ ] Spec sheets: do branded PDFs exist already, or shall I create the templates?

## Assets to Gather

- [ ] Product photography: 9 machines × (1 hero + 3–4 details + 1 in-action) ≈ 45–54 images
- [ ] Product videos: 1 per machine + homepage hero loop video
- [ ] Lottie files (if commissioning): 5 animations
- [ ] Logo files: SVG versions on white, on dark, mark-only, all-white
- [ ] Company info: US address, phone, email, social handles
- [ ] Product specifications: all specs for all 9 machines (spreadsheet or PDF)
- [ ] Customer testimonials: 3–5 quotes with names and companies
- [ ] Spanish translations: once I export the English strings JSON

---

*This document covers everything needed to build and launch vtmtechsolutions.com.*
*Items marked 🔴 Required must be in place before development of the relevant phase begins.*
*Items marked 🟡 Important should be provided before launch.*
*Items marked 🟢 Optional can be added post-launch.*
