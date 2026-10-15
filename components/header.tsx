"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

/** Sub-items for the Servicios dropdown */
const serviciosDropdown = [
  {
    href: "/servicios#diseno",
    label: "Diseño y Conceptualización",
    description: "Arquitectura efímera, stands y renders 3D",
    icon: "solar:pen-new-square-bold",
  },
  {
    href: "/servicios#produccion",
    label: "Producción y Montaje",
    description: "Escenografías, fabricación y montaje integral",
    icon: "solar:settings-bold",
  },
  {
    href: "/servicios#equipamiento",
    label: "Equipamiento",
    description: "Mobiliario, audiovisual e impresión",
    icon: "solar:play-bold",
  },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0.95)"]
  )
  const headerBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(20px)"]
  )
  const headerPadding = useTransform(
    scrollY,
    [0, 80],
    ["12px", "4px"]
  )
  const navLinkColor = useTransform(
    scrollY,
    [0, 80],
    ["#3f3f46", "#a1a1aa"]
  )
  const navLinkActiveColor = useTransform(
    scrollY,
    [0, 80],
    ["#09090b", "#ffffff"]
  )
  const dividerColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(228, 228, 231, 1)", "rgba(39, 39, 42, 1)"]
  )
  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    [0, 1]
  )
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoShadow = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0.15)", "rgba(220,38,38,0.4)"]
  )
  const logoCardBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(9,9,11,0.95)", "rgba(255,255,255,0.98)"]
  )

  /* ── Dropdown hover helpers with delay-close to allow cursor travel ── */
  const handleServiciosEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsServiciosOpen(true)
  }
  const handleServiciosLeave = () => {
    closeTimer.current = setTimeout(() => setIsServiciosOpen(false), 150)
  }

  return (
    <motion.header
      style={{ 
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link href="/" className="group relative flex items-center gap-4">
            <motion.div 
              style={{ 
                boxShadow: `0 15px 40px ${logoShadow}`,
                backgroundColor: logoCardBg,
              }}
              className="relative overflow-hidden rounded-xl p-1"
            >
              <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-red-600/60 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:border-red-600" />
              <span className="absolute right-0 bottom-0 h-2 w-2 border-b-2 border-r-2 border-red-600/60 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:border-red-600" />
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-20 pointer-events-none"
              />
              <Image
                src={scrolled ? "/icono-fondo-blanco.jpeg" : "/icono-principal.jpeg"}
                alt="PRIMER NIVEL Logo"
                width={96}
                height={96}
                className="relative z-10 h-16 w-16 object-contain transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-2">

          {/* Inicio */}
          {navLinks.filter(l => l.href !== '/contacto').map((link, i) => {
            const active = pathname === link.href
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="group relative flex items-center px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  <motion.span 
                    style={{ color: navLinkColor }}
                    className={cn(
                      "relative z-10 transition-colors group-hover:!text-red-600",
                      active && "!text-red-600"
                    )}
                  >
                    <span className={cn(
                      "absolute -top-3 left-0 h-[1.5px] w-full bg-red-600 transition-transform duration-500 origin-left",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )} />
                    {link.label}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 z-0 bg-zinc-400/0 group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-900/50"
                    layoutId="navHoverHighlight"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                </Link>
              </motion.div>
            )
          })}

          {/* ── Servicios Dropdown ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onMouseEnter={handleServiciosEnter}
            onMouseLeave={handleServiciosLeave}
          >
            <button
              id="servicios-dropdown-trigger"
              aria-haspopup="true"
              aria-expanded={isServiciosOpen}
              className="group relative flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              <motion.span
                style={{ color: navLinkColor }}
                className={cn(
                  "relative z-10 transition-colors group-hover:!text-red-600",
                  pathname === "/servicios" && "!text-red-600"
                )}
              >
                <span className={cn(
                  "absolute -top-3 left-0 h-[1.5px] w-full bg-red-600 transition-transform duration-500 origin-left",
                  pathname === "/servicios" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
                Servicios
              </motion.span>
              <motion.span
                style={{ color: navLinkColor }}
                animate={{ rotate: isServiciosOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 transition-colors group-hover:!text-red-600"
              >
                <Icon icon="solar:alt-arrow-down-bold" className="h-3 w-3" />
              </motion.span>
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
              {isServiciosOpen && (
                <motion.div
                  id="servicios-dropdown-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-80 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
                  onMouseEnter={handleServiciosEnter}
                  onMouseLeave={handleServiciosLeave}
                >
                  {/* Top red accent */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                  <div className="p-2">
                    {serviciosDropdown.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={() => setIsServiciosOpen(false)}
                          className="group/item flex items-start gap-4 rounded-lg px-4 py-3.5 transition-all duration-200 hover:bg-zinc-800/80"
                        >
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-900 transition-colors duration-200 group-hover/item:bg-red-600/20">
                            <Icon
                              icon={item.icon}
                              className="h-4 w-4 text-red-500 transition-colors duration-200 group-hover/item:text-red-400"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-200 transition-colors duration-200 group-hover/item:text-white">
                              {item.label}
                            </p>
                            <p className="mt-0.5 text-[10px] leading-relaxed text-zinc-500 transition-colors duration-200 group-hover/item:text-zinc-400">
                              {item.description}
                            </p>
                          </div>
                          <Icon
                            icon="solar:arrow-right-bold"
                            className="mt-1 h-3 w-3 flex-shrink-0 text-zinc-700 opacity-0 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:text-red-500 group-hover/item:translate-x-0.5"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer: ver todos */}
                  <div className="border-t border-zinc-800 px-4 py-3">
                    <Link
                      href="/servicios"
                      onClick={() => setIsServiciosOpen(false)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-200 hover:text-red-500"
                    >
                      <Icon icon="solar:list-bold" className="h-3 w-3" />
                      Ver todos los servicios
                      <Icon icon="solar:arrow-right-bold" className="h-3 w-3 ml-auto" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>

        {/* ── Desktop actions ── */}
        <div className="hidden lg:flex items-center">
          <motion.div 
            style={{ borderColor: dividerColor }}
            className="flex items-center gap-4 border-l border-r px-6"
          >
            {[
              { icon: "solar:facebook-bold", href: "https://www.facebook.com/primerniveldiseno", label: "Facebook" },
              { icon: "solar:instagram-bold", href: "https://www.instagram.com/primerniveldiseno", label: "Instagram" },
            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.2 }}
                className="relative"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group transition-colors duration-300"
                >
                  <motion.span
                    style={{ color: navLinkColor }}
                    className="flex items-center justify-center transition-colors duration-300 group-hover:!text-red-600"
                  >
                    <Icon icon={social.icon} className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/contacto"
              className="group relative ml-4 flex items-center justify-center bg-red-600 px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:brightness-110"
            >
              <motion.span style={{ color: navLinkActiveColor }} className="relative z-10">
                Contacto
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* ── Mobile hamburger ── */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-12 w-12 items-center justify-center border border-zinc-200 bg-white/50 text-zinc-900 transition-all duration-300 hover:border-red-600/50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {isMenuOpen
                  ? <Icon icon="solar:close-circle-bold" className="h-7 w-7" />
                  : <Icon icon="solar:menu-dots-bold" className="h-7 w-7" />
                }
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <nav className="flex flex-col gap-1 border-t border-zinc-100 bg-white px-6 py-8 backdrop-blur-xl dark:border-zinc-900 dark:bg-black/95">

              {/* Regular links (excluding servicios & contacto) */}
              {navLinks.filter(l => l.href !== '/contacto').map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-600 transition-all duration-300 hover:bg-zinc-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-zinc-900"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-600" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Servicios accordion */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.16 }}
              >
                <button
                  onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
                  className="flex w-full items-center justify-between px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-600 transition-all duration-300 hover:bg-zinc-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-zinc-900"
                >
                  <span className="flex items-center gap-4">
                    <span className="h-1 w-1 rounded-full bg-red-600" />
                    Servicios
                  </span>
                  <motion.span
                    animate={{ rotate: mobileServiciosOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon icon="solar:alt-arrow-down-bold" className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileServiciosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {serviciosDropdown.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.07 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => { setIsMenuOpen(false); setMobileServiciosOpen(false) }}
                            className="flex items-center gap-3 px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 transition-all duration-300 hover:bg-zinc-50 hover:text-red-600 dark:text-zinc-500 dark:hover:bg-zinc-900"
                          >
                            <Icon icon={item.icon} className="h-3.5 w-3.5 flex-shrink-0 text-red-600" />
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contacto */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.24 }}
              >
                <Link
                  href="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-600 transition-all duration-300 hover:bg-zinc-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-zinc-900"
                >
                  <span className="h-1 w-1 rounded-full bg-red-600" />
                  Contacto
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
