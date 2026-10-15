"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { StatusBadge } from "@/components/ui/status-badge"

interface Project {
  title: string
  img: string
  span?: "full" | "half"
}

/** 14 proyectos — cada par ocupa una fila de 2 columnas */
const projects: Project[] = [
  {
    title: "Stand Corporativo — Feria Internacional",
    img: "WhatsApp Image 2026-07-24 at 9.12.52 AM (4).jpeg",
  },
  {
    title: "Escenografía — Evento de Marca",
    img: "WhatsApp Image 2026-07-24 at 9.12.51 AM (1).jpeg",
  },
  {
    title: "Arquitectura Efímera — Lanzamiento",
    img: "WhatsApp Image 2026-07-24 at 9.12.56 AM (1).jpeg",
  },
  {
    title: "Stand Industrial — Exposición Comercial",
    img: "WhatsApp Image 2026-07-24 at 9.12.52 AM (6).jpeg",
  },
  {
    title: "Espacio Inmersivo — Congreso",
    img: "WhatsApp Image 2026-07-24 at 9.12.53 AM (1).jpeg",
  },
  {
    title: "Montaje Premium — Salón Empresarial",
    img: "WhatsApp Image 2026-07-24 at 9.12.58 AM (1).jpeg",
  },
  {
    title: "Stand Tecnológico — Expo Tech",
    img: "WhatsApp Image 2026-07-24 at 9.12.57 AM (1).jpeg",
  },
  {
    title: "Escenografía Corporativa — Lanzamiento",
    img: "WhatsApp Image 2026-07-24 at 9.12.55 AM (1).jpeg",
  },
  {
    title: "Stand Salud — Feria Nacional",
    img: "WhatsApp Image 2026-07-24 at 9.12.59 AM (3).jpeg",
  },
  {
    title: "Arquitectura Comercial — Rueda de Negocios",
    img: "WhatsApp Image 2026-07-24 at 9.12.53 AM (2).jpeg",
  },
  {
    title: "Impresión Gran Formato — Señalización",
    img: "WhatsApp Image 2026-07-24 at 9.12.54 AM (1).jpeg",
  },
  {
    title: "Stand Automotriz — Salón del Automóvil",
    img: "WhatsApp Image 2026-07-24 at 9.12.56 AM (2).jpeg",
  },
  {
    title: "Espacio Gastronómico — Feria de Alimentos",
    img: "WhatsApp Image 2026-07-24 at 9.12.58 AM (4).jpeg",
  },
  {
    title: "Stand Doble Altura — Feria Internacional",
    img: "WhatsApp Image 2026-07-24 at 9.12.59 AM (4).jpeg",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function Portfolio() {
  return (
    <section id="proyectos" className="bg-zinc-950">

      {/* ── Header — mismo estilo que el resto de la página ── */}
      <div className="border-b border-zinc-900 px-6 py-10 sm:px-10 lg:px-16 lg:py-10">
        <div className="mx-auto max-w-7xl">

          {/* Badge */}
          <StatusBadge className="mb-6" code="PRY-05">
            PORTAFOLIO DE PROYECTOS
          </StatusBadge>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold uppercase leading-none tracking-tight text-white sm:text-2xl lg:text-3xl">
              NUESTROS{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                PROYECTOS
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Exploramos ideas, diseñamos experiencias y construimos espacios que conectan marcas con personas. Cada proyecto refleja creatividad, precisión y una ejecución pensada para generar impacto real.
            </p>
          </div>
        </div>
      </div>

      {/* ── Grid con gap ── */}
      <div className="bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5"
      >
        {projects.map((project, i) => (
          <motion.article
            key={i}
            variants={item}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
          >
            {/* Photo */}
            <Image
              src={`/proyectos-primer-nivel/${project.img}`}
              alt={`${project.title} — PRIMER NIVEL`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Persistent bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <h2 className="text-sm font-black uppercase tracking-[0.15em] text-white drop-shadow-lg sm:text-base">
                {project.title}
              </h2>
              {/* Red underline on hover */}
              <div className="mt-1.5 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Hover red overlay tint */}
            <div className="absolute inset-0 bg-red-900/0 transition-colors duration-500 group-hover:bg-red-900/10" />

            {/* Border on hover */}
            <div className="absolute inset-0 ring-0 ring-inset ring-red-600/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-red-600/40" />
          </motion.article>
        ))}
      </motion.div>
      </div>

    </section>
  )
}
