"use client";

import { useEffect } from "react";

export function WorldMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-world-scroll]");
    if (!root) return;
    const worldRoot = root;

    let cancelled = false;
    let cleanup = () => {};

    async function setupMotion() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        const chapters = gsap.utils.toArray<HTMLElement>("[data-world-chapter]");
        const progressItems = gsap.utils.toArray<HTMLElement>("[data-world-step]");
        const far = worldRoot.querySelector<HTMLElement>("[data-world-layer='far']");
        const middle = worldRoot.querySelector<HTMLElement>("[data-world-layer='middle']");
        const foreground = worldRoot.querySelector<HTMLElement>("[data-world-layer='foreground']");
        const progressFill = worldRoot.querySelector<HTMLElement>("[data-world-progress-fill]");
        let activeIndex = -1;

        const setChapter = (index: number, immediate = false) => {
          if (index === activeIndex) return;
          activeIndex = index;
          chapters.forEach((chapter, chapterIndex) => {
            const active = chapterIndex === index;
            chapter.toggleAttribute("data-active", active);
            gsap.to(chapter, {
              autoAlpha: active ? 1 : 0,
              y: active ? 0 : 24,
              duration: immediate ? 0 : 0.48,
              ease: "power3.out",
              overwrite: true,
            });
          });
          progressItems.forEach((item, itemIndex) => {
            item.toggleAttribute("data-active", itemIndex === index);
            if (itemIndex === index) item.setAttribute("aria-current", "step");
            else item.removeAttribute("aria-current");
          });
        };

        const media = gsap.matchMedia();
        media.add("(min-width: 768px)", () => {
          gsap.set(chapters, { autoAlpha: 0, y: 24 });
          setChapter(0, true);

          const trigger = ScrollTrigger.create({
            trigger: worldRoot,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: ({ progress }) => {
              const chapterIndex = Math.min(
                chapters.length - 1,
                Math.floor(progress * chapters.length),
              );
              setChapter(chapterIndex);
              if (far) gsap.set(far, { xPercent: progress * -1.5 });
              if (middle) gsap.set(middle, { xPercent: progress * -4.5 });
              if (foreground) gsap.set(foreground, { xPercent: progress * -7 });
              if (progressFill) gsap.set(progressFill, { scaleX: progress });
              window.dispatchEvent(
                new CustomEvent("amas:world-progress", { detail: { progress } }),
              );
            },
          });

          return () => trigger.kill();
        });

        media.add("(max-width: 767px)", () => {
          gsap.set(chapters, { clearProps: "all" });
          window.dispatchEvent(
            new CustomEvent("amas:world-progress", { detail: { progress: 0.12 } }),
          );
        });

        cleanup = () => media.revert();
      }, worldRoot);

      const previousCleanup = cleanup;
      cleanup = () => {
        previousCleanup();
        context.revert();
      };
      ScrollTrigger.refresh();
    }

    void setupMotion();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
