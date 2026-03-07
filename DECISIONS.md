## Decision Log HerRights VR

## Technical Choices

| Decision | Choice | Reason | Tradeoff |
|----------|--------|---------|----------|
| Project structure | Single HTML file | Zero setup, drag-and-drop deploy, works offline, no Node.js required | All code in one file — harder to maintain at scale |
| 3D Framework | A-Frame 1.4.2 (WebXR) | Works in browser AND VR headsets with no install, large community | Less control than Three.js, some layout quirks |
| Chatbot approach | Rule-based keyword matching | No API key, no billing, works fully offline, zero latency | Less flexible than LLM  can't handle unexpected phrasing |
| Chatbot fallback | Cross-topic keyword detection | Guides users to the right section even if they ask on the wrong panel | Not as smart as a real AI model |
| Styling | Pure CSS in `<style>` tag | No build step, no dependencies, fast load | No component scoping |
| 3D layout | Panels in circle (radius 7 units) | Comfortable viewing distance in both desktop and VR, symmetrical | Panels face only one direction |
| Hosting | Netlify | Free, instant deploy from drag-and-drop or GitHub, auto HTTPS | None for this scale |
| Fonts | Google Fonts CDN | Beautiful Playfair Display + DM Sans, no install | Requires internet on first load |

---

## Risk Log

| Risk | Severity | Fix Applied |
|------|----------|-------------|
| Chatbot gives incorrect legal information | High | Prominent disclaimer on every screen + every chat response ends with legal advice note |
| User in crisis contacts chatbot | High | Emergency keywords trigger immediate crisis hotline response (DV hotline, Crisis Text Line) |
| Panels not visible in VR headset | Medium | Tested panel height (1.6m) and distance (7 units) for standard VR ergonomics |
| A-Frame CDN goes down | Low | App would fail to load  mitigation: could bundle A-Frame locally |
| Legal content accuracy varies by country | Medium | All content marked as general information, users reminded laws vary by region |
| PII entered in chat | Low | No data is stored, logged, or transmitted — all chat is in-memory only |

---

## Known Issues & Next Steps

- [ ] Panels face only one direction  need `look-at` component for full 360° navigation
- [ ] Mobile VR (Google Cardboard) touch controls need improvement
- [ ] Upgrade chatbot to use Goose AI or Anthropic API when API access is available
- [ ] Add multi-language support  Arabic, Spanish, French (major accessibility gap)
- [ ] Add audio narration for users with reading difficulties
- [ ] Verify all legal content with qualified legal professionals per jurisdiction
- [ ] Add more topics  healthcare, education, disability rights
- [ ] Store chat history in localStorage so users can return to their conversation

---

## Why AR/VR Over Other Tracks

The AR/VR track was chosen because:
1. Legal information is often overwhelming in text form  an immersive 3D space creates psychological distance that makes difficult topics feel approachable
2. WebXR runs in any browser with zero install  maximum accessibility
3. Works on VR headsets for fully immersive demos at community centers or legal aid clinics
4. No API key or billing required  the solution works for anyone, anywhere, for free