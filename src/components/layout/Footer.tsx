import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { useStore } from '../../context/StoreContext';
import { Mail, Phone, MapPin, Instagram, Facebook, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { businessInfo, services } = useStore();

  return (
    <footer className="bg-[#4B142D] text-[#FFF9F6] border-t border-[#71384F]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#71384F]/50">
          {/* Column 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-sm text-[#D9A0A5] leading-relaxed max-w-sm pt-2">
              Handcrafted celebration cakes, decadent dessert displays, delicate bridal mehendi, and boutique party hire styling. Bringing elegance, warmth, and sweet memories to life’s cherished moments.
            </p>
            <div className="pt-2 text-xs text-[#FFF9F6]/80 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C69A59] shrink-0" />
                <span>{businessInfo.serviceArea}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C69A59] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#C69A59] transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C69A59] shrink-0" />
                <a href={`https://wa.me/${businessInfo.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C69A59] transition-colors">
                  WhatsApp: {businessInfo.whatsappNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Bespoke Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold tracking-wide text-[#C69A59] mb-4">
              Bespoke Services
            </h4>
            <ul className="space-y-2 text-xs text-[#D9A0A5]">
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-[#C69A59] hover:underline pt-1 inline-block">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Hire & Styling */}
          <div>
            <h4 className="font-heading text-lg font-semibold tracking-wide text-[#C69A59] mb-4">
              Hire & Styling
            </h4>
            <ul className="space-y-2 text-xs text-[#D9A0A5]">
              <li>
                <Link to="/services/tables-chairs-and-bouncy-castle-hire" className="hover:text-white transition-colors">
                  Tables & Chairs Hire
                </Link>
              </li>
              <li>
                <Link to="/services/tables-chairs-and-bouncy-castle-hire" className="hover:text-white transition-colors">
                  Bouncy Castle Hire
                </Link>
              </li>
              <li>
                <Link to="/services/backdrops-and-event-decorations" className="hover:text-white transition-colors">
                  Backdrops & Balloon Styling
                </Link>
              </li>
              <li>
                <Link to="/services/dessert-decorations-and-displays" className="hover:text-white transition-colors">
                  Dessert Display Stands
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  Celebration Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Policies */}
          <div>
            <h4 className="font-heading text-lg font-semibold tracking-wide text-[#C69A59] mb-4">
              Client Studio
            </h4>
            <ul className="space-y-2 text-xs text-[#D9A0A5]">
              <li>
                <Link to="/quote" className="text-[#FFF9F6] font-medium hover:text-[#C69A59] transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Inspiration Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li className="pt-2 border-t border-[#71384F]/40">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy <span className="text-[10px] opacity-70">(Draft)</span>
                </Link>
              </li>
              <li>
                <Link to="/booking-policy" className="hover:text-white transition-colors">
                  Booking & Hire Terms <span className="text-[10px] opacity-70">(Draft)</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#C69A59] hover:underline flex items-center gap-1">
                  <span>Owner Admin CMS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#D9A0A5] gap-4">
          <p>© {new Date().getFullYear()} Sweet Creations. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px] text-[#D9A0A5]/80">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C69A59]" />
            <span>Online quotation submission does not confirm bookings until formally approved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
