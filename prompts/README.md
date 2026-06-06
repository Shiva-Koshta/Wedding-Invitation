# Image generation prompts

Each `.md` here is the AI prompt for one placeholder image used in the storybook.
The app currently ships themed **SVG placeholders** in `public/images/` so everything
renders today. To swap in real art:

1. Generate the image with the prompt in the matching file.
2. Save it into `public/images/` (e.g. `groom-portrait.png`).
3. Point the path at it in **`src/constants.ts` → `IMAGES`**
   (change `'/images/groom-portrait.svg'` → `'/images/groom-portrait.png'`).

That single map (`IMAGES`) is the only place paths live, so each swap is a one-line edit.

## Shared style (paste into every prompt)
> Watercolor storybook illustration, Indian fairytale aesthetic. Palette: warm
> off-white background (#FAF6EF), antique gold (#C8A04A), champagne gold (#D8B56A),
> deep maroon accents (#7A1E1E), muted marigold-yellow florals (#E8B23A). Soft
> hand-painted edges, delicate gold-leaf linework, gentle aged-paper texture.
> No text, no lettering, no watermark.

## Files
| File | Used on | Type |
|------|---------|------|
| `cover-manuscript.md` | Cover page backdrop | Background |
| `groom-portrait.md` | Groom page (Vishal) | Portrait — **you supply** |
| `bride-portrait.md` | Bride page (Monika) | Portrait — **you supply** |
| `families-union.md` | Families page | Illustration |
| `announcement-scene.md` | Announcement page backdrop | Illustration |
| `mandap-backdrop.md` | Schedule/venue page backdrop | Background |
| `floral-corner.md` | Animated frame corners (all pages) | Ornament (PNG w/ transparency) |
| `floral-divider.md` | Section dividers inside pages | Ornament (PNG w/ transparency) |
