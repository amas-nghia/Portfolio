import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex translate-y-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-extrabold tracking-[0.08em] uppercase shadow-none transition-[translate,scale,box-shadow,background-color,color] duration-300 ease-out hover:-translate-y-1 active:translate-y-0.5 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 group-hover/button:[&_svg]:translate-x-0.5 group-hover/button:[&_svg]:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-[0_8px_0_var(--button-shadow)] active:shadow-[0_3px_0_var(--button-shadow)]",
        outline:
          "border-2 border-foreground/70 bg-background/75 text-foreground hover:bg-card hover:shadow-[0_8px_0_var(--paper-shadow)] active:shadow-[0_3px_0_var(--paper-shadow)]",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-[0_7px_0_color-mix(in_oklab,var(--paper-shadow)_60%,transparent)]",
        night:
          "bg-cream text-night hover:bg-white hover:shadow-[0_8px_0_var(--night-shadow)] active:shadow-[0_3px_0_var(--night-shadow)]",
        nightOutline:
          "border-2 border-cream/65 bg-night/35 text-cream hover:border-cream hover:bg-night/55 hover:shadow-[0_8px_0_var(--night-shadow)] active:shadow-[0_3px_0_var(--night-shadow)]",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-7",
        lg: "h-14 px-8 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
