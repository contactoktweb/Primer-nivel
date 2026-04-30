import Image from "next/image"
import { Icon } from "@iconify/react"
import { StatusBadge } from "@/components/ui/status-badge"

const services = [
  {
    icon: "solar:lightbulb-bold",
    title: "Diseño Creativo y Conceptualización",
    description:
      "Desarrollamos conceptos únicos y personalizados que reflejan la identidad de tu marca. Desde el primer boceto hasta el render final, cada decisión de diseño está orientada a capturar la atención de tu audiencia y diferenciarte de la competencia.",
  },
  {
    icon: "solar:box-bold",
    title: "Producción y Fabricación de Stands",
    description:
      "Fabricación de alta calidad con materiales premium y acabados impecables. Contamos con taller propio equipado con tecnología de punta para garantizar precisión, durabilidad y una estética que representa a tu marca al máximo nivel.",
  },
  {
    icon: "solar:settings-bold",
    title: "Montaje y Desmontaje Profesional",
    description:
      "Nuestro equipo de técnicos especializados gestiona la instalación y desmontaje de forma eficiente y segura, asegurando que tu stand esté impecable y listo en los tiempos establecidos, sin contratiempos de último momento.",
  },
  {
    icon: "solar:palette-bold",
    title: "Branding e Identidad Visual Integral",
    description:
      "Implementamos de forma coherente toda tu identidad visual en cada elemento del stand: gráficas, iluminación, mobiliario y señalética. El resultado es un espacio que habla el mismo idioma que tu marca.",
  },
  {
    icon: "solar:delivery-bold",
    title: "Logística y Coordinación Completa",
    description:
      "Nos encargamos de toda la logística: transporte, almacenamiento, coordinación con organizadores de ferias y gestión de permisos. Tu tranquilidad es nuestra prioridad para que solo te concentres en tus negocios.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Asesoría y Consultoría Personalizada",
    description:
      "Desde el primer contacto hasta el cierre del evento, un consultor dedicado te acompañará en cada decisión. Analizamos tus objetivos comerciales para garantizar que la inversión en tu stand genere resultados medibles.",
  },
]

const steps = [
  {
    number: "01",
    icon: "solar:document-text-bold",
    title: "Briefing y Análisis",
    description: "Reunión inicial para entender tus objetivos, identidad de marca, presupuesto y requerimientos técnicos del evento.",
  },
  {
    number: "02",
    icon: "solar:pen-new-square-bold",
    title: "Diseño y Conceptualización",
    description: "Nuestros diseñadores crean propuestas creativas alineadas con tu estrategia de marca y los parámetros del evento.",
  },
  {
    number: "03",
    icon: "solar:3d-scan-bold",
    title: "Renderizado 3D y Aprobación",
    description: "Presentamos renders fotorrealistas para que apruebes cada detalle antes de iniciar la producción.",
  },
  {
    number: "04",
    icon: "solar:settings-minimalistic-bold",
    title: "Producción y Fabricación",
    description: "Con la aprobación del cliente, nuestro taller inicia la fabricación con los más altos estándares de calidad.",
  },
  {
    number: "05",
    icon: "solar:delivery-bold",
    title: "Logística y Transporte",
    description: "Coordinamos el traslado seguro de todos los elementos del stand hasta el lugar del evento.",
  },
  {
    number: "06",
    icon: "solar:star-shine-bold",
    title: "Montaje y Entrega Final",
    description: "Nuestro equipo instala el stand con precisión milimétrica y lo entrega listo para que brilles en el evento.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <StatusBadge className="mb-6" code="SRV-03">
            Nuestros Servicios
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/50"
            >
              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />

              {/* Icon */}
              <Icon icon={service.icon} className="mb-6 h-10 w-10 text-red-600" />

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-zinc-200">
                {service.title}
              </h3>
              <p className="leading-relaxed text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process / Workflow */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Nuestro Proceso de Trabajo
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Un flujo de trabajo estructurado y transparente que garantiza resultados excepcionales en cada proyecto de diseño y montaje de stands.
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-xl border border-white/[0.03] bg-zinc-900/20 p-6 transition-all duration-300 hover:border-red-600/20 hover:bg-zinc-900/40"
              >

                <div className="mb-3 flex items-center gap-3">
                  <Icon icon={step.icon} className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>

                {/* Connector line (not on last items) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-700 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Design Section */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-white/[0.03] bg-zinc-900/20 backdrop-blur-sm">
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
              <h3 className="mb-4 text-2xl font-bold text-white">
                Visualización y Renderizado 3D en Tiempo Real
              </h3>
              <p className="mb-6 leading-relaxed text-zinc-400">
                Utilizamos las herramientas de modelado y renderizado más avanzadas del mercado para que puedas recorrer virtualmente tu stand antes de que se fabrique la primera pieza. Precisión absoluta en cada milímetro, sin sorpresas en el día del montaje.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Renders Fotorrealistas",
                  "Planos Técnicos Detallados",
                  "Recorridos Virtuales 360°",
                  "Revisiones Ilimitadas",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-zinc-300">
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
