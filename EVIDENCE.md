# Evidence Log — HerRights (GitHub Finish-Up-A-Thon Edition)

---

## GitHub Copilot Usage Evidence

This project was rebuilt using GitHub Copilot as the primary development assistant during the GitHub Finish-Up-A-Thon challenge (May 21 – June 7, 2026).

### Copilot Features Used

| Feature | How Used |
|---|---|
| **Copilot Chat (VS Code)** | Architecture planning, prompt-driven feature implementation, debugging |
| **Inline completions** | CSS animations, JavaScript event handlers, ARIA attributes |
| **Copilot Edits** | Refactoring monolithic JS functions into isolated try-catch blocks |
| **Explain This** | Understanding Web Speech API browser compatibility matrix |

### Key Copilot Conversations (Summarized)

**Session 1 — Architecture Review**
Prompt: *"Review this single HTML file and identify the top 5 production-readiness issues"*
Copilot identified: volatile state, no accessibility, A-Frame conflicts, no offline support, no error isolation.
All 5 were fixed during this challenge.

**Session 2 — localStorage Persistence**
Prompt: *"Add localStorage persistence for chat history. Key by topic ID. Handle QuotaExceededError."*
Result: Complete persistence layer in ~40 lines, including graceful degradation.

**Session 3 — Web Speech API**
Prompt: *"Implement voice input with Web Speech API. Handle Chrome, Edge, Safari differences. Add pulse animation while listening."*
Result: Cross-browser voice implementation with feature detection.

**Session 4 — Accessibility Audit**
Prompt: *"Audit this HTML for WCAG 2.1 AA compliance. Add missing ARIA roles, labels, and keyboard handlers."*
Result: 6 ARIA fixes including focus trap for emergency overlay.

**Session 5 — Performance Optimization**
Prompt: *"Replace this A-Frame WebGL scene with a pure CSS particle system. Optimize for 60fps on integrated graphics."*
Result: Complete replacement — load time reduced from 2.8s to 0.4s.

---

## Libraries & Frameworks

| Library | Version | License | Source | Usage |
|---|---|---|---|---|
| A-Frame | 1.4.2 | MIT | cdnjs.cloudflare.com | **Removed in v2** — replaced with CSS particles |
| Google Fonts — Playfair Display | Latest | Open Font License | fonts.googleapis.com | Headings typography |
| Google Fonts — DM Sans | Latest | Open Font License | fonts.googleapis.com | Body typography |

**No other external libraries used.** All functionality implemented in vanilla HTML/CSS/JavaScript.

---

## Browser APIs Used

| API | Purpose | Fallback |
|---|---|---|
| Web Speech API | Voice input | Toast notification: "Voice input not available in this browser" |
| Web Share API | Native share on mobile | Copy URL to clipboard + toast notification |
| localStorage API | Chat persistence, country, progress | Silent fallback — app works without storage |
| Service Worker API | PWA offline caching | App works online without SW registration |
| Clipboard API | Copy-to-clipboard fallback for share | execCommand fallback for older browsers |

---

## Legal Content Sources

All legal content is general educational information compiled from public government and nonprofit sources. It is explicitly NOT legal advice.

| Topic | Primary Sources |
|---|---|
| Workplace Rights | EEOC (eeoc.gov), ILO conventions, UK ACAS |
| Safety & Protection | thehotline.org, loveisrespect.org |
| Housing & Eviction | HUD (hud.gov), Shelter UK, tenant rights public guides |
| Immigration & Status | USCIS (uscis.gov), UNHCR refugee guidelines, ACLU |
| Reproductive Rights | ACLU Reproductive Freedom, WHO maternal health guidelines |
| General Legal Rights | ACLU Know Your Rights, UN Universal Declaration of Human Rights |

---

## Crisis Resources Cited In App

| Resource | Contact | License to Reference |
|---|---|---|
| National Domestic Violence Hotline | 1-800-799-7233 | Public — thehotline.org |
| Crisis Text Line | Text HOME to 741741 | Public — crisistextline.org |
| Emergency Services | 911 / 999 / 112 | Public international emergency numbers |

---

## Assets & Media

| Asset | Source | License |
|---|---|---|
| All icons | Unicode emoji (system fonts) | System — no license required |
| No images used | — | — |
| No audio files used | — | — |
| No video files used | — | — |
| No proprietary datasets | — | — |

---

## No AI-Generated Legal Content

All legal rights content was written by the developer based on publicly available legal information sources listed above. No AI model was used to generate legal content. The chatbot responses are rule-based keyword matching — not AI-generated text.

---

## Original Hackathon Submission

This project was originally submitted to:
- **Event:** #75HER Challenge Hackathon — CreateHER Fest 2026
- **Track:** AR/VR/XR
- **Date:** March 7, 2026
- **Original Devpost:** https://devpost.com/software/herrights-vr

The GitHub Finish-Up-A-Thon version represents a substantial rebuild of the original submission using GitHub Copilot as documented above.

---

## Commit History Note

The repository commit history reflects the full development arc:
- **Pre-challenge commits** (before May 21): Hackathon prototype — A-Frame scene, basic chatbot, side panel UI
- **Challenge commits** (May 21 – June 7): Complete rebuild — CSS particles, onboarding, voice, PWA, accessibility, localStorage, error isolation

The delta between these two phases is the transformation this challenge documents.