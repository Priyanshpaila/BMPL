export type Testimonial = {
  id: string;
  company: string;      // shown as “brand”
  rating: number;       // 1..5
  quote: string;
  name: string;
  role?: string;
  handle?: string;      // optional small subtext
  // avatar?: string;   // optional if you want images later
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    company: "Hulu",
    rating: 5,
    quote:
      "Consistent quality and fast dispatch. Their team communicates clearly and sizes match our fabrication requirements every time.",
    name: "Kate Davis",
    role: "Procurement Lead",
    handle: "fabrication_partner_8",
  },
  {
    id: "t2",
    company: "HBO Max",
    rating: 4,
    quote:
      "Reliable supply and process-controlled output. The material finish is clean and the delivery timelines are dependable.",
    name: "Martin Kazlauskas",
    role: "Operations Manager",
    handle: "industrial_state_59",
  },
  {
    id: "t3",
    company: "Disney+",
    rating: 5,
    quote:
      "Great for angles and flats—standard sizes available and custom sizes are handled smoothly. Overall a trusted partner.",
    name: "Sanjay Sharma",
    role: "Project Coordinator",
    handle: "site_engineer_68",
  },
  {
    id: "t4",
    company: "STARZ",
    rating: 4,
    quote:
      "Quality assurance is strong and the dispatch is quick. We’ve had a good experience across multiple repeat orders.",
    name: "Tawanna Afumba",
    role: "Purchase Executive",
    handle: "steel_procure_15",
  },
  {
    id: "t5",
    company: "ViX",
    rating: 5,
    quote:
      "Clear quotation and straightforward follow-up. Good consistency batch-to-batch—exactly what fabrication needs.",
    name: "Larry King",
    role: "Fabrication Contractor",
    handle: "vendor_network_46",
  },
  {
    id: "t6",
    company: "Prime Video",
    rating: 4,
    quote:
      "We needed multiple sizes on short notice—handled well. Material quality and dimensional accuracy were on point.",
    name: "Fatima Mohamed",
    role: "Supply Chain",
    handle: "dispatch_ready_72",
  },
];