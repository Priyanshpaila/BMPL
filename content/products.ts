export interface Product {
  id: string
  slug: string
  name: string
  category:
    | "billets"
    | "angles"
    | "channels"
    | "rounds"
    | "squares"
    | "flats"
    | "gateChannels"
  description: string
  longDescription: string
  specs: {
    label: string
    value: string
  }[]
  minQty: string
  availability: string
  image: string
}

export const PRODUCTS: Product[] = [
  // ✅ Keep existing products unchanged
  {
    id: "1",
    slug: "ms-billets-mild-steel",
    name: "MS Billets",
    category: "billets",
    description: "High-quality mild steel billets for various industrial applications",
    longDescription:
      "Our MS Billets are manufactured with strict quality control to ensure consistency and durability. Perfect for forging, rolling, and extrusion.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Grade", value: "IS 1875" },
      { label: "Size Range", value: "50-100 mm" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "5 MT",
    availability: "In Stock",
    image: "/steel-billets.jpg",
  },
  {
    id: "2",
    slug: "ms-angles-structural",
    name: "MS Angles",
    category: "angles",
    description: "Structural mild steel angles for construction and fabrication",
    longDescription:
      "Our MS Angles are precision-manufactured to meet international standards. Ideal for structural applications, frameworks, and construction projects.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Grade", value: "IS 2062" },
      { label: "Size Range", value: "25x25 to 200x200 mm" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "3 MT",
    availability: "In Stock",
    image: "/steel-angles.jpg",
  },
  {
    id: "3",
    slug: "ms-channels-structural",
    name: "MS Channels",
    category: "channels",
    description: "Structural mild steel channels for heavy-duty applications",
    longDescription:
      "High-strength MS Channels designed for load-bearing applications. Perfect for building frames, bridges, and industrial structures.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Grade", value: "IS 1365" },
      { label: "Size Range", value: "25x25 to 400x400 mm" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "4 MT",
    availability: "In Stock",
    image: "/steel-channels.jpg",
  },

  // ✅ Added products (as per your updated company data)
  {
    id: "4",
    slug: "ms-rounds",
    name: "MS Rounds",
    category: "rounds",
    description: "Hot-rolled mild steel rounds for fabrication and industrial use",
    longDescription:
      "BMPL manufactures MS Rounds suitable for fabrication, engineering, and general industrial applications. Available in multiple sizes with reliable dispatch and consistent quality.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Standard", value: "As per applicable IS specifications / customer requirement" },
      { label: "Size Range", value: "Custom sizes available" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "MOQ: 5 MT total / 1 MT per size",
    availability: "Available for bulk dispatch",
    image: "/steel-rounds.jpg",
  },
  {
    id: "5",
    slug: "ms-squares",
    name: "MS Square",
    category: "squares",
    description: "Mild steel square sections for structural and fabrication works",
    longDescription:
      "Our MS Square sections are produced with consistent dimensional accuracy for structural and fabrication usage. Suitable for industrial frameworks and general fabrication.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Standard", value: "As per applicable IS specifications / customer requirement" },
      { label: "Size Range", value: "Custom sizes available" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "MOQ: 5 MT total / 1 MT per size",
    availability: "Available for bulk dispatch",
    image: "/steel-squares.jpg",
  },
  {
    id: "6",
    slug: "ms-flats-patti",
    name: "MS Patti (Flats)",
    category: "flats",
    description: "Mild steel flats/patti for fabrication, supports, and industrial use",
    longDescription:
      "BMPL MS Flats (Patti) are ideal for fabrication, supports, base plates, and general engineering applications. Available in multiple sizes with consistent quality and dependable supply.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Standard", value: "As per applicable IS specifications / customer requirement" },
      { label: "Size Range", value: "Custom sizes available" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "MOQ: 5 MT total / 1 MT per size",
    availability: "Available for bulk dispatch",
    image: "/steel-flats.jpg",
  },
  {
    id: "7",
    slug: "ms-gate-channels",
    name: "MS Gate Channel",
    category: "gateChannels",
    description: "Gate channels for fabrication, gates, frames, and structural applications",
    longDescription:
      "BMPL MS Gate Channels are widely used in gate manufacturing, frames, and fabrication work. Manufactured for consistent quality, size availability, and reliable dispatch timelines.",
    specs: [
      { label: "Material", value: "Mild Steel (MS)" },
      { label: "Standard", value: "As per applicable IS specifications / customer requirement" },
      { label: "Size Range", value: "Custom sizes available" },
      { label: "Finish", value: "Hot Rolled" },
    ],
    minQty: "MOQ: 5 MT total / 1 MT per size",
    availability: "Available for bulk dispatch",
    image: "/steel-gate-channels.jpg",
  },
]
