export interface Product {
  id: string
  slug: string
  name: string
  category: "billets" | "angles" | "channels"
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
]
