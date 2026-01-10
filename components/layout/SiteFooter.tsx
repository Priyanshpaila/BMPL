import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { COMPANY_INFO } from "@/content/company"
import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/50 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg gradient-text mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{COMPANY_INFO.description}</p>
            <div className="flex gap-2">
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
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-slate-400 hover:text-white smooth-transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-sm text-slate-400 hover:text-white smooth-transition">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white smooth-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white smooth-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white smooth-transition">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white smooth-transition">
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="flex gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <strong className="text-slate-300">Weekdays:</strong>
                <br />
                {COMPANY_INFO.hours.weekday}
              </li>
              <li>
                <strong className="text-slate-300">Weekend:</strong>
                <br />
                {COMPANY_INFO.hours.weekend}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Manufactured with precision in Urla, Raipur</p>
        </div>
      </Container>
    </footer>
  )
}
