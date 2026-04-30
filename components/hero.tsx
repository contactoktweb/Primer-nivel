"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { StatusBadge } from "@/components/ui/status-badge"

const heroImages = [
  "/images/hero-stand.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Background Images with Autoplay */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-40" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Modern Trade Show Stand Design ${index + 1}`}
              fill
              className="object-cover brightness-[0.3]"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Subtle red glow instead of grey — brings warmth back */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Glow Effects — red-toned */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-600/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-red-600/5 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <StatusBadge className="mb-8" code="EXC-01">
          Especialistas en Diseño y Montaje de Stands
        </StatusBadge>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          CONSTRUIMOS
          <br />
          {/* Red kept here — it's the single hero accent */}
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            EXPERIENCIAS
          </span>
          <br />
          MEMORABLES
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Diseño, Producción y Montaje de Stands y Eventos de{" "}
          <span className="font-semibold text-white">Primer Nivel</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA — red stays */}
          <Link
            href="#portafolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-red-600 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25"
          >
            <span className="relative z-10">Ver Portafolio</span>
          </Link>
          {/* Secondary CTA — grey-toned */}
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/60 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Carousel Indicators — grey default, red active */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentImage ? "w-8 bg-red-600" : "w-4 bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
