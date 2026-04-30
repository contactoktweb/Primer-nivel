import { Portfolio } from "@/components/portfolio"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Proyectos | PRIMER NIVEL',
  description: 'Explora nuestro portafolio de proyectos destacados. Stands comerciales y eventos diseñados por PRIMER NIVEL.',
}

export default function ProyectosPage() {
  return (
    <>
      <Portfolio />
    </>
  )
}
