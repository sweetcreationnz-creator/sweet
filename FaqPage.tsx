import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronDown, HelpCircle, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqPage: React.FC = () => {
  const { faqs, businessInfo } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'orders', label: 'Orders & Quotes' },
    { id: 'cakes', label: 'Cakes & Dietary' },
    { id: 'mehendi', label: 'Mehendi Bookings' },
    { id: 'hire', label: 'Hire, Delivery & Weather' },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Client Assistance
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            Find immediate answers on booking timelines, dietary preferences, natural henna aftercare, and event equipment hire policies.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#71384F] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. dietary, bouncy castle, notice period, henna paste)..."
            className="w-full pl-11 pr-4 py-3 bg-white rounded-lg border border-[#D9A0A5]/60 text-xs sm:text-sm text-[#4B142D] focus:border-[#4B142D] outline-none shadow-xs"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
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

        {/* Accordion List */}
        <div className="space-y-3 pt-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-[#F7E9E5] p-6">
              <HelpCircle className="w-8 h-8 text-[#C69A59] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#4B142D]">No matching questions found</p>
              <p className="text-xs text-[#71384F] mt-1">
                Try searching with different terms or reach out directly through our quotation form.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-[#F7E9E5] overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FFF9F6] transition-colors"
                  >
                    <span className="font-heading text-lg font-bold text-[#4B142D]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C69A59] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#71384F] leading-relaxed border-t border-[#F7E9E5]/70 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions card */}
        <div className="bg-[#F7E9E5]/60 rounded-xl p-8 border border-[#D9A0A5]/40 text-center space-y-4 mt-12">
          <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
            Have a question about your specific event?
          </h3>
          <p className="text-xs sm:text-sm text-[#71384F] max-w-lg mx-auto">
            Our team is delighted to discuss custom flavour pairings, guest counts, and hire logistics.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/quote"
              className="px-6 py-2.5 bg-[#4B142D] text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-[#71384F] transition-all"
            >
              Start Smart Quote Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
