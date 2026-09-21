import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function WorkSection() {
  return (
    <section id="work" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected playgrounds"
            title="Playable work, not just pretty screens."
            description="A small selection of prototypes and interactive projects. Open each one to see the evidence behind the work."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {siteConfig.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
