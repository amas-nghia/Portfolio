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
        const milestoneLayer = worldRoot.querySelector<HTMLElement>("[data-world-milestones]");
        const milestones = gsap.utils.toArray<HTMLElement>("[data-world-milestone]");
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
          milestones.forEach((milestone) => {
            const milestoneChapter = Number(milestone.dataset.worldMilestone);
            milestone.toggleAttribute("data-active", milestoneChapter === index);
            milestone.toggleAttribute("data-passed", milestoneChapter < index);
          });
        };

        const getChapterIndex = (progress: number) => {
          if (progress < 0.18) return 0;
          if (progress < 0.39) return 1;
          if (progress < 0.64) return 2;
          if (progress < 0.84) return 3;
          return 4;
        };

        const updateWorld = (progress: number, mobile: boolean) => {
          worldRoot.dataset.worldProgress = String(progress);
          setChapter(getChapterIndex(progress));
          if (far) gsap.set(far, { xPercent: 0 });
          if (middle) gsap.set(middle, { xPercent: 0 });
          if (foreground) gsap.set(foreground, { xPercent: 0 });
          if (milestoneLayer) {
            gsap.set(milestoneLayer, {
              xPercent: mobile ? 30 - progress * 60 : 0,
            });
          }
          if (progressFill) gsap.set(progressFill, { scaleX: progress });
          window.dispatchEvent(
            new CustomEvent("amas:world-progress", { detail: { progress } }),
          );
        };

        const media = gsap.matchMedia();
        media.add("(min-width: 768px)", () => {
          gsap.set(chapters, { autoAlpha: 0, y: 24 });
          activeIndex = -1;
          setChapter(0, true);

          const trigger = ScrollTrigger.create({
            trigger: worldRoot,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: ({ progress }) => {
              updateWorld(progress, false);
            },
          });
          updateWorld(trigger.progress, false);

          return () => trigger.kill();
        });

        media.add("(max-width: 767px)", () => {
          gsap.set(chapters, { autoAlpha: 0, y: 14 });
          activeIndex = -1;
          setChapter(0, true);

          const trigger = ScrollTrigger.create({
            trigger: worldRoot,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: ({ progress }) => updateWorld(progress, true),
          });
          updateWorld(trigger.progress, true);

          return () => trigger.kill();
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
