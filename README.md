# AMAS Unity Portfolio

A cozy, animated portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4 and shadcn-style design tokens.

## Edit content

Most copy, links, project cards, skills and asset paths live in:

```text
src/config/site.ts
```

Theme colors, typography, radii and shared visual tokens live in:

```text
src/app/globals.css
```

Illustrations live in `public/images`. Replace an image while keeping its filename to update the art without touching a component.

## Components

- `src/components/ui`: reusable shadcn-style primitives
- `src/components/layout`: navigation and layout wrappers
- `src/components/motion`: reusable animation wrappers
- `src/components/projects`: project presentation
- `src/components/sections`: page sections

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
