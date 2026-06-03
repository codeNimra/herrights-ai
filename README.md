# ⚖️ HerRights

> Know your rights. Stay protected.

**🔗 Live Demo:** https://her-rights.netlify.app
**💻 GitHub:** https://github.com/codeNimra/herrights-ai
**📋 Devpost:** https://devpost.com/software/herrights-vr

---

## 🏆 GitHub Finish-Up-A-Thon: The Transformation Arc

This project was originally built in **24 hours** under extreme pressure for the #75HER Hackathon (International Women's Day 2026). It worked — but it was not finished. This challenge was the forcing function to turn a hackathon demo into a production-quality app.

### Before vs After — What GitHub Copilot Fixed

| Missing Feature / Bug | How GitHub Copilot Solved It (Prompt Example) | Production Result |
|---|---|---|
| **Volatile chatbot state** — refreshing wiped entire conversation history | *"Add localStorage persistence for chat history keyed by topic ID, with JSON serialization and graceful fallback if storage is unavailable"* | Chat history now survives refresh and persists across sessions per topic |
| **No onboarding** — users landed directly in confusing 3D scene with no guidance | *"Build a 3-step onboarding flow: welcome screen, country selector with search, situation picker with progress tracking"* | Beautiful 3-step onboarding with country context saved to localStorage |
| **A-Frame bleeding through HTML** — 3D scene rendered behind UI causing visual corruption | *"Remove A-Frame entirely and replace with a pure CSS animated particle background using requestAnimationFrame"* | Clean CSS particle canvas — no WebGL conflicts, 60fps on low-end devices |
| **No voice input** — mobile users had no hands-free option | *"Implement Web Speech API with error handling, interim results display, and graceful fallback toast for unsupported browsers"* | Voice-to-text input with live listening indicator and browser fallback |
| **Zero accessibility** — no screen reader support, no keyboard navigation | *"Add ARIA roles, aria-labels, keyboard ESC handler for emergency overlay, and focus trap for modal dialogs"* | Full ARIA compliance, keyboard navigation, screen reader announcements |
| **No PWA support** — app required browser, couldn't be installed | *"Generate an inline PWA manifest as a blob URL with service worker registration for offline caching"* | Installable on iOS and Android home screen, works fully offline |
| **Monolithic file with no error isolation** — one JS error could break entire UI | *"Wrap all dynamic DOM injection and 3D entity operations in try-catch blocks with console.error fallbacks"* | Core HTML/CSS layout remains functional even if JS modules fail |
| **No share functionality** — users couldn't send rights info to others | *"Implement Web Share API with clipboard fallback and a toast notification system"* | One-tap share on mobile, copy-to-clipboard on desktop |
| **No progress tracking** — users didn't know how much they'd explored | *"Track explored topic IDs in localStorage, render a progress bar and checkmark badges on the situation screen"* | Progress bar + checkmarks persist across sessions |
| **No emergency always-visible** — crisis resources buried in chat | *"Add a fixed-position emergency button on all screens with a fullscreen overlay, tel: links, and ESC keyboard handler"* | 🆘 Help button always visible, one click to crisis hotlines |

---

## 🎯 Problem Frame

| | |
|---|---|
| **User** | Women and marginalized people facing legal situations — workplace harassment, domestic abuse, eviction, immigration fears — with no access to plain-language legal guidance |
| **Problem** | Legal information is written in jargon designed for lawyers. Most women don't know their rights until it's too late. |
| **Constraints** | Must work without login, API key, or installation. Must be accessible on any device. Must work offline. |
| **Success Test** | A user with no legal background opens the app, describes their situation, and receives 3 actionable rights + 1 next step — within 60 seconds |

---

## 💡 3-Line Pitch

**Know your rights — instantly, privately, for free.**
HerRights is a progressive web app that guides women through their legal rights with a smart AI chatbot, voice input, and offline support — no login, no API key, no lawyer required.
Try it now → https://her-rights.netlify.app

---

## ✨ What It Does (v2 — Finished Version)

### Onboarding Flow
1. **Welcome screen** — animated logo, trust badges, get started CTA
2. **Country selector** — 20 countries with search filter, saves to localStorage
3. **Situation picker** — 6 topic cards with progress tracking and checkmarks

### Chat Experience
- Opens directly to chat — no tabs, no friction
- Auto-greeting with topic context and country
- Suggested question chips for users who don't know what to ask
- Collapsible rights summary card (3 key rights per topic)
- **Voice input** via Web Speech API — speak your situation
- **Share button** via Web Share API or clipboard fallback

### Always-On Safety
- 🆘 Emergency button fixed on every screen
- Crisis overlay with clickable tel: links (DV Hotline, Crisis Text, 911/999/112)
- Persistent crisis footer bar on every screen
- Emergency keywords in chat trigger immediate crisis response

### Technical
- **PWA** — installable on iOS/Android, works offline
- **localStorage persistence** — chat history, country, progress all survive refresh
- **CSS particle background** — replaces A-Frame for clean, conflict-free rendering
- **Full ARIA compliance** — screen readers, keyboard navigation, focus management

---

## 🌍 SDG Alignment

| Goal | How |
|---|---|
| **SDG 5 — Gender Equality** | Closing the legal knowledge gap for women and marginalized communities globally |
| **SDG 16 — Justice & Strong Institutions** | Making legal systems accessible to people who cannot afford a lawyer |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 / Vanilla JS | Core app — zero dependencies, maximum compatibility |
| Web Speech API | Voice input — hands-free accessibility |
| Web Share API | Native share on mobile |
| localStorage | Persistent chat history, country, progress |
| PWA (manifest + service worker) | Installable, offline-capable |
| CSS Animations + requestAnimationFrame | Particle background — replaces A-Frame |
| Google Fonts CDN | Playfair Display + DM Sans |
| Netlify | Free hosting with auto-deploy from GitHub |

**No npm. No build step. No API key. No login. No cost.**

---

## 🚀 Quickstart

```bash
# 1-command setup
git clone https://github.com/codeNimra/herrights-ai && cd herrights-ai && open index.html
```

Or visit the live demo: https://her-rights.netlify.app

---

## 🏗️ Architecture

```
index.html
├── ── SECTION 1: CSS Variables & Reset
├── ── SECTION 2: Animated Particle Background
├── ── SECTION 3: Screen System (fade transitions)
├── ── SECTION 4: Onboarding — Welcome Screen
├── ── SECTION 5: Onboarding — Country Selector
├── ── SECTION 6: Onboarding — Situation Picker
���── ── SECTION 7: Chat Screen (full-screen)
├── ── SECTION 8: Emergency Overlay
├── ── SECTION 9: Persistent UI (Help button, Crisis footer)
├── ── DATA: TOPICS array (6 topics × 6 rights + keywords)
├── ── DATA: SUGGESTIONS array (4 chips per topic)
├── ── LOGIC: getBotReply() — keyword chatbot engine
├── ── LOGIC: Progress tracking (localStorage)
├── ── LOGIC: Voice input (Web Speech API)
├── ── LOGIC: Share (Web Share API + clipboard)
└── ── LOGIC: PWA manifest (inline blob)
```

Each section is wrapped in `try-catch` — if one module fails, the rest of the app continues functioning.

---

## 📋 Technical Decisions

See [DECISIONS.md](./DECISIONS.md) for the full log including performance optimization and Copilot prompts.

---

## ⚠️ Known Issues & Roadmap

- [ ] Upgrade chatbot to real LLM (Goose / Anthropic API) when billing available
- [ ] Add Urdu, Arabic, Spanish, French translations
- [ ] Verify legal content with qualified lawyers per jurisdiction
- [ ] Add more topics: disability rights, education rights, healthcare
- [ ] Text-to-speech narration for low-literacy users

---

## 📜 License

MIT License — see [LICENSE](./LICENSE)
Copyright (c) 2026 Nimra Abid

---

## 🙏 Credits

- Fonts: Google Fonts — Playfair Display, DM Sans
- Legal content: General public legal information for educational purposes
- Originally built for: #75HER Hackathon 2026 — CreateHER Fest
- Finished with: GitHub Copilot — GitHub Finish-Up-A-Thon 2026

---

> ⚠️ HerRights provides general legal information only — not legal advice. Laws vary by country and region. Please consult a qualified lawyer for your specific situation.