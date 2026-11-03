import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { Logo } from '../components/common/Logo';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex justify-center mb-2">
            <Logo variant="dark" size="lg" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            The Studio Story
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            About Sweet Creations
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            Crafting romantic, artistic, and bespoke celebration experiences with warmth, premium ingredients, and heartfelt attention to detail.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Founder Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#F7E9E5]">
              <img
                src="/assets/images/custom_cakes_showcase_1792550725256.jpg"
                alt="Sweet Creations Studio Artistry"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Editorial Accent Box */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-lg shadow-md border border-[#D9A0A5]/40 max-w-xs text-xs text-[#71384F]">
              <span className="font-heading text-lg font-bold text-[#4B142D] block mb-1">
                Bespoke & Made to Order
              </span>
              <p>Every cake, mehendi pattern, and event styling setup is crafted uniquely for your milestone.</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Our Creative Foundation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#4B142D] leading-tight">
              A celebration of artistry, flavor, and gracious hospitality
            </h2>
            <div className="space-y-4 text-sm text-[#71384F] leading-relaxed">
              <p>
                Sweet Creations was born out of a deep reverence for life’s milestone moments. Whether welcoming a new child, celebrating a golden wedding anniversary, or preparing a bride for her sacred ceremony, we believe celebrations are sacred memories in the making.
              </p>
              <p>
                Our vision brings multiple creative disciplines under one roof: artisanal baking and delicate sugar work, time-honoured organic henna application, and thoughtful event equipment hire. By harmonising these elements, we remove the stress of coordinating multiple separate vendors while ensuring an unmistakable signature elegance.
              </p>
            </div>

            {/* Founder Biography Placeholder (Adheres strictly to instructions: Do not invent names or fake accolades) */}
            <div className="p-5 bg-[#F7E9E5]/60 rounded-xl border border-[#D9A0A5]/40 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C69A59] font-bold block">
                Founder & Lead Creative [Pending Owner Approval]
              </span>
              <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                The Heart Behind Sweet Creations
              </h3>
              <p className="text-xs text-[#71384F] leading-relaxed italic">
                “Founder biography, creative background, and culinary philosophy will be introduced here upon official owner confirmation. Sweet Creations is dedicated to uncompromising quality, organic botanical ingredients, and bespoke care for every client.”
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B142D] text-white text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-[#71384F] transition-colors"
              >
                <span>Plan Your Event With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-[#FFF9F6] py-16 border-t border-[#F7E9E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
              Our Core Commitments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#4B142D] mt-2">
              The Sweet Creations Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] space-y-3">
              <div className="w-10 h-10 bg-[#F7E9E5] text-[#C69A59] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                Culinary Integrity
              </h3>
              <p className="text-xs text-[#71384F] leading-relaxed">
                We bake exclusively with real butter, Madagascan vanilla bean pods, pure Belgian chocolate, and fresh curds. We believe a show-stopping cake must taste just as unforgettable as it looks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] space-y-3">
              <div className="w-10 h-10 bg-[#F7E9E5] text-[#C69A59] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                100% Organic Henna
              </h3>
              <p className="text-xs text-[#71384F] leading-relaxed">
                We formulate our own henna paste using triple-sifted organic Rajasthani henna leaf powder and pure essential oils. Zero chemicals, zero commercial dyes, and completely safe for expectant mothers and brides.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#F7E9E5] space-y-3">
              <div className="w-10 h-10 bg-[#F7E9E5] text-[#C69A59] rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#4B142D]">
                Pristine Hire & Reliability
              </h3>
              <p className="text-xs text-[#71384F] leading-relaxed">
                All hire items—from dining chairs to bouncy castles and cake stands—are systematically inspected and sanitised before every booking. Delivered and secured strictly to safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
