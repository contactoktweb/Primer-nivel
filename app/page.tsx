import { Hero } from "@/components/hero"
import { LocationsMap } from "@/components/locations-map"
import { StandShowcase } from "@/components/stand-showcase"
import { CatalogBanner } from "@/components/catalog-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StandShowcase />
      <LocationsMap />
      <CatalogBanner />
    </>
  )
}
