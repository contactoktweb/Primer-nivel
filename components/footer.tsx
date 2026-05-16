import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-black/50 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
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
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Especialistas en crear espacios comerciales que conectan marcas con experiencias memorables.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "ri:facebook-box-fill", href: "#", label: "Facebook" },
                { icon: "ri:instagram-fill", href: "#", label: "Instagram" },
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

          <div className="lg:col-span-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
            <div className="space-y-4">
              <a href="tel:+573173322149" className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 shadow-[-2px_-2px_4px_rgba(255,255,255,0.02),4px_4px_8px_rgba(0,0,0,0.5)]">
                  <Icon icon="solar:phone-calling-bold" className="h-4 w-4 text-red-600" />
                </div>
                <span>+57 317 332 2149</span>
              </a>
              <a href="mailto:gerencia@primernivel.com" className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 shadow-[-2px_-2px_4px_rgba(255,255,255,0.02),4px_4px_8px_rgba(0,0,0,0.5)]">
                  <Icon icon="solar:letter-bold" className="h-4 w-4 text-red-600" />
                </div>
                <span>gerencia@primernivel.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Empresa</h3>
            <nav className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link href="/" className="hover:text-red-600 transition-colors">Inicio</Link>
              <Link href="/nosotros" className="hover:text-red-600 transition-colors">Sobre Nosotros</Link>
              <Link href="/servicios" className="hover:text-red-600 transition-colors">Servicios</Link>
              <Link href="/proyectos" className="hover:text-red-600 transition-colors">Portafolio</Link>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-xl">
              <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">Cuéntanos tu idea</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-red-600/50 focus:outline-none transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-red-600/50 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-red-600/50 focus:outline-none transition-all"
                    required
                  />
                  <select
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-400 focus:border-red-600/50 focus:outline-none transition-all"
                    required
                  >
                    <option value="" disabled selected>Tipo de Proyecto</option>
                    <option value="stand">Stand Comercial</option>
                    <option value="local">Local Comercial</option>
                    <option value="mobiliario">Mobiliario / Exhibición</option>
                    <option value="otro">Otro Proyecto</option>
                  </select>
                </div>
                <textarea
                  placeholder="Describe brevemente lo que necesitas..."
                  rows={3}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-red-600/50 focus:outline-none transition-all resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 py-4 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-600/20"
                >
                  Solicitar Asesoría
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

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
