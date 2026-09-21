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

- Desktop navigation and fixed header remain readable over the hero
- Mobile layout has no horizontal overflow at 390 × 844
- Mobile navigation opens and exposes all four section links
- Primary CTA, itch.io demos, repository and live virtual-tour links are represented by semantic anchors
- Generated illustrations render from local optimized WebP assets

## Accepted differences

- Hero headline wraps to three lines instead of two at the QA viewport so the copy remains legible beside the illustration
- Copy and project titles use only verifiable portfolio information rather than the placeholder wording in the concept image
- Full-page height is longer than the concept because the implementation preserves readable project descriptions and responsive spacing

## Result

Passed. The implementation preserves the selected cozy, simple art direction while remaining usable and responsive.
