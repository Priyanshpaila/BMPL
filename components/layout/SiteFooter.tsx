import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import BrandLogo from "./BrandLogo";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* theme-aware wash (token driven) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      <div className="pointer-events-none absolute h-full inset-0 hidden dark:block bg-primary/6" />

      {/* theme-aware dot grid (uses foreground mix, no hardcoded black/white) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.09]
          [background-size:32px_32px]
          [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_14%,transparent)_1px,transparent_0)]
        "
      />



      <Container className="relative py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <Link
                href="/"
                className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${COMPANY_INFO.name} Home`}
              >
                <BrandLogo
                  className="h-12 w-auto object-contain"
                  height={32}
                  alt="BMPL"
                />
              </Link>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {COMPANY_INFO.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="info" size="sm">
                MS Billets
              </Badge>
              <Badge variant="info" size="sm">
                MS Angles
              </Badge>
              <Badge variant="info" size="sm">
                MS Channels
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight">
              Quick Links
            </h4>

            {/* divider: token driven */}
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            <ul className="mt-4 space-y-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/infrastructure", label: "Infrastructure" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground smooth-transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight">
              Contact
            </h4>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="hover:text-foreground smooth-transition"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="break-words hover:text-foreground smooth-transition"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight">
              Hours
            </h4>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <div className="text-xs font-semibold tracking-widest text-muted-foreground/80">
                  WEEKDAYS
                </div>
                <div className="mt-1 text-foreground/90">
                  {COMPANY_INFO.hours.weekday}
                </div>
              </li>

              <li>
                <div className="text-xs font-semibold tracking-widest text-muted-foreground/80">
                  WEEKEND
                </div>
                <div className="mt-1 text-foreground/90">
                  {COMPANY_INFO.hours.weekend}
                </div>
              </li>

              {COMPANY_INFO.hours?.timezone && (
                <li className="pt-1 text-xs text-muted-foreground/80">
                  Timezone: {COMPANY_INFO.hours.timezone}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Copyright © 2026 Bhawani Moulders Pvt Ltd, All rights reserved
          </p>

          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a
              href="https://www.yuvaq.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline smooth-transition"
            >
              YuvaQ
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
