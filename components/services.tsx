"use client"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { StatusBadge } from "@/components/ui/status-badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  description: string
  products: { icon: string; name: string; detail: string }[]
  /** slot[0] = imagen real · slot[1]/slot[2] = placeholder para Sanity */
  imageSlots: [string | null, null, null]
  tiltY: number
}

const categories: ServiceCategory[] = [
  {
    id: "diseno",
    title: "DISEÑO Y",
    subtitle: "CONCEPTUALIZACIÓN",
    description:
      "Transformamos tus objetivos comerciales en arquitectura efímera de alto impacto. Utilizamos herramientas de visualización fotorrealista para asegurar que cada detalle sea perfecto antes de la ejecución.",
    products: [
      {
        icon: "solar:buildings-2-bold",
        name: "Arquitectura Efímera",
        detail: "Estructuras temporales de alto impacto para ferias y eventos",
      },
      {
        icon: "solar:palette-bold",
        name: "Renders y Visualización 3D",
        detail: "Modelado fotorrealista para validar el concepto antes de producir",
      },
      {
        icon: "solar:pen-new-square-bold",
        name: "Stands Comerciales",
        detail: "Diseño estratégico alineado a la identidad de tu marca",
      },
    ],
    imageSlots: ["WhatsApp Image 2026-07-24 at 9.12.52 AM (4).jpeg", null, null],
    tiltY: -4,
  },
  {
    id: "produccion",
    title: "PRODUCCIÓN Y",
    subtitle: "MONTAJE",
    description:
      "Contamos con infraestructura técnica y taller propio para fabricar escenografías y estructuras con un montaje impecable, cumpliendo estrictamente los tiempos de entrega.",
    products: [
      {
        icon: "solar:magic-stick-bold",
        name: "Escenografías",
        detail: "Montajes creativos para lanzamientos, eventos y producciones",
      },
      {
        icon: "solar:settings-minimalistic-bold",
        name: "Fabricación de Estructuras",
        detail: "Producción en taller propio con materiales premium",
      },
      {
        icon: "solar:delivery-bold",
        name: "Montaje, Instalación y Logística",
        detail: "Coordinación integral desde el traslado hasta la entrega final",
      },
    ],
    imageSlots: ["WhatsApp Image 2026-07-24 at 9.12.51 AM (1).jpeg", null, null],
    tiltY: 4,
  },
  {
    id: "equipamiento",
    title: "EQUIPAMIENTO",
    subtitle: "",
    description:
      "Ofrecemos soluciones integrales para potenciar el atractivo de tu espacio, con sistemas audiovisuales de última tecnología y acabados premium para una comunicación visual profesional.",
    products: [
      {
        icon: "solar:sofa-bold",
        name: "Alquiler de Mobiliario",
        detail: "Muebles y exhibidores para stands y espacios comerciales",
      },
      {
        icon: "solar:monitor-bold",
        name: "Alquiler de Equipos Audiovisuales",
        detail: "Pantallas LED, TVs y sistemas de sonido para eventos",
      },
      {
        icon: "solar:printer-minimalistic-bold",
        name: "Impresión a Gran Formato",
        detail: "Viniles, lonas y paneles en alta resolución para tu espacio",
      },
    ],
    imageSlots: ["WhatsApp Image 2026-07-24 at 9.12.52 AM (6).jpeg", null, null],
    tiltY: -4,
  },
]

const steps = [
  {
    number: "01",
    icon: "solar:document-text-bold",
    title: "Briefing Estratégico",
    description:
      "Analizamos a fondo los objetivos de tu marca y los requerimientos de tu espacio comercial para establecer una estrategia clara.",
  },
  {
    number: "02",
    icon: "solar:pen-new-square-bold",
    title: "Diseño y Conceptualización",
    description:
      "Nuestros creativos transforman la visión en conceptos arquitectónicos que conectan marcas con experiencias memorables.",
  },
  {
    number: "03",
    icon: "solar:3d-scan-bold",
    title: "Modelado y Renderizado 3D",
    description:
      "Visualizamos el entorno estratégico con precisión absoluta para asegurar el impacto visual y los resultados deseados.",
  },
  {
    number: "04",
    icon: "solar:settings-minimalistic-bold",
    title: "Producción y Fabricación",
    description:
      "Materializamos el proyecto en nuestro taller especializado utilizando materiales de primer nivel y acabados de alta calidad.",
  },
  {
    number: "05",
    icon: "solar:delivery-bold",
    title: "Logística y Coordinación",
    description:
      "Gestionamos de manera eficiente el traslado y la coordinación logística para garantizar un cumplimiento impecable.",
  },
  {
    number: "06",
    icon: "solar:star-shine-bold",
    title: "Montaje y Entrega Final",
    description:
      "Instalamos tu stand o espacio comercial con precisión técnica, entregando una experiencia lista para destacar en tu evento.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-zinc-900 pt-[1cm] pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-20 text-center">
          <StatusBadge className="mb-6" code="SRV-03">
            NUESTROS SERVICIOS
          </StatusBadge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluciones Integrales para{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Stands y Eventos Comerciales
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Desde el concepto inicial hasta el desmontaje final, gestionamos cada etapa de tu stand para garantizar una presencia de marca impactante y profesional en cada evento.
          </p>
        </div>

        {/* ── Categories ── */}
        <div className="flex flex-col gap-28 lg:gap-36">
          {categories.map((cat, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-28"
              >
                <div
                  className={`flex flex-col gap-10 lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* ── Image carousel (3 slots: 1 real + 2 para Sanity) ── */}
                  <div className="w-full lg:w-1/2">
                    <Carousel className="w-full" opts={{ loop: true }}>
                      <CarouselContent>
                        {cat.imageSlots.map((img, i) => (
                          <CarouselItem key={i}>
                            {img ? (
                              /* ── Slide con imagen real ── */
                              <div
                                className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl"
                                style={{
                                  transform: `rotateX(4deg) rotateY(${cat.tiltY}deg) translateY(-8px) scale(1.02)`,
                                  transformStyle: "preserve-3d",
                                  boxShadow:
                                    "0 30px 60px rgba(255,255,255,0.10), 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                                }}
                                onMouseEnter={(e) => {
                                  const el = e.currentTarget as HTMLDivElement
                                  el.style.transform = `rotateX(0deg) rotateY(0deg) translateY(-12px) scale(1.04)`
                                }}
                                onMouseLeave={(e) => {
                                  const el = e.currentTarget as HTMLDivElement
                                  el.style.transform = `rotateX(4deg) rotateY(${cat.tiltY}deg) translateY(-8px) scale(1.02)`
                                }}
                              >
                                <Image
                                  src={`/proyectos-primer-nivel/${img}`}
                                  alt={`${cat.title} ${cat.subtitle} — Imagen ${i + 1} | PRIMER NIVEL`}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div
                                  className="pointer-events-none absolute inset-0"
                                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)" }}
                                />
                                {/* Dot indicator */}
                                <div className="absolute bottom-4 right-4 flex gap-1.5">
                                  {cat.imageSlots.map((_, d) => (
                                    <span key={d} className={`block h-1.5 rounded-full transition-all duration-300 ${d === i ? 'w-5 bg-red-500' : 'w-1.5 bg-white/30'}`} />
                                  ))}
                                </div>
                              </div>
                            ) : (
                              /* ── Slide vacío — próximamente vía Sanity ── */
                              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-dashed border-zinc-700 bg-zinc-950">
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-600">
                                  {/* Animated grid lines */}
                                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
                                  <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                                      <Icon icon="solar:cloud-upload-bold" className="h-6 w-6 text-zinc-600" />
                                    </div>
                                    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                                      Imagen próximamente
                                    </p>
                                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-zinc-700">
                                      Sanity CMS
                                    </span>
                                  </div>
                                </div>
                                {/* Dot indicator */}
                                <div className="absolute bottom-4 right-4 flex gap-1.5">
                                  {cat.imageSlots.map((_, d) => (
                                    <span key={d} className={`block h-1.5 rounded-full transition-all duration-300 ${d === i ? 'w-5 bg-red-500' : 'w-1.5 bg-white/30'}`} />
                                  ))}
                                </div>
                              </div>
                            )}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* Custom nav buttons */}
                      <CarouselPrevious className="-left-3 h-9 w-9 rounded-full border border-zinc-700 bg-zinc-900 text-white shadow-lg hover:border-red-600 hover:bg-red-600" />
                      <CarouselNext className="-right-3 h-9 w-9 rounded-full border border-zinc-700 bg-zinc-900 text-white shadow-lg hover:border-red-600 hover:bg-red-600" />
                    </Carousel>
                  </div>

                  {/* ── Text content ── */}
                  <div
                    className={`flex w-full flex-col justify-center lg:w-1/2 ${
                      isEven ? "lg:pl-10" : "lg:pr-10"
                    }`}
                  >
                    {/* Title */}
                    <h3 className="mb-5 text-4xl font-black leading-none tracking-tight text-white md:text-5xl">
                      {cat.title}
                      {cat.subtitle && (
                        <>
                          <br />
                          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            {cat.subtitle}
                          </span>
                        </>
                      )}
                    </h3>

                    {/* Description */}
                    <p className="mb-8 text-base leading-relaxed text-zinc-400">
                      {cat.description}
                    </p>

                    {/* Products */}
                    <div className="flex flex-col gap-4 border-l-2 border-zinc-800 pl-6">
                      {cat.products.map((p) => (
                        <div key={p.name} className="group flex items-start gap-4">
                          <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800 transition-colors duration-200 group-hover:bg-red-600/20">
                            <Icon
                              icon={p.icon}
                              className="h-4 w-4 text-red-500"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-white">
                              {p.name}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                              {p.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider between categories */}
                {index < categories.length - 1 && (
                  <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* ── Process steps ── */}
        <div className="mt-28">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
              Nuestro Proceso de Trabajo
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
              Un flujo de trabajo estructurado y transparente que garantiza resultados excepcionales en cada proyecto de diseño y montaje de stands.
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-zinc-900 p-6 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.03),inset_4px_4px_8px_rgba(0,0,0,0.5)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Icon
                    icon={step.icon}
                    className="h-6 w-6 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                  />
                  <h4 className="font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-700/50 lg:block shadow-sm" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 3D Visualization banner ── */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-zinc-900 shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),6px_6px_12px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/service-design.png"
                alt="Diseño 3D y Planificación de Stands — PRIMER NIVEL"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12">
              <StatusBadge className="mb-4" code="TEC-01">
                Tecnología 3D
              </StatusBadge>
              <h3 className="mb-4 text-2xl font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                Visualización Estratégica y Renderizado 3D
              </h3>
              <p className="mb-6 leading-relaxed text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
                Visualizamos tu proyecto con tecnología de vanguardia para
                garantizar que cada espacio comercial conecte con tu audiencia de
                manera memorable. Nuestras herramientas de modelado 3D permiten
                recorrer virtualmente tu entorno estratégico antes de la
                producción, asegurando precisión milimétrica y máximo impacto
                visual.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Renders Fotorrealistas",
                  "Planos Técnicos de Precisión",
                  "Entornos Virtuales 360°",
                  "Optimización de Diseño",
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <div className="h-1 w-1 flex-shrink-0 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
