import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BMPL - MS Billets, Angles & Channels | Raipur",
  description:
    "Premium MS Billets, Angles & Channels manufactured in Urla, Raipur. Fast quotation, bulk supply, custom sizes. ISO certified steel products.",
  keywords: [
    "MS Billets",
    "MS Angles",
    "MS Channels",
    "Steel Manufacturer",
    "Raipur",
    "Industrial Steel",
    "Bulk Supply",
  ],
  authors: [{ name: "Bhawani Moulders Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bmpl-raipur.com",
    title: "BMPL - MS Billets, Angles & Channels",
    description: "Premium quality steel products manufactured in Urla, Raipur. Fast quotation and reliable supply.",
    images: [
      {
        url: "/steel-manufacturing-facility.jpg",
        width: 1200,
        height: 630,
        alt: "BMPL Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMPL - MS Billets, Angles & Channels",
    description: "Premium steel products from Raipur",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#0f172a",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.className} font-sans antialiased bg-slate-950 text-slate-50`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:ring-2 focus:ring-blue-500"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="content">{children}</div>
        <SiteFooter />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
