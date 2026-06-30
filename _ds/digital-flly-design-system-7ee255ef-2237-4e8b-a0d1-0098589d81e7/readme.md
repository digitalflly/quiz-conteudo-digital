# Digital Flly Design System

> ⚠️ **Working name.** "Digital Flly" is a placeholder I picked from the brand's
> material vocabulary (earthy palette, hand-pressed Berton type, Portuguese
> copy hints). Rename freely — search-replace "Digital Flly" and you're done.

Digital Flly is an artisan / boutique brand system: hand-made objects, slow
craftsmanship, warm earthy materials. The system pairs a textured
hand-pressed display family (Berton) with a clean geometric sans
(Poppins) on a five-color earth palette grounded in coffee-bean, clay,
bronze, sand, and cream.

The system is intentionally **product-agnostic** — it works equally well
for a coffee roastery, a leather goods atelier, a boutique hotel/pousada,
or an artisanal homewares shop. The included UI kit demonstrates it on a
small e-commerce storefront.

## Source materials

This system was reverse-engineered from the materials in `uploads/`:
- `Captura de Tela 2026-06-10 às 19.02.20.png` — the brand color
  palette spec (5 anchor colors with hex labels, captioned "Paleta de
  cores" in Portuguese).
- `Berton-Roman-trial.ttf`, `Berton-Voyage-trial.ttf` — display fonts
  (trial copies — the underline glyph contains a "DESIGNFONTES.COM"
  watermark, so we never apply `text-decoration: underline` to
  Berton-set text).
- `Berton-Family-CC-BY-NCLicensepdf.pdf` — license. CC-BY-NC: free for
  non-commercial use; commercial use requires purchasing a license from
  the foundry. **Flagged for the user to confirm before production
  deployment.**
- `poppins.zip` — full Poppins family (Thin → Black, italics).

No Figma or codebase was attached. If a real product codebase or Figma
file exists, link it here and re-run.

---

## Content fundamentals

Digital Flly's voice is **slow, deliberate, and proud of process.** It speaks
in plain Portuguese (with optional English) — never marketing-ese.

- **Tone** — calm, confident, never urgent. Avoid hype words ("amazing",
  "incrível", "imperdível"). Lean into specifics about material and time
  ("curtido em Minas", "roastado semanalmente").
- **Person** — first-person plural ("nós") for the brand, second-person
  singular ("você") for the customer. Never "vocês" or formal "senhor/a".
- **Casing** — sentence case for everything except the brand wordmark,
  Berton-set headlines (which Berton naturally rough-edges), and
  **Eyebrow** labels (UPPERCASE Poppins 500, 0.18em tracking — the
  brand's most recognizable typographic gesture).
- **Punctuation** — em-dashes ("—") over commas for editorial pauses.
  Curly quotes always. Ampersands welcome ("Digital Flly").
- **Numbers** — Brazilian formatting: `R$ 1.250,00`, dates `12 jun 2026`.
- **Emoji** — ❌ never. The brand carries warmth through type and color,
  not glyph emoji.

### Voice examples

| ✅ Digital Flly                                 | ❌ Not Digital Flly                           |
| ------------------------------------------ | ---------------------------------------- |
| "Couro curtido em Minas, dobrado à mão."   | "O melhor couro do Brasil! 🔥"           |
| "Frete grátis acima de R$ 120."            | "FRETE GRÁTIS — só hoje!"                |
| "Você quer receber novidades?"             | "Inscreva-se na nossa newsletter!"       |
| "Cada peça leva o tempo que precisa."      | "Compre agora, parcele em 12x!"          |

---

## Visual foundations

**Palette.** Five anchor earth tones, extended to 50–900 ramps. No pure
black or pure white in body UI — `--ink` (#27150d) replaces black,
`--paper-50` (#faf8f7) replaces white. Semantic colors (success/warn/
danger/info) are kept earthy: moss, amber, terracotta, slate — never
pure red/green/yellow/blue.

**Type.**
- **Berton** (Roman + Voyage italic) for headlines, hero, editorial
  pull-quotes, signatures. Use it _big_ (32px+) so the texture reads;
  below ~20px it muddies. Set with `letter-spacing: -0.01em` and tight
  `line-height: 0.95–1.1`.
- **Poppins** for everything UI. 14–16px body, 11–12px metadata.
  Weights used: 400 / 500 / 600 / 700.
- **Voyage italic** is reserved for accent moments (one per long-form
  section) — quotes, signatures, the occasional decorative title.
- ⚠️ Trial fonts — never use `text-decoration: underline` on Berton
  (watermark). Use `border-bottom` on the wrapping element instead.

**Backgrounds.** Digital Flly is _paper-based_ — cream/off-white surfaces by
default, no gradients, no hand-drawn illustrations. Imagery is sparse
and warm-toned (sepia / warm white-balance), often with subtle film
grain. Full-bleed photography is used for hero moments only.

**Borders.** Hair-thin (`1px`) in `--border-subtle` (taupe @ 35%) for
quiet separation; `--border` (taupe @ 65%) for active separators.
Avoid heavy borders.

**Shadows.** Warm-toned — built from `--ink` via `color-mix`, never
neutral grey. Soft, low-spread (xs/sm/md). Heavy shadows (`lg`, `xl`)
are reserved for modal overlays.

**Corner radii.** Soft but not blobby — 4 / 8 / 12 / 16 / 24 / pill.
Buttons and inputs use 8px (md), cards use 12px (lg). The `pill` is
reserved for badges and hero CTAs only.

**Hover & press.**
- Hover: surface fills shift one shade darker (e.g. primary button
  `--brand` → `--brand-hover`).
- Active/press: `transform: translateY(1px)` plus an even-darker fill.
  No scale-down — buttons stay rectangular.
- Focus: 3px outer ring in `--focus-ring` (clay @ 45%).

**Motion.** Slow, deliberate, no bounces. Durations: 120 / 200 / 360 /
600 ms. Easings: `--ease-out` for entrances, `--ease-in-out` for state
changes. No springs. No infinite decorative loops.

**Transparency & blur.** Used only where physically meaningful —
overlay scrim (modal backdrop), sticky header backdrop. Never for
decoration.

**Layout.** Generous margins. Containers max-out at 1280–1440px. Eyebrow
+ display title + body is the canonical content rhythm. Editorial
sections often use `--space-20` (80px) of vertical padding.

---

## Iconography

Digital Flly uses **Lucide** (lucide.dev) — open-source, lightweight, organic
stroke icons that match Berton's hand-pressed feel. Stroke width is
fixed at **2px**, line-caps/joins **round**.

- **Loading** — UI kits and component cards import Lucide from CDN
  (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) or inline
  the SVGs from `assets/icons/`.
- **SVG vs font** — always SVG. Digital Flly has no icon font.
- **Sizing** — 14px (sm), 16px (default), 20px (md), 24px (lg).
- **Color** — always `currentColor`; never hard-coded.
- **Emoji** — ❌ never used as icons.
- **Unicode glyphs** — only the ornament glyphs `✦`, `❋`, `❀` for the
  `Divider` ornament variant. Set in Berton, never as system emoji.

The `assets/icons/` directory ships a starter set (16 icons covering
checkout, navigation, social, status). Extend it by copying additional
Lucide SVGs in — keep the stroke-2 / round-cap style consistent.

> **Flagged:** Berton trial fonts. License (CC-BY-NC) permits
> non-commercial use only — confirm with the user before any production
> deployment.

---

## Index

```
styles.css                ← entry, just @imports
tokens/                   ← CSS custom properties
  colors.css   typography.css   spacing.css
  radii.css    shadows.css      motion.css
  fonts.css    base.css

components/core/          ← Reusable primitives (single group)
  Button   IconButton   Input   Textarea
  Card     Badge        Avatar  AvatarGroup
  Switch   Divider      Eyebrow Quote

cards/                    ← Foundation specimen cards (Design System tab)

assets/
  fonts/      ← Berton + Poppins TTFs
  icons/      ← Lucide starter set (SVG)

ui_kits/store/            ← Boutique storefront UI kit (demo product surface)

SKILL.md                  ← Agent-Skill front matter for Claude Code use
readme.md                 ← This file
```

Each component directory contains `<Name>.jsx`, `<Name>.d.ts`, and
`<Name>.prompt.md`. The compiler bundles them at `_ds_bundle.js` and
exposes them on `window.<Namespace>DesignSystem_<hash>` (current: `BertolaDesignSystem_*` until you rename the project from the menu).

---

## Open questions for the user

1. **Brand name.** "Digital Flly" is my placeholder — what's the real name?
2. **Product category.** Is this a coffee roastery, leather/goods
   atelier, hospitality (pousada/hotel), or something else? I picked
   storefront for the UI kit but it pivots easily.
3. **Berton license.** Trial fonts are CC-BY-NC. Will you license the
   commercial cut, or substitute? Nearest Google Fonts match would be
   **Caveat Brush** or **Rye** — both lose the letterpress grain.
4. **Real Figma / codebase.** If any exist, share so the components can
   match production exactly.
