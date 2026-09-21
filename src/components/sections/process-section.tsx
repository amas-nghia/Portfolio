import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function ProcessSection() {
  const { process } = siteConfig;

  return (
    <section id="process" data-gsap-section="process" className="viewport-section section-pad scroll-mt-20 bg-secondary/45">
      <Container>
        <SectionHeading eyebrow={process.eyebrow} title={process.title} description={process.description} align="center" />

        <div className="process-illustration mt-8" data-gsap="image" data-gsap-delay="0.08">
          <Image
            src={process.image}
            alt="Illustrated workflow from idea to polished game"
            width={2172}
            height={724}
            loading="lazy"
            quality={85}
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="mx-auto h-auto max-h-[32svh] w-full max-w-6xl object-contain"
          />
        </div>

        <div className="process-steps mx-auto mt-2 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <div key={step.label} data-gsap="step" data-gsap-delay={0.05 * index} className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">{step.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
