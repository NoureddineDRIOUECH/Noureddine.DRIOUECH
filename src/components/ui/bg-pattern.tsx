import { cn } from "@/lib/utils"

type BGVariant =
  | "dots"
  | "diagonal-stripes"
  | "grid"
  | "horizontal-lines"
  | "vertical-lines"
  | "checkerboard"

type BGMask =
  | "fade-center"
  | "fade-edges"
  | "fade-top"
  | "fade-bottom"
  | "fade-left"
  | "fade-right"
  | "fade-x"
  | "fade-y"
  | "none"

const maskClasses: Record<BGMask, string> = {
  "fade-edges":
    "[mask-image:radial-gradient(ellipse_at_center,black,transparent)]",
  "fade-center":
    "[mask-image:radial-gradient(ellipse_at_center,transparent,black)]",
  "fade-top":
    "[mask-image:linear-gradient(to_bottom,transparent,black)]",
  "fade-bottom":
    "[mask-image:linear-gradient(to_bottom,black,transparent)]",
  "fade-left":
    "[mask-image:linear-gradient(to_right,transparent,black)]",
  "fade-right":
    "[mask-image:linear-gradient(to_right,black,transparent)]",
  "fade-x":
    "[mask-image:linear-gradient(to_right,transparent,black,transparent)]",
  "fade-y":
    "[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]",
  none: "",
}

function getBgImage(variant: BGVariant, fill: string, size: number) {
  switch (variant) {
    case "dots":
      return `radial-gradient(${fill} 1px, transparent 1px)`
    case "grid":
      return [
        `linear-gradient(to right, ${fill} 1px, transparent 1px)`,
        `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`,
      ].join(", ")
    case "diagonal-stripes":
      return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`
    case "horizontal-lines":
      return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`
    case "vertical-lines":
      return `linear-gradient(to right, ${fill} 1px, transparent 1px)`
    case "checkerboard":
      return [
        `linear-gradient(45deg, ${fill} 25%, transparent 25%)`,
        `linear-gradient(-45deg, ${fill} 25%, transparent 25%)`,
        `linear-gradient(45deg, transparent 75%, ${fill} 75%)`,
        `linear-gradient(-45deg, transparent 75%, ${fill} 75%)`,
      ].join(", ")
  }
}

interface BGPatternProps {
  variant?: BGVariant
  mask?: BGMask
  size?: number
  fill?: string
  className?: string
}

export function BGPattern({
  variant = "grid",
  mask = "none",
  size = 24,
  fill = "hsl(var(--foreground) / 0.05)",
  className,
}: BGPatternProps) {
  const bgSize = `${size}px ${size}px`
  const backgroundImage = getBgImage(variant, fill, size)

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 size-full",
        maskClasses[mask],
        className,
      )}
      style={{
        backgroundImage,
        backgroundSize: bgSize,
      }}
      aria-hidden="true"
    />
  )
}
