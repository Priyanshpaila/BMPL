# BMPL - Bhawani Moulders Pvt. Ltd.

A premium, modern industrial website for Bhawani Moulders Pvt. Ltd., manufacturer of MS Billets, Angles, and Channels in Urla, Raipur.

## Overview

This is a production-ready Next.js website built with modern technologies:

- **Framework**: Next.js 16+ with App Router
- **Styling**: TailwindCSS v4 with custom design tokens
- **UI Components**: Custom React components with Lucide icons
- **Animations**: Framer Motion for subtle reveals and interactions
- **Type Safety**: Full TypeScript implementation
- **SEO Optimized**: Metadata, Open Graph, robots.txt, sitemap.ts

## Features

### 📄 Pages & Sections

- **Home** (`/`) - Landing page with 8 compelling sections
  - Hero with trust bullets
  - Trust bar with quick benefits
  - Product showcase (3 featured products)
  - Capability grid (6 capabilities)
  - Stats panel (4 key metrics)
  - Process steps (4-step manufacturing flow)
  - FAQ section (8 FAQs)
  - Final CTA section

- **Products** (`/products`) - All products with filters and cards
- **Product Details** (`/products/[slug]`) - Dynamic product pages with specs and related products
- **About** (`/about`) - Company mission, vision, values, and timeline
- **Infrastructure** (`/infrastructure`) - Manufacturing facilities, capacity, and process
- **Contact** (`/contact`) - Contact information, hours, location, and quick action links
- **Quote** (`/quote`) - RFQ form with WhatsApp integration

### 🎨 Design System

Dark theme with professional industrial aesthetic:

- **Color Palette**:
  - Background: `#0f172a` (slate-950)
  - Text: `#f1f5fa` (slate-50)
  - Primary: `#3b82f6` (blue-500)
  - Accents: `#06d6ff` (cyan), `#1e90ff` (dodger-blue)

- **Components**:
  - Custom Button (variants: primary, secondary, ghost, outline)
  - Input & Textarea with validation
  - Card (variants: default, glass, elevated)
  - Badge (variants: default, success, warning, error, info)
  - Container for layout consistency

### 🔌 WhatsApp Integration

- Floating WhatsApp button (bottom-right)
- Click-to-WhatsApp links throughout the site
- Quote form submits directly to WhatsApp Business
- Prefilled message templates for easy communication
- Future-ready backend seam in `lib/whatsapp.ts`

### 📝 Content-Driven Architecture

All content is centralized in `src/content/`:

- `company.ts` - Company info, addresses, contacts
- `products.ts` - Product catalog with specs
- `faqs.ts` - FAQ content
- `nav.ts` - Navigation structure
- `seo.ts` - SEO defaults

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles & design tokens
│   ├── page.tsx                # Home page
│   ├── about/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── products/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── infrastructure/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── quote/
│       ├── layout.tsx
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── Container.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── CapabilityGrid.tsx
│   │   ├── StatsPanel.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductBadges.tsx
│   │   ├── ProductSpecTable.tsx
│   │   └── ProductCTA.tsx
│   ├── forms/
│   │   ├── QuoteForm.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Badge.tsx
│
├── content/
│   ├── company.ts
│   ├── products.ts
│   ├── faqs.ts
│   ├── nav.ts
│   └── seo.ts
│
├── lib/
│   ├── cn.ts                   # className utility
│   ├── site.ts                 # Site constants
│   └── whatsapp.ts             # WhatsApp integration
│
└── public/
    ├── images/
    │   ├── steel-billets.jpg
    │   ├── steel-angles.jpg
    │   ├── steel-channels.jpg
    │   └── steel-manufacturing-facility.jpg
    └── [icons & favicons]
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone & Install Dependencies**
   ```bash
   # Using shadcn CLI (recommended)
   npx shadcn-cli@latest init -d

   # Or install dependencies manually
   npm install
   ```

2. **Set Environment Variables**

   Create `.env.local`:
   ```env
   NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER=919876543210
   NEXT_PUBLIC_DEV_WHATSAPP_URL=https://wa.me/919876543210
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:3000
   ```

## Updating Content

### Company Information

Edit `src/content/company.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Bhawani Moulders Pvt. Ltd.",
  contact: {
    phone: "+91 98765 43210",
    email: "info@bmpl.in",
    whatsapp: "919876543210", // without +
  },
  // ... other fields
}
```

### Products

Edit `src/content/products.ts` to add/modify products:

```typescript
{
  id: "1",
  slug: "ms-billets-mild-steel",
  name: "MS Billets",
  category: "billets",
  description: "High-quality mild steel billets...",
  specs: [
    { label: "Material", value: "Mild Steel (MS)" },
    // ... other specs
  ],
}
```

### FAQs

Edit `src/content/faqs.ts` to manage FAQ content.

### Navigation

Edit `src/content/nav.ts` to update menu items.

## WhatsApp Integration

The site uses a click-to-WhatsApp implementation that's ready for backend integration.

### Current Implementation (Frontend)

- `lib/whatsapp.ts` contains all WhatsApp utilities
- `openWhatsAppChat()` - Opens WhatsApp with prefilled message
- `generateWhatsAppLink()` - Creates wa.me URL
- `submitQuoteFuture()` - Quote form submission (frontend placeholder)

### Future Backend Integration

Replace the frontend WhatsApp call in `submitQuoteFuture()` with an API endpoint:

```typescript
export async function submitQuoteFuture(formData: {...}) {
  const response = await fetch('/api/quote', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
  // Handle response...
}
```

Then create an Express/Node.js backend to:
1. Store quote requests in a database
2. Send WhatsApp messages via WhatsApp Cloud API
3. Send email confirmations

## Customization

### Colors

Update color tokens in `app/globals.css`:

```css
:root {
  --primary: 59 130 246; /* blue-500 */
  --accent: 30 144 255; /* dodger-blue */
  /* ... other colors */
}
```

### Typography

Fonts are set in `app/globals.css` using Geist (default). To change:

```css
@theme inline {
  --font-sans: 'Your Font', fallback-font;
}
```

### Images

Add product images to `public/images/` and update the `image` field in `src/content/products.ts`.

## Performance

- Static site generation for all pages
- Image optimization with Next.js Image component
- CSS-in-JS minimization with Tailwind v4
- Code splitting and lazy loading with React
- Framer Motion for hardware-accelerated animations

## SEO

- Optimized metadata in each page layout
- Open Graph and Twitter card support
- Mobile-responsive design
- Semantic HTML with proper heading hierarchy
- Alt text for all images
- Robots.txt and sitemap for crawlers

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Set environment variables in Vercel
4. Deploy with one click

```bash
# Or deploy via Vercel CLI
vercel deploy
```

### Deploy to Other Platforms

Works with any Node.js hosting:
- AWS Amplify
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **Vercel Analytics** - Usage tracking

## Support & Maintenance

### Regular Updates

- Review and update product information quarterly
- Monitor WhatsApp contact metrics
- Track analytics for user behavior
- Update company information as needed

### Feature Additions

Future enhancements can include:
- Customer testimonials carousel
- Blog/News section
- Video gallery
- Advanced analytics dashboard
- Multi-language support
- Dark/Light theme toggle

## License

This website is proprietary software for Bhawani Moulders Pvt. Ltd.

## Contact

**Bhawani Moulders Pvt. Ltd.**
- Phone: +91 98765 43210
- Email: info@bmpl.in
- WhatsApp: +91 98765 43210
- Location: Urla Industrial Area, Raipur, Chhattisgarh, India

---

**Built with v0** - Deploy anywhere, scale infinitely.
#   B M P L  
 