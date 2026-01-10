"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {Button} from  "@/components/ui/button"
import Container from "@/components/layout/Container"
import { openWhatsAppChat } from "@/lib/whatsapp"

export default function CTA() {
  const handleWhatsApp = () => {
    openWhatsAppChat("Hello BMPL, I would like to know more about your services.")
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 pointer-events-none" />
      <div className="absolute inset-0 border-t border-white/10" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Work <span className="gradient-text">With Us?</span>
          </h2>

          <p className="text-lg text-slate-300 mb-8 text-balance">
            Get a quick quotation or chat with our team to discuss your requirements
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" onClick={handleWhatsApp}>
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-sm text-slate-500 mt-6">Response within 24 hours. No commitment required.</p>
        </motion.div>
      </Container>
    </section>
  )
}
