import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Audio Arte Rental - Alquiler de Instrumentos y Equipos Profesionales",
  description:
    "Alquiler de instrumentos musicales, equipos de sonido y pantallas LED profesionales en Rosario, Santa Fe, Argentina",
  keywords: [
    "alquiler instrumentos musicales",
    "alquiler equipos de sonido",
    "pantallas LED Rosario",
    "audio profesional",
    "eventos Rosario",
    "producción audiovisual",
  ],
  authors: [{ name: "Audio Arte Rental" }],
  openGraph: {
    title: "Audio Arte Rental - Alquiler de Instrumentos y Equipos Profesionales",
    description:
      "Alquiler de instrumentos musicales, equipos de sonido y pantallas LED profesionales en Rosario, Santa Fe, Argentina",
    url: "https://audioarterental.com",
    siteName: "Audio Arte Rental",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Arte Rental - Alquiler de Instrumentos y Equipos Profesionales",
    description:
      "Alquiler de instrumentos musicales, equipos de sonido y pantallas LED profesionales en Rosario, Santa Fe, Argentina",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
