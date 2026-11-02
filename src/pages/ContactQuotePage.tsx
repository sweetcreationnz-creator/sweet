import React from 'react';
import { useStore } from '../context/StoreContext';
import { SmartQuoteForm } from '../components/quote/SmartQuoteForm';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactQuotePage: React.FC = () => {
  const { businessInfo } = useStore();

  const cleanNumber = businessInfo.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Client Inquiries & Quotes
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Request a Bespoke Quote
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            Share your celebration date, guest count, and service preferences. We will tailor an itemised proposal for your consideration.
          </p>
        </div>
      </section>

      {/* Contact Channel Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#F7E9E5] text-[#C69A59] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#4B142D]">WhatsApp & Phone</h4>
            <p className="text-xs text-[#71384F]">
              Direct messaging for quick questions & consultation updates.
            </p>
            <a
              href={`https://wa.me/${cleanNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#4B142D] hover:text-[#C69A59] block pt-1"
            >
              {businessInfo.whatsappNumber} →
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#F7E9E5] text-[#C69A59] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#4B142D]">Studio Email</h4>
            <p className="text-xs text-[#71384F]">
              Send mood boards, floor plans, and comprehensive brief inquiries.
            </p>
            <a
              href={`mailto:${businessInfo.email}`}
              className="text-xs font-semibold text-[#4B142D] hover:text-[#C69A59] block pt-1"
            >
              {businessInfo.email} →
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#F7E9E5] text-[#C69A59] flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#4B142D]">Service Radius</h4>
            <p className="text-xs text-[#71384F]">
              {businessInfo.serviceArea}
            </p>
            <span className="text-xs font-semibold text-[#C69A59] block pt-1">
              Venue delivery available
            </span>
          </div>
        </div>

        {/* Smart Quotation Wizard */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Multi-Service Quotation Engine
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#4B142D] mt-1">
              Build Your Event Proposal
            </h2>
          </div>

          <SmartQuoteForm />
        </div>
      </section>
    </div>
  );
};
