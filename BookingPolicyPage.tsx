import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookingPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[#71384F] hover:text-[#4B142D]">
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Home</span>
      </Link>

      <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg flex items-center gap-2 text-amber-800 text-xs">
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
        <span>
          <strong>Draft Document:</strong> This booking & equipment hire policy is pending final owner approval and legal verification. It reflects standard studio reservation guidelines.
        </span>
      </div>

      <div className="bg-white p-8 rounded-xl border border-[#F7E9E5] shadow-xs space-y-6 text-xs sm:text-sm text-[#71384F] leading-relaxed">
        <h1 className="font-heading text-3xl font-bold text-[#4B142D]">
          Booking, Payment & Hire Terms (Draft Pending Approval)
        </h1>
        <p className="text-xs text-[#C69A59]">
          Operational Policy Framework · Sweet Creations
        </p>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            1. Quotation Submissions & Booking Confirmation
          </h2>
          <p>
            Submitting a quotation request through this website does not constitute a confirmed booking. Bookings are only secured once a formal itemised proposal is accepted and a non-refundable booking deposit is received.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            2. Notice Periods & Availability
          </h2>
          <p>
            A minimum notice of 2 to 4 weeks is strongly recommended for celebration cakes, dessert tables, and party hire. Bridal mehendi appointments and large tiered wedding cakes require 4 to 8 weeks advance reservation due to high demand during peak wedding seasons.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            3. Weather Contingency Policy for Inflatable Hire
          </h2>
          <p>
            For safety compliance, bouncy castles and outdoor inflatables cannot be safely operated in continuous rain, severe storms, or wind speeds exceeding 35 km/h. In the event of adverse weather, we work closely with clients to relocate equipment to a covered or indoor venue or arrange rescheduling subject to equipment availability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            4. Equipment Care & Bond
          </h2>
          <p>
            All hired equipment (tables, seating, cake stands, plinths, and inflatables) is delivered clean, sanitised, and in optimal working condition. A refundable security bond may be applied to hire bookings to cover potential equipment loss or damage.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            5. Cake Transport & Venue Care
          </h2>
          <p>
            Tiered cakes require a flat, level surface and a climate-controlled environment away from direct sunlight or heaters. Once delivered and set up at the designated venue, responsibility for temperature management transfers to the client or venue staff.
          </p>
        </section>
      </div>
    </div>
  );
};
