"use client"

import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

const heroPanels = [
  {
    src: "/proyectos-primer-nivel/P_20170301_100056.jpg",
    alt: "Stand diseñado y montado por PRIMER NIVEL en feria comercial — Colombia 2017",
    label: "Stands Comerciales",
  },
  {
    src: "/proyectos-primer-nivel/20170712_122805.jpg",
    alt: "Producción y montaje de stand PRIMER NIVEL para evento corporativo",
    label: "Producción y Montaje",
  },
  {
    src: "/proyectos-primer-nivel/image-hero-4.jpeg",
    alt: "Stand automotriz de alto impacto — PRIMER NIVEL Colombia",
    label: "Sector Automotriz",
  },
  {
    src: "/proyectos-primer-nivel/20180717_073758.jpg",
    alt: "Stand de alto impacto visual — diseño y equipamiento PRIMER NIVEL 2018",
    label: "Diseño de Alto Impacto",
  },
  {
    src: "/proyectos-primer-nivel/20181105_220215.jpg",
    alt: "Montaje nocturno de stand para feria — logística y producción PRIMER NIVEL",
    label: "Ferias y Exposiciones",
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Hero — PRIMER NIVEL Diseño y Montaje de Stands"
      className="hero-section"
    >
      {/* Pure-CSS accordion — no JavaScript state, browser handles transitions */}
      <style>{`
        .hero-section {
          position: relative;
          height: 90vh;
          min-height: 560px;
          overflow: hidden;
          background: #000;
        }

        /* ── Accordion container ── */
        .hero-accordion {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
        }

        /* ── Each panel ── */
        .hero-panel {
          position: relative;
          flex: 1;
          height: 100%;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.65s cubic-bezier(0.32, 0.72, 0, 1);
        }

        /* On container hover: shrink all siblings */
        .hero-accordion:hover .hero-panel {
          flex: 0.35;
        }

        /* The panel being hovered expands */
        .hero-panel:hover {
          flex: 4 !important;
        }

        /* Image wrapper — handles zoom */
        .hero-panel-img {
          position: absolute;
          inset: 0;
          transition: transform 0.7s cubic-bezier(0.32, 0.72, 0, 1);
        }
        .hero-panel:hover .hero-panel-img {
          transform: scale(1.06);
        }

        /* Brightness overlay on top of each image */
        .hero-panel-dim {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          transition: background 0.5s ease;
          z-index: 1;
        }
        .hero-panel:hover .hero-panel-dim {
          background: rgba(0,0,0,0.25);
        }

        /* Vertical separator between panels */
        .hero-panel-sep {
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: rgba(255,255,255,0.12);
          z-index: 2;
        }

        /* Red left accent bar */
        .hero-panel-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: rgb(220,38,38);
          z-index: 2;
          opacity: 0;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: opacity 0.35s ease, transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
        }
        .hero-panel:hover .hero-panel-accent {
          opacity: 1;
          transform: scaleY(1);
        }

        /* Panel label */
        .hero-panel-label {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 3;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s;
          pointer-events: none;
        }
        .hero-panel:hover .hero-panel-label {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-panel-label span {
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.5);
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #fff;
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }

        /* Gradient overlays */
        .hero-grad-bottom {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.35) 100%);
          pointer-events: none;
          z-index: 5;
        }
        .hero-grad-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 50%);
          pointer-events: none;
          z-index: 5;
        }

        /* Foreground text */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          padding-bottom: 40px;
          padding-left: 48px;
          padding-right: 48px;
          pointer-events: none;
        }
        .hero-content > * {
          pointer-events: auto;
          align-self: flex-start;
        }
      `}</style>

      {/* Accordion */}
      <div className="hero-accordion">
        {heroPanels.map((panel, i) => (
          <div key={panel.src} className="hero-panel">
            {/* Image */}
            <div className="hero-panel-img">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
                sizes="25vw"
              />
            </div>

            {/* Dim overlay */}
            <div className="hero-panel-dim" />

            {/* Separator */}
            {i < heroPanels.length - 1 && <div className="hero-panel-sep" />}

            {/* Red left accent */}
            <div className="hero-panel-accent" />

            {/* Label */}
            <div className="hero-panel-label">
              <span>{panel.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="hero-grad-bottom" />
      <div className="hero-grad-left" />

      {/* Text content — bottom left */}
      <div className="hero-content">
        <h1 style={{ margin: 0, marginBottom: 16, maxWidth: 480 }}>
          <span className="block text-xl font-black uppercase leading-snug tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl">
            Convertimos cualquier espacio
          </span>
          <span className="block text-xl font-black uppercase leading-snug tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl">
            en el mejor momento
          </span>
          <span className="block text-xl font-black uppercase leading-snug tracking-tight text-red-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl">
            que tu marca ha tenido
          </span>
        </h1>

        <p className="mb-5 max-w-xs text-xs leading-relaxed text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-sm">
          Diseño, Producción y Montaje de Stands de{" "}
          <strong className="text-white">Primer Nivel</strong> para eventos y ferias.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/proyectos"
            id="hero-cta-portafolio"
            className="group inline-flex items-center gap-2 border border-red-600 bg-red-600 px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.25em] text-white shadow-[0_4px_0_rgb(153,27,27)] transition-all duration-200 hover:brightness-110 active:translate-y-[2px] active:shadow-none"
          >
            Ver Portafolio
            <Icon icon="solar:arrow-right-bold" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/contacto"
            id="hero-cta-contacto"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
          >
            Iniciar Conversación
            <Icon icon="solar:chat-round-bold" className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
