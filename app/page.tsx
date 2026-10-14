import { Hero } from "@/components/hero"
import { SectorsCarousel } from "@/components/sectors-carousel"
import { LocationsMap } from "@/components/locations-map"
import { StandShowcase } from "@/components/stand-showcase"
import { BrandsShowcase } from "@/components/brands-showcase"
import { FurnitureRental } from "@/components/furniture-rental"
import { ContactCatalogSection } from "@/components/contact-catalog-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsCarousel />
      <StandShowcase />
      <BrandsShowcase />
      <FurnitureRental />
      <LocationsMap />
      <ContactCatalogSection />
    </>
  )
}

