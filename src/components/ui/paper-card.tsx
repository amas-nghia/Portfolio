import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function PaperCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[calc(var(--radius)*1.5)] border border-border/75 bg-card shadow-[0_18px_50px_color-mix(in_oklab,var(--paper-shadow)_22%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}
