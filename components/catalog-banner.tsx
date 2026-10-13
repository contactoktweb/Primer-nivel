/**
 * CatalogBanner — compact horizontal bar linking to the PDF catalog.
 * Place the file at /public/catalogo-primer-nivel.pdf to activate the links.
 */
export function CatalogBanner() {
  const catalogPath = "/catalogo-primer-nivel.pdf"

  return (
    <div
      id="catalogo"
      className="relative flex flex-col items-center justify-between gap-4 border-y border-white/10 bg-zinc-950 px-6 py-5 sm:flex-row sm:gap-6 md:px-12"
      aria-label="Descarga nuestro catálogo de stands en PDF"
    >
      {/* Left: icon + text */}
      <div className="flex items-center gap-4">
        {/* PDF icon */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-red-600" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
            <path fillRule="evenodd" d="M4 4a2 2 0 0 1 2-2h4.586A2 2 0 0 1 12 2.586L15.414 6A2 2 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z" clipRule="evenodd" />
          </svg>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
            Catálogo Primer Nivel
          </p>
          <p className="mt-0.5 text-[11px] text-white/50">
            Diseños, sistemas modulares y equipamiento — PDF gratuito
          </p>
        </div>
      </div>

      {/* Right: CTAs */}
      <div className="flex flex-shrink-0 items-center gap-3">
        <a
          href={catalogPath}
          target="_blank"
          rel="noopener noreferrer"
          id="btn-ver-catalogo"
          aria-label="Ver catálogo de Primer Nivel en el navegador"
          className="text-[10px] font-bold uppercase tracking-widest text-white/50 transition-colors duration-200 hover:text-white"
        >
          Ver en línea
        </a>

        <a
          href={catalogPath}
          download="Catalogo-Primer-Nivel.pdf"
          id="btn-descargar-catalogo"
          aria-label="Descargar catálogo de Primer Nivel en formato PDF"
          className="group inline-flex items-center gap-2 bg-red-600 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-200 hover:bg-red-500 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          Descargar
        </a>
      </div>

      {/* Thin red left accent line */}
      <div className="absolute inset-y-0 left-0 w-0.5 bg-red-600" aria-hidden="true" />
    </div>
  )
}
