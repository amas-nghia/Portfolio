import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-extrabold tracking-[0.08em] uppercase transition-[transform,box-shadow,background-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_8px_0_var(--button-shadow)] hover:-translate-y-1 hover:shadow-[0_12px_0_var(--button-shadow)] active:translate-y-1 active:shadow-[0_4px_0_var(--button-shadow)]",
        outline:
          "border-2 border-foreground/70 bg-background/75 text-foreground hover:-translate-y-1 hover:bg-card hover:shadow-[0_8px_0_var(--paper-shadow)]",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        night:
          "bg-cream text-night shadow-[0_8px_0_var(--night-shadow)] hover:-translate-y-1 hover:bg-white",
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
