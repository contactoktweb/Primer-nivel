import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/icono-principal.jpeg"
                alt="PRIMER NIVEL Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="text-lg font-bold text-white">PRIMER NIVEL</span>
                <p className="text-xs text-zinc-500">Diseño - Construcción - Calidad</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-zinc-400">
              Transformamos espacios y creamos experiencias memorables. Líderes en diseño,
              producción y montaje de stands para ferias y eventos comerciales.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: "ri:facebook-box-fill", href: "#", label: "Facebook" },
                { icon: "ri:instagram-fill", href: "#", label: "Instagram" },
                { icon: "ic:baseline-tiktok", href: "#", label: "TikTok" },
                { icon: "ri:whatsapp-fill", href: "https://wa.me/573001234567", label: "WhatsApp" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600/10 hover:text-red-600"
                >
                  <Icon icon={social.icon} className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-4">
              <a
                href="tel:+573001234567"
                className="flex items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900">
                    <Icon icon="solar:phone-calling-bold" className="h-5 w-5 text-red-600" />
                </div>
                <span>+57 300 123 4567</span>
              </a>
              <a
                href="mailto:info@primernivel.com"
                className="flex items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900">
                    <Icon icon="solar:letter-bold" className="h-5 w-5 text-red-600" />
                </div>
                <span>info@primernivel.com</span>
              </a>
              <div className="flex items-start gap-3 text-zinc-400">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900">
                    <Icon icon="solar:map-point-bold" className="h-5 w-5 text-red-600" />
                </div>
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <nav className="mb-8 grid grid-cols-2 gap-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#servicios", label: "Servicios" },
                { href: "#portafolio", label: "Proyectos" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 transition-colors duration-300 hover:text-red-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mini Map Placeholder */}
            <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 text-center">
                <div>
                  <Icon icon="solar:map-point-bold" className="mx-auto mb-2 h-10 w-10 text-red-600" />
                  <p className="text-sm text-zinc-500">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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
              {"K&T"} ❤️
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
