import { ArrowUpRight, Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/config/site";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      data-gsap="project"
      data-gsap-delay={index * 0.06}
      className={cn("project-card group", index === 1 && "lg:translate-y-5 xl:translate-y-7")}
    >
      <a href={project.href} target="_blank" rel="noreferrer" className="block focus-visible:outline-none">
        <div className="project-image-frame relative h-[clamp(13rem,30svh,19rem)] overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-border/80 bg-card shadow-[0_18px_48px_color-mix(in_oklab,var(--paper-shadow)_24%,transparent)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_28px_62px_color-mix(in_oklab,var(--paper-shadow)_34%,transparent)] group-focus-within:ring-2 group-focus-within:ring-ring">
          <Image
            src={project.image}
            alt={`Illustrated concept for ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
          <span className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full border-2 border-white/80 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play weight="fill" aria-hidden="true" />
          </span>
        </div>

        <div className="project-label relative z-10 mx-5 -mt-5 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">{project.type}</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight">{project.title}</h3>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0" weight="bold" aria-hidden="true" />
          </div>
          <p className="project-description mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
          <div className="project-tags mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-background/80">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="project-action mt-4 inline-flex text-xs font-extrabold uppercase tracking-[0.16em] text-foreground">
            {project.action}
          </span>
        </div>
      </a>
    </article>
  );
}
