import { Container } from "@/components/layout/container";
import { AmbientImage } from "@/components/motion/ambient-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-pad scroll-mt-24 overflow-hidden">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <AmbientImage
            src={about.image}
            alt="A cozy illustrated developer working at a desk"
            width={1448}
            height={1086}
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.08}>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">{about.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 grid gap-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {about.skills.map((skill) => (
              <Badge key={skill} className="px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
