import Image from "next/image"
import { Icon } from "@iconify/react"
import { StatusBadge } from "@/components/ui/status-badge"

const values = [
  {
    icon: "solar:target-bold",
    title: "EJECUCIÓN PRECISA",
    description: "Gestionamos cada detalle con eficiencia y cumplimiento.",
  },
  {
    icon: "solar:bolt-bold",
    title: "DISEÑO ESTRATÉGICO",
    description: "Creamos conceptos innovadores alineados con los objetivos de tu marca",
  },
  {
    icon: "solar:medal-star-bold",
    title: "CALIDAD GARANTIZADA",
    description: "Utilizamos materiales de alto estándar para resultados excepcionales.",
  },
]


const whyUs = [
  {
    icon: "solar:magic-stick-3-bold",
    title: "SOLUCIONES A MEDIDA",
    description: "Diseños exclusivos adaptados 100% a los objetivos y la personalidad de tu marca.",
  },
  {
    icon: "solar:clock-circle-bold",
    title: "ENTREGA PUNTUAL",
    description: "Garantizamos el montaje completo en los tiempos acordados, sin excusas ni retrasos.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "ACOMPAÑAMIENTO TOTAL",
    description: "Te apoyamos en cada etapa del proceso, desde el primer boceto hasta el desmontaje.",
  },
  {
    icon: "solar:fire-bold",
    title: "RESULTADOS QUE IMPACTAN",
    description: "Creamos entornos estratégicos diseñados para que tu marca destaque y atraiga miradas.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-zinc-900 pt-[1cm] pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl border border-red-600/20 transition-all duration-700 group-hover:-inset-6 group-hover:border-red-600/40" />
            <div className="absolute -top-6 -left-6 h-12 w-12 border-t-2 border-l-2 border-red-600 transition-all duration-700 group-hover:-top-8 group-hover:-left-8" />
            <div className="absolute -bottom-6 -right-6 h-12 w-12 border-b-2 border-r-2 border-red-600 transition-all duration-700 group-hover:-bottom-8 group-hover:-right-8" />
            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/about-materials.png"
                alt="PRIMER NIVEL - Detalle de materiales premium para stands y eventos"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 group-hover:translate-x-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Material Detail v1.0
                </span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-red-600/10 blur-[100px] transition-all duration-700 group-hover:bg-red-600/20" />
          </div>

          <div>
            <StatusBadge className="mb-6" code="ABT-02">
              Sobre Nosotros
            </StatusBadge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-md">

              Líderes en Diseño y Montaje de{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Stands para Ferias y Eventos
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
              Somos una empresa especializada en el diseño construcción y producción de espacios comerciales que conectan marcas con experiencias memorables. Convertimos ideas en entornos estratégicos que generan impacto y resultados.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-900 p-6 shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),6px_6px_12px_rgba(0,0,0,0.5)]">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                  <Icon icon="solar:flag-bold" className="h-5 w-5 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  Nuestra Misión
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Crear stands y espacios comerciales de alto impacto que potencien la presencia de marca de nuestros clientes en ferias, congresos y eventos empresariales a nivel nacional e internacional.
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-900 p-6 shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),6px_6px_12px_rgba(0,0,0,0.5)]">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                  <Icon icon="solar:eye-bold" className="h-5 w-5 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  Nuestra Visión
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Ser la empresa referente en Latinoamérica en diseño y producción de ambientes comerciales efímeros, reconocida por la innovación constante y la excelencia en la ejecución de cada proyecto.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-zinc-900 p-5 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.03),inset_4px_4px_8px_rgba(0,0,0,0.5)]"
                >
                  <Icon icon={value.icon} className="mb-3 h-8 w-8 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  <h3 className="mb-2 font-semibold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">{value.title}</h3>
                  <p className="text-sm text-zinc-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              ¿Por qué elegir{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Primer Nivel?
              </span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Nos diferenciamos por nuestro compromiso total con la calidad y el cumplimiento en cada etapa del proyecto.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 py-8">
            {whyUs.map((item, index) => (
              <div key={item.title} className="h-full">
                <div
                  className="group relative h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    // Pure orthographic isometric tilt facing right (no perspective distortion)
                    transform: 'rotateX(15deg) rotateY(25deg)',
                  }}
                >
                <div 
                  className="absolute inset-0 rounded-xl bg-red-600/10 border border-red-600/30 transition-transform duration-500 group-hover:bg-red-600/20"
                  style={{
                    transform: 'translateZ(-30px) translate(-15px, 15px)',
                  }}
                />
                
                <div 
                  className="relative h-full rounded-xl border border-white/[0.08] bg-zinc-900 p-6 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:bg-zinc-800"
                  style={{
                    transform: 'translateZ(0)',
                  }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 shadow-[inset_0_0_10px_rgba(220,38,38,0.1)]">
                    <Icon icon={item.icon} className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
