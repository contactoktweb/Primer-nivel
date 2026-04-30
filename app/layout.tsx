import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'PRIMER NIVEL | Diseño, Producción y Montaje de Stands y Eventos',
  description: 'Empresa líder en diseño, producción y montaje de stands para ferias, eventos comerciales y corporativos. Construimos experiencias memorables de primer nivel.',
  keywords: ['stands', 'eventos', 'ferias', 'diseño de stands', 'montaje de eventos', 'producción de stands', 'eventos comerciales'],
  authors: [{ name: 'PRIMER NIVEL' }],
  creator: 'PRIMER NIVEL',
  openGraph: {
    title: 'PRIMER NIVEL | Diseño, Producción y Montaje de Stands y Eventos',
    description: 'Construimos experiencias memorables. Diseño, producción y montaje de stands de primer nivel.',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/icono-principal.jpeg',
        width: 800,
        height: 800,
        alt: 'PRIMER NIVEL Logo',
      },
    ],
  },
  icons: {
    icon: '/icono-principal.jpeg',
    shortcut: '/icono-principal.jpeg',
    apple: '/icono-principal.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-black scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
