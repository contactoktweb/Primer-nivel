"use client"
import Link from "next/link"
import { Icon } from "@iconify/react"

const CATALOG_PATH = "/BROSHURE PRIMER NIVEL.pdf"

/**
 * ContactCatalogSection — sección antes del footer.
 * Columna izquierda: formulario de contacto.
 * Columna derecha: descarga / visualización del catálogo.
 */
export function ContactCatalogSection() {
  return (
    <section
      id="contacto-catalogo"
      aria-labelledby="contacto-catalogo-title"
      className="bg-zinc-950 pt-[1cm] pb-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* ── Catálogo ── */}
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Recursos
            </p>
            <h3 className="mb-6 text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl">
              Nuestro Catálogo
            </h3>

            <div
              className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-[-4px_-4px_8px_rgba(255,255,255,0.02),6px_6px_16px_rgba(0,0,0,0.6)]"
            >
              {/* Acento rojo izquierdo */}
              <div className="absolute inset-y-0 left-0 w-1 bg-red-600" aria-hidden="true" />

              <div className="flex items-start gap-5 pl-4">
                {/* Icono PDF */}
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-red-600 shadow-lg shadow-red-600/30"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 0 1 2-2h4.586A2 2 0 0 1 12 2.586L15.414 6A2 2 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-black uppercase tracking-[0.15em] text-white">
                    Catálogo Primer Nivel
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Diseños, sistemas modulares y equipamiento — PDF gratuito
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    {/* Ver en línea */}
                    <a
                      href={CATALOG_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="btn-ver-catalogo-section"
                      aria-label="Ver catálogo de Primer Nivel en el navegador"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-300 transition-all duration-200 hover:border-red-600/50 hover:text-white"
                    >
                      <Icon icon="solar:eye-bold" className="h-4 w-4" />
                      Ver en línea
                    </a>

                    {/* Descargar */}
                    <a
                      href={CATALOG_PATH}
                      download="Catalogo-Primer-Nivel.pdf"
                      id="btn-descargar-catalogo-section"
                      aria-label="Descargar catálogo de Primer Nivel en formato PDF"
                      className="group inline-flex items-center justify-center gap-2 bg-red-600 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-200 hover:bg-red-500 active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                        aria-hidden="true"
                      >
                        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Elemento decorativo: valores de marca ── */}
            <div className="mt-5 space-y-2" aria-hidden="true">
              {[
                "Diseño estratégico orientado a resultados",
                "Materiales premium y acabados de primera calidad",
                "Entrega puntual en cada proyecto",
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="h-px w-6 flex-shrink-0 bg-red-600" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">{line}</p>
                </div>
              ))}
            </div>
          </div>


          {/* ── Formulario de contacto ── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Escríbenos
            </p>
            <h2
              id="contacto-catalogo-title"
              className="mb-6 text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl"
            >
              Cuéntanos tu idea
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[-4px_-4px_8px_rgba(255,255,255,0.02),6px_6px_16px_rgba(0,0,0,0.6)]">
              <form className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    id="form-nombre"
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-red-600/50 focus:outline-none"
                    required
                  />
                  <input
                    id="form-whatsapp"
                    type="tel"
                    placeholder="WhatsApp"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-red-600/50 focus:outline-none"
                    required
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    id="form-email"
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-red-600/50 focus:outline-none"
                    required
                  />
                  <select
                    id="form-tipo"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-400 transition-all focus:border-red-600/50 focus:outline-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Tipo de Proyecto</option>
                    <option value="stand">Stand Comercial</option>
                    <option value="local">Local Comercial</option>
                    <option value="mobiliario">Mobiliario / Exhibición</option>
                    <option value="otro">Otro Proyecto</option>
                  </select>
                </div>
                <textarea
                  id="form-mensaje"
                  placeholder="Describe brevemente lo que necesitas..."
                  rows={2}
                  className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-red-600/50 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 py-3 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 active:scale-95"
                >
                  Solicitar Asesoría
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Línea decorativa inferior */}
      <div className="mt-[1cm] border-t border-white/10" aria-hidden="true" />
    </section>
  )
}
