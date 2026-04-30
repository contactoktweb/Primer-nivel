import { Services } from "@/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Servicios | PRIMER NIVEL',
  description: 'Nuestros servicios de diseño 3D, producción, montaje y logística de stands para eventos y ferias.',
}

export default function ServiciosPage() {
  return (
    <>
      <Services />
    </>
  )
}
