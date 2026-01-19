"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { NAV_ITEMS } from "@/content/nav";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { openWhatsAppChat } from "@/lib/whatsapp";
import BrandLogo from "@/components/layout/BrandLogo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme (safe mount handling)
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const handleWhatsAppClick = () => {
    openWhatsAppChat(
      "Hello BMPL, I would like to know more about your products.",
    );
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border">
      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Container>
        <div className="relative z-50 flex items-center justify-between py-4">
          {/* Brand (Logo) */}
          <Link
            href="/"
            className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="BMPL Home"
          >
            <BrandLogo
              className="h-12 w-auto object-contain"
              height={32}
              alt="BMPL"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-sm text-foreground smooth-transition relative"
                      : "text-sm text-muted-foreground hover:text-foreground smooth-transition"
                  }
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 rounded-xl px-3
             text-muted-foreground hover:text-foreground
             bg-transparent hover:bg-muted/40
             border border-transparent hover:border-border/60
             shadow-none hover:shadow-none
             focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center rounded-xl px-3
             text-muted-foreground hover:text-foreground
             bg-transparent hover:bg-muted/40
             border border-transparent hover:border-border/60
             shadow-none hover:shadow-none
             focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <span className="w-4 h-4" />
              )}
            </Button>

            <Button size="sm" asChild className="rounded-xl">
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-muted-foreground hover:text-foreground smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl p-2 border border-border bg-background/60 hover:bg-muted/40"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="relative z-50 md:hidden pb-4"
            aria-label="Mobile"
          >
            <div className="rounded-2xl border border-border bg-background/70 backdrop-blur p-2 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-sm text-foreground bg-muted/50 border border-border rounded-xl px-3 py-2"
                        : "text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-xl px-3 py-2 smooth-transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 flex gap-2 flex-col">
                <Button
                  variant="secondary"
                  className="w-full rounded-xl border border-border bg-muted/30 hover:bg-muted/45 flex items-center justify-center gap-2"
                  onClick={() => {
                    handleWhatsAppClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>

                <Button
                  variant="secondary"
                  className="w-full rounded-xl border border-border bg-muted/30 hover:bg-muted/45 flex items-center justify-center gap-2"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {mounted ? (
                    resolvedTheme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )
                  ) : (
                    <span className="w-4 h-4" />
                  )}
                  Theme
                </Button>

                <Button className="w-full rounded-xl" asChild>
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
