import { Leaf } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p
        data-gsap="reveal"
        className={cn(
          "mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary",
          align === "center" && "justify-center",
        )}
      >
        <Leaf weight="fill" aria-hidden="true" />
        {eyebrow}
      </p>
      {title ? (
        <h2
          data-gsap="reveal"
          data-gsap-delay="0.05"
          className="font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl"
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p data-gsap="reveal" data-gsap-delay="0.1" className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      <span
        data-gsap-accent
        aria-hidden="true"
        className={cn("mt-6 block h-px w-24 bg-primary/45", align === "center" && "mx-auto")}
      />
    </div>
  );
}
