import { About } from "@/components/about"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nosotros | PRIMER NIVEL',
  description: 'Conoce la historia, misión y visión de PRIMER NIVEL. Especialistas en diseño, producción y montaje de stands.',
}

export default function NosotrosPage() {
  return (
    <>
      <About />
    </>
  )
}
