# PopStop Agent Instructions

## Product

PopStop is an iOS app that listens to microwave popcorn popping sounds and triggers a loud alarm before the first kernel burns. The app exists for adults 25-45 who do not trust themselves to microwave popcorn without ruining it.

The core promise is simple: hit Start, put the phone near the microwave, and get warned when the popcorn is perfectly popped.

## Brand

PopStop should feel like Liquid Death applied to popcorn: confident, irreverent, deadpan, anti-corporate, and suspicious of the legacy popcorn industry that profits when people burn bags.

Use that as tonal inspiration, not as something to copy directly. Do not reference Liquid Death in user-facing copy unless the user explicitly asks.

Voice rules:

- Prefer short, blunt lines over cute explanations.
- Use sentence casing only for headlines, labels, buttons, and generated copy. Do not use title casing unless the user explicitly asks for it.
- Treat burnt popcorn as a preventable corporate crime.
- Keep copy deadpan and useful, not random or try-hard.
- Avoid cozy food-blog language, beige lifestyle copy, wellness language, or mascot-driven cuteness.
- Jokes can be sharp, but the app must still feel trustworthy during the actual cooking moment.

Example tone:

- "Big Popcorn wanted this bag dead."
- "Kill the microwave."
- "Pop velocity is collapsing."
- "Your snack is approaching litigation."
- "The bag is done negotiating."

## Platform

Build iOS first. Unless an existing project establishes another stack, prefer a native iOS implementation using Swift and SwiftUI.

Likely iOS capabilities:

- Microphone access for live popping detection.
- Camera access to capture the popcorn bag.
- On-device image analysis or OCR for bag details when practical.
- Local storage for one-time microwave setup details.
- Local notifications, sound, voice, and haptics for the ready alarm.

## Privacy And Data

Privacy is a product requirement, not a nice-to-have.

- Audio must be processed on-device only.
- Audio must not leave the device.
- Audio must not be stored after a popping session.
- Do not add cloud audio processing, analytics that capture raw audio, session recordings, or server-side inference without explicit user approval.
- If logs are needed for development, they must not include raw audio or sensitive image data.
- Any bag photo handling should prefer on-device processing and avoid uploading by default.

Ask the user before changing any of these privacy rules.

## Core V1 Flow

The smallest useful version should work while the user is standing in front of a microwave.

1. First launch onboarding asks for microwave details once.
2. User captures a photo of the popcorn bag.
3. User taps Start.
4. App listens through the built-in microphone while the phone sits near the microwave.
5. App detects popping cadence and determines when the popcorn is ready.
6. App plays a loud alarm plus a fun voice message telling the user to stop the microwave.

Keep setup light. After onboarding, the normal session should be close to one tap.

## Detection Guidance

The readiness model should be based on live popping sound cadence. The first practical implementation can use pop-event detection plus the time gap between pops. A common heuristic is to warn when popping slows meaningfully, such as around 2 seconds between pops, but tune this through testing instead of treating it as universal truth.

Use the bag photo and saved microwave details to improve confidence when possible, but do not make them friction-heavy. If bag analysis fails, the app should still allow a session with sensible defaults.

Preferred behavior:

- Detect individual pops from microphone input in real time.
- Track recent pop intervals and overall pop rate.
- Trigger the alarm before burn risk, not after a fixed countdown expires.
- Show a clear listening state, confidence/readiness state, and emergency stop state.
- Make false negatives feel unacceptable; a missed burn warning is worse than an early warning.

Avoid pretending the app can guarantee perfect popcorn. Use confident product copy, but keep any safety or accuracy claims honest.

## UX Priorities

The cooking screen should be direct and hard to misunderstand:

- A large Start control.
- Clear listening status.
- Obvious visual state changes as popping progresses.
- A loud stop alert that cannot be mistaken for ordinary UI feedback.
- A fast way to cancel or end a session.

The app should feel like a serious warning system with a funny mouth, not a novelty toy.

Do not build a marketing landing page as the main experience. Build the tool first.

## Alarm And Voice

The ready moment should include loud sound plus a fun voice message. Copy should be short enough to understand over a running microwave.

Good alarm messages:

- "Kill the microwave."
- "Bag's done. Stop cooking it."
- "PopStop says pull it."
- "The kernels have unionized. Shut it down."
- "This is not a drill. This is snack preservation."

Do not rely on voice alone. Use sound, visuals, and haptics where available.

## Onboarding Data

Microwave details are entered once on download or first launch and reused for future sessions.

Likely fields:

- Microwave wattage.
- Default cook time or popcorn button behavior, if known.
- Optional microwave model or power level.

Do not require account creation for v1 unless the user explicitly requests it.

## Visual Direction

The interface should be bold, adult, and utility-first.

Good directions:

- Black, white, hazard yellow, red, stainless steel gray.
- High contrast warning-system UI.
- Large functional controls.
- Brutalist or industrial details.
- Deadpan microcopy in small doses.

Avoid:

- Beige food aesthetics.
- Cartoon popcorn mascots.
- Soft wellness colors.
- Decorative fluff that slows down the cooking flow.
- Corporate SaaS polish that makes the app feel neutered.

## Technical Defaults

Because this workspace is currently empty, future agents should use these defaults unless the user or repo establishes different ones:

- Native iOS app.
- Swift.
- SwiftUI for UI.
- AVFoundation for microphone and camera permissions.
- Apple's speech/audio/image frameworks only when they can run on-device for the needed task.
- Local persistence for microwave settings, such as UserDefaults for simple values.
- No backend in v1.
- No user accounts in v1.

If adding dependencies, prefer small, well-maintained libraries and document why they are needed.

## Testing And Validation

Prioritize testing around the parts that can ruin popcorn:

- Pop detection under noisy microwave conditions.
- Slowdown threshold behavior.
- Alarm trigger timing.
- Permission-denied states for microphone and camera.
- Onboarding persistence.
- Session cancellation.

Use simulator-friendly tests for app logic, but validate audio behavior on a real device when possible.

## Non-Goals For V1

Do not add these unless explicitly requested:

- Cloud audio analysis.
- Stored session recordings.
- Accounts or social features.
- A popcorn brand marketplace.
- Long onboarding surveys.
- Gamification that gets in the way of stopping the microwave.
- General recipe or cooking content.

## Decision Rules For Future Agents

When making product or technical decisions:

- Protect on-device privacy first.
- Keep the main cooking flow close to one tap.
- Prefer early warning over late warning.
- Make alerts impossible to miss.
- Keep copy sharp, short, and deadpan.
- Ask before changing platform, privacy, data retention, or core detection strategy.
- If a feature does not help users stop the microwave on time, question whether it belongs in v1.
