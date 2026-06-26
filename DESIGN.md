# Design System: PopStop

## 1. Visual Theme & Atmosphere

PopStop is an industrial snack warning system with a dry mouth. It should feel adult, blunt, and operational: a tool built for the moment when a microwave is getting loud and the user needs one unmistakable command.

Atmosphere calibration:

- **Density:** 7/10, Daily App Balanced moving toward Cockpit Dense during an active cooking session.
- **Variance:** 7/10, Offset Asymmetric. Preflight screens may use sharp asymmetry; active states must stay legible and stable.
- **Motion:** 6/10, Fluid CSS or native spring motion. Active monitoring should feel alive without becoming theatrical.
- **Creativity:** 8/10, irreverent and premium, but never cute, cozy, or ornamental.

The product should look like a black-box recorder, a hazard label, and a stainless appliance panel got into a legal dispute over a popcorn bag. The first screen is the usable app, not a marketing landing page. Every visual decision must help the user start listening, understand pop cadence, or stop the microwave on time.

## 2. Color Palette & Roles

Use one neutral system across the entire app. The only decorative accent is Hazard Ticket Yellow. Red is reserved for emergency and error states only; it is not an accent and must never decorate ordinary screens.

- **Burnt Zinc** (#121214) - Primary dark canvas, launch background, active session background. Never use pure black.
- **Deep Appliance** (#1B1B1F) - Raised dark surfaces, bottom sheets, modal fills, camera preview backing.
- **Stainless Rail** (#32343A) - Structural dividers, inactive outlines, control rims.
- **Cold White** (#F4F4F5) - Primary text on dark surfaces, high-contrast labels, stop commands on red.
- **Steel Dust** (#A1A1AA) - Secondary copy, helper text, metadata, privacy notes.
- **Paper Warning** (#F6F3E8) - Light surface for onboarding forms or settings only. Use sparingly; it must read like printed instruction stock, not beige lifestyle food content.
- **Charcoal Ink** (#18181B) - Primary text on Paper Warning surfaces.
- **Hazard Ticket Yellow** (#C7A624) - The single accent. Use for primary Start controls, active focus rings, selected segmented controls, pop activity highlights, and readiness warnings.
- **Critical Shutoff Red** (#B3261E) - Emergency-only surface for Stop Alert, destructive errors, alarm borders, and urgent haptic states.

Rules:

- Hazard Ticket Yellow is the only accent color. Do not introduce blue, purple, green, orange, or rainbow state palettes.
- Critical Shutoff Red appears only when the user must stop cooking, fix a blocked permission, or acknowledge a destructive/cancel state.
- Avoid neon values, outer glows, and over-saturated gradients. All contrast comes from surface, scale, and blunt shape.
- Keep dark mode as the default product posture. Light surfaces are utility inserts, not the main brand atmosphere.

## 3. Typography Rules

- **Display:** Cabinet Grotesk - condensed confidence, tight tracking, blunt word shapes. Use for PopStop, primary state labels, and alarm commands.
- **Body/UI:** Satoshi - readable, direct, and less generic than system defaults. Use for instructions, labels, buttons, settings, and permission copy.
- **Mono:** Geist Mono - use for elapsed time, recent pop gap, wattage, threshold values, confidence labels, and all high-density numbers.
- **Native fallback:** If custom fonts are not yet bundled in SwiftUI, use the closest native rounded or condensed weight temporarily, but preserve the hierarchy and spacing rules here.
- **Banned:** Inter, generic serif fonts, decorative display fonts, handwritten fonts, food-blog script fonts, and system-default typography that makes the app feel like a template.

Type scale:

- **Alarm Command:** clamp(3.25rem, 16vw, 7rem), Cabinet Grotesk Black, uppercase, line-height 0.88, letter spacing 0.
- **Primary State:** clamp(2.25rem, 10vw, 4.75rem), Cabinet Grotesk ExtraBold, line-height 0.92, letter spacing 0.
- **Screen Title:** clamp(1.75rem, 7vw, 3rem), Cabinet Grotesk Bold, line-height 1.0.
- **Control Label:** 1rem to 1.125rem, Satoshi Bold, line-height 1.1.
- **Body:** 1rem, Satoshi Medium or Regular, line-height 1.45, max width 65 characters.
- **Metadata/Numbers:** 0.8125rem to 1rem, Geist Mono Medium, tabular numerals.

Do not shrink critical cooking copy below 1rem. The user may be standing over a running microwave.

## 4. Component Stylings

### App Shell

Use a full-screen dark canvas with strong containment and minimal chrome. The app should feel like it owns the device during a session. Keep the normal cooking flow close to one tap after onboarding.

### Buttons

- **Start Button:** Oversized circular or square-with-radius-8 control, minimum 128px on mobile home screens, Hazard Ticket Yellow fill, Burnt Zinc text, Cabinet Grotesk label. It should look pressable and slightly dangerous.
- **Stop/Acknowledge Button:** Full-width, minimum 56px high, Cold White or Hazard Ticket Yellow depending on alert contrast. Use blunt copy such as "I STOPPED IT".
- **Secondary Buttons:** Deep Appliance fill with Stainless Rail border, Cold White text. Use for Retake, Cancel, Settings, and Start Anyway.
- **Icon Buttons:** 44px minimum tap target, simple line icons, no labels unless clarity requires them. Use tooltips only on desktop or design previews.
- **Active State:** tactile -1px translate or scale 0.98 with a spring return. No glow.
- **Disabled State:** reduce opacity to 45 percent and keep the button visible. Never hide blocked actions without explanation.

### Inputs and Forms

- Labels sit above inputs. Helper text sits below. Error text sits below in Critical Shutoff Red.
- Inputs use Deep Appliance or Paper Warning surfaces depending on screen mode, 1px Stainless Rail border, 8px radius, 48px minimum height.
- Numeric inputs for wattage and cook time use Geist Mono with tabular numerals.
- Segmented controls use Hazard Ticket Yellow for the selected segment, Stainless Rail for inactive outlines, and no pill gloss.

### Panels and Cards

Use panels only when grouping improves speed of comprehension. Do not build nested cards. Radius must be 8px or less.

- **Dark Panels:** Deep Appliance fill, Stainless Rail 1px border, no heavy shadow.
- **Light Inserts:** Paper Warning fill, Charcoal Ink text, hard 1px border. Use for setup forms or printed-label moments.
- **Active Session:** Prefer dividers, meters, and large live states over cards. Dense operational screens should feel like an instrument panel.

### Bag Capture

The bag photo area should look like evidence intake, not a social image picker.

- Camera/photo preview sits inside a hard-edged frame with Stainless Rail border.
- Empty state copy should be blunt: "Bag evidence missing." Use one primary action and one fallback.
- If analysis fails, show a small inline warning and preserve the Start path.
- Do not store the photo beyond the session unless a future feature explicitly asks.

### Pop Activity Indicators

Use live visualizations that communicate cadence quickly:

- A horizontal pop-tick strip with recent pop events.
- A large mono "last gap" number.
- A readiness state label: Listening, Heavy popping, Slowing, Stop now.
- Hazard Ticket Yellow indicates active pop energy. Critical Shutoff Red indicates the stop threshold has been crossed.

Do not invent fake performance metrics. Only show values derived from the current session or clear placeholders in design mocks.

### Loaders, Empty States, and Errors

- Loading states use skeletal strips matching the final layout. No circular spinners.
- Empty states are composed but functional: one line of cause, one action, one fallback if needed.
- Permission errors explain the block in plain language and show the next action. Keep the humor low in permission and safety states.

## 5. Layout Principles

- Build mobile-first. The primary portrait phone layout is the source of truth.
- No horizontal scrolling on mobile. Any overflow is a critical design failure.
- Use CSS Grid or native stack/grid primitives for structure. Avoid percentage math hacks.
- Keep interactive controls at least 44px by 44px.
- Avoid centered hero compositions. PopStop should use asymmetric, tool-first layouts.
- Do not use a generic row of three equal feature cards.
- Every element needs its own clear spatial zone. No overlapping text, images, buttons, meters, or decorative layers.
- Full-height web sections should use min-h-[100dvh], never h-screen.
- Native iOS screens should respect safe areas but allow the Stop Alert color field to flood behind system chrome where appropriate.

Recommended screen architecture:

- **Onboarding:** Split-feeling mobile layout with a heavy display headline at top, one compact setup form, and a single Save action pinned near the bottom.
- **Home/Preflight:** Top bar with PopStop and settings. Middle zone for bag evidence. Lower zone dominated by the Start control. Privacy note is small but visible.
- **Bag Capture:** Camera area first, controls second. Retake and Use Photo are clear siblings; Start Anyway is visible but visually secondary.
- **Active Session:** Large state label at top, pop cadence visualization in the center, mono timing row below, Cancel control reachable but not competing with readiness state.
- **Stop Alert:** Critical Shutoff Red full-screen field, maximum command text, pulsing border or scale treatment, and one acknowledgement button. This state must be impossible to mistake for normal UI feedback.
- **Settings:** Plain form. No brand theatrics. The user came here to fix wattage and leave.

## 6. Motion & Interaction

Use spring physics for all touch feedback: stiffness 100, damping 20. Motion should feel weighty, mechanical, and useful.

- **Start Press:** quick compress and release, then screen transition into Listening.
- **Listening State:** subtle perpetual pulse on microphone indicator using opacity and scale only.
- **Pop Detection:** each detected pop adds a short tick animation that rises or flashes in Hazard Ticket Yellow, then settles.
- **Slowing State:** cadence strip spacing expands; state label shifts to Hazard Ticket Yellow.
- **Stop Alert:** strong repeating pulse using transform and opacity. Pair with sound and haptics where available.
- **Screen Transitions:** short cascade reveals, 40ms to 80ms stagger. Never mount dense controls all at once.
- **Performance:** animate transform and opacity only. Never animate top, left, width, height, or layout constraints during monitoring.

No custom mouse cursors. No neon shadows. No ornamental particle systems. During active cooking, motion must clarify state changes.

## 7. Voice and Copy Rules

Copy is part of the interface. It should be short, blunt, and useful.

Use:

- "Kill the microwave."
- "Bag's done. Stop cooking it."
- "Pop velocity is collapsing."
- "Bag evidence missing."
- "Audio stays on this device."
- "Mic blocked. No listening, no rescue."
- "Start anyway."

Avoid:

- Cozy food language.
- Wellness language.
- Mascot jokes.
- Long explanations during cooking.
- Claims that PopStop guarantees perfect popcorn.
- References to outside brands in user-facing copy.

Humor is allowed on Home and Stop Alert. Permission, privacy, and setup screens should be clearer and drier.

## 8. Privacy and Trust UI

Privacy is a visible product feature, not a buried settings paragraph.

- Show "Audio stays on this device" near Start or in the active session footer.
- Do not display waveforms that imply audio is being recorded. Use pop events and cadence, not recording metaphors.
- Do not add account prompts, cloud sync language, analytics prompts, or stored session history to V1 designs.
- Any photo handling copy should imply temporary local use unless a future feature explicitly changes that rule.
- Logs, debug panels, and test views must never show raw audio or sensitive image data.

## 9. Stitch Generation Notes

When generating PopStop screens in Stitch:

- Generate the working app screen first, not a landing page.
- For any brand or presentation frame, use asymmetric inline image typography carefully: a small popcorn bag photo or warning-label texture may sit inline with a large headline at type height. On mobile, that image must stack below the headline. Never use this treatment during Active Session or Stop Alert.
- Use realistic UI states instead of invented metrics. If real values are unavailable, use placeholders such as "[last gap]" or "[wattage]".
- Build exact V1 screens: Onboarding, Home/Preflight, Bag Capture, Active Session, Stop Alert, Settings, Permission Help.
- Keep controls native-feeling enough for iOS, but visually sharper than default iOS settings panels.

## 10. Anti-Patterns (Banned)

- No emojis anywhere.
- No Inter font.
- No pure black (#000000).
- No generic serif fonts.
- No beige food-blog aesthetic.
- No cartoon popcorn mascot.
- No soft wellness palette.
- No purple or blue neon AI aesthetic.
- No neon or outer glow shadows.
- No oversaturated accents.
- No gradient text on large headers.
- No custom mouse cursors.
- No overlapping elements or absolute-positioned content stacking.
- No centered hero sections for PopStop.
- No 3-column equal card feature rows.
- No nested cards.
- No generic names such as John Doe, Acme, or Nexus.
- No fake round numbers such as 99.99 percent, 50 percent, or invented uptime.
- No fabricated metrics, response times, success rates, session counts, or performance data.
- No fake system metric sections filled with filler data.
- No "LABEL // YEAR" typography.
- No AI copywriting cliches such as "Elevate", "Seamless", "Unleash", or "Next-Gen".
- No filler UI text such as "Scroll to explore" or "Swipe down".
- No broken image links. Use local assets, generated bitmap assets, or stable placeholders only.
- No marketing landing page as the main experience.
- No account creation, cloud audio, stored audio recordings, or server-side inference in V1 designs.
