import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ServiceCategory } from '../types';
import { ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cakes', label: 'Custom Cakes' },
    { id: 'desserts', label: 'Desserts & Treats' },
    { id: 'displays', label: 'Displays & Stands' },
    { id: 'mehendi', label: 'Mehendi Henna Art' },
    { id: 'hire', label: 'Furniture & Castle Hire' },
    { id: 'backdrops', label: 'Backdrops & Balloons' },
    { id: 'gifts', label: 'Gift Packs & Favours' },
    { id: 'party-supplies', label: 'Party Supplies' },
  ];

  const filteredServices = services
    .filter((s) => s.isPublished)
    .filter((s) => (activeCategory === 'all' ? true : s.category === activeCategory));

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Studio Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Our Bespoke Services
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            Explore our artisanal culinary creations, traditional and contemporary henna artistry, and curated party equipment hire.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs (Segmented functional controls) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#4B142D] text-white shadow-xs'
                  : 'bg-[#F7E9E5] text-[#71384F] hover:bg-[#D9A0A5]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl border border-[#F7E9E5] hover:border-[#D9A0A5] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden bg-[#F7E9E5]">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#4B142D]/90 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                  {srv.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#4B142D] group-hover:text-[#71384F] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#C69A59] font-medium mt-1">{srv.tagline}</p>
                  <p className="text-xs text-[#71384F] mt-2.5 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F7E9E5]">
                    <span className="text-[11px] font-semibold text-[#4B142D] uppercase tracking-wider block mb-2">
                      Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#71384F]">
                      {srv.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#C69A59] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F7E9E5] flex items-center justify-between">
                  <span className="text-[11px] text-[#71384F] italic">
                    {srv.priceConfirmed ? 'Price on Application' : 'Custom Quotation'}
                  </span>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#4B142D] hover:text-[#C69A59] transition-colors"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4B142D] text-[#FFF9F6] p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Planning a combined service celebration?
            </h3>
            <p className="text-xs sm:text-sm text-[#D9A0A5]">
              Combine cake, mehendi, backdrops, and party hire in one coordinated enquiry.
            </p>
          </div>
          <Link
            to="/quote"
            className="px-6 py-3 bg-[#FFF9F6] text-[#4B142D] text-xs uppercase tracking-widest font-semibold rounded-md shadow hover:bg-[#F7E9E5] transition-all whitespace-nowrap"
          >
            Request Multi-Service Quote
          </Link>
        </div>
      </section>
    </div>
  );
};
