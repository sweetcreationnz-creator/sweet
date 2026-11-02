import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, PlusCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  const { packages } = useStore();

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Curated Event Suites
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Celebration Packages
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully combined suites of bespoke cakes, artisan dessert displays, backdrop styling, and event hire designed for effortless harmony.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-[#F7E9E5] hover:border-[#D9A0A5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Media Column */}
              <div className={`lg:col-span-5 relative h-72 sm:h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#4B142D]/90 text-white text-xs uppercase tracking-wider px-3 py-1 rounded">
                  {pkg.idealFor}
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C69A59] font-semibold">
                      Curated Suite
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#4B142D] mt-1">
                      {pkg.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#71384F] font-medium mt-0.5">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#71384F] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#4B142D] uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C69A59]" />
                        <span>Core Inclusions</span>
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#71384F]">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#C69A59] font-bold">·</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#4B142D] uppercase tracking-wider flex items-center gap-1.5">
                        <PlusCircle className="w-4 h-4 text-[#C69A59]" />
                        <span>Optional Add-Ons</span>
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#71384F]">
                        {pkg.optionalAddons.map((addon, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#C69A59] font-bold">+</span>
                            <span>{addon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F7E9E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#71384F]">
                    <span className="font-semibold text-[#4B142D] block">Customised Proposal:</span>
                    <span>{pkg.priceGuide || 'Priced upon guest count & bespoke options'}</span>
                  </div>

                  <Link
                    to="/quote"
                    className="w-full sm:w-auto px-6 py-3 bg-[#4B142D] text-white text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-[#71384F] transition-all text-center"
                  >
                    Request Quote for this Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="p-6 bg-[#F7E9E5]/60 rounded-xl border border-[#D9A0A5]/40 text-xs text-[#71384F] space-y-2">
          <p className="font-semibold text-[#4B142D] text-sm">
            Need a completely custom arrangement?
          </p>
          <p>
            You can combine elements across different packages (such as bridal henna + table hire + custom cake). Select all applicable services in our quotation form, and we will formulate a unified quote.
          </p>
        </div>
      </section>
    </div>
  );
};
