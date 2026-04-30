import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="border-t border-black/50 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl bg-white p-1 shadow-[-2px_-2px_4px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.5)]">
                <Image
                  src="/icono-fondo-blanco.jpeg"
                  alt="PRIMER NIVEL Logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">PRIMER NIVEL</span>
                <p className="text-xs text-zinc-400 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">Diseño - Construcción - Calidad</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),2px_2px_3px_rgba(0,0,0,0.8)]">
              Transformamos espacios y creamos experiencias memorables. Líderes en diseño,
              producción y montaje de stands para ferias y eventos comerciales.
            </p>
            {/* Social Links - Neumorphic Pressed Buttons */}
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
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:text-red-600 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.03),inset_4px_4px_8px_rgba(0,0,0,0.5)]"
                >
                  <Icon icon={social.icon} className="h-6 w-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">Contacto</h3>
            <div className="space-y-4">
              <a
                href="tel:+573001234567"
                className="flex items-center gap-4 text-zinc-300 transition-colors duration-300 hover:text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)]">
                    <Icon icon="solar:phone-calling-bold" className="h-5 w-5 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                </div>
                <span>+57 300 123 4567</span>
              </a>
              <a
                href="mailto:info@primernivel.com"
                className="flex items-center gap-4 text-zinc-300 transition-colors duration-300 hover:text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)]">
                    <Icon icon="solar:letter-bold" className="h-5 w-5 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                </div>
                <span>info@primernivel.com</span>
              </a>
              <div className="flex items-start gap-4 text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 shadow-[-4px_-4px_8px_rgba(255,255,255,0.03),4px_4px_8px_rgba(0,0,0,0.5)]">
                    <Icon icon="solar:map-point-bold" className="h-5 w-5 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                </div>
                <span className="mt-2">Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">Enlaces Rápidos</h3>
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
                  className="text-zinc-300 transition-colors duration-300 hover:text-red-600 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mini Map Placeholder - Neumorphic */}
            <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),6px_6px_12px_rgba(0,0,0,0.5)]">
              <div className="flex h-32 items-center justify-center bg-zinc-900/50 text-center">
                <div>
                  <Icon icon="solar:map-point-bold" className="mx-auto mb-2 h-10 w-10 text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  <p className="text-sm font-semibold text-zinc-300 [text-shadow:-1px_-1px_1px_rgba(255,255,255,0.05),1px_1px_2px_rgba(0,0,0,0.8)]">Bogotá, Colombia</p>
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
              K&T <span className="text-white">🤍</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
