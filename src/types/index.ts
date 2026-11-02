export type ServiceCategory = 
  | 'cakes'
  | 'desserts'
  | 'displays'
  | 'mehendi'
  | 'gifts'
  | 'party-supplies'
  | 'hire'
  | 'backdrops';

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  options?: {
    label: string;
    items: string[];
  }[];
  specifications?: {
    label: string;
    value: string;
  }[];
  isPublished: boolean;
  priceConfirmed: boolean;
  priceNote?: string;
}

export interface CelebrationPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  idealFor: string;
  inclusions: string[];
  optionalAddons: string[];
  isPublished: boolean;
  priceConfirmed: boolean;
  priceGuide?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
  caption: string;
  isRepresentative: boolean;
  tags: string[];
}

export interface FaqItem {
  id: string;
  category: 'general' | 'cakes' | 'desserts' | 'mehendi' | 'hire' | 'orders';
  question: string;
  answer: string;
}

export interface BusinessInfo {
  businessName: string;
  tagline: string;
  whatsappNumber: string;
  email: string;
  serviceArea: string;
  instagramHandle: string;
  facebookPage: string;
  leadNotice: string;
}

export interface QuoteEnquiry {
  id: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'quoted' | 'booked' | 'archived';
  customer: {
    fullName: string;
    email: string;
    phone: string;
    preferredContact: 'whatsapp' | 'email' | 'phone';
  };
  event: {
    eventType: string;
    eventDate: string;
    eventTime?: string;
    suburbOrVenue: string;
    guestCount: number | string;
    themeOrVibe?: string;
    colorPalette?: string;
    budgetRange?: string;
  };
  selectedServices: ServiceCategory[];
  serviceDetails: {
    cake?: {
      servings: string;
      tierCount: string;
      flavours: string[];
      dietaryNotes: string;
    };
    desserts?: {
      approximateQuantity: string;
      preferredItems: string[];
      requiresDisplayRental: boolean;
    };
    mehendi?: {
      peopleCount: string;
      style: string;
      sittingLocation: string;
    };
    hire?: {
      tableCount: string;
      chairCount: string;
      bouncyCastleSelected: boolean;
      setupSurface: string;
      durationHours: string;
    };
    backdrops?: {
      preferredStyle: string;
      includesBalloons: boolean;
      includesFloral: boolean;
    };
    gifts?: {
      quantity: string;
      customTagRequested: boolean;
    };
  };
  referencePhotos: {
    name: string;
    dataUrl: string;
  }[];
  additionalNotes?: string;
}
