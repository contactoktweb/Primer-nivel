import type { CSSProperties, ReactNode } from "react"

type FaceName = "front" | "back" | "left" | "right" | "top" | "bottom"

export interface CssBoxProps {
  /** Dimensions in px (width = X, height = Y, depth = Z). */
  w: number
  h: number
  d: number
  /** Position of the box's bottom-center point; y grows upward. */
  x?: number
  y?: number
  z?: number
  color?: string
  /** Per-face background overrides (colors or gradients). */
  faces?: Partial<Record<FaceName, string>>
  /** Optional content rendered on the front face. */
  children?: ReactNode
  className?: string
}

/** A solid rectangular prism built with CSS 3D transforms. Must live inside a `preserve-3d` parent. */
export function CssBox({ w, h, d, x = 0, y = 0, z = 0, color = "#18181b", faces = {}, children, className }: CssBoxProps) {
  const faceDefs: { name: FaceName; fw: number; fh: number; transform: string }[] = [
    { name: "front", fw: w, fh: h, transform: `translateZ(${d / 2}px)` },
    { name: "back", fw: w, fh: h, transform: `rotateY(180deg) translateZ(${d / 2}px)` },
    { name: "right", fw: d, fh: h, transform: `rotateY(90deg) translateZ(${w / 2}px)` },
    { name: "left", fw: d, fh: h, transform: `rotateY(-90deg) translateZ(${w / 2}px)` },
    { name: "top", fw: w, fh: d, transform: `rotateX(90deg) translateZ(${h / 2}px)` },
    { name: "bottom", fw: w, fh: d, transform: `rotateX(-90deg) translateZ(${h / 2}px)` },
  ]

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        transformStyle: "preserve-3d",
        transform: `translate3d(${x}px, ${-(y + h / 2)}px, ${z}px)`,
      }}
    >
      {faceDefs.map(({ name, fw, fh, transform }) => {
        const style: CSSProperties = {
          position: "absolute",
          width: fw,
          height: fh,
          left: -fw / 2,
          top: -fh / 2,
          background: faces[name] ?? color,
          transform,
        }
        return (
          <div key={name} style={style} className={name === "front" ? "flex items-center justify-center overflow-hidden" : undefined}>
            {name === "front" ? children : null}
          </div>
        )
      })}
    </div>
  )
}
