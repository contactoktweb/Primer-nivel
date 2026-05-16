"use client"

import { Icon } from "@iconify/react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <Icon icon="ri:whatsapp-fill" className={className} />
  )
}

export function WhatsAppButton() {
  const phoneNumber = "573173322149"
  const message = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios de diseño y montaje de stands."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] hover:shadow-xl hover:shadow-green-500/40 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
    </a>
  )
}
