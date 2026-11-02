import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { GalleryItem, ServiceCategory } from '../types';
import { X, ZoomIn, Info, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GalleryPage: React.FC = () => {
  const { gallery } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Creations' },
    { id: 'cakes', label: 'Custom Cakes' },
    { id: 'desserts', label: 'Desserts & Sweets' },
    { id: 'mehendi', label: 'Mehendi Henna Art' },
    { id: 'backdrops', label: 'Backdrops & Balloons' },
    { id: 'displays', label: 'Displays & Table Styling' },
  ];

  const filteredGallery = gallery.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Handle ESC key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="space-y-12 pb-24">
      {/* Header Banner */}
      <section className="bg-[#4B142D] text-[#FFF9F6] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
            Studio Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Inspiration Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#D9A0A5] max-w-2xl mx-auto leading-relaxed">
            A visual showcase of bespoke cakes, decadent dessert tables, delicate bridal henna, and curated event styling.
          </p>
        </div>
      </section>

      {/* Disclaimed Representative Preview Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-[#F7E9E5] border border-[#D9A0A5]/50 rounded-xl text-xs text-[#71384F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#C69A59] shrink-0" />
            <span>
              <strong>Design Preview Note:</strong> Current portfolio imagery contains representative styling concepts. Business owners can upload and publish official studio photography via the Admin CMS.
            </span>
          </div>
          <Link
            to="/admin"
            className="text-[#4B142D] font-semibold underline text-xs shrink-0 hover:text-[#C69A59]"
          >
            Manage Photos in Admin →
          </Link>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-[#4B142D] text-white shadow-xs'
                  : 'bg-[#F7E9E5] text-[#71384F] hover:bg-[#D9A0A5]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-white rounded-xl overflow-hidden border border-[#F7E9E5] hover:border-[#D9A0A5] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#F7E9E5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#4B142D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {item.isRepresentative && (
                  <div className="absolute top-3 left-3 bg-[#4B142D]/80 text-[#FFF9F6] text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                    Representative Concept
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#4B142D] group-hover:text-[#71384F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#71384F] line-clamp-2 mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                {/* Clean Unboxed Tags with separators */}
                <div className="pt-2 border-t border-[#F7E9E5] flex items-center gap-1.5 text-[11px] text-[#C69A59]">
                  {item.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#4B142D]/90 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#D9A0A5]/40 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#4B142D]/80 text-white flex items-center justify-center hover:bg-[#4B142D] transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[60vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[60vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-[#FFF9F6]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold">
                  {activeItem.category}
                </span>
                {activeItem.isRepresentative && (
                  <span className="text-[11px] text-[#71384F] italic">
                    Representative Styling Concept
                  </span>
                )}
              </div>

              <h2 className="font-heading text-2xl font-bold text-[#4B142D]">
                {activeItem.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#71384F] leading-relaxed">
                {activeItem.caption}
              </p>

              <div className="pt-4 border-t border-[#F7E9E5] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#71384F]">
                  <span className="font-medium text-[#4B142D]">Tags:</span>
                  <span>{activeItem.tags.join(', ')}</span>
                </div>

                <Link
                  to="/quote"
                  className="px-5 py-2 bg-[#4B142D] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#71384F] transition-colors"
                >
                  Request Similar Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
