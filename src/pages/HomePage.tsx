import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import {
  Sparkles,
  ArrowRight,
  Heart,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Star,
  ExternalLink
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { services, packages, gallery } = useStore();

  const publishedServices = services.filter((s) => s.isPublished);
  const featuredGallery = gallery.slice(0, 4);

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#4B142D] text-[#FFF9F6]">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/Romantic_Henna_Dessert_Celebration__1__15481021.png"
            alt="Sweet Creations luxury celebration setup featuring bespoke floral cake, artisan macarons, bridal mehendi henna art, and romantic floral arch"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured Scrim for WCAG AA Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B142D] via-[#4B142D]/65 to-[#4B142D]/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#4B142D]/30 to-[#4B142D]/85" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#71384F]/40 border border-[#D9A0A5]/40 backdrop-blur-xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C69A59]" />
            <span className="text-xs uppercase tracking-widest text-[#FFF9F6] font-medium">
              Bespoke Studio & Event Styling
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFF9F6] max-w-4xl leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Beautiful Moments, <br />
            <span className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#D9A0A5] font-normal lowercase tracking-normal">
              thoughtfully created.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-[#F7E9E5] max-w-2xl font-normal leading-relaxed text-opacity-90">
            From handcrafted celebration cakes and artisan dessert tables to delicate bridal mehendi, party hire, and styling essentials. We bring romance, elegance, and artisanal care to every detail.
          </p>

          {/* Two Prominent CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#4B142D] bg-[#FFF9F6] rounded-md hover:bg-[#F7E9E5] transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
            >
              Explore Our Creations
            </Link>
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#FFF9F6] border border-[#C69A59] bg-[#C69A59]/20 hover:bg-[#C69A59] hover:text-[#4B142D] rounded-md transition-all duration-200 backdrop-blur-xs shadow-md active:scale-95 whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-[#71384F]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left text-xs text-[#D9A0A5]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C69A59] shrink-0" />
              <span>Bespoke Handcrafted Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C69A59] shrink-0" />
              <span>100% Organic Henna Paste</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C69A59] shrink-0" />
              <span>Sanitised Hire & Safety Checked</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C69A59] shrink-0" />
              <span>Dedicated Venue Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT BRAND INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Artisan Craftsmanship
            </span>
            <h2
              className="font-heading text-3xl sm:text-5xl font-bold text-[#4B142D] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Where culinary passion meets celebration styling
            </h2>
            <div className="space-y-4 text-sm text-[#71384F] leading-relaxed">
              <p>
                At Sweet Creations, every event is treated as an individual canvas. We believe that life’s most meaningful milestones—from a baby shower or first birthday to an intimate wedding or festive mehendi night—deserve pieces made with warmth, love, and unwavering attention to detail.
              </p>
              <p>
                Rather than treating cakes, desserts, and decor as separate disconnected items, we weave a harmonious aesthetic across your celebration table, backdrop, and party ambiance.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#4B142D] hover:text-[#C69A59] border-b border-[#4B142D] pb-1 transition-colors"
              >
                <span>Read the Studio Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-sm group">
              <img
                src="/src/assets/images/custom_cakes_showcase_1792550725256.jpg"
                alt="Intricate bas-relief floral piped cake"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B142D]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">Bespoke Sugar Art & Buttercream</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-sm group mt-0 sm:mt-6">
              <img
                src="/src/assets/images/bridal_mehendi_art_1792550727834.jpg"
                alt="Intricate bridal henna design on hands"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B142D]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">Organic Bridal & Festive Mehendi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE CATEGORY SHOWCASE */}
      <section className="bg-[#F7E9E5]/50 py-20 border-y border-[#D9A0A5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Complete Celebration Services
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#4B142D] mt-2 mb-4">
              Thoughtfully Curated Offerings
            </h2>
            <p className="text-sm text-[#71384F] leading-relaxed">
              Explore our core studio disciplines. Each service is tailored to your guest numbers, theme, and celebration preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishedServices.slice(0, 8).map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-lg overflow-hidden border border-[#F7E9E5] hover:border-[#D9A0A5] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-[#F7E9E5]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#4B142D]/90 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {srv.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#4B142D] group-hover:text-[#71384F] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#71384F] line-clamp-3 mt-1.5 leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F7E9E5] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#C69A59] font-medium">
                      Bespoke Pricing
                    </span>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="font-semibold text-[#4B142D] hover:text-[#C69A59] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#4B142D] text-[#4B142D] text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-[#4B142D] hover:text-white transition-all"
            >
              <span>View Full Services Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CELEBRATION PACKAGES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Harmonised Packages
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#4B142D] mt-2">
              Signature Celebration Suites
            </h2>
          </div>
          <p className="text-xs text-[#71384F] max-w-md mt-2 md:mt-0 leading-relaxed">
            Curated combinations that blend cake, sweet treats, backdrop styling, and hire into one stress-free, harmonious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl border border-[#F7E9E5] hover:border-[#D9A0A5] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B142D]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium bg-[#4B142D]/60 px-2 py-0.5 rounded">
                    {pkg.idealFor}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#C69A59] font-medium mt-0.5">{pkg.subtitle}</p>
                  <p className="text-xs text-[#71384F] mt-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#F7E9E5]">
                    <span className="text-[11px] font-semibold text-[#4B142D] uppercase tracking-wider block mb-2">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#71384F]">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C69A59] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F7E9E5]">
                  <Link
                    to="/quote"
                    className="w-full text-center block py-2.5 px-4 bg-[#4B142D] text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-[#71384F] transition-colors"
                  >
                    Request Package Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED GALLERY EDITORIAL STRIP */}
      <section className="bg-[#FFF9F6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Visual Inspiration
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#4B142D] mt-1">
              Moments from the Studio
            </h2>
            <p className="text-xs text-[#71384F] mt-2">
              Representative editorial previews of past cakes, dessert tables, and event styling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg overflow-hidden group aspect-square bg-[#F7E9E5]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#4B142D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white text-xs">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-[11px] text-[#D9A0A5] line-clamp-2 mt-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#4B142D] hover:text-[#C69A59]"
            >
              <span>View Full Gallery & Lightbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. GOOGLE REVIEWS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9F6] rounded-2xl p-6 sm:p-10 border border-[#D9A0A5]/50 shadow-xs space-y-8">
          {/* Header Summary Strip */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#F7E9E5]">
            <div className="flex items-center gap-4 text-left">
              {/* Official Google G Logo */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
                    Google Reviews
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    5.0 ★ EXCELLENT
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#4B142D]">5.0</span>
                  <span className="text-xs text-[#71384F]">· Based on verified client reviews</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=Sweet+Creations+Cakes+Desserts+Mehendi+Party+Hire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#D9A0A5]/60 hover:border-[#4B142D] text-[#4B142D] text-xs font-medium rounded-md shadow-xs transition-colors shrink-0"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C69A59]" />
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Review 1 */}
            <div className="bg-white p-5 rounded-xl border border-[#F7E9E5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#4B142D] text-white flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#4B142D] flex items-center gap-1">
                        <span>Priya Sharma</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-[10px] text-[#71384F]">Local Guide · 18 reviews</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">2 weeks ago</span>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-[#71384F] leading-relaxed">
                  “Sweet Creations crafted our wedding cake and a full luxury dessert table. The raspberry & white chocolate tier was incredibly moist, and the sugar flowers matched our theme perfectly. Guests are still talking about the macarons!”
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7E9E5] text-[10px] text-[#C69A59] font-medium">
                Wedding Cake & Dessert Display
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-5 rounded-xl border border-[#F7E9E5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#71384F] text-white flex items-center justify-center font-bold text-xs">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#4B142D] flex items-center gap-1">
                        <span>Ananya Patel</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-[10px] text-[#71384F]">Verified Customer</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">1 month ago</span>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-[#71384F] leading-relaxed">
                  “I booked Sweet Creations for my bridal mehendi ceremony. The 100% natural organic henna paste gave the deepest, rich mahogany stain without any chemicals. The fine-line mandala work on my palms was pure artistry!”
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7E9E5] text-[10px] text-[#C69A59] font-medium">
                Bespoke Bridal Mehendi Suite
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-5 rounded-xl border border-[#F7E9E5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#C69A59] text-white flex items-center justify-center font-bold text-xs">
                      J
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#4B142D] flex items-center gap-1">
                        <span>Jessica Miller</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-[10px] text-[#71384F]">Verified Customer</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">2 months ago</span>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-[#71384F] leading-relaxed">
                  “We hired the circular gold floral arch, custom balloon garland, and toddler bouncy castle for our daughter’s birthday. Delivered and secured right on time, spotlessly clean. Truly a seamless experience!”
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7E9E5] text-[10px] text-[#C69A59] font-medium">
                Party Backdrop & Equipment Hire
              </div>
            </div>
          </div>

          {/* Verified Google Badge Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#71384F] gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified customer feedback via Google Business Profile</span>
            </span>
            <span className="italic opacity-80">
              Reviews independently submitted by confirmed clients
            </span>
          </div>
        </div>
      </section>

      {/* 7. FINAL QUOTATION CTA */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Start Planning With Us
          </span>
          <h2
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ textWrap: 'balance' }}
          >
            Ready to bring your celebration vision to life?
          </h2>
          <p className="text-sm text-[#F7E9E5] max-w-xl mx-auto leading-relaxed">
            Share your event date, theme, and service ideas through our interactive quotation form. We’ll curate an itemised proposal tailored to your style.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-3.5 bg-[#FFF9F6] text-[#4B142D] text-xs uppercase tracking-widest font-semibold rounded-md shadow-md hover:bg-[#F7E9E5] transition-all"
            >
              Request a Bespoke Quote
            </Link>
            <Link
              to="/faqs"
              className="px-6 py-3.5 border border-[#D9A0A5] text-[#FFF9F6] text-xs uppercase tracking-widest font-medium rounded-md hover:bg-[#71384F] transition-all"
            >
              Explore Ordering FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
