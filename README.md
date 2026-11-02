# SWEET CREATIONS — Cakes, Desserts, Mehendi & Party Hire
> Beautiful Moments, Thoughtfully Created.

A premium, bespoke website and quotation application built with React 19, TypeScript, Vite, and Tailwind CSS for **Sweet Creations**.

---

## 🌸 Brand Identity & Design System

- **Primary Plum Burgundy**: `#4B142D` (Hero sections, primary buttons, footers)
- **Secondary Dusty Wine**: `#71384F` (Headings, subtitles, borders)
- **Rose Pink**: `#D9A0A5` (Accents, dividers, badges)
- **Blush Cream**: `#F7E9E5` (Structural card backdrops, highlights)
- **Antique Gold**: `#C69A59` (Emblems, icons, focal highlights)
- **Neutral Ivory**: `#FFF9F6` (Primary canvas background)
- **Typography**:
  - Headings: `Cormorant Garamond` (Editorial luxury serif)
  - Body: `DM Sans` (Clean, legible neo-grotesque)
  - Decorative Accents: `Great Vibes` (Artisanal calligraphy, used with restraint)

---

## 🏛️ Application Architecture & Pages

1. **Home (`/`)**:
   - High-fidelity full-width celebration hero with logo lockup and dual CTAs: *Explore Our Creations* & *Request a Quote*
   - Brand story introduction
   - Service category showcase
   - Celebration packages preview
   - Curated gallery editorial strip
   - Approved client testimonials section
   - Floating WhatsApp button with prefilled enquiry message
2. **About Us (`/about`)**:
   - Story of the studio and craftsmanship philosophy
   - Founder and lead creative introduction (clearly formatted with approval placeholders)
   - Core commitments: Culinary Integrity, 100% Organic Henna, and Pristine Equipment Hire
3. **Services Catalog (`/services`) & Dedicated Service Pages**:
   - **Custom Celebration Cakes** (`/services/custom-cakes`): Servings guide, tier architecture, flavours & dietary options
   - **Desserts & Sweet Treats** (`/services/desserts-and-sweet-treats`): Macarons, tartlets, shooter cups & gift boxes
   - **Dessert Displays & Styling** (`/services/dessert-decorations-and-displays`): Pedestals, gold risers & acrylic plinths
   - **Bespoke Mehendi Art** (`/services/mehendi-art`): Bridal henna suites, organic triple-sifted paste guarantee, mobile sittings
   - **Gift Packs & Goodie Bags** (`/services/gift-packs-and-goodie-bags`): Personalised favours, tags & celebration boxes
   - **Party Needs & Supplies** (`/services/party-needs-and-supplies`): Cake toppers, designer candles & tableware
   - **Tables, Chairs & Bouncy Castle Hire** (`/services/tables-chairs-and-bouncy-castle-hire`): Dimensions, surface requirements, weather policies & sanitisation standards
   - **Backdrops & Event Styling** (`/services/backdrops-and-event-decorations`): Gold moongate arches, balloon garlands & flower walls
4. **Celebration Packages (`/packages`)**:
   - Harmonised suites (*The Intimate Elegance Suite*, *The Bridal Bloom Suite*, *The Complete Celebration Experience*) with itemised inclusions and quote actions (no invented fixed pricing).
5. **Inspiration Gallery (`/gallery`)**:
   - Editorial masonry layout with segmented filter controls (Cakes, Desserts, Mehendi, Backdrops, Displays)
   - Fullscreen Lightbox modal with captions, metadata, and design-preview notices
6. **Frequently Asked Questions (`/faqs`)**:
   - Interactive search bar and category-filtered accordions
   - Covers ordering notice periods, dietary requests, organic henna safety, and bouncy castle weather policies
7. **Smart Quotation Portal (`/quote` or `/contact`)**:
   - Multi-step mobile-first quotation wizard:
     - Step 1: Multi-service selector (support combined bookings)
     - Step 2: Contact & event logistics (Date, venue/suburb, guest count, theme, colours)
     - Step 3: Service-specific tailoring (Cakes, Desserts, Mehendi, Hire, Backdrops)
     - Step 4: Reference photo drag-and-drop upload & proposal summary
     - Mandatory booking disclaimer: *"Submitting an enquiry does not confirm your booking. Availability, pricing and payment requirements will be confirmed separately."*
     - Instant reference code generation (e.g. `SC-104928`) and one-click WhatsApp forwarding
8. **Owner Admin CMS (`/admin`)**:
   - Authenticated preview dashboard (unlocked via demo code or password)
   - Incoming quote requests CRM (update status to *Reviewed*, *Quoted*, *Booked*)
   - Toggle service published status & price confirmation flags
   - Add, edit, or remove gallery creations and toggle *Representative* vs *Verified Studio Work*
   - Configure live WhatsApp phone numbers, email addresses, and service area radiuses
9. **Draft Policies (`/privacy-policy`, `/booking-policy`)**:
   - Clearly marked *Draft Pending Owner Approval*

---

## ⚙️ Environment Variables & Launch Checklist

Create a `.env` file based on `.env.example`:

```bash
# Google Gemini API key (optional for smart enhancements)
GEMINI_API_KEY="your-api-key"

# App URL (set automatically in production)
APP_URL="https://your-domain.com"
```

### Pre-Launch Checklist for Business Owner:
1. **Logo File Replacement (Optional)**: If you have a specific vector/PNG logo file from your graphic designer, you can place it in `public/logo.png` or `public/logo.svg`.
2. **WhatsApp Phone Number**: In the `/admin` settings tab, input your official business WhatsApp number in international format (e.g., `+61400000000`).
3. **Studio Contact Email**: Set the primary email address for quotation receipts.
4. **Owner Biography**: Supply the official founder bio and background text in the About page.
5. **Photography Replacement**: Upload high-resolution photos of actual Sweet Creations cakes and events via the `/admin` gallery manager.
6. **Connect Production Database**: To synchronize enquiries and CMS changes across multiple devices, connect Supabase or PostgreSQL as detailed below.

---

## 🗄️ Production Backend Integration

The application contains strict TypeScript data boundaries in `src/types/index.ts` and storage abstraction in `src/context/StoreContext.tsx`.

To connect **Supabase** for permanent cloud storage:
1. Initialize a Supabase project.
2. Run the SQL schema provided in `/admin` (Tab: *Production Architecture Guide*).
3. Connect the `submitEnquiry` function in `src/context/StoreContext.tsx` to `supabase.from('quote_enquiries').insert(...)`.
4. Deploy a server-side webhook or Resend email function to notify your email on each new quote request.
