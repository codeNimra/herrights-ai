## 🌸 HerRights VR

> An immersive WebXR experience that puts women's legal rights in their hands literally.

**Live Demo:** (https://her-rights.netlify.app/)
**Track:** AR / VR / XR
**Event:** #75HER Challenge Hackathon CreateHER Fest 2026

---

## 🎯 Problem Frame

| | |
|---|---|
| **User** | Women and marginalized people who face legal situations (workplace, safety, housing, immigration, reproductive rights) but lack access to clear, plain-language legal information |
| **Problem** | Legal information is written in jargon designed for lawyers not for the everyday person who urgently needs to understand their rights |
| **Constraints** | Must work without login, without an API key, without installation accessible on any device including VR headsets |
| **Success Test** | A user with no legal background enters the 3D space, navigates to a topic that matches their situation, and can describe at least 3 of their rights and 1 next step within 3 minutes |

---

## 💡 3-Line Pitch

**Know your rights step inside them.**
HerRights VR is an immersive 3D garden where women and marginalized communities walk through their legal rights with a built-in AI chatbot that answers questions in plain language, no login or API key required.
Try it now → (https://her-rights.netlify.app/)

---

## ✨ What It Does

HerRights VR is a browser-based WebXR experience built with A-Frame. Users enter a warm, Women's Day-themed 3D garden and explore 6 glowing rights panels:

- 💼 **Workplace Rights**  pay equity, harassment, discrimination, parental leave
- 🛡️ **Safety & Protection**  domestic violence, restraining orders, shelters
- 🏠 **Housing & Eviction**  tenant rights, illegal eviction, deposits
- 🌍 **Immigration & Status**  asylum, DACA, rights regardless of status
- 🌸 **Reproductive Rights**  healthcare access, custody, pregnancy discrimination
- ⚖️ **General Legal Rights**  due process, equal treatment, access to justice

Each panel opens a side panel with:

- **Your Rights tab**  6 detailed, plain-language rights cards + resources
- **Ask HerRights AI tab**  a fully working keyword-based chatbot that answers questions, handles emergencies with crisis hotlines, and suggests follow-up questions. Zero API key. Zero login. Works offline.

---

## 🌍 SDG Alignment

| Goal | How |
|---|---|
| **SDG 5  Gender Equality** | Closing the legal knowledge gap specifically for women and marginalized communities |
| **SDG 16  Justice & Strong Institutions** | Making legal systems understandable and accessible to everyone, not just those who can afford lawyers |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| A-Frame 1.4.2 | WebXR 3D scene, VR headset support |
| HTML / CSS / JavaScript | UI, chatbot logic, rights content |
| Google Fonts | Playfair Display + DM Sans typography |
| Netlify | Hosting and deployment |

**No build step. No npm. No API key. No login required.**
Works in any modern browser and in VR headsets via the built-in WebXR button.

---

## 🚀 Quickstart

```bash
# Clone the repo
git clone https://github.com/codeNimra/herrights-vr
cd herrights-vr

# Open directly in browser no install needed
open index.html
```

Or just visit the live demo link above.

---

## 🏗️ Architecture

```
index.html
├── CSS Styles          — all visual design, responsive layout
├── A-Frame Scene       — 3D garden, 6 rights panels, lighting, animations
├── TOPICS data         — 6 topics × 6 rights cards + keywords + resources
├── SUGGESTIONS data    — 4 suggested questions per topic
├── getBotReply()       — rule-based chatbot (keyword matching, no API)
└── UI Logic            — panel open/close, tab switching, chat rendering
```

The chatbot uses keyword matching against both user input and rights content. It handles greetings, thanks, emergencies, documentation questions, discrimination questions, and cross-topic detection all without any external API.

---

## 📋 Key Technical Decisions

See [DECISIONS.md](./DECISIONS.md) for the full decision log.

| Decision | Choice | Reason |
|---|---|---|
| Single HTML file | No framework | Zero setup, drag-and-drop deploy, works offline |
| A-Frame for 3D | WebXR standard | Works in browser AND VR headsets with no install |
| Rule-based chatbot | No API key | Fully free, works offline, no billing required |
| Panels in circle | Radius = 7 units | Comfortable viewing distance in both desktop and VR |

---

## ⚠️ Known Issues & Next Steps

- [ ] Panels face only one direction — need `look-at` component for full 360° viewing
- [ ] Chatbot could be upgraded to use Goose AI or Anthropic when API access is available
- [ ] Add multi-language support (Arabic, Spanish, French) major accessibility gap
- [ ] Add audio narration of rights for users with reading difficulties
- [ ] Mobile touch controls need improvement for phone-based VR (Google Cardboard)

---

## 📜 License

MIT License see [LICENSE](./LICENSE)

---

##  Credits

- 3D Framework: [A-Frame](https://aframe.io) by Mozilla
- Fonts: [Google Fonts](https://fonts.google.com) Playfair Display, DM Sans
- Legal content: General public legal information compiled for educational purposes
- Built for: [#75HER Challenge Hackathon 2026](https://createherfest.com) CreateHER Fest

---

> ⚠️ HerRights VR provides general legal information only not legal advice. Laws vary by country and region. Please consult a qualified lawyer for your specific situation.
