# Decision Log

## Technical Choices

| Decision | Choice | Reason | Tradeoff |
|----------|--------|---------|----------|

| Framework | React + Vite | Fast dev setup, component reuse | Requires Node.js |
| AI Backend | Anthropic Claude API | Best instruction-following for sensitive topics | API cost at scale |
| Styling | Inline styles | Zero config, portable | Verbose JSX |
| State | useState only | Simple scope, no auth needed | Not scalable beyond MVP |
| Routing | Stage-based (home/region/chat) | No router dependency | Not deep-linkable |

## Known Issues & Next Steps

- [ ] Goose (Block) integration for AI/ML track eligibility
- [ ] Add streaming responses for better UX
- [ ] Add multi-language support (a major accessibility gap)
- [ ] Store conversation locally so users can return
- [ ] Verify legal content with actual legal professionals

## Risk Log

- **Risk:** AI could give incorrect legal information → **Fix:** Prominent disclaimer on every screen + system prompt instructs model to always recommend consulting a lawyer
- **Risk:** PII in chat → **Fix:** No data is stored or logged; all conversation is in-memory only
