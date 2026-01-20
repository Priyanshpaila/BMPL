import { COMPANY_INFO } from "@/content/company";

type QuotePayload = {
  name: string;
  email: string;
  phone?: string;
  product: string;
  quantity: string;
  location: string;
  notes?: string;
  consent?: boolean;
};

export function generateWhatsAppLink(message: string, phoneNumber?: string): string {
  const resolved =
    phoneNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER ||
    COMPANY_INFO.contact.whatsapp ||
    "";

  if (!resolved) return "#";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${resolved}?text=${encoded}`;
}

export function openWhatsAppChat(message: string, phoneNumber?: string) {
  const link = generateWhatsAppLink(message, phoneNumber);
  if (link !== "#") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}

/** Nice structured WhatsApp message (customer sends to BMPL) */
export function buildQuoteWhatsAppMessage(data: QuotePayload) {
  const lines: string[] = [
    "*Quotation Request — BMPL*",
    "",
    "*Customer Details*",
    `• Name: ${data.name}`,
    `• Email: ${data.email}`,
    `• Phone: ${data.phone?.trim() ? data.phone : "-"}`,
    "",
    "*Requirement*",
    `• Product: ${data.product}`,
    `• Quantity: ${data.quantity}`,
    `• Delivery Location: ${data.location}`,
  ];

  const notes = (data.notes || "").trim();
  if (notes) {
    lines.push("", "*Notes*", notes);
  }

  lines.push("", "Please share pricing and dispatch timelines. Thank you.");
  return lines.join("\n");
}

/**
 * Submit flow:
 * - open WhatsApp (client-side)
 * - send confirmation email via backend stateless endpoint (no DB)
 */
export async function submitQuoteAndNotify(data: QuotePayload) {
  // 1) Open WhatsApp immediately to avoid popup blockers
  openWhatsAppChat(buildQuoteWhatsAppMessage(data));

  // 2) Fire-and-forget email confirmation (backend)
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || ""; // e.g. https://api.yourdomain.com
  if (!apiBase) return;

  await fetch(`${apiBase}/api/quote-notify/email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      consent: typeof data.consent === "boolean" ? data.consent : true,
    }),
  });
}
