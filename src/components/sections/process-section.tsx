import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function ProcessSection() {
  const { process } = siteConfig;

  return (
    <section id="process" className="section-pad scroll-mt-24 bg-secondary/45">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={process.eyebrow} title={process.title} description={process.description} align="center" />
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <Image
            src={process.image}
            alt="Illustrated workflow from idea to polished game"
            width={2172}
            height={724}
            loading="eager"
            className="mx-auto h-auto w-full max-w-6xl"
          />
        </Reveal>

        <div className="mx-auto mt-1 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <Reveal key={step.label} delay={0.05 * index} className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">{step.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
