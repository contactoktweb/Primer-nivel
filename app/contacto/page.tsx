import { Contact } from "@/components/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contacto | PRIMER NIVEL',
  description: 'Contáctanos para tu próximo proyecto de stand o evento. Asesoría personalizada y cotizaciones.',
}

export default function ContactoPage() {
  return (
    <>
      <Contact />
    </>
  )
}
