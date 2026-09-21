import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { AmbientImage } from "@/components/motion/ambient-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="hero-section overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <Container className="grid min-h-[760px] items-center gap-8 pb-20 lg:grid-cols-2 lg:gap-2 lg:pb-28">
        <Reveal className="relative z-10 max-w-2xl py-6">
          <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.24em] text-primary">{hero.eyebrow}</p>
          <h1 className="font-serif text-[clamp(3.2rem,6vw,5.15rem)] font-semibold leading-[0.94] tracking-[-0.052em] text-balance">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">{hero.description}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={hero.primaryAction.href}>
                {hero.primaryAction.label}
                <ArrowRight weight="bold" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={hero.secondaryAction.href} target="_blank" rel="noreferrer">
                {hero.secondaryAction.label}
                <ArrowUpRight weight="bold" />
              </a>
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-2.5" aria-label="Experience highlights">
            {hero.facts.map((fact) => (
              <Badge key={fact}>{fact}</Badge>
            ))}
          </div>
        </Reveal>

        <div className="relative -mx-8 lg:-mr-24 lg:ml-[-4%]">
          <AmbientImage
            src={hero.image}
            alt="A cozy game developer workspace with a laptop showing a colorful puzzle game"
            width={1536}
            height={1024}
            priority
            className="relative z-10"
          />
        </div>
      </Container>
    </section>
  );
}
