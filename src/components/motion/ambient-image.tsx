import Image from "next/image";

import { cn } from "@/lib/utils";

type AmbientImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function AmbientImage({ src, alt, width, height, className, priority }: AmbientImageProps) {
  return (
    <div className={cn(className)} data-gsap="image">
      <div data-gsap-float>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          quality={85}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
