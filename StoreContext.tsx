import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  CelebrationPackage,
  GalleryItem,
  FaqItem,
  BusinessInfo,
  QuoteEnquiry
} from '../types';
import {
  initialBusinessInfo,
  initialServices,
  initialPackages,
  initialGallery,
  initialFaqs
} from '../data/initialData';

interface StoreContextType {
  services: ServiceItem[];
  packages: CelebrationPackage[];
  gallery: GalleryItem[];
  faqs: FaqItem[];
  businessInfo: BusinessInfo;
  enquiries: QuoteEnquiry[];
  submitEnquiry: (enquiryData: Omit<QuoteEnquiry, 'id' | 'createdAt' | 'status'>) => Promise<QuoteEnquiry>;
  updateService: (updated: ServiceItem) => void;
  updatePackage: (updated: CelebrationPackage) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
  updateBusinessInfo: (info: BusinessInfo) => void;
  updateEnquiryStatus: (id: string, status: QuoteEnquiry['status']) => void;
  isAdminAuthenticated: boolean;
  adminLogin: (code: string) => boolean;
  adminLogout: () => void;
  resetToDefaults: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SERVICES: 'sweet_creations_services_v1',
  PACKAGES: 'sweet_creations_packages_v1',
  GALLERY: 'sweet_creations_gallery_v1',
  FAQS: 'sweet_creations_faqs_v1',
  BUSINESS: 'sweet_creations_business_v1',
  ENQUIRIES: 'sweet_creations_enquiries_v1',
  ADMIN_AUTH: 'sweet_creations_admin_auth_v1'
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [packages, setPackages] = useState<CelebrationPackage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    return saved ? JSON.parse(saved) : initialPackages;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAQS);
    return saved ? JSON.parse(saved) : initialFaqs;
  });

  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BUSINESS);
    return saved ? JSON.parse(saved) : initialBusinessInfo;
  });

  const [enquiries, setEnquiries] = useState<QuoteEnquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BUSINESS, JSON.stringify(businessInfo));
  }, [businessInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  const submitEnquiry = async (
    enquiryData: Omit<QuoteEnquiry, 'id' | 'createdAt' | 'status'>
  ): Promise<QuoteEnquiry> => {
    // Simulated network latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newEnquiry: QuoteEnquiry = {
      ...enquiryData,
      id: `SC-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    setEnquiries((prev) => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const updateService = (updated: ServiceItem) => {
    setServices((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const updatePackage = (updated: CelebrationPackage) => {
    setPackages((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}`
    };
    setGallery((prev) => [newItem, ...prev]);
  };

  const updateGalleryItem = (item: GalleryItem) => {
    setGallery((prev) => prev.map((g) => (g.id === item.id ? item : g)));
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  const updateBusinessInfo = (info: BusinessInfo) => {
    setBusinessInfo(info);
  };

  const updateEnquiryStatus = (id: string, status: QuoteEnquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  const adminLogin = (code: string): boolean => {
    // In preview mode, any non-empty demo password or "sweet" unlocks the demo CMS
    if (code.trim().length > 0) {
      setIsAdminAuthenticated(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  const resetToDefaults = () => {
    setServices(initialServices);
    setPackages(initialPackages);
    setGallery(initialGallery);
    setFaqs(initialFaqs);
    setBusinessInfo(initialBusinessInfo);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.PACKAGES);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.FAQS);
    localStorage.removeItem(STORAGE_KEYS.BUSINESS);
  };

  return (
    <StoreContext.Provider
      value={{
        services,
        packages,
        gallery,
        faqs,
        businessInfo,
        enquiries,
        submitEnquiry,
        updateService,
        updatePackage,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        updateBusinessInfo,
        updateEnquiryStatus,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        resetToDefaults
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
