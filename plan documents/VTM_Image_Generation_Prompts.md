# VTM Tech Solutions — Complete Image Generation Prompts

**Total images needed: 106**
**Version:** 1.2 — April 15, 2026

---

## How to Use This Document

1. Copy each prompt into your AI image generator (Midjourney, DALL-E 3, Adobe Firefly, Stable Diffusion)
2. Save each generated image using the **Filename** listed (`.jpg` or `.png` — both work)
3. Place all images in the `/public/images/` folder of the project
4. Tell me which images are ready and I will update the website code to use them

**Recommended settings for all images:**

- Aspect ratio: as noted per image
- Style reference: photorealistic, professional industrial photography, no text overlays
- If using Midjourney: add `--style raw --v 6` at the end of every prompt

**JPG vs PNG note:**

- Both formats work. Next.js converts all images to WebP automatically at serve time.
- PNG is fine, especially for AI-generated images or renders with transparent backgrounds.
- If your images are solid-background photos, saving as JPG (quality 85–90) keeps file sizes smaller.
- When uploading, just use the same base filename listed — e.g., `fiber-laser-hero.png` instead of `fiber-laser-hero.jpg` — and let me know so I update the code paths accordingly.

---

## GLOBAL STYLE GUIDE

All images should feel like they come from the same professional shoot. Apply these rules to every prompt:

- **Lighting:** dramatic, directional industrial lighting — single key light from the side or above, deep shadows, no flat studio lighting
- **Color palette:** dark backgrounds preferred (charcoal, black, dark concrete), accents of orange/amber from sparks or molten metal where relevant
- **Depth of field:** shallow — crisp subject, blurred background
- **No people** unless specified — machine-focused
- **No text, logos, screens with readable text** unless specified
- **Quality modifiers to add:** `sharp focus, 8K, ultra-detailed, industrial photography, photorealistic`

---

---

# SECTION 1 — HOMEPAGE

## 1.1 — Hero Background

**Filename:** `homepage-hero.jpg`
**Dimensions:** 1920 × 1080px minimum (16:9)
**Used:** Homepage hero section, full-screen background

**Prompt:**

> Dramatic cinematic wide-angle shot of a modern industrial metal fabrication shop at night. A large fiber laser cutting machine in the center of the frame is actively cutting thick steel plate, producing a brilliant cascade of bright orange and white sparks that arc upward and reflect off the polished concrete floor. The shop is dark except for the intense light from the laser cut and faint blue overhead industrial lights. Smoke wisps rise from the cutting zone. The machine is modern CNC industrial equipment — large format, with a gantry structure and enclosed cutting bed. Long exposure-style motion blur on the sparks. Ultra-wide perspective. Cinematic, dramatic, high-contrast. Photorealistic industrial photography, sharp focus on the machine, 8K.

---

## 1.2 — Feature Block: Precision

**Filename:** `homepage-feature-precision.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Homepage "Uncompromising Precision" feature block

**Prompt:**

> Extreme close-up macro photograph of a fiber laser cutting head in motion above stainless steel sheet metal. The laser beam is visible as an intense white-hot point where it contacts the metal, producing a razor-thin cut line with mirror-smooth edges. Molten metal droplets fly off in perfect symmetry. The cut edge reflects the laser light, revealing the precise geometry of the kerf — perfectly vertical walls, no burr. Background is dark and out of focus. Industrial macro photography, shallow depth of field, dramatic side lighting, 8K photorealistic.

---

## 1.3 — Feature Block: Partnership

**Filename:** `homepage-feature-partnership.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Homepage "Fabrication to Automation — One Partner" feature block

**Prompt:**

> Wide establishing shot of a modern, large-scale metal fabrication facility. Multiple CNC machines visible in perspective — a large fiber laser cutting machine in the foreground, a press brake and welding robot in the mid-ground, overhead cranes in the ceiling. The factory floor is organized, well-lit with industrial overhead lighting, and clean. Steel plate and cut parts stacked neatly at workstations. Warm amber accent lighting from machine status lights contrasts with cool overhead white light. No workers visible. Perspective view showing depth and scale of the facility. Photorealistic industrial photography, wide angle, sharp throughout, 8K.

---

## 1.4 — Feature Block: Support

**Filename:** `homepage-feature-support.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Homepage "Support That Doesn't Disappear After Delivery" feature block

**Prompt:**

> A factory technician in clean work clothes and safety glasses kneeling beside a large CNC machine, performing a calibration procedure. The technician holds a precision measuring instrument near the machine's cutting head. Warm shop lighting from above. The machine is large, modern, industrial. Focus on the hands and instrument, slight bokeh on the background machinery. Professional, clean, skilled tradesperson atmosphere. No logo or text visible on clothing. Photorealistic industrial photography, side lighting, 8K.

---

## 1.5 — Feature Block: Consultation

**Filename:** `homepage-feature-consultation.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Homepage "Support That Starts Before You Buy" feature block

**Prompt:**

> Two professionals standing beside a large industrial laser cutting machine in a factory environment. One person points at a specification on a tablet screen, the other examines the machine's cutting head up close. The setting is a modern, well-lit fabrication shop. Both people are focused on the machine. Natural interaction, not posed. Industrial environment with visible machinery in the background. Clean, professional atmosphere. Shallow depth of field. Photorealistic industrial photography, warm directional lighting, 8K.

---

---

# SECTION 2 — FIBER LASER CUTTING MACHINE

## 2.1 — Hero Image

**Filename:** `fiber-laser-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Fiber Laser Cutting Machine page hero background

**Prompt:**

> Large-format CNC fiber laser cutting machine photographed from a dramatic low front angle in a dimly lit factory. The machine is massive — a full-enclosure gantry system with a 5×10 foot cutting bed visible through the transparent safety enclosure. The interior of the machine glows intensely from the active laser, casting bright light through the safety glass onto the factory floor. The machine is modern, clean, industrial — dark grey powder coat, precision linear rails visible, CNC controller screen glowing on the right side.Background is dark industrial factory. Wide angle, dramatic perspective, moody industrial lighting. Photorealistic industrial photography, 8K.

---

## 2.2 — Feature 01: Cutting Speed

**Filename:** `fiber-laser-feature-01-speed.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature block 01 — "Cutting Speed That Doesn't Compromise"

**Prompt:**

> High-speed industrial photography of a fiber laser cutting head moving at speed across thin mild steel sheet metal. The laser produces a perfectly straight cut line with a trail of bright orange sparks streaming behind the cutting head in a continuous arc. Motion blur on the sparks suggests high velocity. The cut line is razor-straight with clean polished edges. Dark background, close-up perspective looking along the cutting path. Dramatic, dynamic. Photorealistic, sharp focus on the cutting head, 8K.

---

## 2.3 — Feature 02: Accuracy

**Filename:** `fiber-laser-feature-02-accuracy.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature block 02 — "±0.05mm Accuracy, Every Part, Every Time"

**Prompt:**

> Extreme close-up macro photograph of a freshly laser-cut edge on stainless steel plate. The cut edge is perfectly vertical and mirror-smooth under raking side lighting that reveals every surface detail. A digital vernier caliper measuring the kerf width is held in frame, displaying a precise measurement. The background is the polished surface of the steel plate with subtle reflections. Technical, precise, quality-focused atmosphere. Industrial macro photography, shallow depth of field, cool steel tones, 8K.

---

## 2.4 — Feature 03: Power Range

**Filename:** `fiber-laser-feature-03-power.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature block 03 — "3 kW to 20 kW — Scale to Your Work"

**Prompt:**

> A fiber laser cutting machine cutting through thick steel plate — approximately 20–25mm thick mild steel. The laser pierces the plate at maximum power, producing a dramatic column of bright white-hot sparks and glowing molten metal that erupts upward from the cut zone. The plate glows orange-red in a halo around the cut point. Dark industrial background. The thickness of the plate is clearly visible in the side profile — communicating capability and power. Dramatic, powerful, high-energy. Photorealistic industrial photography, 8K.

---

## 2.5 — Feature 04: Exchange Table

**Filename:** `fiber-laser-feature-04-exchange-table.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature block 04 — "Exchange Table for Zero Downtime"

**Prompt:**

> Industrial photograph of a fiber laser cutting machine's dual-pallet exchange table system. Two large steel pallets are visible — one loaded with fresh steel sheet inside the cutting zone, another sliding into position on the exchange mechanism with finished cut parts still on it. The mechanical exchange system — rails, shuttle mechanism, transfer arms — is clearly visible. The factory floor around the machine is clean and organized. Top-down or three-quarter perspective showing both pallets simultaneously. Cool industrial lighting. Photorealistic, 8K.

---

## 2.6 — Feature 05: CNC Controller

**Filename:** `fiber-laser-feature-05-controller.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature block 05 — "Windows-Based CNC You Already Know"

**Prompt:**

> Close-up photograph of a modern industrial CNC controller touchscreen mounted on a swing arm beside a large laser cutting machine. The screen displays a CAD nesting layout of sheet metal parts — complex geometric shapes arranged efficiently on a virtual steel sheet, with cutting paths shown in a different color. The operator's hands are just visible at the bottom of the frame, interacting with the touchscreen. The interface looks professional and technical but not cluttered. Warm ambient factory lighting with screen glow. Photorealistic industrial photography, shallow depth of field, 8K.

---

---

---

# SECTION 2B — FIBER LASER TUBE CUTTING MACHINE

## 2B.1 — Hero Image

**Filename:** `fiber-laser-tube-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Fiber Laser Tube Cutting Machine page hero background

**Prompt:**

> Dramatic wide-angle shot of a CNC fiber laser tube cutting machine in a modern industrial facility. The machine is actively cutting a round steel tube — the fiber laser head is visible making a precise cut through the tube wall, producing a bright spark shower that arcs outward in all directions from the round profile. The tube extends along the machine's full length — 20 feet of steel structural tube gripped in pneumatic chucks at both ends. The machine frame is large, floor-mounted, with the rotary chuck mechanism visible on the left. Dark industrial background with dramatic directional overhead lighting. Low angle, dramatic perspective showing scale and capability. Photorealistic industrial photography, 8K.

---

## 2B.2 — Feature 01: Profile Variety

**Filename:** `fiber-laser-tube-feature-01-profiles.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Round, Square, Rectangular, Structural — One Machine"

**Prompt:**

> Top-down flat-lay photograph of a variety of freshly laser-cut structural steel profiles arranged on a clean dark surface. From left to right: round tube sections with clean miter cuts and coped ends, square hollow section with precision slot cuts, rectangular hollow section, angle iron with V-notches, C-channel, and an H-beam section with fish-mouth cuts at each end. All cuts are clean, with no burr. The geometry variety communicates the machine's versatility. Dramatic overhead single-source lighting, slight shadows under each piece. Photorealistic industrial photography, sharp throughout, 8K.

---

## 2B.3 — Feature 02: Chuck System

**Filename:** `fiber-laser-tube-feature-02-chuck.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "4-Chuck Pneumatic Clamping — No Slip, No Twist"

**Prompt:**

> Close-up photograph of a pneumatic self-centering tube chuck on a fiber laser tube cutting machine. The chuck is fully open, showing four precision hardened jaws positioned symmetrically — ready to grip a round tube. The chuck body is machined steel with visible pneumatic actuator mechanism. A round steel tube is partially inserted, the jaws about to close. The precision and symmetry of the chuck mechanism is the focal point. Dramatic side lighting, shallow depth of field on the chuck face, industrial workshop background. Photorealistic industrial photography, 8K.

---

## 2B.4 — Feature 03: Auto Z-Follow

**Filename:** `fiber-laser-tube-feature-03-zfollow.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Z-Axis Auto-Follow Nozzle Control"

**Prompt:**

> Extreme close-up of a fiber laser cutting head positioned precisely above a rotating steel tube, mid-cut. The nozzle maintains perfect standoff distance from the curved tube surface as the tube rotates — the gap between nozzle and metal surface is perfectly consistent. The laser is cutting, producing a small spray of sparks from the kerf. The tube surface curves away on either side, and the cutting head is centered above the highest point of the curve. Technical detail shot with dramatic side lighting. Macro industrial photography, shallow depth of field, 8K.

---

## 2B.5 — Feature 04: CypTube Controller

**Filename:** `fiber-laser-tube-feature-04-controller.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "Bochu CypTube CNC — Tube-Specific Programming"

**Prompt:**

> Close-up photograph of a CNC touchscreen controller showing a tube laser programming interface. The screen displays a 3D model of a structural steel tube with programmed cut features — a compound miter cut at one end, a fish-mouth cope joint at the other, and a series of holes and slots in the tube wall. The 3D visualization is clear and detailed. The controller is mounted on a swing arm beside the tube laser machine, which is visible in the soft background. Screen glow illuminates the operator's hands. Photorealistic industrial photography, 8K.

---

## 2B.6 — Feature 05: Full-Length Tube

**Filename:** `fiber-laser-tube-feature-05-length.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Up to 9-Meter Tube Length — Full Stick Handling"

**Prompt:**

> Wide establishing shot of a fiber laser tube cutting machine processing a full-length structural steel tube — the tube is approximately 20–30 feet long, extending beyond both ends of the machine frame. The machine's infeed roller supports keep the long tube level from sagging. The laser cutting head is visible at the center of the machine, mid-cut. The extreme length of the workpiece relative to the machine height communicates the full-stick capability. Industrial facility, overhead lighting, wide-angle perspective showing the full machine length. Photorealistic industrial photography, 8K.

---

---

# SECTION 2C — SHEET & TUBE COMBO LASER

## 2C.1 — Hero Image

**Filename:** `sheet-tube-combo-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Sheet & Tube Combo Laser page hero background

**Prompt:**

> Wide three-quarter angle photograph of a fiber laser sheet-and-tube combination machine. The left portion of the machine shows a flat cutting bed with a nest of laser-cut sheet metal parts visible on the table, cut edges glowing slightly. The right end of the same machine frame shows the rotary tube chuck assembly — a round steel tube is loaded in the chuck, visible against the machine end. The dual capability in a single machine frame is the key visual message. Modern industrial facility, dramatic overhead lighting, slight haze from cutting fumes. Photorealistic industrial photography, 8K.

---

## 2C.2 — Feature 01: Dual Mode

**Filename:** `sheet-tube-combo-feature-01-dualmode.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Flat Sheet and Tube on the Same Frame"

**Prompt:**

> Split-composition industrial photograph. Left half: the flat-bed laser cutting side of a combo machine actively cutting sheet metal — a precise laser trail visible on the sheet, sparks at the cutting front. Right half: the tube cutting side of the same machine — a round tube held in the pneumatic chuck with the laser head positioned for tube cutting. A dashed line or slight visual separation in the center marks the split, but both share the same machine frame. The unified yet dual-capability nature of the machine is clear. Photorealistic industrial photography, dramatic lighting, 8K.

---

## 2C.3 — Feature 02: Bed Size

**Filename:** `sheet-tube-combo-feature-02-bed.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Bed Sizes Up to 4020 — Standard Sheet Coverage"

**Prompt:**

> Wide overhead view of a large laser cutting machine flatbed loaded with a full 4×20 foot steel sheet. The sheet fills the entire cutting area — communicating the scale of the 4020 format. A complex nesting layout of cut parts is visible — the sheet has been partially cut, with finished parts separated from the skeleton. The machine gantry bridge is visible above the sheet. Scale communicates capability. Industrial overhead photography, clean and organized, 8K.

---

## 2C.4 — Feature 03: Tube Capacity

**Filename:** `sheet-tube-combo-feature-03-tube.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Round Tube Up to 180 mm — Most Structural Profiles"

**Prompt:**

> Close-up of the rotary chuck assembly at the end of a sheet-tube combo laser machine. A large-diameter round steel tube — approximately 180mm diameter — is clamped in the self-centering chuck. The tube extends back toward the infeed supports. The chuck is open enough to show its size relative to the tube, communicating maximum capacity. The machine bed is visible to the left, with fresh cut marks on its surface from the previous sheet operation. Side lighting creates depth on the chuck mechanism. Photorealistic industrial photography, 8K.

---

## 2C.5 — Feature 04: Single Controller

**Filename:** `sheet-tube-combo-feature-04-controller.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "One Controller — Two Programming Environments"

**Prompt:**

> Close-up of a CNC controller touchscreen showing a software mode-selection screen with two clear options: "Sheet Cutting Mode" (showing a nesting layout icon) and "Tube Cutting Mode" (showing a 3D tube model icon). The operator's finger is touching the tube mode option. The interface is clean and modern. The controller is mounted on a swing arm with the combo machine visible in the background — showing both the flat bed and the tube chuck assembly. Professional industrial UI, screen glow, warm factory ambient. Photorealistic industrial photography, 8K.

---

## 2C.6 — Feature 05: Space Saving

**Filename:** `sheet-tube-combo-feature-05-footprint.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Half the Footprint of Two Machines"

**Prompt:**

> Overhead bird's-eye view of a fabrication shop floor showing a single sheet-tube combo laser machine in one area, with clear floor space visible around it. A dashed floor outline in a contrasting color shows where two separate machines (a flatbed laser and a standalone tube laser) would have been required to occupy the same space — the dashed outline takes up nearly double the actual machine footprint. The visual comparison communicates the space-saving benefit clearly. Clean, organized shop floor. Photorealistic industrial photography, overhead perspective, 8K.

---

---

# SECTION 2D — ENCLOSED FIBER LASER CUTTING MACHINE *(MERGED — redirects to Fiber Laser)*

> **Note:** The enclosed fiber laser page has been merged into the main fiber laser cutting machine page. Images from this section are no longer needed. Skip to Section 2E.

## 2D.1 — Hero Image

**Filename:** `enclosed-laser-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Enclosed Fiber Laser page hero background

**Prompt:**

> Dramatic three-quarter front photograph of an enclosed CNC fiber laser cutting machine — the full safety enclosure cabinet is closed and the machine is actively cutting. The interior of the enclosure glows intensely through the safety-rated laser viewing windows — bright orange-white laser light fills the interior. The exterior cabinet is clean, modern, industrial grey with safety interlocked door panels and a warning indicator light glowing amber on top. The machine looks self-contained and professional — like a high-end industrial appliance. No visible sparks outside the enclosure. Modern clean factory environment. Photorealistic industrial photography, dramatic interior glow, 8K.

---

## 2D.2 — Feature 01: Class 1 Safety

**Filename:** `enclosed-laser-feature-01-safety.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Laser Safety Class 1 — No PPE for Bystanders"

**Prompt:**

> Clean industrial photograph showing an enclosed laser cutting machine operating in a facility where people are working nearby without any laser safety eyewear. In the foreground, the enclosed machine's safety glass window glows with internal laser light — the enclosure contains all radiation. In the mid-ground, a worker at an adjacent desk works on a computer, no PPE visible. Another worker walks past in the background, also without eyewear. The scene communicates normalcy and safety — no exclusion zone, no PPE requirement. Bright, professional, office-adjacent industrial environment. Photorealistic documentary photography, 8K.

---

## 2D.3 — Feature 02: Door Interlocks

**Filename:** `enclosed-laser-feature-02-interlock.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Automatic Door Interlocks — Can't Cut With Door Open"

**Prompt:**

> Close-up detail photograph of the safety interlock mechanism on an enclosed laser machine's loading door. The interlock is a precision industrial safety switch — bright safety yellow housing, clearly visible actuator pin, and a status indicator LED (green = safe, door closed). A safety label beside the interlock shows the IEC laser safety symbol and Class 1 classification. The door panel is heavy-gauge steel. The interlock mechanism communicates hardware-level safety, not software. Technical detail shot, clean industrial photography, cool lighting, 8K.

---

## 2D.4 — Feature 03: Fume Extraction Port

**Filename:** `enclosed-laser-feature-03-extraction.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Integrated Fume Extraction Port"

**Prompt:**

> Detail photograph of the rear of an enclosed laser cutting machine showing the built-in 6-inch diameter fume extraction port. A flexible industrial extraction duct is connected to the port and runs overhead to a central extraction system. A slight wisp of smoke is visible being drawn into the duct, communicating active extraction. The connection is clean and integrated — the port is part of the machine cabinet, not an afterthought. The extraction duct runs neatly along the wall. Clean industrial environment. Photorealistic industrial photography, 8K.

---

## 2D.5 — Feature 04: Same Performance

**Filename:** `enclosed-laser-feature-04-performance.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "Same Cutting Performance as the Open-Frame Line"

**Prompt:**

> Composite close-up photograph viewed through an enclosed laser machine's safety viewing window. Through the slightly tinted but clear laser safety glass, the interior is visible — the cutting head is in motion over a steel sheet, and the laser cut is producing the characteristic bright cutting light and fine sparks that are fully contained within the enclosure. The image communicates that full industrial cutting performance is happening inside the safety cabinet. The safety glass frame is visible at the edges of the image. Dramatic internal glow, photorealistic, 8K.

---

## 2D.6 — Feature 05: VTM-PE vs VTM-SE

**Filename:** `enclosed-laser-feature-05-models.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "VTM-PE vs. VTM-SE — Two Enclosure Formats"

**Prompt:**

> Side-by-side photograph of two enclosed fiber laser cutting machines of different sizes. On the left: a compact enclosed laser machine (VTM-PE format) — smaller footprint, suitable for a light industrial or training room environment, clean and professional. On the right: a larger industrial enclosed laser machine (VTM-SE format) — wider, longer bed visible through the safety glass, heavier construction. Both are photographed at the same angle and scale, clearly showing the size difference. Clean industrial background. Photorealistic industrial photography, 8K.

---

---

# SECTION 2E — 4-IN-1 LASER MACHINE (VTM-4W)

## 2E.1 — Hero Image

**Filename:** `4in1-laser-hero-2.png`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** 4-in-1 Laser Machine page hero background

**Prompt:**

> Dramatic close-up of a technician using a handheld fiber laser welding gun on a stainless steel assembly. The laser weld pool glows intensely — a tight, focused bright point of energy leaving a narrow, perfectly uniform weld bead behind the torch as the operator guides it along a seam. The gun is lightweight and ergonomic — about the size of a power drill. The fiber cable exits the back of the gun and disappears out of frame. In the background, slightly out of focus, three other handheld attachments are visible on a tool rack — the cutting head, cleaning head, and wire-feed attachment — communicating the four-mode capability. Dark dramatic background, welding glow provides warm key light. Photorealistic industrial photography, 8K.

---

## 2E.2 — Feature 01: Laser Welding

**Filename:** `4in1-laser-feature-01-welding.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Laser Welding — 5× Faster Than TIG, Zero Consumables"

**Prompt:**

> Extreme close-up macro of a handheld laser weld being performed on a T-joint between two stainless steel plates. The laser weld pool is a bright, tight oval of molten metal — about 2mm wide. The just-solidified weld bead trailing behind is narrow, smooth, and nearly flush with the base metal surface. The weld's heat-affected zone is almost invisible — just a faint tempering color within 1mm of the bead. No spatter, no smoke cloud. The operator's gloved hand steadies the gun at the edge of the frame. Macro lens, shallow depth of field, dramatic side lighting on the weld bead, 8K.

---

## 2E.3 — Feature 02: Laser Cutting

**Filename:** `4in1-laser-feature-02-cutting.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Laser Cutting Head — Handheld Plate and Profile Cutting"

**Prompt:**

> Close-up photograph of a handheld fiber laser cutting head being used to cut a curved shape from mild steel sheet. The operator guides the compact cutting gun along a template line — the laser produces a clean, narrow kerf with a small spray of sparks visible beneath the sheet as the cut completes. The cut edge is smooth and straight. The gun is different from the welding head — a cutting nozzle with assist gas port is visible. Dark industrial background, sparks provide dramatic light. Photorealistic industrial photography, 8K.

---

## 2E.4 — Feature 03: Laser Cleaning

**Filename:** `4in1-laser-feature-03-cleaning.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Laser Cleaning — Remove Rust, Paint, and Oxide Instantly"

**Prompt:**

> Close-up macro photograph of a handheld laser cleaning head in action on a steel surface. The cleaning head — a rectangular scan-head attachment on the fiber cable — is being swept across a heavily rusted steel surface. Where the laser has passed: bright, clean bare metal — a strip of shiny steel clearly visible. Where the laser is approaching: dark orange-red rust. The boundary between clean and corroded metal is sharp and dramatic. Particles of ablated rust drift upward in the laser beam. The VTM-4W cabinet is visible in the background. Photorealistic industrial photography, dramatic contrast, 8K.

---

## 2E.5 — Feature 04: Wire-Feed Welding

**Filename:** `4in1-laser-feature-04-wirefeed.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "Wire-Feed Welding — Fill Gaps and Hard-Facing"

**Prompt:**

> Close-up photograph of the wire-feed laser welding attachment in operation. The handheld gun has a wire feed nozzle beside the laser beam — a thin filler wire is feeding continuously into the laser weld pool on a steel joint. The weld pool is larger than in the no-filler mode, communicating gap-filling capability. The operator is bridging a visible 2–3mm gap between two steel plates, and the wire filler is building up the weld bead smoothly. The motion of the wire feed is slightly blurred, suggesting continuous feed. Industrial close-up photography, welding glow lighting, 8K.

---

## 2E.6 — Feature 05: Material Range

**Filename:** `4in1-laser-feature-05-materials.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "All Common Metals — Including Reflective Alloys"

**Prompt:**

> Flat-lay macro photograph showing weld beads on six different metal samples arranged in a row: carbon steel (dark grey), stainless steel (brushed silver), aluminum (bright silver), brass (golden-yellow), copper (reddish-orange), and galvanized steel (speckled silver). Each sample has an identical narrow laser weld bead running down its center. The bead quality is consistently good across all six materials. Dramatic raking oblique lighting from one side reveals the surface texture and reflectivity of each metal. The variety communicates broad material compatibility. Industrial macro photography, 8K.

---

# SECTION 3 — LASER WELDING MACHINE *(MERGED — redirects to 4-in-1)*

> **Note:** The standalone laser-welding-machine page has been merged into the 4-in-1 machine page (`/fabrication/4-in-1-laser-machine`). Images from this section are no longer needed. Skip to Section 4.

## 3.1 — Hero Image

**Filename:** `laser-welding-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Laser Welding Machine page hero background

**Prompt:**

> Dramatic close-up of a handheld laser welding gun creating a weld on stainless steel tubing. The weld zone glows intensely white-orange with a tight, focused beam producing a narrow, clean bead. Unlike arc welding, there is no spatter — just a precise, bright point of energy and a narrow molten pool that solidifies immediately into a smooth bead behind the torch. The operator's gloved hands hold the lightweight handheld gun. Background is dark industrial workshop. Deep shadows, dramatic single key light from the side. Photorealistic industrial photography, 8K.

---

## 3.2 — Feature 01: No Consumables

**Filename:** `laser-welding-feature-01-no-consumables.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "No Consumables — Eliminate Wire and Gas Costs"

**Prompt:**

> Minimalist industrial photograph showing a fiber laser welding gun and cable against a clean dark background. No wire spools, no gas cylinders, no consumable packaging — just the clean gun and the fiber optic delivery cable. The contrast communicates the absence of consumables. The gun is modern, lightweight, ergonomic — about the size of a power drill. Dramatic side lighting creates depth and form on the equipment. Clean, modern, minimal. Photorealistic industrial photography, 8K.

---

## 3.3 — Feature 02: Minimal Heat Input

**Filename:** `laser-welding-feature-02-low-heat.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Minimal Heat Input — Zero Distortion on Thin Sections"

**Prompt:**

> Side-by-side close-up macro photograph of two welds on thin stainless steel sheet. On the left: a TIG weld with visible heat discoloration spreading wide across the metal surface — oxidation tinting in amber and blue, with slight warping of the thin sheet. On the right: a laser weld on identical material — narrow bead, almost no heat discoloration zone, sheet remains perfectly flat. Split composition, cool industrial lighting from above, macro lens, sharp throughout. Photorealistic industrial macro photography, 8K.

---

## 3.4 — Feature 03: Speed

**Filename:** `laser-welding-feature-03-speed.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "5× Faster Than TIG"

**Prompt:**

> Motion blur industrial photograph of a robotic laser welding arm moving at speed along a steel tube joint. The laser produces a continuous bright weld seam with the characteristic narrow bead of laser welding. The robot arm is blurred with motion suggesting high velocity. The fresh weld behind the torch glows orange-red before cooling. Clean background of modern factory floor. Dynamic, energetic, high-speed feel. Photorealistic industrial photography, 8K.

---

## 3.5 — Feature 04: Reflective Metals

**Filename:** `laser-welding-feature-04-copper.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "Works on Reflective Metals — Copper, Brass, Aluminum"

**Prompt:**

> Close-up macro photograph of laser welding being performed on a copper busbar joint. The bright reddish-orange copper surface reflects the intense laser light, creating a dramatic star-burst reflection around the weld zone. The weld bead is narrow and precise. Scrap copper tubing and brass fittings are visible in the soft background, communicating the material range. Dark industrial background, dramatic overhead lighting, macro lens. Photorealistic industrial photography, 8K.

---

## 3.6 — Feature 05: Seamless Bead

**Filename:** `laser-welding-feature-05-bead.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Seamless Bead — Minimal Grinding Required"

**Prompt:**

> Extreme close-up macro photograph of a finished laser weld bead on brushed stainless steel. The weld is remarkably narrow — about 1–2mm wide — and almost flush with the surrounding metal surface. The bead surface has a fine rippled texture that catches the raking side light. The heat-affected zone on either side of the bead is barely visible. The stainless steel surface beside the weld is clean and scratch-brush finished. An area further down shows the weld polished to a mirror finish — demonstrating the ease of post-weld finishing. Macro lens, shallow depth of field, cool steel tones, 8K.

---

---

# SECTION 4 — LASER CLEANING MACHINE

## 4.1 — Hero Image

**Filename:** `laser-cleaning-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Laser Cleaning Machine page hero background

**Prompt:**

> A technician in safety glasses using a handheld fiber laser cleaning gun to remove heavy rust from the surface of a large steel structural beam. Where the laser passes, the surface transforms from dark orange-red rust to bright clean bare metal, revealing the metallic shine of bare steel. The cleaning path shows a dramatic before/after contrast — rust on one side, clean metal on the other. Fine particles of ablated rust drift upward from the cleaning zone. The handheld gun is compact and ergonomic, connected to a fiber cable. Industrial warehouse setting with large overhead lights. Photorealistic industrial photography, dramatic contrast, 8K.

---

## 4.2 — Feature 01: No Chemicals

**Filename:** `laser-cleaning-feature-01-no-chemicals.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "No Chemicals — Compliant by Design"

**Prompt:**

> Industrial photograph contrasting two surfaces: on the left, a corroded steel part submerged in yellow chemical stripping solution in a metal container with vapor rising, warning labels visible on chemical drums behind it. On the right side of the frame, the same type of steel part being cleaned by a laser — clean, dry, no liquid, just a precise light beam and a small fume extractor nozzle. The contrast between chemical mess and clean laser process is the focal point. Photorealistic documentary-style industrial photography, 8K.

---

## 4.3 — Feature 02: No Media Blasting

**Filename:** `laser-cleaning-feature-02-no-media.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "No Media Blasting — No Embedded Abrasive"

**Prompt:**

> Dramatic macro photograph showing two steel surfaces under raking oblique light. The left surface has been sandblasted — visible abrasive scoring, embedded grit particles catching the light, rough surface profile. The right surface has been laser cleaned — bare, smooth, metallurgically clean, slight metallic sheen. The boundary between the two surface conditions is sharp. Industrial macro photography, extreme oblique lighting to reveal surface texture, very shallow depth of field, 8K.

---

## 4.4 — Feature 03: Precise Targeting

**Filename:** `laser-cleaning-feature-03-precision.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Precisely Targeted — Cleans Only the Contamination"

**Prompt:**

> Close-up macro photograph of a laser cleaning gun head working precisely along a weld bead on a steel plate. The laser cleans only the weld spatter and oxidation from the weld and a narrow band on either side — the surrounding painted or coated surface remains completely intact. The precision of the cleaning path — just 5–10mm wide — is clearly visible. The contrast between the clean weld area and the intact coating around it demonstrates the precision. Industrial macro photography, dramatic side lighting, shallow depth of field, 8K.

---

## 4.5 — Feature 04: No Substrate Damage

**Filename:** `laser-cleaning-feature-04-safe.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "No Substrate Damage — Safe for Precision Components"

**Prompt:**

> Close-up photograph of a precision aerospace-style machined aluminum component being cleaned by a laser. The part has fine machined features — thin walls, precise bores, smooth surfaces — and is being cleaned of a thin oxide layer. The surrounding machined surfaces show no damage, no dimensional change, no marks from the cleaning process. The part is held in a fixture, the laser gun approaches at an angle, the cleaned area is bright and clean. Technical, precision-engineering atmosphere. Photorealistic, cool tones, sharp throughout, 8K.

---

## 4.6 — Feature 05: Portable Handheld

**Filename:** `laser-cleaning-feature-05-portable.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Portable Handheld — Take It to the Part"

**Prompt:**

> A technician using a portable handheld laser cleaning gun to descale and clean a section of large-diameter steel pipe in a structural environment — the pipe is part of a large fabricated structure, clearly not moveable. The technician works in a comfortable, ergonomic stance, pointing the lightweight gun at the pipe surface. The 10-meter fiber cable coils loosely on the floor behind them. The scene communicates portability and field-use capability. Industrial documentary photography, available light, realistic work environment, 8K.

---

---

# SECTION 5 — CNC PRESS BRAKE

## 5.1 — Hero Image

**Filename:** `cnc-press-brake-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** CNC Press Brake page hero background

**Prompt:**

> Dramatic full-width photograph of a large CNC hydraulic press brake from a low front angle. The machine is massive — a 12-foot wide hydraulic press brake with a tall upper beam and precision lower table. The ram is in mid-stroke, bending a long piece of steel plate into a sharp angle. The bend zone shows the metal deforming around the V-die. The CNC controller screen glows on a swing arm to the right. Factory environment, dark background with directional industrial lighting from above. The scale of the machine is imposing. Photorealistic industrial photography, wide angle, dramatic, 8K.

---

## 5.2 — Feature 01: Repeatability

**Filename:** `cnc-press-brake-feature-01-repeatability.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "±0.01 mm Repeatability — Part After Part"

**Prompt:**

> Close-up photograph of a freshly bent sheet metal bracket coming off a press brake. A digital protractor or angle gauge is held against the bend, reading a precise angle. A stack of identical already-bent parts beside the machine shows perfect consistency — every part is visually identical. The bend line is clean and sharp with no springback cracking. Precise, technical, quality-focused. Industrial photography, warm work light, shallow depth of field, 8K.

---

## 5.3 — Feature 02: Graphic CNC Controller

**Filename:** `cnc-press-brake-feature-02-controller.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Graphic CNC Controller — Bend Simulation Before You Press"

**Prompt:**

> Close-up photograph of a modern CNC press brake touchscreen controller showing a graphical bending simulation on screen. The simulation shows a complex steel bracket being bent through a multi-step sequence, with the tool path and back gauge position clearly visualized. The touchscreen is modern and crisp. The operator's finger is touching the screen, selecting a bend step. Factory background in soft focus. Screen glow illuminates the operator's face slightly. Photorealistic industrial photography, 8K.

---

## 5.4 — Feature 03: Automatic Crowning

**Filename:** `cnc-press-brake-feature-03-crowning.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Automatic Crowning Compensation"

**Prompt:**

> Photorealistic photo of a CNC hydraulic press brake machine. A long steel beam — at least 10 feet — is laid horizontally across the full width of the machine bed, parallel to the ram. The press brake ram is pressing down along the entire length of the beam simultaneously, forming a single clean bend that runs the full 10-foot length. The resulting L-shaped or V-bent profile is uniform from end to end. Visible crowning system on the lower bed. Wide angle shot from the front, cool industrial lighting, 8K, no people.

---

## 5.5 — Feature 04: Back Gauge

**Filename:** `cnc-press-brake-feature-04-backgauge.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "4+1 to 8+1 Axis Back Gauge — Complex Parts, Simple Setup"

**Prompt:**

> Close-up photograph of a CNC press brake's multi-axis back gauge system. The back gauge fingers are visible at the rear of the press brake, positioned at different depths and heights — communicating the multi-axis capability. A complex bent bracket with flanges at different levels rests against the gauges, ready for the next bend. The back gauge structure is clean machined steel and aluminum. Technical detail shot, industrial side lighting, sharp focus throughout, 8K.

---

## 5.6 — Feature 05: Auto Tool Change

**Filename:** `cnc-press-brake-feature-05-toolchange.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Auto Tool Change — Zero Setup Time on Mixed Jobs"

**Prompt:**

> Close-up photograph of a press brake's automatic hydraulic tooling clamp system. The upper beam shows the precision tooling holder, and a long punch tool is held firmly in the hydraulic clamp — no mechanical fasteners visible, clean and automatic. Multiple different punch profiles are in a tool rack beside the machine, organized and labeled. The hydraulic clamp mechanism is highlighted with side lighting. Technical, precision engineering atmosphere. Industrial photography, warm work light, 8K.

---

---

# SECTION 6 — SHEARING MACHINE (GUILLOTINE)

## 6.1 — Hero Image

**Filename:** `shearing-guillotine-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Guillotine Shearing Machine page hero background

**Prompt:**

> Dramatic side-angle photograph of a large hydraulic guillotine shear machine — a full 10-foot wide industrial shearing machine. The upper blade beam is visible mid-stroke, descending to shear a sheet of heavy steel plate. The cut edge of the plate is visible — clean and straight. Hydraulic cylinders are visible at each end of the upper beam. The machine has the characteristic heavy welded steel frame of a guillotine shear. Factory environment with overhead lighting. Wide angle, dramatic downward perspective showing the scale of the blade and the sheet being cut. Photorealistic industrial photography, 8K.

---

## 6.2 — Feature 01: Hydraulic Hold-Down

**Filename:** `shearing-guillotine-feature-01-holddown.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Hydraulic Hold-Down — No Sheet Movement at the Cut"

**Prompt:**

> Close-up photograph of a shearing machine's hydraulic hold-down clamp system engaging on a steel sheet. Multiple hydraulic cylinders with wide rubber-faced clamp pads press firmly down on the sheet along the cut line. The sheet is perfectly flat under the clamps. The upper blade is visible just above the cut line, about to descend. Side lighting from the left reveals the flatness of the sheet surface and the firmness of the clamping. Technical detail shot, sharp throughout, 8K.

---

## 6.3 — Feature 02: Adjustable Rake Angle

**Filename:** `shearing-guillotine-feature-02-rake.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Adjustable Rake Angle — Match the Cut to the Material"

**Prompt:**

> Dramatic close-up of a hydraulic shear blade in the act of cutting thick steel plate. The angled blade geometry is clearly visible — the blade is tilted to a slight angle (rake angle), and the cut progresses from one end across the plate. The cut end of the plate drops cleanly away, showing the shear face. The blade itself is hardened, polished, and precise. Sparks or bright metal at the cut point. Technical, powerful, precise. Photorealistic industrial photography, side lighting, 8K.

---

## 6.4 — Feature 03: Back Gauge Memory

**Filename:** `shearing-guillotine-feature-03-backgauge.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Back Gauge Position Memory — Repeat Jobs in Seconds"

**Prompt:**

> Photograph of a shearing machine's CNC programmable back gauge system. The back gauge finger is precisely positioned at the rear of the machine, and a sheet of steel is resting against it, ready for cutting. The digital readout on the machine shows the exact backstop position. A second sheet of steel is stacked nearby with cut marks from a previous identical job. The back gauge structure is clean and precise. Industrial photography, warm work light, 8K.

---

## 6.5 — Feature 04: E21S Controller

**Filename:** `shearing-guillotine-feature-04-controller.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "E21S Controller — Simple, Reliable, Industrial"

**Prompt:**

> Close-up photograph of an industrial CNC controller panel on a shearing machine — large numeric keypad, bright industrial display showing backstop position and stroke count, clear function buttons with tactile feedback. The panel has a utilitarian, heavy-duty industrial design built for factory environments. An operator's gloved hand presses a button. Factory dust and light visible in background. Technical, no-nonsense industrial design. Photorealistic photography, 8K.

---

## 6.6 — Feature 05: Heavy-Duty Frame

**Filename:** `shearing-guillotine-feature-05-frame.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "Heavy-Duty Welded Steel Frame — Built to Last"

**Prompt:**

> Detail photograph of a shearing machine's main welded steel frame structure. The massive box-section steel construction is visible from a low angle looking up at the side of the machine — stress-relief welds, precision-ground guideways, heavy-gauge plate construction. The scale of the steel communicates longevity and rigidity. The ground ways for the blade beam are visible, precision-machined to fine tolerances. Dramatic raking light from the side creates strong shadows that reveal the mass and precision of the construction. Industrial detail photography, 8K.

---

---

# SECTION 7 — SHEARING MACHINE (SWING BEAM)

## 7.1 — Hero Image

**Filename:** `shearing-swingbeam-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Swing Beam Shearing Machine page hero background

**Prompt:**

> Three-quarter front perspective photograph of a swing-beam hydraulic shearing machine cutting thin stainless steel sheet. The upper beam is in the arc of its swing, and the blade has just completed the cut — a long, perfectly straight piece of thin stainless sheet slides off the front table. The cut edge catches the overhead light, showing the mirror-smooth shear face characteristic of swing beam cutting on thin material. The machine body is compact compared to a guillotine, clean blue-grey paint. Modern factory environment. Photorealistic industrial photography, bright industrial lighting, 8K.

---

## 7.2–7.6 — Swing Beam Features

**Note:** Features for swing beam shearing use shared images from the guillotine section. No additional feature images required — the code uses the same imageId pool. Only the hero is unique.

---

---

# SECTION 8 — IRONWORKER

## 8.1 — Hero Image

**Filename:** `ironworker-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Ironworker page hero background

**Prompt:**

> Dramatic three-quarter angle photograph of a large hydraulic ironworker machine in an industrial workshop. The machine is massive and multi-station — the punching station on the left, notching station in the center, flat bar shear at the right. The machine body is heavy cast iron and welded steel, painted industrial red or grey. An angle iron is positioned in the notching station mid-cycle. The machine is clearly a multi-function powerhouse. Factory floor, strong overhead directional lighting casting deep shadows that emphasize the machine's mass. Low angle, dramatic perspective. Photorealistic industrial photography, 8K.

---

## 8.2 — Feature 01: Five Stations

**Filename:** `ironworker-feature-01-stations.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 01 — "Five Work Stations — One Machine, One Footprint"

**Prompt:**

> Wide overhead-angle photograph of an ironworker machine showing all five work stations simultaneously. Each station is clearly visible and labeled: the main punching station with a round punch die, the notching station with its V-die, the flat bar shearing station, the angle iron shearing station, and the tube notching attachment. The various work stations and their tooling are the focal point. Clean factory floor visible around the compact machine footprint. Photorealistic industrial photography, overhead perspective, 8K.

---

## 8.3 — Feature 02: Punching

**Filename:** `ironworker-feature-02-punching.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 02 — "Punch Holes to 38mm Diameter in 12mm Plate"

**Prompt:**

> Close-up action photograph of an ironworker punching station in mid-stroke. A 1.5-inch round punch is pressing through thick steel plate, and the steel slug is about to be ejected through the die below. The force is visible in the slight deformation around the punch perimeter. The cut edge of the previous hole is visible in the background — perfectly clean, no burr on the entry side. Hydraulic cylinder visible above. Side lighting from the left, dramatic shadows, technical precision. Photorealistic industrial photography, 8K.

---

## 8.4 — Feature 03: Notching

**Filename:** `ironworker-feature-03-notching.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 03 — "Angle Iron Notching — Clean, Square Corners"

**Prompt:**

> Close-up photograph of an ironworker notching station cutting through a piece of angle iron. The V-die is completing a 90-degree notch cut, and two pieces of angle iron scrap fall away as the notch is completed. The notched angle iron shows a clean, square corner joint ready for welding. Several already-notched angle iron pieces are stacked in the background, all with identical clean notches. Industrial photography, warm shop light, shallow depth of field on the cut zone, 8K.

---

## 8.5 — Feature 04: Flat Bar Shear

**Filename:** `ironworker-feature-04-flatbar.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 04 — "Flat Bar Shear — 6\" Width at 0.625\" Thickness"

**Prompt:**

> Photograph of an ironworker's flat bar shearing station cutting a wide steel flat bar. The blade has just completed the cut — the cut piece falls into a bin below in a drop-cut mechanism. The cut face of the flat bar is clean and square. A measuring mark on the machine's backstop shows the set length. Multiple previously cut pieces of flat bar are stacked neatly beside the machine. Clean, production-focused atmosphere. Industrial photography, 8K.

---

## 8.6 — Feature 05: V-Die Bending Attachment

**Filename:** `ironworker-feature-05-vdie.jpg`
**Dimensions:** 900 × 675px (4:3)
**Used:** Feature 05 — "V-Die Bending Attachment — Short Bends Without a Press Brake"

**Prompt:**

> Close-up photograph of a V-die bending attachment mounted in the punching station of a hydraulic ironworker machine. The V-die tooling is clearly visible — an open V-shaped lower die and a matching punch above, pressed into a small steel bracket forming a clean 90-degree bend. The resulting bent part is compact — a small bracket or clip. The ironworker's punching station hydraulic cylinder is visible above. The scene communicates the versatility of the machine. Industrial photography, warm work light, shallow depth of field on the die and part, 8K.

---

---

# SECTION 9 — COLLABORATIVE WELDING ARM (COBOT)

## 9.1 — Hero Image

**Filename:** `.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Collaborative Welding Arm page hero background

**Prompt:**

> A collaborative welding robot arm working. The cobot arm is mounted on a welding table and is actively welding a steel structural component — bright welding arc visible at the torch tip. The cobot is compact, with visible force sensors on the joints. The environment is well-lit, organized, professional. Photorealistic industrial photography, welding arc provides dramatic warm light, 8K.

---

## 9.2 — Cobot in Operation (Used Multiple Sections)

**Filename:** `cobot-welding-operation.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Multiple feature sections on Cobot page

**Prompt:**

> Side view of a collaborative welding robot arm executing a precise weld seam on a steel bracket assembly. The robot arm extends toward the workpiece at a precise angle, the welding torch deposits a uniform bead along a marked weld line. The just-completed weld bead glows orange-red as it cools. The arm is at full extension, demonstrating its reach. Clean factory floor, organized background with welding equipment visible. Dramatic side lighting with welding arc glow. Photorealistic industrial photography, 8K.

---

## 9.3 — ROI / Payback Concept

**Filename:** `cobot-welding-roi.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** ROI section of Cobot page

**Prompt:**

> A fabrication shop production floor with three collaborative welding robot cells operating simultaneously — each with a cobot arm welding identical steel sub-assemblies. The cells are clean, organized, and running efficiently. No operators at the cells — communicating autonomous production. In the background, two welders are working on custom/complex assemblies that the robots cannot handle, representing the redeployment of skilled labor to higher-value work. Cinematic wide shot, warm ambient welding light throughout the shop. Photorealistic industrial photography, 8K.

---

---

# SECTION 10 — INDUSTRIAL WELDING ARM

## 10.1 — Hero Image

**Filename:** `industrial-welding-arm-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Industrial Welding Arm page hero background

**Prompt:**

> Dramatic wide-angle photograph of a large industrial welding robot arm in a full robotic welding cell. The robot is massive — a 6-axis articulated arm on a floor mount, with a welding torch at the end effector. The robot is in motion, welding a large steel structural frame assembly. Welding sparks cascade dramatically around the robot arm — bright orange and white arcs of light. The surrounding safety enclosure has transparent polycarbonate panels that reflect the welding light. Dark background, only the robot and sparks visible. Cinematic, powerful, dramatic. Photorealistic industrial photography, long exposure-style sparks, 8K.

---

## 10.2 — Welding Cell Interior

**Filename:** `industrial-welding-arm-cell.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** Feature sections on Industrial Welding Arm page

**Prompt:**

> Interior view of an industrial robot welding cell through the transparent safety enclosure. The large 6-axis welding robot occupies the center of the cell, positioned over a steel sub-assembly on a fixture table. Welding wire feeder, conduit, and power cable run cleanly along the robot arm to the torch. The cell interior has organized cable routing and a fixed-position camera for weld monitoring. Dramatic welding arc creates intense shadows inside the cell. Technical, precise, high-capacity industrial environment. Photorealistic industrial photography, 8K.

---

---

# SECTION 11 — AUTOMATION CATEGORY PAGE

## 11.1 — Hero Image

**Filename:** `automation-category-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Automation category page hero background

**Prompt:**

> Wide cinematic photograph of a modern automated factory floor with two distinct robot cells visible — one with a collaborative robot arm working openly alongside a welder (no cage), and one full industrial robotic welding cell with safety enclosure and sparks visible inside. The factory floor between them is clean, organized, lit by overhead industrial lighting. The contrast between the two automation levels communicates the range from cobot to full industrial automation. Wide angle, dramatic depth, photorealistic industrial photography, 8K.

---

---

# SECTION 12 — FABRICATION CATEGORY PAGE

## 12.1 — Hero Image

**Filename:** `fabrication-category-hero.jpg`
**Dimensions:** 1920 × 1080px (16:9)
**Used:** Fabrication category page hero background

**Prompt:**

> Wide shot of a complete metal fabrication shop showing multiple machines in operation simultaneously. In the foreground: a fiber laser cutting machine with glowing cutting light visible through the safety glass. Mid-ground: a CNC press brake bending a long piece of steel. Background: a shearing machine. The machines fill the frame from left to right, each with its own operational light and activity. Clean, professional, modern facility. Overhead industrial lighting, slightly dramatic. Communicates a full fabrication capability. Photorealistic industrial photography, 8K.

---

---

# SECTION 13 — ABOUT PAGE

## 13.1 — Hero Image

**Filename:** `about-hero.jpg`
**Dimensions:** 1920 × 800px (wide crop)
**Used:** About page hero background

**Prompt:**

> the image

---

## 13.2 — Company Story Image

**Filename:** `.jpg`
**Dimensions:** 1200 × 900px (4:3)
**Used:** About page "Who We Are" section

**Prompt:**

> Interior photograph of a modern industrial machinery factory — clean, organized, with precision CNC machines visible. The factory has good lighting, organized workstations, and a professional atmosphere. Some machines are in assembly or testing stages — communicating the manufacturing origin of the equipment. Slight warm tone. The image communicates craftsmanship and industrial heritage without being dated. Could suggest a Latin American industrial setting — warm light, slightly different architectural aesthetic than US factories, but clearly modern and quality-focused. Photorealistic industrial photography, 8K.

---

---

# SECTION 14 — SOLUTIONS PAGES

## 14.1 — Metal Fabrication Solution

**Filename:** `solution-metal-fabrication.jpg`
**Dimensions:** 1200 × 675px (16:9)
**Used:** Metal Fabrication solutions page hero

**Prompt:**

> Overhead bird's-eye view of a metal fabrication shop floor showing a complete fabrication workflow — from flat steel sheets stacked in the corner, to a laser-cut nest of parts on a pallet, to bent and formed brackets at a press brake, to a welding station with partially-assembled steel structures. The workflow from raw material to finished fabricated part is visible as a visual narrative across the factory floor. Clean, organized, modern. Top-down photographic perspective, sharp throughout, industrial lighting, 8K.

---

## 14.2 — Automotive Solution

**Filename:** `solution-automotive.jpg`
**Dimensions:** 1200 × 675px (16:9)
**Used:** Automotive solutions page hero

**Prompt:**

> A modern automotive component manufacturing facility. High-precision laser-cut steel blanks and stamped automotive brackets are stacked in precision fixtures. A robotic welding arm completes a sub-assembly weld on what is clearly an automotive structural component — recognizable as a floor pan section, door hinge reinforcement, or chassis bracket. Clean, high-volume production environment with organized material flow. Cool industrial lighting, high-contrast. Photorealistic industrial photography, 8K.

---

## 14.3 — Aerospace Solution

**Filename:** `solution-aerospace.jpg`
**Dimensions:** 1200 × 675px (16:9)
**Used:** Aerospace solutions page hero

**Prompt:**

> Close-up of precision aerospace machined and laser-cut titanium and aluminum alloy components in an organized clean room-adjacent environment. The parts are thin-walled, high-precision, with complex geometries that communicate aerospace tolerances. A laser-cut titanium panel is in the foreground with a mirror-smooth cut edge. The parts are arranged on a clean inspection table. Precision measurement instruments are visible nearby. Cool, clean, precise atmosphere — conveying aerospace quality standards. Photorealistic industrial photography, cool tones, 8K.

---

## 14.4 — HVAC & Construction Solution

**Filename:** `solution-hvac-construction.jpg`
**Dimensions:** 1200 × 675px (16:9)
**Used:** HVAC/Construction solutions page hero

**Prompt:**

> A sheet metal fabrication shop specializing in HVAC ductwork. Large rectangular and round duct sections made from galvanized steel are stacked and ready for installation. A shearing machine and press brake are visible in the background. Freshly cut and formed galvanized sheet metal parts reflect the overhead shop lighting — the characteristic sheen of galvanized steel. An ironworker machine is visible in the background, used for punching mounting holes. Organized, production-focused shop. Photorealistic industrial photography, bright overhead lighting, 8K.

---

---

# SECTION 15 — BLOG POST FEATURED IMAGES

## 15.1 — Fiber Laser vs. CO₂ Laser

**Filename:** `blog-fiber-vs-co2.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Fiber Laser vs. CO₂ Laser: Which Is Right for Your Shop"

**Prompt:**

> Split-frame industrial photograph. Left half: a fiber laser cutting machine in operation — modern, enclosed, compact beam delivery via fiber cable visible. Right half: an older CO₂ laser cutting machine with its characteristic external beam delivery mirrors and larger resonator cavity. The two machines face each other across the center of the frame. Both are in operation — bright cutting light from each. Dark industrial background. The split composition directly communicates comparison. Photorealistic industrial photography, dramatic, 8K.

---

## 15.2 — Cobot Welding ROI

**Filename:** `blog-cobot-roi.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Cobot Welding ROI: Real Numbers from 3 US Fabrication Shops"

**Prompt:**

> A collaborative welding robot arm operating in a small/mid-size US metal fabrication shop — the shop has the authentic feel of a real working shop, not a sterile factory. Welding sparks from the cobot's torch light the immediate area warmly. Behind the cobot, a whiteboard on the wall shows production metrics and a simple timeline graph. The background communicates a real shop environment — steel stock, finished parts bins, toolboxes. Authentic, documentary-style industrial photography, warm welding light, 8K.

---

## 15.3 — Press Brake Tonnage Calculator

**Filename:** `blog-press-brake-tonnage.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Press Brake Tonnage: How to Calculate What You Actually Need"

**Prompt:**

> Close-up photograph of a press brake bending thick steel plate. The ram is at the bottom of the stroke, fully forming a sharp 90-degree bend in heavy-gauge mild steel. The V-die and punch are clearly visible with the material tightly formed around the punch tip. The tonnage cylinder and pressure gauge are visible at the end of the machine. The material is thick — communicating the tonnage requirements of the bend. Dramatic side lighting showing the deformation geometry. Photorealistic industrial photography, 8K.

---

## 15.4 — Laser Cleaning vs. Sandblasting

**Filename:** `blog-laser-cleaning-comparison.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Laser Cleaning vs. Sandblasting: A Side-by-Side Comparison"

**Prompt:**

> Documentary comparison photograph. On one side: a sandblasting operation in progress — worker in full blast suit and helmet directing an abrasive nozzle at a steel part, visible dust and grit cloud, protective equipment everywhere, spent abrasive media on the floor. On the other side: a laser cleaning operation on the same type of steel part — clean, compact equipment, no protective suit beyond safety glasses, no media on the floor. The contrast in process cleanliness and complexity is dramatic. Photorealistic industrial documentary photography, 8K.

---

## 15.5 — Guillotine vs. Swing Beam

**Filename:** `blog-shear-comparison.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Guillotine vs. Swing Beam Shear: Which Is Right for Your Shop?"

**Prompt:**

> Split-frame photograph comparing two types of shearing machines. Left: a heavy-duty guillotine hydraulic shear — massive, tall, with thick blade beam visible and the characteristic straight-down blade path. Right: a swing-beam shear — more compact profile, with the distinctive arc-pivot mechanism visible at the blade attachment. Both machines are photographed at the same scale, from the same angle, showing their mechanical differences clearly. Clean factory backgrounds. Photorealistic industrial photography, 8K.

---

## 15.6 — Laser Welding vs. TIG

**Filename:** `blog-laser-vs-tig.jpg`
**Dimensions:** 1600 × 900px (16:9)
**Used:** Blog post "Laser Welding vs. TIG Welding: An Honest Comparison"

**Prompt:**

> Side-by-side comparison photograph of two welding processes on identical stainless steel joints. Left: TIG welding in progress — tungsten electrode, large welding arc, visible filler rod, wide heat-affected zone visibly discoloring the surrounding metal. Right: laser welding in progress — compact handheld gun, tight bright beam spot, narrow molten pool, no visible heat spread. Both processes are lit by their own welding light, creating a natural split-lighting composition. The contrast in heat input and arc width is dramatic. Photorealistic industrial photography, 8K.

---

---

# SECTION 16 — OG DEFAULT + MISC

## 16.1 — Open Graph Default Image

**Filename:** `og-default.jpg`
**Dimensions:** 1200 × 630px (OG standard)
**Used:** Social media shares, OG metadata fallback

**Prompt:**

> Clean, branded industrial composite image. On the left: a fiber laser cutting machine with active laser visible. Center: a press brake with bent steel. Right: a collaborative welding robot arm. All three machines arranged in a clean, slightly dark industrial environment with dramatic directional lighting. The machines are shown at the same scale, organized and professional. No text. The composition communicates: fabrication + automation + quality. Wide horizontal format, 1200×630 proportions. Photorealistic industrial photography, 8K.

---

## 16.2 — Homepage Automation Card — Cobot

**Filename:** `homepage-cobot-card.jpg`
**Dimensions:** 800 × 600px (4:3)
**Used:** Homepage product split section — Collaborative Welding Arm card image

**Prompt:**

> Medium shot of a collaborative welding robot arm in a fabrication shop environment — no cage, clean floor, organized welding fixtures. The cobot arm is at rest in a natural standby pose, torch visible at the end effector. The arm is compact and clearly designed for human-collaborative environments. Warm shop lighting, slightly dramatic overhead key light. A human welder can be partially seen in the background, communicating the co-working relationship. Photorealistic industrial photography, 8K.

---

## 16.3 — Homepage Automation Card — Industrial Arm

**Filename:** `homepage-industrial-arm-card.jpg`
**Dimensions:** 800 × 600px (4:3)
**Used:** Homepage product split section — Industrial Welding Arm card image

**Prompt:**

> Dynamic shot of a large industrial 6-axis welding robot arm mid-motion inside a safety enclosure. The robot is large and powerful, clearly high-payload. Welding sparks stream from the torch in a dramatic arc. The perspective is through the safety enclosure's transparent panel — looking in at the robot. Dramatic backlighting from the welding arc, strong shadows, industrial cinematic feel. Photorealistic industrial photography, 8K.

---

---

# SECTION 17 — FILE NAMING REFERENCE

When uploading images, use exactly these filenames and place them in `/public/images/`:

```
public/images/
├── homepage-hero.jpg
├── homepage-feature-precision.jpg
├── homepage-feature-partnership.jpg
├── homepage-feature-support.jpg
├── homepage-feature-consultation.jpg
├── homepage-cobot-card.jpg
├── homepage-industrial-arm-card.jpg
├── fiber-laser-hero.jpg
├── fiber-laser-feature-01-speed.jpg
├── fiber-laser-feature-02-accuracy.jpg
├── fiber-laser-feature-03-power.jpg
├── fiber-laser-feature-04-exchange-table.jpg
├── fiber-laser-feature-05-controller.jpg
├── fiber-laser-tube-hero.jpg
├── fiber-laser-tube-feature-01-profiles.jpg
├── fiber-laser-tube-feature-02-chuck.jpg
├── fiber-laser-tube-feature-03-zfollow.jpg
├── fiber-laser-tube-feature-04-controller.jpg
├── fiber-laser-tube-feature-05-length.jpg
├── sheet-tube-combo-hero.jpg
├── sheet-tube-combo-feature-01-dualmode.jpg
├── sheet-tube-combo-feature-02-bed.jpg
├── sheet-tube-combo-feature-03-tube.jpg
├── sheet-tube-combo-feature-04-controller.jpg
├── sheet-tube-combo-feature-05-footprint.jpg
├── enclosed-laser-hero.jpg
├── enclosed-laser-feature-01-safety.jpg
├── enclosed-laser-feature-02-interlock.jpg
├── enclosed-laser-feature-03-extraction.jpg
├── enclosed-laser-feature-04-performance.jpg
├── enclosed-laser-feature-05-models.jpg
├── 4in1-laser-hero-2.png
├── 4in1-laser-feature-01-welding.jpg
├── 4in1-laser-feature-02-cutting.jpg
├── 4in1-laser-feature-03-cleaning.jpg
├── 4in1-laser-feature-04-wirefeed.jpg
├── 4in1-laser-feature-05-materials.jpg
├── laser-welding-hero.jpg
├── laser-welding-feature-01-no-consumables.jpg
├── laser-welding-feature-02-low-heat.jpg
├── laser-welding-feature-03-speed.jpg
├── laser-welding-feature-04-copper.jpg
├── laser-welding-feature-05-bead.jpg
├── laser-cleaning-hero.jpg
├── laser-cleaning-feature-01-no-chemicals.jpg
├── laser-cleaning-feature-02-no-media.jpg
├── laser-cleaning-feature-03-precision.jpg
├── laser-cleaning-feature-04-safe.jpg
├── laser-cleaning-feature-05-portable.jpg
├── cnc-press-brake-hero.jpg
├── cnc-press-brake-feature-01-repeatability.jpg
├── cnc-press-brake-feature-02-controller.jpg
├── cnc-press-brake-feature-03-crowning.jpg
├── cnc-press-brake-feature-04-backgauge.jpg
├── cnc-press-brake-feature-05-toolchange.jpg
├── shearing-guillotine-hero.jpg
├── shearing-guillotine-feature-01-holddown.jpg
├── shearing-guillotine-feature-02-rake.jpg
├── shearing-guillotine-feature-03-backgauge.jpg
├── shearing-guillotine-feature-04-controller.jpg
├── shearing-guillotine-feature-05-frame.jpg
├── shearing-swingbeam-hero.jpg
├── ironworker-hero.jpg
├── ironworker-feature-01-stations.jpg
├── ironworker-feature-02-punching.jpg
├── ironworker-feature-03-notching.jpg
├── ironworker-feature-04-flatbar.jpg
├── ironworker-feature-05-vdie.jpg
├── cobot-welding-hero.jpg
├── cobot-welding-operation.jpg
├── cobot-welding-roi.jpg
├── industrial-welding-arm-hero.jpg
├── industrial-welding-arm-cell.jpg
├── automation-category-hero.jpg
├── fabrication-category-hero.jpg
├── about-hero.jpg
├── about-company-story.jpg
├── solution-metal-fabrication.jpg
├── solution-automotive.jpg
├── solution-aerospace.jpg
├── solution-hvac-construction.jpg
├── blog-fiber-vs-co2.jpg
├── blog-cobot-roi.jpg
├── blog-press-brake-tonnage.jpg
├── blog-laser-cleaning-comparison.jpg
├── blog-shear-comparison.jpg
├── blog-laser-vs-tig.jpg
└── og-default.jpg
```

**Total: 87 unique images**

---

*Once you upload the images, tell me which ones are ready and I will update the website code to use them.*
