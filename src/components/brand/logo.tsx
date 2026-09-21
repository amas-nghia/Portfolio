import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/images/brand-mark.webp"
        alt=""
        width={56}
        height={56}
        className="size-11 rounded-full sm:size-12"
        priority
      />
      <span className="grid leading-none">
        <span className={cn("font-serif text-xl font-semibold tracking-[0.18em]", inverted && "text-cream")}>
          AMAS
        </span>
        <span
          className={cn(
            "mt-1 text-[0.56rem] font-extrabold uppercase tracking-[0.22em] text-muted-foreground",
            inverted && "text-cream/65",
          )}
        >
          Unity Developer
        </span>
      </span>
    </span>
  );
}
