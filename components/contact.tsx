import Image from "next/image"
import { Icon } from "@iconify/react"
import { StatusBadge } from "@/components/ui/status-badge"

const contactInfo = [
  {
    icon: "solar:phone-calling-bold",
    title: "Llámanos",
    content: "+57 300 123 4567",
    href: "tel:+573001234567",
    description: "Atención personalizada de lunes a viernes, 8am – 6pm. Respuesta inmediata para cotizaciones urgentes.",
  },
  {
    icon: "solar:letter-bold",
    title: "Escríbenos",
    content: "info@primernivel.com",
    href: "mailto:info@primernivel.com",
    description: "Enviamos propuestas detalladas con diseño 3D y cotización en menos de 24 horas hábiles.",
  },
  {
    icon: "solar:map-point-bold",
    title: "Visítanos",
    content: "Bogotá, Colombia",
    href: "#",
    description: "Sede principal en Bogotá con cobertura a nivel nacional. Atendemos eventos en todo el país.",
  },
]

const faqs = [
  {
    question: "¿Con cuánto tiempo de anticipación debo solicitar mi stand?",
    answer: "Recomendamos iniciar el proceso con al menos 4 a 6 semanas de anticipación para proyectos estándar. Para stands complejos o de gran formato, lo ideal es comenzar 8 semanas antes. Sin embargo, contamos con planes de producción acelerada para proyectos urgentes.",
  },
  {
    question: "¿Trabajan con ferias y eventos fuera de Bogotá?",
    answer: "Sí, tenemos cobertura nacional. Hemos ejecutado proyectos en Medellín, Cali, Barranquilla, Cartagena y otras ciudades principales. Incluimos en nuestra propuesta la logística completa de transporte y montaje en destino.",
  },
  {
    question: "¿Qué incluye el servicio de montaje y desmontaje?",
    answer: "Nuestro servicio integral incluye transporte del stand al lugar del evento, instalación completa por nuestro equipo técnico, supervisión durante el evento para cualquier ajuste, desmontaje al finalizar y traslado de regreso. El cliente no necesita preocuparse por nada.",
  },
  {
    question: "¿Puedo reutilizar el stand en diferentes ferias?",
    answer: "Absolutamente. Diseñamos stands modulares y reutilizables que pueden adaptarse a diferentes tamaños y configuraciones según el espacio disponible en cada feria. Esto maximiza el retorno de inversión de tu stand.",
  },
  {
    question: "¿Qué garantía ofrecen sobre los materiales y la construcción?",
    answer: "Todos nuestros stands incluyen garantía de calidad en materiales y fabricación. Ante cualquier inconveniente estructural o de acabado, respondemos de inmediato. Además, durante el montaje nuestro equipo hace una revisión exhaustiva antes de la entrega.",
  },
  {
    question: "¿Ofrecen servicios de alquiler o solo de venta?",
    answer: "Ofrecemos ambas modalidades. Puedes adquirir tu stand para uso permanente o arrendar estructuras de nuestro catálogo para eventos puntuales. También gestionamos stands mixtos (estructura en alquiler + gráficas personalizadas propias).",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-black py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stand.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-10 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <StatusBadge className="mb-6" code="CNT-05">
            Contacto
          </StatusBadge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para tu{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              próximo stand o evento?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Cuéntanos sobre tu proyecto y en menos de 24 horas te presentamos una propuesta de diseño personalizada, con render 3D y cotización detallada. Sin compromisos.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/80"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 transition-colors duration-300 group-hover:border-red-600/30">
                <Icon icon={item.icon} className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
                {item.title}
              </h3>
              <p className="mb-3 text-lg font-semibold text-zinc-200">{item.content}</p>
              <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
            </a>
          ))}
        </div>

        {/* Info Strip: Hours + Coverage */}
        <div className="mt-8 grid gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-600/10">
              <Icon icon="solar:clock-circle-bold" className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Horario de Atención</p>
              <p className="font-semibold text-white">Lun – Vie, 8:00 am – 6:00 pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-600/10">
              <Icon icon="solar:global-bold" className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Cobertura</p>
              <p className="font-semibold text-white">Nacional – Colombia</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-600/10">
              <Icon icon="solar:chat-round-check-bold" className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Tiempo de Respuesta</p>
              <p className="font-semibold text-white">Menos de 24 horas</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Preguntas Frecuentes
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Resolvemos las dudas más comunes sobre nuestros servicios de diseño, producción y montaje de stands.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-red-600/30"
              >
                <div className="mb-3 flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-600/20">
                    <Icon icon="solar:question-circle-bold" className="h-3 w-3 text-red-500" />
                  </div>
                  <h3 className="font-bold leading-snug text-white">{faq.question}</h3>
                </div>
                <p className="pl-8 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 rounded-2xl border border-red-600/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950/20 p-10 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            ¿Tienes un evento próximo?
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-zinc-400">
            Solicita tu cotización ahora y recibe una propuesta de diseño personalizada en menos de 24 horas. Tu stand de primer nivel te espera.
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20Me%20interesa%20su%20modelo%20de%20trabajo.%20Me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20para%20un%20nuevo%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-red-600 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/50"
          >
            <Icon icon="ri:whatsapp-fill" className="h-5 w-5" />
            Solicitar Cotización por WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
