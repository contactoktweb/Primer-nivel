"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const BASE = "/proyectos-primer-nivel"

interface FurnitureImage {
  src: string
  alt: string
}

const furnitureImages: FurnitureImage[] = [
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.52 AM.webp`,     alt: "Alquiler de mobiliario para stands y eventos" },
  { src: `${BASE}/20190923_192455.webp`,                             alt: "Mobiliario en alquiler para ferias comerciales" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.58 AM (6).webp`, alt: "Mobiliario corporativo para eventos empresariales" },
]

const furnitureFeatures = [
  "Salas lounge, sillas y mesas de diseño",
  "Counters, vitrinas y exhibidores",
  "Entrega, montaje y desmontaje incluidos",
]

/** Grados máximos de inclinación 3D al mover el cursor */
const MAX_TILT_DEG = 8
const REVEAL_THRESHOLD = 0.3

export function FurnitureRental() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: REVEAL_THRESHOLD },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  /* Se aplica directo al DOM con rAF para evitar re-renders en cada movimiento */
  const applyTilt = (x: number, y: number) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      if (tiltRef.current) tiltRef.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
    })
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    applyTilt(-py * MAX_TILT_DEG * 2, px * MAX_TILT_DEG * 2)
  }

  const resetTilt = () => applyTilt(0, 0)

  return (
    <section
      ref={sectionRef}
      id="alquiler-mobiliario"
      aria-labelledby="mobiliario-title"
      className={`furniture-section overflow-hidden bg-zinc-950 py-[1.5cm] ${isRevealed ? "is-revealed" : ""}`}
    >
      <style>{`
        /* Abanico: la carta exterior (área de hover) queda fija; solo la capa interior se mueve */
        .furniture-card {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 62%;
          height: 82%;
          transform-origin: 50% 110%;
          transform: translateY(40px) scale(0.85);
          opacity: 0;
          transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease;
        }
        .is-revealed .furniture-card { opacity: 1; }
        .is-revealed .furniture-card[data-i="0"] { transform: translateX(-38%) rotate(-12deg); transition-delay: .35s; }
        .is-revealed .furniture-card[data-i="1"] { transform: translateY(-4%);                transition-delay: .15s; z-index: 2; }
        .is-revealed .furniture-card[data-i="2"] { transform: translateX(38%) rotate(12deg);   transition-delay: .5s; }
        .furniture-card:hover { z-index: 5; }

        .furniture-inner {
          height: 100%;
          border-radius: 1rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,.8);
          transition: transform .45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .45s ease, filter .45s ease;
          will-change: transform;
        }
        .furniture-stage:hover .furniture-inner { filter: brightness(.55); }
        .furniture-stage .furniture-card:hover .furniture-inner {
          filter: none;
          transform: translateY(-8%) scale(1.05);
          box-shadow: 0 40px 80px -20px rgba(220,38,38,.45);
        }

        .furniture-mask {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 1rem;
          clip-path: inset(100% 0 0 0 round 1rem);
          transition: clip-path .9s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .furniture-mask img { transform: scale(1.3); transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .is-revealed .furniture-mask { clip-path: inset(0 0 0 0 round 1rem); }
        .is-revealed .furniture-mask img { transform: scale(1); }
        .is-revealed .furniture-card[data-i="0"] .furniture-mask,
        .is-revealed .furniture-card[data-i="0"] .furniture-mask img { transition-delay: .35s; }
        .is-revealed .furniture-card[data-i="2"] .furniture-mask,
        .is-revealed .furniture-card[data-i="2"] .furniture-mask img { transition-delay: .5s; }

        /* Brillo que recorre cada carta una vez al revelarse */
        .furniture-mask::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .is-revealed .furniture-mask::after { animation: furniture-shine 1.2s 1.1s ease forwards; }
        @keyframes furniture-shine { to { transform: translateX(120%); } }

        .furniture-reveal { opacity: 0; transform: translateY(24px); transition: opacity .8s ease, transform .8s cubic-bezier(0.22, 1, 0.36, 1); }
        .is-revealed .furniture-reveal { opacity: 1; transform: none; }

        @media (prefers-reduced-motion: reduce) {
          .furniture-card, .furniture-inner, .furniture-mask, .furniture-mask img, .furniture-reveal { transition: none !important; }
          .furniture-mask::after { display: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Texto */}
        <div>
          <p className="furniture-reveal mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Alquiler de mobiliario
          </p>
          <h2
            id="mobiliario-title"
            className="furniture-reveal text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl"
            style={{ transitionDelay: ".1s" }}
          >
            Mobiliario para stands{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">y eventos</span>
          </h2>
          <p className="furniture-reveal mt-5 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base" style={{ transitionDelay: ".2s" }}>
            Complementa tu stand con mobiliario en alquiler cuidadosamente seleccionado. Piezas modernas y funcionales
            que elevan la experiencia de tus visitantes en ferias, congresos y activaciones de marca.
          </p>
          <ul className="mt-6 space-y-3">
            {furnitureFeatures.map((feature, i) => (
              <li
                key={feature}
                className="furniture-reveal flex items-center gap-3 text-sm text-zinc-300"
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <span className="h-px w-6 bg-red-600" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            id="mobiliario-cta"
            className="furniture-reveal mt-8 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-red-700 active:scale-95"
            style={{ transitionDelay: ".6s" }}
          >
            Cotizar mobiliario
          </Link>
        </div>

        {/* Abanico 3D */}
        <div
          ref={stageRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[460px]"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={tiltRef}
            className="furniture-stage relative h-full w-full"
            style={{ transition: "transform .3s ease-out" }}
          >
            {furnitureImages.map((img, i) => (
              <figure key={img.src} data-i={i} className="furniture-card">
                <div className="furniture-inner">
                  <div className="furniture-mask border border-white/10 bg-zinc-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
