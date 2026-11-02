import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import {
  Check,
  ArrowRight,
  ShieldAlert,
  Calendar,
  Clock,
  Sparkles,
  Info,
  ChevronLeft
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { services } = useStore();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold text-[#4B142D]">Service Not Found</h2>
        <p className="text-sm text-[#71384F]">
          The service offering you requested could not be located.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4B142D] text-white text-xs uppercase tracking-wider rounded-md"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs text-[#71384F]">
          <Link to="/" className="hover:text-[#4B142D]">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#4B142D]">Services</Link>
          <span>/</span>
          <span className="text-[#4B142D] font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7E9E5] text-[#4B142D] rounded-full text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A59]" />
              <span>{service.category} Service</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4B142D] leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#C69A59] font-medium">
              {service.tagline}
            </p>

            <p className="text-sm text-[#71384F] leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Price Note & Action */}
            <div className="p-4 bg-[#F7E9E5]/60 rounded-lg border border-[#D9A0A5]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4B142D]">
                <Info className="w-4 h-4 text-[#C69A59]" />
                <span>Pricing & Quotation Guide:</span>
              </div>
              <p className="text-xs text-[#71384F]">
                {service.priceNote || 'Each order is bespoke. Exact quotes depend on design complexity, servings, and event logistics.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                to={`/quote`}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#4B142D] text-white text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-[#71384F] transition-all text-center shadow-xs"
              >
                Request a Quote for this Service
              </Link>
              <Link
                to="/gallery"
                className="w-full sm:w-auto px-6 py-3.5 border border-[#4B142D] text-[#4B142D] text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-[#F7E9E5] transition-all text-center"
              >
                View Gallery Examples
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F7E9E5] bg-[#F7E9E5]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[420px] sm:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications / Highlights Strip */}
      {service.specifications && service.specifications.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-xl p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-[#4B142D] mb-4">
              Booking & Operational Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.specifications.map((spec, i) => (
                <div key={i} className="border-l-2 border-[#C69A59] pl-4 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#71384F] font-semibold block">
                    {spec.label}
                  </span>
                  <p className="text-xs text-[#4B142D] font-medium leading-relaxed">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features & Craftsmanship Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              What’s Included
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#4B142D]">
              Key Features & Inclusions
            </h2>
            <ul className="space-y-3 pt-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[#71384F] bg-white p-3.5 rounded-lg border border-[#F7E9E5]">
                  <Check className="w-4 h-4 text-[#C69A59] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Options & Variants (e.g., Flavours, Styles, Sitting Types) */}
          <div className="lg:col-span-6 space-y-6">
            {service.options && service.options.map((optGroup, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#F7E9E5] shadow-xs space-y-3">
                <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                  {optGroup.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#71384F]">
                  {optGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 p-2 rounded bg-[#FFF9F6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69A59]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Consultation Callout */}
            <div className="p-6 bg-[#4B142D] text-[#FFF9F6] rounded-xl space-y-3">
              <h4 className="font-heading text-lg font-bold text-white">
                Have a bespoke vision in mind?
              </h4>
              <p className="text-xs text-[#D9A0A5] leading-relaxed">
                Whether you have exact sketches or need creative guidance to match your theme, our studio works closely with you to curate the ideal setup.
              </p>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FFF9F6] hover:text-[#C69A59] border-b border-[#C69A59] pb-0.5"
              >
                <span>Start Smart Quote Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
