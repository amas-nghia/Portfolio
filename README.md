# AMAS Unity Portfolio

A cozy, animated portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, GSAP and shadcn-style design tokens.

## Edit content

Most copy, links, project cards, skills and asset paths live in:

```text
src/config/site.ts
```

Theme colors, typography, radii and shared visual tokens live in:

```text
src/app/globals.css
```

Illustrations live in `public/images`. Replace an image while keeping its filename to update the art without touching a component. The two WebGL assets live in `public/models`; their paths can also be changed from `src/config/site.ts`.

SEO keywords, social preview copy and editable portfolio content are centralized in `src/config/site.ts`. Set `NEXT_PUBLIC_SITE_URL` when using a custom production domain; Vercel's production URL is detected automatically otherwise.

## Components

- `src/components/ui`: reusable shadcn-style primitives
- `src/components/layout`: navigation and layout wrappers
- `src/components/motion`: reusable animation wrappers
- `src/components/projects`: project presentation
- `src/components/sections`: page sections
- `src/components/world`: the reusable 2.5D journey, scroll chapters and isolated Three.js scene

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production build statically renders the portfolio, JSON-LD profile data, `robots.txt` and `sitemap.xml`. GSAP and Three.js are loaded after hydration in isolated client islands, while every heading, project and contact link remains server-rendered and crawlable.
