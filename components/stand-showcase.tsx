import { StatusBadge } from "@/components/ui/status-badge"

/* ── Section ─────────────────────────────────────────────── */

export function StandShowcase() {
  return (
    <section
      id="diseno-3d"
      aria-labelledby="diseno-3d-title"
      className="relative bg-[#0a0a0a] pt-[1cm] pb-[1cm] text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* ── Columna de texto ── */}
        <header>
          <StatusBadge code="PN-3D">Diseño 3D</StatusBadge>
          <h2
            id="diseno-3d-title"
            className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl"
          >
            Visualiza tu stand antes de construirlo
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Modelamos cada stand en 3D: estructuras, vitrinas, mostradores e
            iluminación. Así apruebas el diseño completo antes de producirlo
            y montarlo en la feria.
          </p>
        </header>

        {/* ── Espacio para elemento gráfico (el cliente subirá el contenido) ── */}
        <figure
          aria-label="Espacio para elemento gráfico de Diseño 3D — Primer Nivel"
          className="flex h-80 w-full items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] lg:h-[420px]"
        >
          <figcaption className="sr-only">
            Elemento gráfico de Diseño 3D — próximamente
          </figcaption>
        </figure>

      </div>
    </section>
  )
}
