import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[#71384F] hover:text-[#4B142D]">
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Home</span>
      </Link>

      <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg flex items-center gap-2 text-amber-800 text-xs">
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
        <span>
          <strong>Draft Document:</strong> This privacy policy is currently pending final legal review and owner approval. It outlines intended customer data handling practices.
        </span>
      </div>

      <div className="bg-white p-8 rounded-xl border border-[#F7E9E5] shadow-xs space-y-6 text-xs sm:text-sm text-[#71384F] leading-relaxed">
        <h1 className="font-heading text-3xl font-bold text-[#4B142D]">
          Privacy Policy (Draft Pending Approval)
        </h1>
        <p className="text-xs text-[#C69A59]">
          Last updated: October 2026 · Sweet Creations Studio
        </p>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">1. Information We Collect</h2>
          <p>
            When you request a quote or booking through Sweet Creations, we collect personal contact details (such as your full name, telephone number, email address, and event venue or suburb location), event specifics (guest numbers, dates, timings, flavour and dietary requests), and any reference photos you choose to provide.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to prepare custom pricing proposals, confirm event scheduling and delivery logistics, contact you regarding your order requirements, and verify safety considerations for equipment hire.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">3. Data Sharing & Third Parties</h2>
          <p>
            Sweet Creations does not sell or distribute your contact details to third-party advertisers. Information is only shared with essential delivery drivers or venue coordinators where strictly necessary to execute your booking.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">4. Contact & Inquiries</h2>
          <p>
            For any questions regarding your personal details or to request removal from our client inquiry records, please reach out to us at our verified studio email.
          </p>
        </section>
      </div>
    </div>
  );
};
