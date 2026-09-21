# Design QA

## Reference and implementation

- Reference: `design/reference-fullpage.webp` (809 × 1942)
- Implementation: `http://terminal.local:4173/`
- Desktop evidence: cloud-browser full-page review at 1363 × 936
- Mobile evidence: cloud-browser review in a 390 × 844 viewport

## What matches

- Warm paper background, ink-green type, sage actions and terracotta accents
- Editorial serif display type paired with compact sans-serif navigation and labels
- Oversized illustrated hero, three pinned project cards, process strip, about block and dark illustrated footer
- Organic paper-card treatment, rounded shapes, hand-drawn details and generous breathing room
- Subtle entrance, hover and ambient image movement that keeps the page calm but alive

## Responsive and interaction checks

- Every desktop section resolves to exactly one viewport at 1363 × 936 and 1280 × 720
- Short laptop screens use compact spacing and fluid media heights without clipping section content
- Mobile sections keep a `100svh` minimum but grow naturally when their content needs more room
- Mobile layout has no horizontal overflow at 390 × 844
- Mobile navigation opens and exposes all four section links
- Buttons share the same flat resting state, lift on hover and press down on activation
- GSAP reveal, stagger, floating-image and magnetic-button motion is progressively enhanced after hydration
- Reduced-motion preferences disable the animation layer and leave every element visible
- Primary CTA, itch.io demos, repository and live virtual-tour links are represented by semantic anchors
- Generated illustrations render from local optimized WebP assets

## Rendering, performance and SEO

- Page content remains statically rendered from Server Components; the GSAP controller is a renderless client island
- GSAP is loaded dynamically only after hydration
- Non-critical images are lazy-loaded with responsive `sizes`; the hero stays prioritized
- Canonical metadata, Open Graph, Twitter card, JSON-LD, `robots.txt` and `sitemap.xml` are generated from shared configuration
- TypeScript, ESLint and the production Next.js build pass

## Accepted differences

- Hero headline wraps to three lines instead of two at the QA viewport so the copy remains legible beside the illustration
- Copy and project titles use only verifiable portfolio information rather than the placeholder wording in the concept image
- On narrow mobile screens, content-heavy sections may exceed one viewport so text and controls never clip

## Result

Passed. The implementation preserves the selected cozy, simple art direction while remaining usable and responsive.
