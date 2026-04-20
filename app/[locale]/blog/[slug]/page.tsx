import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

// Static post data — replace with Sanity fetch once CMS is populated
const POSTS: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageId: string;
  author: string;
  body: { type: "h2" | "p" | "ul"; content: string | string[] }[];
  related: { title: string; slug: string; imageId: string; category: string }[];
}> = {
  "cobot-welding-roi-checklist": {
    title: "Cobot Welding ROI Checklist: 8 Questions to Ask Before You Buy",
    excerpt: "Not every shop is ready for a cobot. Not every shop that's ready buys the right one. This checklist walks you through the questions that determine whether a cobot welding cell will pay off — and how fast.",
    category: "Buying Guide",
    date: "April 10, 2026",
    readTime: "7 min read",
    imageId: "/images/blog-cobot-roi.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "The cobot welding market is growing fast, and so is the number of shops that bought one and didn't get the ROI they expected. Usually, it's not because the machine failed — it's because the shop wasn't set up to use it effectively. This checklist exists to help you find out before you spend $85,000–$120,000." },
      { type: "h2", content: "1. Do you have repeatable parts?" },
      { type: "p", content: "Cobots excel at repetitive work. If you're running the same 10–20 part configurations week after week, you're a strong candidate. If every job is one-off custom work with no repeat orders, a cobot will spend more time being reprogrammed than welding. The threshold most integrators use: at least 30% of your weld hours should be on parts you run more than once a month." },
      { type: "h2", content: "2. What is your current cost per weld-hour?" },
      { type: "p", content: "Add up your welder's fully-loaded hourly cost: wage, benefits, overhead, supervision. For most US shops in 2026, this runs $55–$85/hour fully loaded. A cobot running at 2.5× manual speed on a part that takes a welder 6 minutes costs you roughly $0.80 in electricity per part instead of $5–$8 in labor. That spread is your ROI engine." },
      { type: "h2", content: "3. How good is your fixture situation?" },
      { type: "p", content: "This is the most underestimated factor in cobot ROI. A cobot welds exactly where you tell it to. If your parts land in the fixture 3mm off every third cycle, the cobot will weld in the wrong place. Shops with solid, consistent fixtures get fast ROI. Shops with worn or poorly-designed fixtures spend their first months fixing the real problem before the cobot can perform." },
      { type: "h2", content: "4. Can you identify your top 5 weld jobs by volume?" },
      { type: "p", content: "Before buying, list your five highest-volume weld jobs. Estimate the hours per month each one consumes. If those five jobs together represent 40%+ of your monthly weld hours, you have a clear cobot target set. If you can't name them, you need better production data before making a capital decision of this size." },
      { type: "h2", content: "5. Do you have a welder who can become a cobot operator?" },
      { type: "p", content: "The best cobot operators are existing welders — they understand weld quality, know when something looks wrong, and can troubleshoot joint fit-up issues. You don't need a robotics engineer. You do need someone who is comfortable learning new technology and takes ownership of the machine. Shops that assign a dedicated cobot champion in the first 90 days consistently outperform those that treat it as shared equipment." },
      { type: "h2", content: "6. What is your floor space situation?" },
      { type: "p", content: "A cobot cell requires roughly 8' × 8' of floor space for the arm, positioner, and operator access. Unlike a traditional robot cell, no cage is required — the cobot uses force-sensing to stop if it contacts a person. But you do need a defined work area and consistent material flow into and out of the cell. If your floor is chaotic and layout changes frequently, plan the cell location before you order." },
      { type: "h2", content: "7. What does your rejection rate look like on the target parts?" },
      { type: "p", content: "If your current manual weld reject rate on the target parts is above 2%, a cobot will almost certainly reduce it — cobot torch angle and travel speed are consistent to ±0.05mm across every part, every shift. If your reject rate is already below 0.5%, quality improvement is not your ROI driver. Speed and labor cost are." },
      { type: "h2", content: "8. What is your payback target?" },
      { type: "p", content: "Most mid-size fabrication shops target 24–36 month payback on capital equipment. Based on our customer data, cobot welding cells average 15–22 months payback for shops with good fixture discipline and 30%+ repeat part volume. If your payback analysis requires less than 12 months, you need either very high weld volume or very high current labor cost to get there. Be honest with the numbers before you commit." },
      { type: "h2", content: "The honest answer" },
      { type: "p", content: "If you answered yes to questions 1, 3, 4, and 5, you're likely a good cobot candidate. If you answered no to fixture quality or can't name your high-volume parts, fix those problems first — they'll improve your manual welding operation too, and they're prerequisites for cobot success. We'd rather tell you that now than after installation." },
    ],
    related: [
      { title: "Cobot Welding ROI: Real Numbers from 3 US Shops", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.png", category: "Case Study" },
      { title: "Laser Welding vs. TIG Welding", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.png", category: "Technical Guide" },
    ],
  },
  "press-brake-throughput-signs": {
    title: "5 Signs Your Press Brake Is the Bottleneck in Your Shop",
    excerpt: "A slow press brake doesn't announce itself. It shows up as overtime, missed deadlines, and quotes you're afraid to take. Here's how to diagnose the problem before it costs you more work.",
    category: "Technical Guide",
    date: "April 3, 2026",
    readTime: "6 min read",
    imageId: "/images/blog-press-brake-tonnage.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "In most fabrication shops, the press brake isn't the flashiest machine. The fiber laser gets the attention. The cobot gets the demos. The press brake just sits there bending parts — until it can't keep up, and suddenly every downstream operation is waiting on it." },
      { type: "p", content: "Here are the five clearest signs that your press brake has become your shop's production constraint." },
      { type: "h2", content: "1. Parts are stacking up in front of it" },
      { type: "p", content: "Walk your floor at the end of a shift. If there's a consistent queue of cut parts waiting to be bent while the press brake is still running, you have a throughput imbalance. Either your upstream cutting capacity has outpaced your bending capacity, or your press brake setup time is too high for your job mix. Both are solvable — but you need to identify which one is happening." },
      { type: "h2", content: "2. Setup time is eating your day" },
      { type: "p", content: "On a modern CNC press brake with a graphical controller, a trained operator should be able to set up a new job in 10–20 minutes: load the program, swap tooling, verify back gauge position, run a first article. If your operator is spending 45–60 minutes on setup for jobs you run regularly, the problem is usually one of three things: no saved programs, no quick-change tooling, or the wrong back gauge configuration for your part complexity." },
      { type: "h2", content: "3. You're turning down complex bent parts" },
      { type: "p", content: "If your estimators are avoiding quotes on parts with multiple bends, tight tolerances, or complex flange geometries — not because your people can't do it, but because the machine can't hold the tolerance or the back gauge can't support the program — you're leaving revenue on the table. A CNC press brake with a 4+1 to 8+1 axis back gauge and ±0.01mm repeatability opens up work that a manual or older CNC machine simply can't reliably produce." },
      { type: "h2", content: "4. Your repeatability is inconsistent between operators" },
      { type: "p", content: "If one operator produces bent parts that need rework and another's come off the machine ready for welding, the problem isn't the people — it's the machine. Older press brakes without automatic crowning compensation produce different results as the ram and bed deflect under tonnage. A modern CNC press brake with active angle monitoring and automatic crowning produces consistent results regardless of which operator is running it." },
      { type: "h2", content: "5. You're running overtime to meet delivery" },
      { type: "p", content: "Overtime on the press brake is a clear signal that available production hours don't meet demand. Before buying a second machine, analyze your setup-to-run ratio. In many shops, 40–50% of press brake time is setup rather than actual bending. A faster controller, quick-change tooling, and saved programs can often recover 30–40% of effective capacity without any capital investment. If you've done that and are still running overtime consistently, it's time to look at adding tonnage or a second machine." },
      { type: "h2", content: "What to do about it" },
      { type: "p", content: "Start by measuring actual setup time and run time for your 10 most common jobs over two weeks. The data will tell you whether you have a capacity problem or a setup problem. A capacity problem requires investment. A setup problem requires process changes — and sometimes a machine upgrade to a controller and tooling system that makes those process changes possible. We're happy to walk through your production data with you and give you an honest assessment." },
    ],
    related: [
      { title: "Press Brake Tonnage Calculator", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.png", category: "Technical Guide" },
      { title: "Laser Welding vs. TIG Welding", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.png", category: "Technical Guide" },
    ],
  },
  "fiber-laser-vs-co2-2026": {
    title: "Fiber Laser vs. CO₂ Laser: Which Is Right for Your Shop in 2026?",
    excerpt: "Wall-plug efficiency, cutting speed on thin sheet, and operating cost — we break down every meaningful difference so you can make the right choice for your material mix.",
    category: "Buying Guide",
    date: "March 28, 2026",
    readTime: "8 min read",
    imageId: "/images/blog-fiber-vs-co2.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "If you're looking at laser cutting equipment, you'll encounter both fiber and CO₂ options from nearly every manufacturer. The specifications look similar on paper. The operating realities are not." },
      { type: "h2", content: "The fundamental difference" },
      { type: "p", content: "CO₂ lasers generate their beam inside a gas-filled resonator cavity, then deliver it through a series of mirrors to a cutting head. Fiber lasers generate the beam inside a fiber optic cable using semiconductor diodes, and deliver it through that same cable to the cutting head — no mirrors required." },
      { type: "p", content: "This difference in beam delivery is what drives almost every practical distinction between the two technologies." },
      { type: "h2", content: "Cutting speed: fiber wins on thin material, CO₂ holds on thick" },
      { type: "p", content: "For sheet metal under 10mm, fiber laser cuts 2–3× faster than CO₂ at the same power level. This is because fiber produces a shorter wavelength (1.07 μm vs. 10.6 μm for CO₂), which is better absorbed by metals, particularly non-ferrous ones like copper and brass." },
      { type: "p", content: "On thick plate above 25mm, CO₂ still has a marginal advantage in cut edge quality. But most fabrication shops spend 80–90% of their cutting time on material under 12mm, where fiber is clearly faster." },
      { type: "h2", content: "Operating cost: fiber wins decisively" },
      { type: "ul", content: [
        "Wall-plug efficiency: 30% for fiber vs. 10–15% for CO₂ — dramatically lower electricity cost",
        "No laser gas: CO₂ machines consume CO₂ gas as part of beam generation; fiber requires none",
        "No mirror maintenance: CO₂ optic paths require regular cleaning and eventual replacement; fiber has no mirrors",
        "Warm-up time: fiber starts instantly; CO₂ requires 15–30 minutes",
      ]},
      { type: "h2", content: "When should you consider CO₂?" },
      { type: "p", content: "If you cut primarily thick plate (>25mm) mild steel and edge quality on that thick material is critical, CO₂ still produces a slight edge in cut face smoothness. If you cut non-metallic materials like acrylic, wood, or fabric in addition to metal, CO₂ is the only option — fiber cannot cut these materials effectively." },
      { type: "h2", content: "The bottom line" },
      { type: "p", content: "For a US metal fabrication shop cutting steel, stainless, aluminum, and occasional non-ferrous material under 25mm, fiber laser is the clear choice in 2026. Lower operating cost, higher speed on thin sheet, and zero mirror maintenance. The only cases where CO₂ remains competitive are thick plate specialists and shops cutting non-metallic materials." },
    ],
    related: [
      { title: "Press Brake Tonnage Calculator", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.png", category: "Technical Guide" },
      { title: "Laser Cleaning vs. Sandblasting", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.png", category: "Technical Guide" },
    ],
  },
  "fiber-laser-vs-co2-laser-cutting": {
    title: "Fiber Laser vs. CO₂ Laser: Which Is Right for Your Shop in 2026?",
    excerpt: "Wall-plug efficiency, cutting speed on thin sheet, and operating cost — we break down every meaningful difference so you can make the right choice for your material mix.",
    category: "Buying Guide",
    date: "March 28, 2026",
    readTime: "8 min read",
    imageId: "/images/blog-fiber-vs-co2.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "If you're looking at laser cutting equipment, you'll encounter both fiber and CO₂ options from nearly every manufacturer. The specifications look similar on paper. The operating realities are not." },
      { type: "h2", content: "The fundamental difference" },
      { type: "p", content: "CO₂ lasers generate their beam inside a gas-filled resonator cavity, then deliver it through a series of mirrors to a cutting head. Fiber lasers generate the beam inside a fiber optic cable using semiconductor diodes, and deliver it through that same cable to the cutting head — no mirrors required." },
      { type: "p", content: "This difference in beam delivery is what drives almost every practical distinction between the two technologies." },
      { type: "h2", content: "Cutting speed: fiber wins on thin material, CO₂ holds on thick" },
      { type: "p", content: "For sheet metal under 10mm, fiber laser cuts 2–3× faster than CO₂ at the same power level. This is because fiber produces a shorter wavelength (1.07 μm vs. 10.6 μm for CO₂), which is better absorbed by metals, particularly non-ferrous ones like copper and brass." },
      { type: "p", content: "On thick plate above 25mm, CO₂ still has a marginal advantage in cut edge quality. But most fabrication shops spend 80–90% of their cutting time on material under 12mm, where fiber is clearly faster." },
      { type: "h2", content: "Operating cost: fiber wins decisively" },
      { type: "ul", content: [
        "Wall-plug efficiency: 30% for fiber vs. 10–15% for CO₂ — dramatically lower electricity cost",
        "No laser gas: CO₂ machines consume CO₂ gas as part of beam generation; fiber requires none",
        "No mirror maintenance: CO₂ optic paths require regular cleaning and eventual replacement; fiber has no mirrors",
        "Warm-up time: fiber starts instantly; CO₂ requires 15–30 minutes",
      ]},
      { type: "h2", content: "When should you consider CO₂?" },
      { type: "p", content: "If you cut primarily thick plate (>25mm) mild steel and edge quality on that thick material is critical, CO₂ still produces a slight edge in cut face smoothness. If you cut non-metallic materials like acrylic, wood, or fabric in addition to metal, CO₂ is the only option — fiber cannot cut these materials effectively." },
      { type: "h2", content: "The bottom line" },
      { type: "p", content: "For a US metal fabrication shop cutting steel, stainless, aluminum, and occasional non-ferrous material under 25mm, fiber laser is the clear choice in 2026. Lower operating cost, higher speed on thin sheet, and zero mirror maintenance. The only cases where CO₂ remains competitive are thick plate specialists and shops cutting non-metallic materials." },
    ],
    related: [
      { title: "Press Brake Tonnage Calculator", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.png", category: "Technical Guide" },
      { title: "Laser Cleaning vs. Sandblasting", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.png", category: "Technical Guide" },
    ],
  },
  "cobot-welding-roi-real-numbers": {
    title: "Cobot Welding ROI: Real Numbers from 3 US Fabrication Shops",
    excerpt: "We tracked payback period, quality reject rates, and welder retention at three shops that deployed collaborative welding arms in the past 18 months.",
    category: "Case Study",
    date: "March 14, 2026",
    readTime: "11 min read",
    imageId: "/images/blog-cobot-roi.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "Before a shop invests $85,000–$120,000 in a cobot welding cell, they need real numbers — not manufacturer projections. We followed three VTM customers through their first 18 months of cobot operation and documented the actual results." },
      { type: "h2", content: "Shop 1: HVAC component manufacturer, Houston TX" },
      { type: "p", content: "This shop runs a steady mix of HVAC brackets, duct fittings, and equipment frames in 14–16 gauge galvanized steel. Before the cobot, two welders handled the repetitive bracket production while two others did custom work." },
      { type: "p", content: "Result at 18 months: The cobot handles all bracket production — 120–140 parts per shift. One welder was reassigned to custom fitting work that was previously outsourced. The other was promoted to cobot supervisor and cell programmer. Payback achieved at 14 months." },
      { type: "h2", content: "Shop 2: Structural steel fabricator, Atlanta GA" },
      { type: "p", content: "Higher-mix, lower-volume work with a focus on steel frames and platforms. Initial concern: the cobot wouldn't be flexible enough for their part variety." },
      { type: "p", content: "Reality: The shop identified a core set of 22 frame configurations that represented 65% of their weld hours. Those were programmed first. The cobot now handles those, while skilled welders focus on the custom work. Payback projected at 22 months." },
      { type: "h2", content: "Shop 3: Automotive parts supplier, Detroit MI" },
      { type: "p", content: "High-volume, repeat production — the ideal cobot scenario. 240 parts per shift, mild steel brackets and sub-assemblies. The cobot hit full production speed in week 3." },
      { type: "p", content: "Result: Quality reject rate dropped from 1.8% to 0.3%. The cobot's torch angle and travel speed are consistent to ±0.05mm — something even experienced welders can't sustain across a full shift. Payback at 11 months." },
      { type: "h2", content: "What the numbers actually show" },
      { type: "ul", content: [
        "Average payback period across all three shops: 15.7 months",
        "Quality reject rate improvement: 50–85% reduction",
        "Welder retention: all three shops kept every welder employed — reassigned to higher-value work",
        "Overtime reduction: average 40% reduction in overtime welding hours",
      ]},
    ],
    related: [
      { title: "Fiber Laser vs. CO₂ Laser", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.png", category: "Buying Guide" },
      { title: "Laser Welding vs. TIG Welding", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.png", category: "Technical Guide" },
    ],
  },
  "press-brake-tonnage-calculator": {
    title: "Press Brake Tonnage: How to Calculate What You Actually Need",
    excerpt: "Undersizing a press brake is expensive. Oversizing wastes money. Here's the formula fabricators use to spec the right tonnage for their material mix.",
    category: "Technical Guide",
    date: "February 28, 2026",
    readTime: "7 min read",
    imageId: "/images/blog-press-brake-tonnage.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "Buying a press brake without calculating required tonnage is one of the most common — and costly — mistakes in fabrication equipment purchasing. Too little tonnage and the machine can't form your material. Too much and you've spent $40,000–$80,000 extra on capacity you'll never use." },
      { type: "h2", content: "The basic tonnage formula" },
      { type: "p", content: "Required tonnage = (Material tensile strength × Material thickness² × Bend length) ÷ (Die opening width × 5.33)" },
      { type: "p", content: "For mild steel (tensile strength 60,000 PSI), 10 gauge (0.134\"), 48\" bend length, 1\" V-die opening: (60,000 × 0.018 × 48) ÷ (1 × 5.33) = approximately 9.7 tons per foot, or 38.7 tons total." },
      { type: "h2", content: "Material tensile strength values" },
      { type: "ul", content: [
        "Mild steel (A36): 58,000–80,000 PSI — use 60,000 for estimates",
        "Stainless steel (304): 75,000–95,000 PSI — use 90,000; requires 50% more tonnage than mild steel",
        "Aluminum (6061-T6): 40,000–45,000 PSI — use 42,000",
        "Hot-rolled steel: Similar to mild steel at equivalent thickness",
        "High-strength steel (HSLA): Can reach 100,000+ PSI — verify with mill cert",
      ]},
      { type: "h2", content: "Add a safety margin" },
      { type: "p", content: "Never buy a press brake rated exactly at your calculated tonnage. Material varies — a sheet certified at 60,000 PSI tensile might test at 65,000 PSI. V-die selection changes requirements. Running the machine at 100% rated tonnage reduces component life significantly." },
      { type: "p", content: "Rule of thumb: buy a machine rated for 20–30% more tonnage than your peak calculated requirement. If your most demanding job calculates to 80 tons, buy a 100-ton machine." },
      { type: "h2", content: "Bed length matters as much as tonnage" },
      { type: "p", content: "A 100-ton machine with a 10' bed lets you distribute force across the full bed length. If you bend short parts on a long machine, you're applying 100 tons over 24\" instead of 120\" — creating concentrated force that can damage the machine. Match bed length to your most common part length, not your longest part." },
      { type: "h2", content: "VTM CNC Press Brake range" },
      { type: "p", content: "Our CNC hydraulic press brakes range from 40 ton/4' to 400 ton/14'. All come with the Delem DA-66T controller, 4-axis back gauge, and ±0.01mm repeatability. We'll help you spec the right machine for your material mix before you commit to a purchase." },
    ],
    related: [
      { title: "Fiber Laser vs. CO₂ Laser", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.png", category: "Buying Guide" },
      { title: "Laser Cleaning vs. Sandblasting", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.png", category: "Technical Guide" },
    ],
  },
  "laser-cleaning-vs-sandblasting": {
    title: "Laser Cleaning vs. Sandblasting: A Side-by-Side Comparison",
    excerpt: "Media blasting has been the default for rust, scale, and coating removal for decades. Laser cleaning is changing that — but it's not the right choice in every situation.",
    category: "Technical Guide",
    date: "February 12, 2026",
    readTime: "6 min read",
    imageId: "/images/blog-laser-cleaning-compariso.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "Sandblasting and shot blasting have dominated surface preparation for over a century. Laser cleaning entered fabrication shops in the last decade — and it's displacing media blasting in specific applications where cleanliness, precision, and operating cost matter." },
      { type: "h2", content: "How laser cleaning works" },
      { type: "p", content: "A pulsed fiber laser delivers high-energy pulses to the workpiece surface. Contaminants — rust, mill scale, paint, oxide layers — absorb the laser energy and are vaporized or expelled as fine particles. The base metal beneath reflects the laser (different wavelength absorption) and is unaffected. The result: clean base metal with no mechanical abrasion." },
      { type: "h2", content: "Key differences" },
      { type: "ul", content: [
        "Media: sandblasting generates large volumes of spent abrasive that must be collected and disposed of; laser cleaning produces only fine particle extraction (handled by a small vacuum)",
        "Surface profile: sandblasting creates a roughened surface profile useful for coating adhesion; laser cleaning leaves the base metal smooth — better for precision welding prep",
        "Operator fatigue: sandblasting requires full PPE and is physically demanding; laser cleaning is handheld with a light gun",
        "Selective cleaning: laser can clean within 0.5mm of a weld or part edge; sandblasting is not selective",
        "Capital cost: sandblasting equipment is cheaper to purchase; laser cleaning ROI comes from eliminated media cost, disposal cost, and labor",
      ]},
      { type: "h2", content: "Where laser cleaning wins" },
      { type: "p", content: "Pre-weld oxide removal on aluminum and stainless steel, where cleanliness directly affects weld quality. Mold cleaning in precision tooling — no risk of dimensional change. Rust removal on painted or coated parts where you need to clean a specific area without affecting surroundings. Aerospace and automotive work with tight surface finish specifications." },
      { type: "h2", content: "Where sandblasting remains competitive" },
      { type: "p", content: "High-volume structural steel where surface profile for coating adhesion is the goal and per-part cost is the primary driver. Very large surface areas (entire ship hulls, bridge sections) where laser cleaning throughput is too slow. Applications where induced surface roughness is beneficial." },
      { type: "h2", content: "Operating cost comparison" },
      { type: "p", content: "A sandblasting operation consuming 500 lbs of media per day at $0.20/lb costs $100/day in media alone — $25,000/year before disposal, labor, and equipment maintenance. A laser cleaning system's primary operating cost is electricity. For most fabrication shops, the laser cleaning ROI is 18–36 months." },
    ],
    related: [
      { title: "Laser Welding vs. TIG Welding", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.png", category: "Technical Guide" },
      { title: "Fiber Laser vs. CO₂ Laser", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.png", category: "Buying Guide" },
    ],
  },
  "laser-welding-vs-tig-welding-comparison": {
    title: "Laser Welding vs. TIG Welding: An Honest Comparison",
    excerpt: "TIG welding has been the gold standard for precision welding for 70 years. Laser welding is challenging that. Here's where each technology actually wins.",
    category: "Technical Guide",
    date: "January 15, 2026",
    readTime: "9 min read",
    imageId: "/images/blog-laser-vs-tig.png",
    author: "VTM Tech Solutions",
    body: [
      { type: "p", content: "TIG welding dominated precision fabrication for good reason: low heat input, clean bead appearance, and the ability to weld virtually any metal. Laser welding is not trying to replace TIG everywhere — but it is replacing it in specific applications where speed, heat input, and consumable cost matter." },
      { type: "h2", content: "Speed: no contest" },
      { type: "p", content: "Laser welding is 3–5× faster than TIG on the same joint. On a 1mm stainless tube with a 200mm seam, a skilled TIG welder takes roughly 4–5 minutes. A laser welder completes the same joint in under 1 minute. At production scale, this time difference becomes the primary economic case for laser." },
      { type: "h2", content: "Heat input: laser wins" },
      { type: "p", content: "The laser's focused spot delivers energy only where it's needed. Heat-affected zone (HAZ) width on 1.5mm stainless with laser is typically 0.3–0.5mm. TIG on the same material produces a HAZ of 1.5–3mm. For thin-wall parts, cosmetic assemblies, or anything where warping is a concern, this difference is significant." },
      { type: "h2", content: "Post-weld work: laser wins on appearance welds" },
      { type: "p", content: "A laser weld bead on stainless or aluminum is narrow, consistent, and nearly flush with the parent material. Many cosmetic parts can go directly to polish without grinding. TIG produces a wider bead with more variation between operators — most stainless cosmetic work requires grinding or linishing after welding. For shops doing high-end stainless enclosures or architectural metalwork, this is a major labor reduction." },
      { type: "h2", content: "Material range: TIG is broader" },
      { type: "p", content: "TIG can weld virtually every weldable metal including exotic alloys, dissimilar metals with the right filler selection, and even some non-ferrous materials that are challenging for laser. For shops with a wide material range including unusual alloys, TIG remains essential. Laser welding excels on the most common industrial metals — mild steel, stainless, aluminum, copper, brass." },
      { type: "h2", content: "Operator skill: laser is much easier" },
      { type: "p", content: "A skilled TIG welder takes 6–18 months to develop. The wobble-head handheld laser welder oscillates the beam automatically — the operator controls travel speed and direction. Most operators reach acceptable production quality in 1–2 days. This isn't about replacing skilled welders — it's about reducing your dependence on a labor pool that is increasingly scarce and expensive." },
      { type: "h2", content: "When to keep TIG" },
      { type: "p", content: "Root passes on thick pipe, very thick plate (>12mm single-pass), exotic alloys outside the laser's optimal range, and repair work on unknown base metals. TIG also remains superior when joint fit-up is poor — the larger molten pool can bridge larger gaps than a laser." },
      { type: "h2", content: "The practical answer" },
      { type: "p", content: "Most fabrication shops don't replace their TIG capability — they add laser welding for the production work that benefits from it, and keep TIG for complex, exotic, or thick-section work. The two technologies are complementary, not competitive." },
    ],
    related: [
      { title: "Laser Cleaning vs. Sandblasting", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.png", category: "Technical Guide" },
      { title: "Cobot Welding ROI: Real Numbers", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.png", category: "Case Study" },
    ],
  },
};

// Fallback for slugs not in our static data
const DEFAULT_POST = {
  title: "Article Not Found",
  excerpt: "This article is not available.",
  category: "General",
  date: "",
  readTime: "",
  imageId: "/images/blog-fiber-vs-co2.png",
  author: "VTM Tech Solutions",
  body: [{ type: "p" as const, content: "This article has not been published yet. Please check back soon or browse our other articles." }],
  related: [],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug] ?? DEFAULT_POST;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | VTM Tech Solutions Blog`,
      description: post.excerpt,
      images: [{ url: `https://images.unsplash.com/photo-${post.imageId}?w=1200&q=80` }],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug] ?? DEFAULT_POST;

  return (
    <>
      {/* Hero */}
      <section className="bg-vtm-dark pt-32 pb-0 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              ← Blog
            </Link>
            <span className="text-white/20">/</span>
            <Tag>{post.category}</Tag>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/40 text-sm mb-10">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="relative aspect-[21/9] max-h-[500px] overflow-hidden">
          <Image
            src={post.imageId.startsWith("/") ? post.imageId : `https://images.unsplash.com/photo-${post.imageId}?w=1600&q=80&fit=crop`}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            {/* Main content */}
            <article className="prose prose-lg max-w-none">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="font-headline text-2xl md:text-3xl font-bold text-vtm-dark mt-10 mb-4">
                      {block.content as string}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3 my-6">
                      {(block.content as string[]).map((item, j) => (
                        <li key={j} className="flex gap-3 text-vtm-gray-mid">
                          <span className="text-vtm-red mt-1 flex-shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-vtm-gray-mid leading-relaxed mb-4">
                    {block.content as string}
                  </p>
                );
              })}

              {/* Article CTA */}
              <div className="mt-12 border-t border-vtm-gray-border pt-12">
                <SectionLabel className="mb-4">Ready to Discuss Your Project?</SectionLabel>
                <h3 className="font-headline text-2xl font-bold text-vtm-dark mb-4">
                  Talk to a VTM machine specialist
                </h3>
                <p className="text-vtm-gray-mid mb-6">
                  No sales script — just a direct conversation about your shop, your parts, and the right machine for your work.
                </p>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Button href="/quote" variant="primary">Request a Quote</Button>
                  <Button href="/contact" variant="outline">Contact Us</Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related products */}
              <div className="bg-vtm-gray-light p-6">
                <SectionLabel className="mb-4">Related Machines</SectionLabel>
                <div className="space-y-4">
                  <Link href="/fabrication/fiber-laser-cutting-machine" className="group flex gap-4 items-start">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-border">
                      <Image
                        src="/images/fiber-laser-hero.png"
                        alt="Fiber Laser"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-vtm-dark text-sm group-hover:text-vtm-red transition-colors">Fiber Laser Cutting Machine</p>
                      <p className="text-vtm-gray-mid text-xs mt-1">3–20 kW · ±0.05mm accuracy</p>
                    </div>
                  </Link>
                  <Link href="/automation/collaborative-welding-arm" className="group flex gap-4 items-start">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-border">
                      <Image
                        src="/images/cobot-welding-hero-2.png"
                        alt="Cobot"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-vtm-dark text-sm group-hover:text-vtm-red transition-colors">Collaborative Welding Arm</p>
                      <p className="text-vtm-gray-mid text-xs mt-1">Deploy in 6 weeks · No cage required</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              {post.related.length > 0 && (
                <div>
                  <SectionLabel className="mb-4">Related Articles</SectionLabel>
                  <div className="space-y-4">
                    {post.related.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-light border border-vtm-gray-border">
                          <Image
                            src={related.imageId.startsWith("/") ? related.imageId : `https://images.unsplash.com/photo-${related.imageId}?w=120&q=80&fit=crop`}
                            alt={related.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <Tag className="mb-1">{related.category}</Tag>
                          <p className="font-semibold text-vtm-dark text-sm mt-1 group-hover:text-vtm-red transition-colors leading-snug">
                            {related.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote CTA sidebar */}
              <div className="bg-vtm-dark p-6">
                <h3 className="font-headline font-bold text-white mb-3">Request a Quote</h3>
                <p className="text-white/50 text-sm mb-4">Get pricing, lead time, and expert advice from a VTM machine specialist.</p>
                <Button href="/quote" variant="primary" className="w-full text-center justify-center">
                  Get a Quote
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "VTM Tech Solutions" },
            publisher: { "@type": "Organization", name: "VTM Tech Solutions" },
            datePublished: post.date,
            image: `https://images.unsplash.com/photo-${post.imageId}?w=1200&q=80`,
          }),
        }}
      />
    </>
  );
}
