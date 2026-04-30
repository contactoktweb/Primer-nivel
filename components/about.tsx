import Image from "next/image"
import { Icon } from "@iconify/react"
import { StatusBadge } from "@/components/ui/status-badge"

const values = [
  {
    icon: "solar:target-bold",
    title: "Precisión",
    description: "Trabajamos con exactitud milimétrica en cada detalle, garantizando acabados perfectos que reflejan la calidad de tu marca.",
  },
  {
    icon: "solar:bolt-bold",
    title: "Innovación",
    description: "Incorporamos las últimas tendencias en diseño de espacios comerciales y materiales de vanguardia para diferenciarte.",
  },
  {
    icon: "solar:medal-star-bold",
    title: "Excelencia",
    description: "Comprometidos con los más altos estándares de calidad en cada proyecto, desde el diseño hasta la entrega final.",
  },
]


const whyUs = [
  {
    icon: "solar:shield-check-bold",
    title: "Garantía Total",
    description: "Respaldamos cada proyecto con garantías de calidad y soporte postventa.",
  },
  {
    icon: "solar:clock-circle-bold",
    title: "Entrega a Tiempo",
    description: "Gestión de proyectos rigurosa para que tu stand esté listo cuando lo necesitas.",
  },
  {
    icon: "solar:graph-up-bold",
    title: "ROI Máximo",
    description: "Diseños estratégicos que maximizan el retorno de inversión en cada feria y evento.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Equipo Dedicado",
    description: "Un consultor asignado a tu proyecto para una comunicación directa y eficiente.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Image + Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Side — Overflow Effect */}
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

          {/* Content Side */}
          <div>
            <StatusBadge className="mb-6" code="ABT-02">
              Sobre Nosotros
            </StatusBadge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Líderes en Diseño y Montaje de{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Stands para Ferias y Eventos
              </span>
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-zinc-400">
              En <span className="font-semibold text-white">PRIMER NIVEL</span> somos especialistas en transformar espacios en experiencias comerciales memorables. Con más de una década de trayectoria en el mercado colombiano, nos hemos consolidado como referentes en el diseño, producción y montaje de stands para ferias industriales, eventos corporativos y activaciones de marca.
            </p>
            <p className="mb-8 leading-relaxed text-zinc-400">
              Nuestro equipo interdisciplinario de diseñadores, arquitectos e ingenieros combina creatividad, técnica y pasión para entregar proyectos que superan las expectativas de cada cliente, generando el máximo impacto visual y retorno de inversión en cada evento.
            </p>

            {/* Mission & Vision */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.03] bg-zinc-900/30 p-5">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-white">
                  <Icon icon="solar:flag-bold" className="h-5 w-5 text-zinc-500" />
                  Nuestra Misión
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Crear stands y espacios comerciales de alto impacto que potencien la presencia de marca de nuestros clientes en ferias, congresos y eventos empresariales a nivel nacional e internacional.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.03] bg-zinc-900/30 p-5">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-white">
                  <Icon icon="solar:eye-bold" className="h-5 w-5 text-zinc-500" />
                  Nuestra Visión
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Ser la empresa referente en Latinoamérica en diseño y producción de ambientes comerciales efímeros, reconocida por la innovación constante y la excelencia en la ejecución de cada proyecto.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-white/[0.03] bg-zinc-900/20 p-4 transition-colors duration-300 hover:border-red-600/30"
                >
                  <Icon icon={value.icon} className="mb-3 h-8 w-8 text-red-600" />
                  <h3 className="mb-1 font-semibold text-white">{value.title}</h3>
                  <p className="text-sm text-zinc-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Why Us */}
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-white/[0.03] bg-zinc-900/20 p-6 transition-all duration-300 hover:border-red-600/30 hover:bg-zinc-900/40"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 transition-colors duration-300 group-hover:bg-red-600/20">
                  <Icon icon={item.icon} className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
