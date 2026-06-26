# App Plan — PopStop

## 1. App Overview

PopStop is a mobile-first popcorn rescue app for adults who keep turning snack time into a smoke alarm rehearsal. The app listens to popping through the device microphone, uses a photo of the popcorn bag plus saved microwave details for context, and fires a loud alarm with a short voice message when the bag is ready. The brand voice is confident, deadpan, and anti-corporate: burnt popcorn is treated as a preventable failure encouraged by the legacy popcorn industry. V1 should feel like a serious warning system with a funny mouth.

## 2. Key Components

- First-run microwave setup: one-time form for microwave wattage, optional default cook time, and optional popcorn button behavior.
- Bag capture: camera flow for photographing the popcorn bag before a session.
- Session start: large Start control that begins microphone listening and cooking-state tracking.
- Pop detection engine: browser-side audio analysis that detects pop-like spikes and tracks time between pops.
- Readiness decision layer: triggers alert when recent pop cadence slows enough to indicate the bag should be stopped.
- Alarm system: loud alarm sound, high-contrast stop screen, vibration where supported, and a short voice-style message.
- Settings editor: lets users update microwave details without repeating onboarding.
- Permission states: clear flows for microphone denied, camera denied, and unsupported browser features.

Additional helpful features for v1:

- Manual "Stop now" button during every active session.
- "Bag photo failed, start anyway" fallback.
- Session confidence indicator using plain states: Listening, Heavy popping, Slowing, Stop now.

## 3. App Structure

- Onboarding: collects microwave details on first launch.
- Home: shows PopStop title, bag photo prompt, Start button, and settings entry.
- Bag Capture: opens camera upload/capture and stores the current bag image locally for the session.
- Active Session: listens to microphone input, displays popping state, and allows cancel.
- Stop Alert: full-screen alarm state telling the user to turn off the microwave.
- Settings: edits microwave wattage and related defaults.
- Permission Help: explains required microphone or camera access when blocked.

Navigation flow:

First launch opens Onboarding, then Home after required microwave wattage is saved. Home opens Bag Capture when the user adds a bag photo. Home starts Active Session when the user taps Start. Active Session moves to Stop Alert when readiness criteria are met. Active Session returns to Home when cancelled. Stop Alert returns to Home after the user acknowledges the warning. Settings is reachable from Home and returns to Home after save.

## 4. User Interface

Onboarding: full-screen black background, PopStop wordmark at top, short deadpan line, numeric wattage input, optional cook-time input, segmented control for popcorn button behavior, and a high-contrast Save button.

Home: mobile-first single column. Top bar has PopStop left and settings icon right. Center contains the current bag photo area or camera button, a large circular Start button, and a compact status line such as "Awaiting snack evidence." Bottom contains one small safety note: "Audio stays on this device."

Bag Capture: camera/file input area fills most of the screen, with Retake, Use Photo, and Start Anyway controls. Do not require OCR success to continue.

Active Session: full-screen monitoring view with large state label, live pop-rate visualization, elapsed time, recent pop gap, Cancel button, and microphone activity indicator. Copy must be short enough to read while a microwave runs.

Stop Alert: red/yellow high-contrast screen, maximum-size command text such as "KILL THE MICROWAVE", alarm icon, pulsing visual treatment, voice message trigger, and "I stopped it" button.

Settings: simple form with saved microwave fields, Save button, and privacy note that audio is processed locally and discarded.

## 5. Backend Requirements

No backend is needed for v1. PopStop can run client-side because microphone analysis, bag photo preview, microwave settings, and session state can all stay on the device.

Data storage:

- Store microwave settings in browser local storage.
- Store no audio recordings.
- Do not upload audio.
- Do not store session history in v1.
- Keep bag photo in temporary client state for the current session only, unless the user explicitly saves it later in a future version.

Authentication is not needed. File handling is limited to local camera capture or image upload through the browser.

## 6. APIs and Libraries

- Web Audio API: capture microphone input and analyze amplitude/frequency spikes for pop detection.
- MediaDevices getUserMedia: request microphone access.
- HTML camera/file input: capture or upload popcorn bag photos on mobile.
- Web Speech API or preloaded audio clips: play short voice-style alert messages, with audio clip fallback if speech synthesis is unavailable.
- Vibration API: vibrate on supported mobile browsers.
- LocalStorage: persist microwave settings after onboarding.
- Lovable default stack: React, TypeScript, Tailwind, and shadcn/ui components where they fit the utility UI.

Avoid external cloud AI, remote OCR, analytics SDKs that capture audio, and server-side inference in v1.

## 7. Testing Strategy

Unit tests:

- Pop interval calculation from timestamped detected pops.
- Readiness trigger when pop gaps cross the configured slowdown threshold.
- No trigger during fast popping.
- Onboarding validation for microwave wattage.
- Local settings save and load.

Integration tests:

- First launch to saved onboarding to Home.
- Permission denied paths for microphone and camera.
- Start session, simulate pop events, trigger Stop Alert.
- Cancel active session and verify no alarm continues.

User acceptance criteria:

- A user can enter microwave details once and skip that setup on later visits.
- A user can photograph a popcorn bag or start without a successful photo.
- The app shows a listening state within 2 seconds of tapping Start after permission is granted.
- The app triggers a loud stop alert when simulated popping slows.
- No audio file is created, stored, uploaded, or shown in logs.

## 8. Platform-Specific Considerations

Lovable should build this as a mobile-first React web app that can later inform a native iOS build. Use Tailwind for the warning-system visual language and shadcn/ui only for controls that do not soften the brand too much. Keep the first screen as the usable app, not a landing page.

Browser microphone support varies on iOS Safari. Require HTTPS, request microphone permission only when the user taps Start, and show a plain fallback message if live audio is unsupported. Camera capture should use a standard file input with mobile capture support instead of a custom native camera dependency. Keep all audio analysis inside the browser runtime.

## 9. Out of Scope for v1

- Native App Store iOS build.
- Cloud audio analysis.
- Stored audio recordings.
- User accounts.
- Session history.
- Social sharing.
- Popcorn brand marketplace.
- Remote OCR or AI bag analysis.
- Long onboarding surveys.
- Food recipe content.

## 10. Definition of Done

- First-run onboarding saves microwave wattage locally and does not repeat after completion.
- Home lets the user capture a bag photo, start a session, and edit settings.
- Active Session requests microphone access and displays live listening status.
- Pop cadence logic triggers Stop Alert when popping slows past the v1 threshold.
- Stop Alert plays a loud alarm plus short brand-appropriate voice message.
- Audio is analyzed locally, discarded after the session, and never uploaded or stored.
- Permission-denied and unsupported-browser states tell the user exactly what blocks the session.
- The primary flow works on a modern mobile browser over HTTPS.
