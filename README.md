## herrights-ai

## ⚖️ HerRights AI

> Plain-language legal rights assistant for women and marginalized communities.

## Problem Frame

- **User:** Women and marginalized people facing legal situations (workplace, safety, housing, immigration, reproductive rights)
- **Problem:** Legal information is written in jargon that's impossible to navigate without expensive legal help
- **Constraints:** Must work without login, be mobile-friendly, and never store personal data
- **Success Test:** A user with no legal background can describe their situation and receive clear, actionable guidance in under 60 seconds

## 3-Line Pitch

**Know your rights — without a law degree.**
HerRights AI translates legal jargon into plain language, giving women and marginalized communities the clarity to understand their options and take action.
Try it now → [your-deployed-link]

## SDG Alignment

- 🟣 **SDG 5** — Gender Equality: Closing the legal knowledge gap for women
- ⚖️ **SDG 16** — Justice & Strong Institutions: Making legal systems accessible to all

## Tech Stack

- React 18 + Vite
- Anthropic Claude API
- Pure CSS (no UI library)

## Quickstart

```bash
git clone https://github.com/yourusername/herrights-ai
cd herrights-ai
cp .env.example .env        # Add your Anthropic API key
npm install
npm run dev
```

## Architecture

```
User Input → App.jsx (stage manager)
  → HomeScreen (topic selection)
  → RegionScreen (location context)
  → ChatScreen → Anthropic API → formatted response
```

## Credits

- AI: Anthropic Claude API
- Fonts: Google Fonts (Playfair Display, DM Sans)
- Built for: #75HER Challenge Hackathon 2026 / CreateHER Fest

## Disclaimer

HerRights AI provides general legal information only — not legal advice. Always consult a qualified lawyer for your specific situation.