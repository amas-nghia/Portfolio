import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type JourneyChapterProps = {
  children: ReactNode;
  className?: string;
  index: number;
  label: string;
};

export function JourneyChapter({ children, className, index, label }: JourneyChapterProps) {
  return (
    <article
      className={cn("world-chapter", className)}
      data-world-chapter={index}
      aria-label={label}
    >
      {children}
    </article>
  );
}
