"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const BASE = "/proyectos-primer-nivel"

interface Sector {
  src: string
  sector: string
  alt: string
}

/** Sectores atendidos — editar el nombre del sector según corresponda */
const sectors: Sector[] = [
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.59 AM.webp`,     sector: "Automotriz",          alt: "Stand para el sector automotriz" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.58 AM (4).webp`, sector: "Inmobiliario",        alt: "Stand para el sector inmobiliario" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.58 AM.webp`,     sector: "Congresos y Eventos", alt: "Stand para congresos y eventos empresariales" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.59 AM (2).webp`, sector: "Retail y Consumo",    alt: "Espacio comercial para el sector retail" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.57 AM (3).webp`, sector: "Salud y Farmacéutico", alt: "Stand para el sector salud y farmacéutico" },
  { src: `${BASE}/20190923_192455.webp`,                             sector: "Industrial",          alt: "Stand para el sector industrial" },
  { src: `${BASE}/Screenshot_20190922-165423_Drive.webp`,            sector: "Tecnología",          alt: "Stand para el sector tecnológico" },
]

const SCROLL_STEP_RATIO = 0.8

export function SectorsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener("resize", updateArrows)
    return () => window.removeEventListener("resize", updateArrows)
  }, [updateArrows])

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * SCROLL_STEP_RATIO, behavior: "smooth" })
  }

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-800/80 text-white transition-all duration-200 hover:border-red-600 hover:bg-red-600 active:scale-95 disabled:pointer-events-none disabled:opacity-30"

  return (
    <section id="sectores" aria-labelledby="sectores-title" className="bg-zinc-950 py-[1cm]">
      <style>{`.sectors-track::-webkit-scrollbar{display:none}`}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">Sectores</p>
            <h2
              id="sectores-title"
              className="text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl"
            >
              Sectores con los que{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                trabajamos
              </span>
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              id="sectores-prev"
              aria-label="Ver sectores anteriores"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              id="sectores-next"
              aria-label="Ver siguientes sectores"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={updateArrows}
          className="sectors-track flex snap-x snap-mandatory gap-5 overflow-x-auto [scrollbar-width:none]"
        >
          {sectors.map((item) => (
            <li key={item.src} className="w-[80%] flex-shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-2.5rem)/3)]">
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-red-600" aria-hidden="true" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{item.sector}</h3>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
