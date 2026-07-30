"use client"
import Image from "next/image"
import { StatusBadge } from "@/components/ui/status-badge"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const allImages = [
  "WhatsApp Image 2026-07-24 at 9.12.51 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.51 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM (7).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.52 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.53 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.54 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.55 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.56 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.57 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.58 AM.jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (1).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (2).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (3).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (4).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (5).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM (6).jpeg",
  "WhatsApp Image 2026-07-24 at 9.12.59 AM.jpeg"
]

const projects = [
  {
    id: 1,
    title: "STAND AUDIOVISUAL",
    category: "Soluciones Multimedia",
    size: "large",
    images: [
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.52 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (5).jpeg",
    ],
    description: "Espacios dinámicos y tecnológicos con integración de pantallas LED, sonido envolvente y proyecciones inmersivas. Perfectos para crear experiencias de alto impacto visual y auditivo en ferias y exposiciones.",
  },
  {
    id: 2,
    title: "STAND PUBLICITARIO",
    category: "Marketing & Activaciones",
    size: "medium",
    images: [
      "WhatsApp Image 2026-07-24 at 9.12.51 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.51 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.56 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.58 AM.jpeg",
    ],
    description: "Diseños orientados a la visibilidad y recordación de marca. Incorporamos elementos creativos, mobiliario personalizado y zonas de interacción para maximizar el engagement y la recolección de leads.",
  },
  {
    id: 3,
    title: "STAND INMOBILIARIO",
    category: "Salas de Ventas & Proyectos",
    size: "large",
    images: [
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (7).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (3).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (5).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.57 AM.jpeg",
    ],
    description: "Entornos elegantes y acogedores diseñados para proyectar confianza y exclusividad. Incluyen áreas privadas de negociación, maquetas destacadas y acabados premium que reflejan el nivel de tus proyectos.",
  },
  {
    id: 4,
    title: "STAND ESCENOGRAFÍAS",
    category: "Montajes & Eventos",
    size: "medium",
    images: [
      "WhatsApp Image 2026-07-24 at 9.12.52 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.53 AM (4).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.54 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.55 AM.jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (1).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (2).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM (6).jpeg",
      "WhatsApp Image 2026-07-24 at 9.12.59 AM.jpeg",
    ],
    description: "Creación de atmósferas únicas y decorados temáticos para eventos corporativos, congresos y producciones. Transformamos cualquier espacio en un escenario espectacular adaptado a la narrativa de tu evento.",
  },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <StatusBadge className="mb-6" code="PRT-04">
            Proyectos
          </StatusBadge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Portafolio de{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Stands y Eventos Comerciales
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Combinamos creatividad, tecnología y precisión para construir espacios que comunican, conectan e impulsan marcas.
          </p>
        </div>

        <article className="mb-16 grid gap-8 rounded-2xl bg-zinc-900 p-8 lg:grid-cols-3 shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),6px_6px_12px_rgba(0,0,0,0.5)]">
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xl font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
              Diseño Estratégico que Maximiza el Impacto de tu Marca
            </h3>
            <p className="mb-4 leading-relaxed text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
              Cada stand que diseñamos es el resultado de un análisis profundo de los objetivos comerciales del cliente, el perfil del público objetivo y las características del evento. No creamos simples estructuras; construimos experiencias inmersivas que generan conexiones reales entre las marcas y sus clientes potenciales.
            </p>
            <p className="leading-relaxed text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
              Nuestros proyectos van desde stands compactos para startups hasta instalaciones de gran formato para multinacionales. En todos los casos, la premisa es la misma: calidad de primer nivel, ejecución impecable y un diseño que te haga destacar por encima de la competencia.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {[
              { icon: "solar:buildings-3-bold", label: "Ferias Industriales y Comerciales" },
              { icon: "solar:presentation-graph-bold", label: "Eventos y Congresos Corporativos" },
              { icon: "solar:tag-bold", label: "Lanzamientos de Producto" },
              { icon: "solar:health-bold", label: "Sectores: Salud, Auto, Tecnología" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                <Icon icon={item.icon} className="h-5 w-5 flex-shrink-0 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                {item.label}
              </div>
            ))}
          </div>
        </article>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const tiltY = isEven ? -4 : 4

            return (
              <div
                key={project.id}
                className={`flex flex-col gap-8 md:gap-12 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="w-full lg:w-1/2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div
                            className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl md:aspect-video"
                            style={{
                              transform: `rotateX(4deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`,
                              transformStyle: 'preserve-3d',
                              boxShadow: '0 30px 60px rgba(255,255,255,0.15), 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.2)',
                              transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)',
                            }}
                            onMouseEnter={e => {
                              const el = e.currentTarget as HTMLDivElement
                              el.style.transform = `rotateX(0deg) rotateY(0deg) translateY(-12px) scale(1.04)`
                            }}
                            onMouseLeave={e => {
                              const el = e.currentTarget as HTMLDivElement
                              el.style.transform = `rotateX(4deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`
                            }}
                          >
                            <Image
                              src={`/proyectos-primer-nivel/${img}`}
                              alt={`${project.title} — Imagen ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/5" />

                            <div
                              className="pointer-events-none absolute inset-0"
                              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    
                    <CarouselPrevious className="left-4 bg-zinc-900/80 hover:bg-red-600 border-none text-white hover:text-white" />
                    <CarouselNext className="right-4 bg-zinc-900/80 hover:bg-red-600 border-none text-white hover:text-white" />
                  </Carousel>
                </div>

                <div className="flex w-full flex-col justify-center lg:w-1/2 lg:px-8">
                  <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                    {project.category}
                  </span>
                  <h3 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <ul className="mb-10 space-y-4 border-l-2 border-zinc-800 pl-6">
                    <li className="flex items-center gap-3 text-zinc-300">
                      <Icon icon="solar:ruler-pen-bold" className="h-5 w-5 text-red-600" />
                      Diseño a medida según identidad corporativa
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <Icon icon="solar:layers-minimalistic-bold" className="h-5 w-5 text-red-600" />
                      Materiales premium y acabados impecables
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <Icon icon="solar:check-circle-bold" className="h-5 w-5 text-red-600" />
                      Fabricación y montaje llave en mano
                    </li>
                  </ul>

                  <div>
                    <button className="group relative inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-800">
                      Cotizar Proyecto Similar
                      <Icon
                        icon="solar:arrow-right-bold"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 border-2 border-red-600 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25">
            Ver Más Proyectos
            <Icon
              icon="solar:alt-arrow-right-bold"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

