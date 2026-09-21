import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function WorkSection() {
  return (
    <section id="work" data-gsap-section="work" className="viewport-section section-pad scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Selected playgrounds"
          title="Playable work, not just pretty screens."
          description="A small selection of prototypes and interactive projects. Open each one to see the evidence behind the work."
        />

        <div className="work-grid mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
