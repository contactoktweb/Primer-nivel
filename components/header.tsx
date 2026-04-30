"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/icono-principal.jpeg"
            alt="PRIMER NIVEL Logo"
            width={60}
            height={60}
            className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.15em] text-white sm:text-xl uppercase">
              PRIMER NIVEL
            </span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-zinc-500 sm:text-xs uppercase">
              <span className="text-red-600">Diseño</span> / Montaje
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Technical/HUD Style) */}
        <nav className="hidden lg:flex items-stretch h-20">
          {navLinks.filter(l => l.href !== '/contacto').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center px-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              <span className="relative">
                {/* Extra thin red line (0.5px) above text, covering only half the word */}
                <span className="absolute -top-2 left-0 h-[0.5px] w-1/2 bg-red-600 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right Section: Socials + Contact CTA */}
        <div className="hidden lg:flex items-center h-20">
          <div className="flex h-full items-center gap-6 border-l border-r border-zinc-800/80 px-6">
            {[
              { icon: "solar:facebook-bold", href: "#" },
              { icon: "solar:instagram-bold", href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="group relative text-zinc-500 transition-colors duration-300 hover:text-red-500"
              >
                <Icon icon={social.icon} className="h-5 w-5" />
              </Link>
            ))}
          </div>
          
          {/* Sharp, Technical Contact Button */}
          <Link
            href="/contacto"
            className="group relative ml-6 flex items-center justify-center border-[0.5px] border-red-600 bg-black px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            {/* Corner Brackets Effect */}
            <span className="absolute -left-[0.5px] -top-[0.5px] h-2 w-2 border-l border-t border-red-500 transition-all duration-300 group-hover:border-white" />
            <span className="absolute -right-[0.5px] -bottom-[0.5px] h-2 w-2 border-b border-r border-red-500 transition-all duration-300 group-hover:border-white" />
            
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-white transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-300"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <Icon icon="solar:close-circle-bold" className="h-6 w-6" /> : <Icon icon="solar:menu-dots-bold" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-zinc-900 bg-black px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center justify-around border-t border-zinc-900 pt-6 pb-2">
            {[
              { icon: "solar:facebook-bold", href: "#" },
              { icon: "solar:instagram-bold", href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 transition-all duration-300 hover:bg-zinc-800 hover:text-white"
              >
                <Icon icon={social.icon} className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
