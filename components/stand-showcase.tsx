import type { CSSProperties, ReactNode } from "react"
import { StatusBadge } from "@/components/ui/status-badge"

/* ── Palette ─────────────────────────────────────────────── */
const C = {
  struct: "#111113",
  structSide: "#1b1b1e",
  structTop: "#0a0a0c",
  red: "#dc2626",
  redDark: "#7f1d1d",
  signFront: "linear-gradient(to bottom,#dc2626 0 20%,#111113 20%)",
  glass:
    "linear-gradient(140deg,rgba(255,255,255,.22) 0%,rgba(220,38,38,.10) 100%)",
  floor:
    "repeating-conic-gradient(#252528 0 25%,#1b1b1e 0 50%) 0 0/22px 22px",
}

/* ── Face ────────────────────────────────────────────────── */
function Face({
  w,
  h,
  bg,
  tf,
  children,
}: {
  w: number
  h: number
  bg: string
  tf: string
  children?: ReactNode
}) {
  const s: CSSProperties = {
    position: "absolute",
    width: w,
    height: h,
    left: -w / 2,
    top: -h / 2,
    background: bg,
    transform: tf,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    overflow: "hidden",
    display: children ? "flex" : "block",
    alignItems: children ? "center" : undefined,
    justifyContent: children ? "center" : undefined,
  }
  return <div style={s}>{children}</div>
}

/* ── Box ─────────────────────────────────────────────────── */
interface BoxProps {
  w: number
  h: number
  d: number
  /** Center-x, bottom-y, center-z  (Y axis = up). */
  cx?: number
  by?: number
  cz?: number
  color?: string
  front?: string
  back?: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  label?: string
}

function Box({
  w, h, d,
  cx = 0, by = 0, cz = 0,
  color = C.struct,
  front, back, left, right, top, bottom,
  label,
}: BoxProps) {
  const s: CSSProperties = {
    position: "absolute",
    width: 0,
    height: 0,
    transformStyle: "preserve-3d",
    /* Translate so that (cx, by+h/2, cz) is the box center in CSS 3D space.
       CSS Y is inverted: "up" = negative CSS y. */
    transform: `translate3d(${cx}px,${-(by + h / 2)}px,${cz}px)`,
  }
  const labelStyle: CSSProperties = {
    color: "#fff",
    fontSize: 9,
    fontWeight: 900,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    pointerEvents: "none",
    userSelect: "none",
  }
  const node = label ? <span style={labelStyle}>{label}</span> : undefined

  return (
    <div style={s}>
      <Face w={w} h={h} bg={front ?? color} tf={`translateZ(${d / 2}px)`}>
        {node}
      </Face>
      <Face w={w} h={h} bg={back ?? color} tf={`rotateY(180deg) translateZ(${d / 2}px)`} />
      <Face w={d} h={h} bg={right ?? C.structSide} tf={`rotateY(90deg) translateZ(${w / 2}px)`} />
      <Face w={d} h={h} bg={left ?? C.structSide} tf={`rotateY(-90deg) translateZ(${w / 2}px)`} />
      <Face w={w} h={d} bg={top ?? C.structTop} tf={`rotateX(90deg) translateZ(${h / 2}px)`} />
      <Face w={w} h={d} bg={bottom ?? C.structTop} tf={`rotateX(-90deg) translateZ(${h / 2}px)`} />
    </div>
  )
}

/* ── Arch portal ─────────────────────────────────────────── */
const PLAT_H = 14

function Portal({ cx, cz = 60 }: { cx: number; cz?: number }) {
  const span = 116
  const postW = 22
  const postH = 188
  const postD = 58
  const beamH = 26

  return (
    <>
      <Box w={postW} h={postH} d={postD} cx={cx - span / 2} by={PLAT_H} cz={cz}
        color={C.struct} right={C.red} left={C.structSide} />
      <Box w={postW} h={postH} d={postD} cx={cx + span / 2} by={PLAT_H} cz={cz}
        color={C.struct} left={C.red} right={C.structSide} />
      <Box w={span + postW} h={beamH} d={postD} cx={cx} by={PLAT_H + postH} cz={cz}
        color={C.struct} bottom={C.red} label="PRIMER NIVEL" />
    </>
  )
}

/* ── Glass vitrine ───────────────────────────────────────── */
function Vitrine({ cx, cz = 60 }: { cx: number; cz?: number }) {
  return (
    <Box w={62} h={148} d={34} cx={cx} by={PLAT_H} cz={cz}
      color={C.struct} front={C.glass} back={C.glass} />
  )
}

/* ── Stand assembly ──────────────────────────────────────── */
function StandModel() {
  return (
    <>
      {/* Platform */}
      <Box w={484} h={PLAT_H} d={296} cx={0} by={0} cz={0}
        color={C.structSide} top={C.floor} />

      {/* Back wall with brand stripe */}
      <Box w={484} h={206} d={12} cx={0} by={PLAT_H} cz={-142}
        front="linear-gradient(to bottom,#111113 0 28%,#dc2626 28% 34%,#111113 34%)"
        color={C.struct} />

      {/* Portals */}
      <Portal cx={-148} />
      <Portal cx={148} />

      {/* Outer vitrines */}
      <Vitrine cx={-224} />
      <Vitrine cx={224} />

      {/* Central hanging column */}
      <Box w={8} h={152} d={8} cx={0} by={PLAT_H} cz={-62} color={C.struct} />
      {/* Central sign panel */}
      <Box w={152} h={52} d={10} cx={0} by={PLAT_H + 152} cz={-62}
        front={C.signFront} back={C.signFront} color={C.struct}
        label="PRIMER NIVEL" />

      {/* Counter */}
      <Box w={132} h={58} d={44} cx={0} by={PLAT_H} cz={-68}
        front="linear-gradient(to bottom,#dc2626 0 15%,#111113 15%)"
        color={C.struct} />

      {/* Bar table: leg + top */}
      <Box w={6} h={64} d={6} cx={0} by={PLAT_H} cz={40} color={C.redDark} />
      <Box w={34} h={4} d={34} cx={0} by={PLAT_H + 64} cz={40}
        top="#e4e4e7" color={C.structSide} />
    </>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export function StandShowcase() {
  return (
    <section
      id="diseno-3d"
      aria-labelledby="diseno-3d-title"
      /* NO overflow-hidden — it breaks preserve-3d in every browser */
      className="relative bg-[#0a0a0a] py-24 text-white"
    >
      <style>{`
        /* perspective wrapper */
        .stand-scene {
          position: relative;
          height: 500px;
          perspective: 1100px;
          perspective-origin: 50% 45%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* rotating group: width/height = 0 so translate3d acts from the scene centre */
        .stand-rotor {
          position: relative;
          width: 0;
          height: 0;
          top: 120px;          /* push the visual centre down so the floor is in frame */
          transform-style: preserve-3d;
          animation: stand-spin 20s linear infinite;
        }

        @keyframes stand-spin {
          from { transform: rotateX(-18deg) rotateY(  0deg); }
          to   { transform: rotateX(-18deg) rotateY(360deg); }
        }

        /* ground glow */
        .stand-glow {
          position: absolute;
          bottom: 40px;
          left: 50%;
          width: 500px;
          height: 60px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(220,38,38,.28), transparent 70%);
          filter: blur(18px);
          pointer-events: none;
        }

        /* respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .stand-rotor {
            animation: none;
            transform: rotateX(-18deg) rotateY(-30deg);
          }
        }

        /* scale down on mobile */
        @media (max-width: 767px) {
          .stand-scene { height: 340px; }
          .stand-rotor { transform: rotateX(-18deg) rotateY(0deg) scale(.58); }
          @keyframes stand-spin {
            from { transform: rotateX(-18deg) rotateY(  0deg) scale(.58); }
            to   { transform: rotateX(-18deg) rotateY(360deg) scale(.58); }
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        {/* ── Text column ── */}
        <header>
          <StatusBadge code="PN-3D">Diseño 3D</StatusBadge>
          <h2
            id="diseno-3d-title"
            className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl"
          >
            Visualiza tu stand antes de construirlo
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Modelamos cada stand en 3D: estructuras, vitrinas, mostradores e
            iluminación. Así apruebas el diseño completo antes de producirlo
            y montarlo en la feria.
          </p>
        </header>

        {/* ── 3D figure ── */}
        <figure
          className="stand-scene"
          role="img"
          aria-label="Modelo 3D giratorio de un stand para ferias, diseñado por Primer Nivel"
        >
          <div className="stand-rotor">
            <StandModel />
          </div>
          <div className="stand-glow" aria-hidden="true" />
          <figcaption className="sr-only">
            Modelo 3D de stand de feria con pórticos, vitrinas y mostrador, girando sobre su eje.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
