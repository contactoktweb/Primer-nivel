import fs from "node:fs"
import path from "node:path"

type Position = [number, number]
type Geometry =
  | { type: "Polygon"; coordinates: Position[][] }
  | { type: "MultiPolygon"; coordinates: Position[][][] }
type Feature = { properties: { CONTINENT: string; ADMIN: string }; geometry: Geometry }

interface Location {
  country: string
  city: string
  coords: Position // [lon, lat]
}

const LOCATIONS: Location[] = [
  { country: "Panamá", city: "Ciudad de Panamá", coords: [-79.52, 8.98] },
  { country: "Colombia", city: "Bogotá", coords: [-74.07, 4.71] },
  { country: "Perú", city: "Lima", coords: [-77.04, -12.05] },
]

const HIGHLIGHTED = ["Panama", "Colombia", "Peru"]
const CONTINENTS = ["North America", "South America"]
const GLOBE_RADIUS = 500
const CENTER_LON = -80
const CENTER_LAT = 12
const ACCENT = "#dc2626"
const GEOJSON_PATH = path.join(process.cwd(), "data", "americas-countries.geojson")

const toRad = (deg: number) => (deg * Math.PI) / 180
const lon0 = toRad(CENTER_LON)
const lat0 = toRad(CENTER_LAT)

/** Orthographic projection; returns null for points on the far side of the globe. */
function project([lon, lat]: Position): Position | null {
  const λ = toRad(lon)
  const φ = toRad(lat)
  const cosC = Math.sin(lat0) * Math.sin(φ) + Math.cos(lat0) * Math.cos(φ) * Math.cos(λ - lon0)
  if (cosC < 0) return null
  const x = GLOBE_RADIUS * Math.cos(φ) * Math.sin(λ - lon0)
  const y = GLOBE_RADIUS * (Math.cos(lat0) * Math.sin(φ) - Math.sin(lat0) * Math.cos(φ) * Math.cos(λ - lon0))
  return [x, -y]
}

function ringToPath(ring: Position[]): string {
  const pts = ring.map(project).filter((p): p is Position => p !== null)
  if (pts.length < 3) return ""
  return `M${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join("L")}Z`
}

function geometryToPath(geometry: Geometry): string {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates
  return polygons.flatMap((poly) => poly.map(ringToPath)).join("")
}

function loadFeatures(): Feature[] {
  try {
    const raw = JSON.parse(fs.readFileSync(GEOJSON_PATH, "utf8")) as { features: Feature[] }
    return raw.features.filter((f) => CONTINENTS.includes(f.properties.CONTINENT))
  } catch (error) {
    console.error("[LocationsMap] No se pudo cargar el GeoJSON:", error)
    return []
  }
}

export function LocationsMap() {
  const features = loadFeatures()
  const markers = LOCATIONS.map((loc) => ({ ...loc, point: project(loc.coords) as Position }))

  return (
    <section id="presencia" aria-labelledby="presencia-title" className="relative bg-[#0a0a0a] pt-[1cm] pb-0 text-white">

      <div className="mx-auto grid max-w-7xl items-center gap-12 border-y border-white/15 px-6 py-[1cm] lg:grid-cols-[1fr_1.4fr]">

        <header>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-600">Presencia regional</p>
          <h2 id="presencia-title" className="text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
            Stands que han llevado marcas a toda Latinoamérica
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Diseñamos, producimos y montamos stands para ferias y exposiciones en Panamá, Colombia y Perú.
          </p>
          <ul className="mt-10 space-y-5">
            {LOCATIONS.map((loc) => (
              <li key={loc.country} className="flex items-center gap-4 border-l-2 border-red-600 pl-4">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider">{loc.country}</h3>
                  <p className="text-xs uppercase tracking-widest text-white/50">{loc.city}</p>
                </div>
              </li>
            ))}
          </ul>
        </header>

        <figure className="relative mx-auto w-full max-w-xs">
          <svg
            viewBox="-330 -470 620 900"
            className="h-auto w-full"
            role="img"
            aria-label="Mapa de América con los países donde Primer Nivel ha realizado stands: Panamá, Colombia y Perú"
          >
            <circle r={GLOBE_RADIUS} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
            {features.map((f) => {
              const active = HIGHLIGHTED.includes(f.properties.ADMIN)
              return (
                <path
                  key={f.properties.ADMIN}
                  d={geometryToPath(f.geometry)}
                  fill={active ? "rgba(220,38,38,0.18)" : "none"}
                  stroke={active ? ACCENT : "rgba(255,255,255,0.75)"}
                  strokeWidth={active ? 1.2 : 0.7}
                  strokeLinejoin="round"
                />
              )
            })}
            {markers.map(({ country, point: [x, y] }, i) => (
              <g key={country} transform={`translate(${x} ${y})`}>
                <circle r={4} fill={ACCENT}>
                  <animate attributeName="r" values="4;22" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                </circle>
                <circle r={5} fill={ACCENT} stroke="#0a0a0a" strokeWidth={2} />
                <text x={12} y={4} fill="#fff" fontSize={14} fontWeight={700} letterSpacing={1.5}>
                  {country.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
          <figcaption className="sr-only">Países con proyectos de Primer Nivel: Panamá, Colombia y Perú.</figcaption>
        </figure>
      </div>
    </section>
  )
}
