"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle } from "lucide-react"
import { NAV_ITEMS } from "@/content/nav"
import {Button} from  "@/components/ui/button"
import Container from "@/components/layout/Container"
import { openWhatsAppChat } from "@/lib/whatsapp"

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    openWhatsAppChat("Hello BMPL, I would like to know more about your products.")
  }

  // Close the mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [mobileMenuOpen])

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/"
      return pathname === href || pathname.startsWith(`${href}/`)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Container>
        <div className="relative z-50 flex items-center justify-between py-4">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-bold gradient-text smooth-transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="BMPL Home"
          >
            BMPL
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-sm text-white smooth-transition relative"
                      : "text-sm text-slate-300 hover:text-white smooth-transition"
                  }
                >
                  {item.label}
                  {active && <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-blue-400 to-cyan-400" />}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleWhatsAppClick} className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>
            <Button size="sm" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-slate-300 hover:text-white smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="relative z-50 md:hidden pb-4 flex flex-col gap-2"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2"
                      : "text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl px-3 py-2 smooth-transition"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="pt-3 flex gap-3 flex-col">
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  handleWhatsAppClick()
                  setMobileMenuOpen(false)
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
