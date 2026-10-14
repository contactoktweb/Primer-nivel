"use client"

const BASE = "/proyectos-primer-nivel"

/** Imágenes del carrusel en el orden solicitado por el cliente */
const carouselImages = [
  { src: `${BASE}/image--1.webp`,                              alt: "Proyecto Primer Nivel — stand de alto impacto" },
  { src: `${BASE}/20190923_192455.webp`,                        alt: "Montaje de stand Primer Nivel 2019" },
  { src: `${BASE}/IMG_20211109_040618.webp`,                    alt: "Producción de stand evento 2021" },
  { src: `${BASE}/20181026_181016.webp`,                        alt: "Stand para feria comercial 2018" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.59 AM.webp`,     alt: "Stand diseñado por Primer Nivel" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.59 AM (3).webp`, alt: "Espacio comercial Primer Nivel" },
  { src: `${BASE}/3D-stand.webp`,                              alt: "Render 3D de stand Primer Nivel" },
  { src: `${BASE}/image-hero-4.webp`,                          alt: "Stand automotriz de alto impacto" },
  { src: `${BASE}/image--2.webp`,                              alt: "Proyecto de stand modular" },
  { src: `${BASE}/image--3.webp`,                              alt: "Diseño y montaje de stand premium" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.51 AM (1).webp`, alt: "Stand para exposición comercial" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.52 AM (6).webp`, alt: "Stand corporativo Primer Nivel" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.53 AM (2).webp`, alt: "Montaje stand feria internacional" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.51 AM.webp`,     alt: "Stand modular Primer Nivel" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.52 AM.webp`,     alt: "Producción stand comercial" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.53 AM (4).webp`, alt: "Stand para evento empresarial" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.55 AM (1).webp`, alt: "Stand de exhibición Primer Nivel" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.56 AM (1).webp`, alt: "Espacio comercial feria stand" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.56 AM (3).webp`, alt: "Diseño stand premium feria" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.56 AM (4).webp`, alt: "Stand con iluminación LED" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.56 AM (6).webp`, alt: "Montaje stand evento nacional" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.57 AM (4).webp`, alt: "Stand inmobiliario Primer Nivel" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.58 AM (2).webp`, alt: "Escenografía para evento" },
  { src: `${BASE}/WhatsApp Image 2026-07-24 at 9.12.58 AM.webp`,     alt: "Stand para congreso empresarial" },
]

/** 8 slots vacíos para logos — el cliente los cargará luego */
const logoSlots = Array.from({ length: 8 })

export function BrandsShowcase() {
  /* Duplicamos el array para el efecto de bucle infinito */
  const track = [...carouselImages, ...carouselImages]

  return (
    <section
      id="marcas"
      aria-labelledby="marcas-title"
      className="bg-zinc-900 pt-[1cm] pb-[1cm] overflow-hidden"
    >
      {/* Estilos del carrusel — pure CSS, sin dependencias */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        .brands-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll-left-logos 30s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Nuestros Clientes
            </p>
            <h2
              id="marcas-title"
              className="text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl"
            >
              Marcas con las que{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                hemos trabajado
              </span>
            </h2>
          </div>
          {/* Línea decorativa */}
          <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-zinc-700 to-transparent ml-8 lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* ── Carrusel de imágenes ── */}
      <div className="relative">
        {/* Fade izquierda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-900 to-transparent" aria-hidden="true" />
        {/* Fade derecha */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-900 to-transparent" aria-hidden="true" />

        <div className="overflow-hidden">
          <div className="brands-track">
            {track.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative h-80 w-[420px] flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-800"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Carrusel de logos (placeholders) ── */}
      <div className="relative mt-10">
        {/* Fade izquierda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-900 to-transparent" aria-hidden="true" />
        {/* Fade derecha */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-900 to-transparent" aria-hidden="true" />

        <div className="overflow-hidden">
          {/* Duplicamos los slots para el loop */}
          <div className="logos-track">
            {[...logoSlots, ...logoSlots].map((_, i) => (
              <div
                key={i}
                className="flex h-16 w-36 flex-shrink-0 items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-800/40"
                aria-label="Logo de marca cliente (próximamente)"
              >
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                  Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="mx-auto mt-[1cm] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" aria-hidden="true" />
      </div>
    </section>
  )
}
