import * as React from "react";
import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const glassButtonVariants = cva(
  "group relative inline-flex items-center justify-center font-medium transition-all select-none cursor-pointer disabled:pointer-events-none disabled:opacity-40 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      size: {
        default: "h-9 px-4 py-2 text-sm rounded-full",
        sm: "h-8 px-3 py-1.5 text-xs rounded-full",
        lg: "h-11 px-6 py-2.5 text-base rounded-full",
        icon: "size-9 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ children, className, contentClassName, size, onClick, disabled, style, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 0.55 }}
        whileHover={disabled ? undefined : { opacity: 1, scale: 1.04, y: -1 }}
        whileTap={disabled ? undefined : { opacity: 0.9, scale: 0.96, y: 1 }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { type: "spring", stiffness: 400, damping: 25 },
          y: { type: "spring", stiffness: 400, damping: 25 },
        }}
        className={cn(glassButtonVariants({ size, className }))}
        style={{
          backdropFilter: "blur(8px) saturate(140%)",
          WebkitBackdropFilter: "blur(8px) saturate(140%)",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.10) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.28)",
          boxShadow:
            "0 2px 10px rgba(44, 24, 16, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.40), inset 0 -1px 1px rgba(44, 24, 16, 0.02)",
          ...style,
        }}
        {...props}
      >
        {/* Specular top highlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-20 group-hover:opacity-75"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0) 80%)",
          }}
        />

        {/* Ambient liquid glow on hover */}
        <div
          className="pointer-events-none absolute -inset-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, transparent 65%)",
          }}
        />

        {/* Shimmer light sweep */}
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%)",
          }}
        />

        {/* Content container */}
        <span
          className={cn(
            "relative z-10 flex items-center justify-center gap-1.5 text-inherit",
            contentClassName
          )}
        >
          {children}
        </span>
      </motion.button>
    );
  }
);

GlassButton.displayName = "GlassButton";
export default GlassButton;
