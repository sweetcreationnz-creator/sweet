import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { businessInfo } = useStore();
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanNumber = businessInfo.whatsappNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber) return null;

  const prefilledMessage = encodeURIComponent(
    `Hello Sweet Creations! I would like to enquire about your bespoke cakes, mehendi or party hire services.`
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:block bg-[#4B142D] text-[#FFF9F6] text-xs px-3 py-1.5 rounded-md shadow-md border border-[#D9A0A5]/40 animate-in fade-in duration-150">
          Enquire on WhatsApp
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#4B142D]"
        aria-label="Chat with Sweet Creations on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
