import { COMPANY_INFO } from "@/content/company"

export function generateWhatsAppLink(message: string, phoneNumber?: string): string {
  const resolved =
    phoneNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER ||
    COMPANY_INFO.contact.whatsapp ||
    ""

  if (!resolved) return "#"
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${resolved}?text=${encoded}`
}

export function openWhatsAppChat(message: string, phoneNumber?: string) {
  const link = generateWhatsAppLink(message, phoneNumber)
  if (link !== "#") {
    window.open(link, "_blank", "noopener,noreferrer")
  }
}

// Future seam for backend integration
export async function submitQuoteFuture(formData: {
  name: string
  phone?: string
  product: string
  quantity: string
  location: string
  notes?: string
}) {
  // TODO: In future, replace with actual backend API call
  // For now, construct WhatsApp message and open client-side
  const message = `Hello BMPL, I would like a quotation.\n\nName: ${formData.name}\nPhone: ${formData.phone || "Not provided"}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nDelivery Location: ${formData.location}\nNotes: ${formData.notes || "None"}`

  openWhatsAppChat(message)
}
