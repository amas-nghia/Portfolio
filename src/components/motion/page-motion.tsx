"use client";

import { useEffect } from "react";

type GsapElement = HTMLElement & {
  dataset: DOMStringMap & {
    gsap?: "reveal" | "image" | "project" | "chip" | "step";
    gsapDelay?: string;
    gsapFloat?: string;
  };
};

const motionPresets = {
  reveal: { opacity: 0, y: 28 },
  image: { opacity: 0, y: 22, scale: 0.965, rotate: -0.35 },
  project: { opacity: 0, y: 42, scale: 0.96, rotate: -0.6 },
  chip: { opacity: 0, y: 12, scale: 0.9 },
  step: { opacity: 0, y: 20, scale: 0.94 },
} as const;

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let cleanup = () => {};

    async function setupMotion() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const interactionCleanups: Array<() => void> = [];
      const context = gsap.context(() => {
        const animatedElements = gsap.utils.toArray<GsapElement>("[data-gsap]");

        animatedElements.forEach((element) => {
          const presetName = element.dataset.gsap ?? "reveal";
          const preset = motionPresets[presetName];
          const delay = Number(element.dataset.gsapDelay ?? 0);

          gsap.fromTo(element, preset, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: presetName === "chip" ? 0.48 : 0.78,
            delay,
            ease: "back.out(1.35)",
            clearProps: "opacity,transform,visibility",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          });
        });

        const floatingElements = gsap.utils.toArray<HTMLElement>("[data-gsap-float]");
        floatingElements.forEach((element, index) => {
          gsap.to(element, {
            y: index % 2 === 0 ? -8 : -6,
            rotate: index % 2 === 0 ? 0.3 : -0.25,
            duration: 3.6 + index * 0.35,
            delay: 0.8 + index * 0.12,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });

        const sections = gsap.utils.toArray<HTMLElement>("[data-gsap-section]");
        sections.forEach((section) => {
          const accent = section.querySelector<HTMLElement>("[data-gsap-accent]");
          if (!accent) return;

          gsap.fromTo(
            accent,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 82%", once: true },
            },
          );
        });

        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          const magneticElements = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
          magneticElements.forEach((element) => {
            const moveX = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3.out" });
            const moveY = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3.out" });

            const onPointerMove = (event: PointerEvent) => {
              const bounds = element.getBoundingClientRect();
              moveX((event.clientX - bounds.left - bounds.width / 2) * 0.1);
              moveY((event.clientY - bounds.top - bounds.height / 2) * 0.12);
            };
            const onPointerLeave = () => {
              moveX(0);
              moveY(0);
            };

            element.addEventListener("pointermove", onPointerMove, { passive: true });
            element.addEventListener("pointerleave", onPointerLeave);
            interactionCleanups.push(() => {
              element.removeEventListener("pointermove", onPointerMove);
              element.removeEventListener("pointerleave", onPointerLeave);
            });
          });
        }
      });

      cleanup = () => {
        interactionCleanups.forEach((dispose) => dispose());
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
