import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="border-t border-black/50 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Marca ── */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl bg-white p-1 shadow-[-2px_-2px_4px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.5)]">
                <Image
                  src="/icono-fondo-blanco.jpeg"
                  alt="PRIMER NIVEL Logo"
                  width={80}
                  height={80}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white">PRIMER NIVEL</span>
                <p className="text-[10px] text-zinc-400">Diseño • Construcción • Calidad</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Especialistas en crear espacios comerciales que conectan marcas con experiencias memorables.
            </p>
          </div>

          {/* ── Empresa ── */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Empresa</h3>
            <nav className="flex flex-col gap-3 text-sm text-zinc-400" aria-label="Navegación del footer">
              <Link href="/" className="transition-colors hover:text-red-600">Inicio</Link>
              <Link href="/nosotros" className="transition-colors hover:text-red-600">Sobre Nosotros</Link>
              <Link href="/servicios" className="transition-colors hover:text-red-600">Servicios</Link>
              <Link href="/proyectos" className="transition-colors hover:text-red-600">Portafolio</Link>
            </nav>
          </div>

          {/* ── Contacto directo ── */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
            <div className="space-y-4">
              <a href="tel:+573173322149" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 shadow-[-2px_-2px_4px_rgba(255,255,255,0.02),4px_4px_8px_rgba(0,0,0,0.5)]">
                  <Icon icon="solar:phone-calling-bold" className="h-4 w-4 text-red-600" />
                </div>
                <span>+57 317 332 2149</span>
              </a>
              <a href="mailto:gerencia@primernivel.com" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 shadow-[-2px_-2px_4px_rgba(255,255,255,0.02),4px_4px_8px_rgba(0,0,0,0.5)]">
                  <Icon icon="solar:letter-bold" className="h-4 w-4 text-red-600" />
                </div>
                <span>gerencia@primernivel.com</span>
              </a>
            </div>
          </div>

          {/* ── Redes Sociales ── */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Síguenos</h3>
            <div className="flex flex-row flex-wrap gap-3">
              {[
                { icon: "ri:facebook-box-fill", href: "https://www.facebook.com/primerniveldiseno", label: "Facebook" },
                { icon: "ri:instagram-fill", href: "https://www.instagram.com/primerniveldiseno", label: "Instagram" },
                { icon: "ic:baseline-tiktok", href: "#", label: "TikTok" },
                { icon: "ri:whatsapp-fill", href: "https://wa.me/573173322149", label: "WhatsApp" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 shadow-[-2px_-2px_4px_rgba(255,255,255,0.02),4px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:text-red-600"
                >
                  <Icon icon={social.icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-zinc-900 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} PRIMER NIVEL. Todos los derechos reservados.
          </p>
          <p className="text-sm text-zinc-500">
            Desarrollado por{" "}
            <Link
              href="https://www.kytcode.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors duration-300 hover:text-red-600"
            >
              K&T <span className="text-white">🤍</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
