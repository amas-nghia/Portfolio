/**
 * Main content configuration.
 * Edit copy, links, project cards, skills and asset paths here without touching layout components.
 */
export const siteConfig = {
  name: "AMAS",
  role: "Freelance Unity Developer",
  description:
    "Unity and C# game developer focused on clear mechanics, mobile puzzle games and shareable WebGL prototypes.",
  seo: {
    locale: "en_US",
    keywords: [
      "Unity developer",
      "C# game developer",
      "mobile puzzle game developer",
      "Unity WebGL developer",
      "game prototyping",
      "freelance game developer",
    ],
    openGraphImage: "/images/world/mekong-background.webp",
    openGraphImageAlt: "Stylized Mekong landscape from the AMAS Unity developer portfolio",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Unity Developer · Game Prototyper",
    title: "Walk through the worlds I build.",
    description:
      "Mobile puzzles, strange streets and playful prototypes — built to be tested, understood and enjoyed.",
    primaryAction: { label: "Start the journey", href: "#work" },
    secondaryAction: {
      label: "Open game demos",
      href: "https://amasi.itch.io/",
    },
    image: "/images/hero-workspace.webp",
    facts: ["~3 years Unity / C#", "5 recent mobile puzzle builds"],
  },
  world: {
    background: "/images/world/mekong-background.webp",
    midground: "/images/world/mekong-midground.webp",
    foreground: "/images/world/mekong-foreground-clean.webp",
    characterModel: "/models/amas-walking.glb",
    idleCharacterModel: "/models/amas-idle.glb",
    groundModel: "/models/mekong-path.glb",
    interactionHint: "Scroll to walk",
  },
  projects: [
    {
      title: "Mobile Puzzle Lab",
      type: "Playable collection",
      description:
        "Recent mobile puzzle prototypes focused on readable interactions, fast iteration and touch-friendly feedback.",
      image: "/images/project-mobile-puzzle.webp",
      href: "https://amasi.itch.io/",
      action: "Play on itch.io",
      tags: ["Unity", "Mobile", "Puzzle"],
    },
    {
      title: "Night Sweeper",
      type: "Game prototype",
      description:
        "A Vietnamese first-person cleaning and evasion concept built around atmosphere, clear rules and environmental storytelling.",
      image: "/images/project-night-sweeper.webp",
      href: "https://github.com/amas-nghia/Night-Sweeper",
      action: "View repository",
      tags: ["Unity", "PC", "Prototype"],
    },
    {
      title: "Cổ Loa Virtual Tour",
      type: "Web experience",
      description:
        "A browser-based virtual tour that turns a real place into an accessible interactive experience.",
      image: "/images/project-virtual-tour.webp",
      href: "https://amas-nghia.github.io/vrtour-co-loa/",
      action: "Open live demo",
      tags: ["WebGL", "3D", "Virtual tour"],
    },
  ],
  process: {
    eyebrow: "How I build",
    title: "Small steps, playable early.",
    description:
      "I keep the loop visible from the first prototype, test the risky parts early, then spend polish where players can feel it.",
    image: "/images/process.webp",
    steps: [
      { label: "Idea", detail: "Find the smallest clear loop." },
      { label: "Prototype", detail: "Make the mechanic playable." },
      { label: "Test", detail: "Observe, measure and revise." },
      { label: "Polish", detail: "Sharpen feedback and delivery." },
    ],
  },
  about: {
    eyebrow: "A little about me",
    title: "Built with curiosity and practical iteration.",
    paragraphs: [
      "I turn small ideas into clear, testable game experiences. My work spans gameplay systems, UI flows, rapid prototypes and browser-ready demos.",
      "I enjoy collaborating with small teams where design and engineering stay close — discussing the mechanic, testing it quickly and improving what actually reaches the player.",
    ],
    image: "/images/about-workspace.webp",
    skills: ["Unity", "C#", "Mobile", "WebGL", "Gameplay systems", "Rapid prototyping"],
  },
  contact: {
    eyebrow: "Have a mechanic in mind?",
    title: "Let’s make something playable.",
    description:
      "See the playable builds first, then reach out through the profile link that works best for you.",
    primaryAction: {
      label: "Start a project",
      href: "https://amasi.itch.io/",
    },
    secondaryAction: {
      label: "View GitHub",
      href: "https://github.com/amas-nghia",
    },
    background: "/images/footer-night.webp",
  },
  social: [
    { label: "itch.io", href: "https://amasi.itch.io/" },
    { label: "GitHub", href: "https://github.com/amas-nghia" },
  ],
} as const;

export type Project = (typeof siteConfig.projects)[number];
