---
name: catering-site
description: Build or extend the static Angular + CSS pure-veg South Indian catering website (Visakhapatnam). Use for any task in this repo — scaffolding, adding pages/components/dishes/services, rebranding for a new client, styling with the regional design system, SEO, or deploy prep. Enforces PROJECT_RULES, ARCHITECTURE, and the ORCHESTRATOR phases.
---

# Catering Site Skill

You are working on a **static, prerendered Angular website** for a **pure-vegetarian South Indian catering business in Visakhapatnam**. Plain CSS only. No backend. Branding is a template variable.

## Always do first

1. Read `docs/PROJECT_RULES.md` (conventions, hard constraints).
2. Read the relevant section of `docs/ARCHITECTURE.md` (layers, module contracts).
3. Find the phase in `docs/ORCHESTRATOR.md` that matches the task and follow its entry → tasks → gate.
4. Check `PLAN.md` only if you need the original intent.

## Hard constraints (never break)

- Standalone Angular components, `OnPush`, `inject()`, signals, `@if/@for` control flow.
- Plain CSS. All values from `src/styles/tokens.css`. No SCSS / Tailwind / UI libraries.
- Business name, phone, WhatsApp, email, address, socials come from `SITE_CONFIG` (`src/app/config/site.config.ts`). Never hard-code them.
- Menu, services, testimonials, gallery, FAQs come from `src/app/data/*.data.ts`. Never inline them in components.
- **Pure veg only.** No egg, meat, or seafood anywhere, including examples.
- Every route prerendered. Guard `window`/`document` with `isPlatformBrowser`.
- Enquiries = WhatsApp / `tel:` / `mailto:` links via `WhatsappService`. No forms unless explicitly asked.
- Placeholder content is marked `// TODO(client):`.

## Layer map (import only downward)

```
config/ + models/  →  data/  →  core/  →  shared/components/  →  pages/  →  app.*
```

## Task recipes

### Add a dish
Edit `src/app/data/menu.data.ts` → find category → append `MenuItem` (`name`, `teluguName?`, `description`, `tags?`, `isSpicy?`). Done. Menu page filter picks it up.

### Add a menu category
Append a `MenuCategory` to `menu.data.ts` with `id`, `title`, `teluguTitle?`, `description`, `icon`, `items`. Add a hero/category image under `public/images/menu/` if needed.

### Add a service
Append `CateringService` to `src/app/data/services.data.ts`. Image under `public/images/services/`.

### Add a page
1. `src/app/pages/<name>/<name>.component.{ts,html,css}` — OnPush, one `<h1>`, `SeoService.setPage()` in `ngOnInit`.
2. Lazy `loadComponent` route in `src/app/app.routes.ts` (SEO lives in the page's `setPage()` call, not route data).
3. Add link in `shared/components/navbar` (and footer quick links).
4. Add the link to `shared/nav-links.ts` — navbar, footer and the generated sitemap all read from it.
5. Run build, verify `dist/<app>/browser/<name>/index.html` exists.

### Add a shared component
`src/app/shared/components/<name>/` — presentational only, `input()`/`output()`, tokens-only CSS, keyboard operable. May inject only `SITE_CONFIG` and `WhatsappService`.

### Rebrand for a new client
1. Edit `src/app/config/site.config.ts` (all fields).
2. Adjust palette/fonts in `src/styles/tokens.css`.
3. Drop client photos into `assets-src/images/**` (JPG/PNG, mirroring `public/images/`), run `npm run images:convert`.
4. `siteUrl` in config drives `sitemap.xml`/`robots.txt` (generated at build) and JSON-LD (SeoService). Update `theme-color` in `index.html` and `public/manifest.webmanifest` + `public/favicon.svg` (then `npm run images:favicons`).
5. Rebuild; confirm name appears in navbar, footer, `<title>`, WhatsApp text.

### Style something
Use tokens: `var(--color-primary)`, `var(--space-4)`, `var(--font-display)`, `var(--radius-md)`, `var(--shadow-sm)`. Mobile-first; breakpoints `48rem`, `64rem`, `80rem`. Regional motifs available: `.kolam-divider`, `.temple-arch`, `.leaf-card`, `.veg-badge`, `.mandala-bg`. Respect `prefers-reduced-motion`.

### Prepare for deploy
Run Phase 7–9 of `docs/ORCHESTRATOR.md`. Deploy folder is `dist/<app>/browser`.

## Regional identity cheatsheet

- Palette: maroon `#8B1A1A`, marigold gold `#E9A825`, leaf green `#2F6B3A`, ivory `#FFF8EC`, ink `#2B1D14` (defined once in tokens).
- Display font with classical Indian feel (`Yatra One` / `Tiro Telugu`), body `Poppins`.
- Telugu greeting "స్వాగతం" in hero; Telugu dish names via `teluguName`.
- Motifs: kolam, temple arch, banana leaf, brass lamp, marigold.
- Copy references Visakhapatnam / Vizag / Andhra naturally.

## Definition of done (every task)

- `npm run build` passes, no warnings.
- Works at 360 / 768 / 1280 px.
- Keyboard navigable, no console errors, no hydration warnings.
- Rules above respected. New placeholders marked `TODO(client)`.

## Report format

When finishing, state: what changed (files), which ORCHESTRATOR phase/gate was satisfied, how it was verified, and any `TODO(client)` items added.
