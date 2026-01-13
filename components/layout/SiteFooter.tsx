import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/40">
      {/* subtle footer-only wash (not a section) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-slate-950/60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:32px_32px]" />

      <Container className="relative py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold gradient-text">{COMPANY_INFO.name}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
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
            <h4 className="text-sm font-semibold text-white tracking-tight">Quick Links</h4>
            <div className="mt-4 h-px w-full bg-white/10" />
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
                    className="text-sm text-slate-400 hover:text-white smooth-transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-tight">Contact</h4>
            <div className="mt-4 h-px w-full bg-white/10" />
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="hover:text-white smooth-transition"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="break-words hover:text-white smooth-transition"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-tight">Hours</h4>
            <div className="mt-4 h-px w-full bg-white/10" />

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <div className="text-xs font-semibold tracking-widest text-slate-500">
                  WEEKDAYS
                </div>
                <div className="mt-1 text-slate-300">{COMPANY_INFO.hours.weekday}</div>
              </li>

              <li>
                <div className="text-xs font-semibold tracking-widest text-slate-500">
                  WEEKEND
                </div>
                <div className="mt-1 text-slate-300">{COMPANY_INFO.hours.weekend}</div>
              </li>

              {COMPANY_INFO.hours?.timezone && (
                <li className="pt-1 text-xs text-slate-500">
                  Timezone: {COMPANY_INFO.hours.timezone}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Powered by{" "}
            <a
              href="https://www.yuvaq.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline smooth-transition"
            >
              YuvaQ
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
