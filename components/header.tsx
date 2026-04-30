"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Snappier scroll-linked transformations (reduced range to 20px)
  const headerBg = useTransform(
    scrollY,
    [0, 20],
    ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0.95)"]
  )
  const headerBlur = useTransform(
    scrollY,
    [0, 20],
    ["blur(0px)", "blur(20px)"]
  )
  const headerPadding = useTransform(
    scrollY,
    [0, 20],
    ["12px", "4px"]
  )
  const navLinkColor = useTransform(
    scrollY,
    [0, 20],
    ["#3f3f46", "#a1a1aa"] // zinc-600 to zinc-400
  )
  const navLinkActiveColor = useTransform(
    scrollY,
    [0, 20],
    ["#09090b", "#ffffff"] // zinc-950 to white
  )
  const dividerColor = useTransform(
    scrollY,
    [0, 20],
    ["rgba(228, 228, 231, 1)", "rgba(39, 39, 42, 1)"] // zinc-200 to zinc-800
  )
  const borderOpacity = useTransform(
    scrollY,
    [0, 20],
    [0, 1]
  )
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoShadow = useTransform(
    scrollY,
    [0, 20],
    ["rgba(0,0,0,0.15)", "rgba(220,38,38,0.4)"]
  )
  const logoCardBg = useTransform(
    scrollY,
    [0, 20],
    ["rgba(9,9,11,0.95)", "rgba(255,255,255,0.98)"]
  )

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
      {/* Animated Glowing Underline (Visible on Scroll) */}
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Original Technical HUD Logo Container */}
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
              {/* Restored Red Brackets Animation */}
              <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-red-600/60 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:border-red-600" />
              <span className="absolute right-0 bottom-0 h-2 w-2 border-b-2 border-r-2 border-red-600/60 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:border-red-600" />
              {/* Glass Reflection Sweep */}
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-20 pointer-events-none"
              />

              <Image
                src={scrolled ? "/icono-fondo-blanco.jpeg" : "/icono-principal.jpeg"}
                alt="PRIMER NIVEL Logo"
                width={80}
                height={80}
                className="relative z-10 h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
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
                  
                  {/* Dynamic hover pill */}
                  <motion.span
                    className="absolute inset-0 z-0 bg-zinc-400/0 group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-900/50"
                    layoutId="navHoverHighlight"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center">
          <motion.div 
            style={{ borderColor: dividerColor }}
            className="flex items-center gap-4 border-l border-r px-6"
          >
            {[
              { icon: "solar:facebook-bold", href: "#" },
              { icon: "solar:instagram-bold", href: "#" },
            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.2 }}
                className="relative"
              >
                <Link
                  href={social.href}
                  style={{ color: navLinkColor }}
                  className="transition-colors duration-300 hover:!text-red-600"
                >
                  <Icon icon={social.icon} className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Action Button */}
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

        {/* Mobile Toggle */}
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
                {isMenuOpen ? <Icon icon="solar:close-circle-bold" className="h-7 w-7" /> : <Icon icon="solar:menu-dots-bold" className="h-7 w-7" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <nav className="flex flex-col gap-2 border-t border-zinc-100 bg-white px-6 py-8 backdrop-blur-xl dark:border-zinc-900 dark:bg-black/95">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-600 transition-all duration-300 hover:bg-zinc-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-zinc-900"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
