export interface FAQ {
  id: string
  question: string
  answer: string
  category: "general" | "technical" | "delivery" | "pricing"
}

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "What is the minimum order quantity (MOQ)?",
    category: "general",
    answer:
      "Our MOQ varies by product. MS Billets: 5 MT, MS Angles: 3 MT, MS Channels: 4 MT. Custom quantities available on request.",
  },
  {
    id: "2",
    question: "What are your delivery timelines?",
    category: "delivery",
    answer:
      "Standard delivery within 7-10 days from order confirmation. Bulk orders may require longer lead time. Express options available.",
  },
  {
    id: "3",
    question: "Do you offer custom sizes?",
    category: "technical",
    answer:
      "Yes! We can customize sizes and specifications based on your requirements. Please contact our sales team with your specifications.",
  },
  {
    id: "4",
    question: "What certifications do your products have?",
    category: "technical",
    answer:
      "All products comply with IS (Indian Standards) and meet international quality benchmarks. Certificates available upon request.",
  },
  {
    id: "5",
    question: "How do I request a quote?",
    category: "general",
    answer:
      "You can request a quote through our online form, WhatsApp, or by calling directly. We respond within 24 hours.",
  },
  {
    id: "6",
    question: "Do you ship internationally?",
    category: "delivery",
    answer:
      "Currently, we primarily serve domestic markets. International inquiries welcome – please contact us for custom arrangements.",
  },
  {
    id: "7",
    question: "What payment terms do you offer?",
    category: "pricing",
    answer:
      "We offer flexible payment terms including advance, partial advance, and credit terms for established customers.",
  },
  {
    id: "8",
    question: "How is quality assured?",
    category: "technical",
    answer:
      "Rigorous testing at every production stage. Third-party audits, certifications, and batch-wise quality reports provided.",
  },
]
