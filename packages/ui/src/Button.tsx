import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils.js";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent/50",
  secondary:
    "bg-muted text-primary border border-border hover:bg-muted/80 focus-visible:ring-border",
  ghost: "text-secondary hover:bg-muted hover:text-primary",
  icon: "text-secondary hover:bg-muted hover:text-primary p-0",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        variant !== "icon" && sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
