import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowBackgroundProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Soft ambient glow background — yellow top-left + cool blue bottom-right
 * over a clean white surface.
 */
export const GlowBackground = ({ children, className }: GlowBackgroundProps) => {
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden bg-white", className)}>
      {/* Soft Yellow Glow (top-left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253, 224, 71, 0.45), rgba(253, 224, 71, 0) 70%)",
        }}
      />

      {/* Cool Blue Glow (bottom-right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(96, 165, 250, 0.4), rgba(96, 165, 250, 0) 70%)",
        }}
      />

      {/* Subtle accent glow (center) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(192, 132, 252, 0.18), rgba(192, 132, 252, 0) 70%)",
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowBackground;
