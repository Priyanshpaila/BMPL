export const COMPANY_INFO = {
  name: "Bhawani Moulders Pvt. Ltd.",
  shortName: "BMPL",
  tagline: "Precision in every Angle",
  description:
    "Bhawani Moulders Pvt. Ltd., established in 1987, bridges the gap between steel supply and demand with a comprehensive range of products including MS Angles, MS Rounds, MS Patti (Flat), MS Square and MS Gate Channel.",

  // Publishable address (Factory + Office same as provided)
  address: {
    street: "299-301 Urla Industrial Complex, Birgoan",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India",
    postal: "493221",
  },

  // Primary enquiry channel
  contact: {
    // Keep phone/whatsapp if you already have correct numbers elsewhere.
    // Update them here only if these are final.
    phone: "+91 98765 43210",
    email: "bhawanimpl@gmail.com",
    whatsapp: "918770047163", // without +
  },

  // Business hours (as provided)
  hours: {
    weekday: "Monday - Friday: 10:00 AM - 7:30 PM",
    weekend: "Saturday: 10:00 AM - 7:30 PM • Sunday: Closed",
    timezone: "IST",
  },

  // Internal routing (who receives website enquiries)
  enquiryRouting: [
    { name: "Vasudha Agrawal", role: "Marketing" },
    { name: "Anook Sarkar", role: "Marketing Executive" },
    { name: "Dushiyant Sinha", role: "Accountant / Marketing" },
  ],

  // Operational highlights (based on your inputs)
  operations: {
    facilities: [
      "Steel Melting Shop",
      "2× Automatic rolling mills",
      "Reheating furnace",
    ],
    productionCapacity: "Producing over 10,000 MT of finished product each month",
    moq: "5 MT minimum total quantity • 1 MT minimum per size",
  },

  // Frontend “trust bullets” used in footer / CTA / trust bars
  trust: [
    "Established in 1987 • Urla Industrial Complex, Raipur",
    "2× automatic rolling mills + steel melting shop + reheating furnace",
    "Producing 10,000+ MT finished product/month",
    "MOQ: 5 MT total (minimum 1 MT per size)",
  ],

  // Optional: if you want a map link right away (recommended)
  maps: {
    googleMapsQuery:
      "299-301 Urla Industrial Complex, Birgoan, Raipur, Chhattisgarh 493221",
    // If you have a pin URL, replace with the exact link.
    // googleMapsUrl: "https://www.google.com/maps/....",
  },
};
