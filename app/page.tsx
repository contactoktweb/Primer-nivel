import { Hero } from "@/components/hero"
import { LocationsMap } from "@/components/locations-map"
import { StandShowcase } from "@/components/stand-showcase"
import { ContactCatalogSection } from "@/components/contact-catalog-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StandShowcase />
      <LocationsMap />
      <ContactCatalogSection />
    </>
  )
}

