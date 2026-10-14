"use client"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { StatusBadge } from "@/components/ui/status-badge"

const services = [
  {
    id: "diseno",
    icon: "solar:pen-new-square-bold",
    title: "DISEÑO Y CONCEPTUALIZACIÓN",
    features: ["Stands comerciales", "Arquitectura comercial", "Renders y visualización 3D"],
    description:
      "Transformamos tus objetivos comerciales en soluciones arquitectónicas de alto impacto, utilizando herramientas de visualización fotorrealista para asegurar que cada detalle sea perfecto antes de su ejecución.",
  },
  {
    id: "produccion",
    icon: "solar:settings-bold",
    title: "PRODUCCIÓN Y MONTAJE",
    features: ["Fabricación de estructuras", "Montaje e instalación", "Logística y coordinación"],
    description:
      "Contamos con infraestructura técnica y taller propio para garantizar un montaje impecable, respaldado por una gestión integral que asegura el cumplimiento estricto de los tiempos de entrega.",
  },
  {
    id: "equipamiento",
    icon: "solar:play-bold",
    title: "EQUIPAMIENTO",
    features: ["Alquiler de mobiliario", "Alquiler audiovisual", "Impresión a gran formato"],
    description:
      "Ofrecemos soluciones integrales para potenciar el atractivo de tu espacio, con sistemas audiovisuales de última tecnología y acabados premium para una comunicación visual profesional.",
  },
]

const steps = [
  {
    number: "01",
    icon: "solar:document-text-bold",
    title: "Briefing Estratégico",
    description: "Analizamos a fondo los objetivos de tu marca y los requerimientos de tu espacio comercial para establecer una estrategia clara.",
  },
  {
    number: "02",
    icon: "solar:pen-new-square-bold",
    title: "Diseño y Conceptualización",
    description: "Nuestros creativos transforman la visión en conceptos arquitectónicos que conectan marcas con experiencias memorables.",
  },
  {
    number: "03",
    icon: "solar:3d-scan-bold",
    title: "Modelado y Renderizado 3D",
    description: "Visualizamos el entorno estratégico con precisión absoluta para asegurar el impacto visual y los resultados deseados.",
  },
  {
    number: "04",
    icon: "solar:settings-minimalistic-bold",
    title: "Producción y Fabricación",
    description: "Materializamos el proyecto en nuestro taller especializado utilizando materiales de primer nivel y acabados de alta calidad.",
  },
  {
    number: "05",
    icon: "solar:delivery-bold",
    title: "Logística y Coordinación",
    description: "Gestionamos de manera eficiente el traslado y la coordinación logística para garantizar un cumplimiento impecable.",
  },
  {
    number: "06",
    icon: "solar:star-shine-bold",
    title: "Montaje y Entrega Final",
    description: "Instalamos tu stand o espacio comercial con precisión técnica, entregando una experiencia lista para destacar en tu evento.",
  },
]

function TiltCard({ service }: { service: any }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="group relative p-8 sm:p-10"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative flex h-full flex-col"
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        whileHover={{ 
          y: -15, 
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div 
          className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'scale(1.2) translateY(20px)'
          }}
        />

        <div style={{ transform: "translateZ(50px)" }} className="transition-transform duration-300">
          <Icon 
            icon={service.icon} 
            className="mb-6 h-12 w-12 text-red-600 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" 
          />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="transition-transform duration-300">
          <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-500 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)]">
            {service.title}
          </h3>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="mb-6 transition-transform duration-300">
          <ul className="space-y-2">
            {service.features.map((feature: string) => (
              <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ transform: "translateZ(10px)" }} className="transition-transform duration-300">
          <p className="text-sm leading-relaxed text-zinc-500 transition-all duration-500 group-hover:text-zinc-400">
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="bg-zinc-900 pt-[1cm] pb-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} id={service.id} className="scroll-mt-24">
              <TiltCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-24">
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
                  <Icon icon={step.icon} className="h-6 w-6 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  <h3 className="font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>


                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-700/50 lg:block shadow-sm" />
                )}
              </div>
            ))}
          </div>
        </div>

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
                Visualizamos tu proyecto con tecnología de vanguardia para garantizar que cada espacio comercial conecte con tu audiencia de manera memorable. Nuestras herramientas de modelado 3D permiten recorrer virtualmente tu entorno estratégico antes de la producción, asegurando precisión milimétrica, máximo impacto visual y resultados excepcionales en cada evento.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Renders Fotorrealistas",
                  "Planos Técnicos de Precisión",
                  "Entornos Virtuales 360°",
                  "Optimización de Diseño",
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
