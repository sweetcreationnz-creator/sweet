import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ServiceCategory, QuoteEnquiry } from '../../types';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Upload,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  Send,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { Logo } from '../common/Logo';

interface SmartQuoteFormProps {
  initialCategory?: ServiceCategory;
  onSuccess?: (enquiry: QuoteEnquiry) => void;
}

export const SmartQuoteForm: React.FC<SmartQuoteFormProps> = ({
  initialCategory,
  onSuccess
}) => {
  const { submitEnquiry, businessInfo } = useStore();

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<QuoteEnquiry | null>(null);

  // Form state
  const [selectedServices, setSelectedServices] = useState<ServiceCategory[]>(
    initialCategory ? [initialCategory] : ['cakes']
  );

  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'whatsapp' as 'whatsapp' | 'email' | 'phone'
  });

  const [event, setEvent] = useState({
    eventType: 'Birthday',
    eventDate: '',
    eventTime: '14:00',
    suburbOrVenue: '',
    guestCount: '30',
    themeOrVibe: '',
    colorPalette: '',
    budgetRange: 'Flexible / Quality First'
  });

  // Service specific fields
  const [cakeDetails, setCakeDetails] = useState({
    servings: '25-35 servings',
    tierCount: '2 Tiers',
    flavours: ['Vanilla Bean with Raspberry Coulis'],
    dietaryNotes: ''
  });

  const [dessertDetails, setDessertDetails] = useState({
    approximateQuantity: '3-4 dozen pieces',
    preferredItems: ['French Macarons', 'Mini Chocolate Tartlets'],
    requiresDisplayRental: true
  });

  const [mehendiDetails, setMehendiDetails] = useState({
    peopleCount: 'Bridal Only (1 person)',
    style: 'Traditional Bridal & Mandala Fusion',
    sittingLocation: 'Home / Private Sitting'
  });

  const [hireDetails, setHireDetails] = useState({
    tableCount: '4',
    chairCount: '24',
    bouncyCastleSelected: false,
    setupSurface: 'Level Grass (Outdoor)',
    durationHours: '4-6 hours'
  });

  const [backdropDetails, setBackdropDetails] = useState({
    preferredStyle: 'Gold Moongate Arch with Florals',
    includesBalloons: true,
    includesFloral: true
  });

  const [giftDetails, setGiftDetails] = useState({
    quantity: '25 favor boxes',
    customTagRequested: true
  });

  const [referencePhotos, setReferencePhotos] = useState<{ name: string; dataUrl: string }[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [termsAcknowledged, setTermsAcknowledged] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions: { id: ServiceCategory; title: string; desc: string }[] = [
    { id: 'cakes', title: 'Custom Cakes', desc: 'Bespoke tiered cakes for celebrations' },
    { id: 'desserts', title: 'Desserts & Treats', desc: 'Macarons, tartlets, shooter cups & treats' },
    { id: 'displays', title: 'Dessert Displays', desc: 'Tiered cake stands & styling platters' },
    { id: 'mehendi', title: 'Mehendi Art', desc: 'Bridal & festive organic henna designs' },
    { id: 'hire', title: 'Tables, Chairs & Bouncy Castle', desc: 'Party seating, tables & kids inflatables' },
    { id: 'backdrops', title: 'Backdrops & Balloons', desc: 'Arches, flower walls & photo setups' },
    { id: 'gifts', title: 'Gift Packs & Favours', desc: 'Custom treat boxes & party favor bags' },
    { id: 'party-supplies', title: 'Party Supplies', desc: 'Toppers, candles & event accents' }
  ];

  const handleToggleService = (cat: ServiceCategory) => {
    if (selectedServices.includes(cat)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== cat));
      }
    } else {
      setSelectedServices([...selectedServices, cat]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setReferencePhotos((prev) => [
            ...prev,
            { name: file.name, dataUrl: uploadEvent.target!.result as string }
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setReferencePhotos(referencePhotos.filter((_, i) => i !== index));
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        errs.services = 'Please select at least one service category';
      }
    } else if (currentStep === 2) {
      if (!customer.fullName.trim()) errs.fullName = 'Full name is required';
      if (!customer.email.trim() || !customer.email.includes('@')) {
        errs.email = 'Valid email address is required';
      }
      if (!customer.phone.trim()) errs.phone = 'Phone number is required for quote dispatch';
      if (!event.eventDate) errs.eventDate = 'Please select an event date';
      if (!event.suburbOrVenue.trim()) errs.suburbOrVenue = 'Suburb or venue is required';
    } else if (currentStep === 4) {
      if (!termsAcknowledged) {
        errs.terms = 'Please acknowledge that a quote enquiry does not confirm your booking';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam protection
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      const result = await submitEnquiry({
        customer,
        event,
        selectedServices,
        serviceDetails: {
          cake: selectedServices.includes('cakes') ? cakeDetails : undefined,
          desserts: selectedServices.includes('desserts') ? dessertDetails : undefined,
          mehendi: selectedServices.includes('mehendi') ? mehendiDetails : undefined,
          hire: selectedServices.includes('hire') ? hireDetails : undefined,
          backdrops: selectedServices.includes('backdrops') ? backdropDetails : undefined,
          gifts: selectedServices.includes('gifts') ? giftDetails : undefined
        },
        referencePhotos,
        additionalNotes
      });

      setSubmittedEnquiry(result);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      console.error(err);
      alert('An error occurred while submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // POST SUBMISSION SCREEN
  if (submittedEnquiry) {
    const whatsappText = encodeURIComponent(
      `Hi Sweet Creations! I just submitted quote enquiry #${submittedEnquiry.id} for my event on ${submittedEnquiry.event.eventDate} in ${submittedEnquiry.event.suburbOrVenue}. Looking forward to discussing details!`
    );
    const cleanNumber = businessInfo.whatsappNumber.replace(/[^0-9]/g, '');

    return (
      <div className="bg-white rounded-xl shadow-md border border-[#F7E9E5] p-6 sm:p-10 text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-200">
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>

        <div className="w-14 h-14 bg-[#F7E9E5] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B142D]">
          <CheckCircle2 className="w-8 h-8 text-[#C69A59]" />
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#4B142D] mb-2">
          Enquiry Received with Gratitude
        </h3>
        <p className="text-sm text-[#71384F] mb-4">
          Reference Code: <span className="font-mono font-bold text-[#4B142D] text-base px-2 py-0.5 bg-[#F7E9E5] rounded">{submittedEnquiry.id}</span>
        </p>

        <div className="bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg p-4 text-xs text-[#71384F] text-left mb-6 space-y-2">
          <p className="font-semibold text-[#4B142D] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-[#C69A59] shrink-0" />
            Important Notice Regarding Your Request:
          </p>
          <p>
            Submitting an enquiry does not confirm your booking. Availability, custom pricing, and deposit requirements will be reviewed and communicated to you within 24–48 business hours.
          </p>
          <p>
            A copy of this proposal request has been logged. You may also connect with our studio directly via WhatsApp for expedited consultations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {cleanNumber && (
            <a
              href={`https://wa.me/${cleanNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold rounded-md shadow-sm hover:bg-[#20ba59] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          )}
          <button
            onClick={() => {
              setSubmittedEnquiry(null);
              setStep(1);
            }}
            className="w-full sm:w-auto px-5 py-2.5 border border-[#71384F] text-[#71384F] hover:bg-[#F7E9E5] text-xs uppercase tracking-wider font-medium rounded-md transition-all"
          >
            Submit Another Request
          </button>
        </div>

        {/* Backend integration architecture note */}
        <div className="mt-8 pt-6 border-t border-[#F7E9E5] text-[11px] text-[#71384F]/80 text-left">
          <p className="font-semibold text-[#4B142D] mb-1">Developer / Production Notice:</p>
          <p>
            Currently operating in local client preview mode. Enquiries are stored securely in browser state and localStorage. To configure live SMTP dispatch or Supabase persistence, refer to the documentation in README.md.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xs border border-[#F7E9E5] overflow-hidden max-w-3xl mx-auto">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="website_url_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Progress Step Header */}
      <div className="bg-[#4B142D] text-[#FFF9F6] px-6 py-4 flex items-center justify-between border-b border-[#71384F]">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#C69A59] font-semibold">
            Smart Quotation Portal
          </span>
          <h2 className="font-heading text-xl font-bold tracking-tight text-white">
            {step === 1 && '1. Select Your Services'}
            {step === 2 && '2. Event & Contact Details'}
            {step === 3 && '3. Bespoke Service Preferences'}
            {step === 4 && '4. Inspiration & Review'}
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-[#D9A0A5]">
            Step {step} of 4
          </span>
          <div className="w-24 h-1.5 bg-[#71384F] rounded-full overflow-hidden mt-1.5">
            <div
              className="h-full bg-[#C69A59] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* STEP 1: Select Services */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C69A59] font-semibold mb-1">
                Multi-Service Planning
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
                What can we create for your celebration?
              </h3>
              <p className="text-xs text-[#71384F] mt-1">
                Select one or combine multiple services to receive a consolidated quotation.
              </p>
            </div>

            {errors.services && (
              <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded">{errors.services}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => {
                const isSelected = selectedServices.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleToggleService(opt.id)}
                    className={`text-left p-4 rounded-lg border transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#4B142D] bg-[#F7E9E5]/60 shadow-xs'
                        : 'border-[#F7E9E5] bg-white hover:border-[#D9A0A5]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-semibold text-sm text-[#4B142D]">
                        {opt.title}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#4B142D] border-[#4B142D] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="text-[10px]">✓</span>}
                      </div>
                    </div>
                    <span className="text-[#71384F] text-[11px] leading-relaxed">
                      {opt.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-[#FFF9F6] rounded-md border border-[#F7E9E5] text-xs text-[#71384F] flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#C69A59] shrink-0 mt-0.5" />
              <span>
                Tip: Booking cakes and hire together streamlines your event coordination with unified setup and delivery.
              </span>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#F7E9E5]">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 bg-[#4B142D] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#71384F] transition-colors flex items-center gap-2"
              >
                <span>Continue to Event Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Event & Contact Details */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C69A59] font-semibold mb-1">
                Logistics & Guests
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
                Tell us about your celebration
              </h3>
              <p className="text-xs text-[#71384F] mt-1">
                These details allow us to verify date availability and calculate delivery accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] focus:ring-1 focus:ring-[#4B142D] outline-none"
                />
                {errors.fullName && <p className="text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="eleanor@example.com"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] focus:ring-1 focus:ring-[#4B142D] outline-none"
                />
                {errors.email && <p className="text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="+61 400 000 000"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] focus:ring-1 focus:ring-[#4B142D] outline-none"
                />
                {errors.phone && <p className="text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Preferred Contact Channel
                </label>
                <select
                  value={customer.preferredContact}
                  onChange={(e) => setCustomer({ ...customer, preferredContact: e.target.value as any })}
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none bg-white"
                >
                  <option value="whatsapp">WhatsApp (Fastest response)</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Event Type
                </label>
                <select
                  value={event.eventType}
                  onChange={(e) => setEvent({ ...event, eventType: e.target.value })}
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none bg-white"
                >
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Wedding / Reception">Wedding / Reception</option>
                  <option value="Engagement / Proposal">Engagement / Proposal</option>
                  <option value="Mehendi / Sangeet Ceremony">Mehendi / Sangeet Ceremony</option>
                  <option value="Baby Shower / Gender Reveal">Baby Shower / Gender Reveal</option>
                  <option value="Corporate / Community Event">Corporate / Community Event</option>
                  <option value="Other Milestone Celebration">Other Milestone Celebration</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={event.eventDate}
                  onChange={(e) => setEvent({ ...event, eventDate: e.target.value })}
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none bg-white"
                />
                {errors.eventDate && <p className="text-rose-600 mt-1">{errors.eventDate}</p>}
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Suburb / Venue Location *
                </label>
                <input
                  type="text"
                  required
                  value={event.suburbOrVenue}
                  onChange={(e) => setEvent({ ...event, suburbOrVenue: e.target.value })}
                  placeholder="e.g. Paddington, Sydney or Venue Name"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none"
                />
                {errors.suburbOrVenue && <p className="text-rose-600 mt-1">{errors.suburbOrVenue}</p>}
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Estimated Guest Count
                </label>
                <input
                  type="text"
                  value={event.guestCount}
                  onChange={(e) => setEvent({ ...event, guestCount: e.target.value })}
                  placeholder="e.g. 40-50 guests"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Theme or Vibe
                </label>
                <input
                  type="text"
                  value={event.themeOrVibe}
                  onChange={(e) => setEvent({ ...event, themeOrVibe: e.target.value })}
                  placeholder="e.g. Romantic Vintage Rose, Modern Luxe Gold, Whimsical"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">
                  Colour Preferences
                </label>
                <input
                  type="text"
                  value={event.colorPalette}
                  onChange={(e) => setEvent({ ...event, colorPalette: e.target.value })}
                  placeholder="e.g. Burgundy, Blush pink, Antique gold & Ivory"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md focus:border-[#4B142D] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#F7E9E5]">
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 border border-[#71384F] text-[#71384F] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F7E9E5] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 bg-[#4B142D] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#71384F] transition-colors flex items-center gap-2"
              >
                <span>Customize Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Service-Specific Customization */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C69A59] font-semibold mb-1">
                Tailored Specifications
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
                Customise each selected service
              </h3>
              <p className="text-xs text-[#71384F] mt-1">
                Refine the dimensions, flavours, and requirements for your selections.
              </p>
            </div>

            {/* Custom Cakes Section */}
            {selectedServices.includes('cakes') && (
              <div className="p-4 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#4B142D] flex items-center gap-2">
                  <span>🎂 Custom Cake Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Target Servings
                    </label>
                    <select
                      value={cakeDetails.servings}
                      onChange={(e) => setCakeDetails({ ...cakeDetails, servings: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="12-18 servings (Single Tier 6-inch)">12–18 servings (Single Tier 6-inch)</option>
                      <option value="20-30 servings (Single Tier 8-inch)">20–30 servings (Single Tier 8-inch)</option>
                      <option value="35-50 servings (Two Tiers 6 & 8-inch)">35–50 servings (Two Tiers 6 & 8-inch)</option>
                      <option value="60-80 servings (Three Tiers)">60–80 servings (Three Tiers)</option>
                      <option value="100+ servings (Grand Celebration / Wedding)">100+ servings (Grand Celebration)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Tier Architecture
                    </label>
                    <select
                      value={cakeDetails.tierCount}
                      onChange={(e) => setCakeDetails({ ...cakeDetails, tierCount: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="Single Tier">Single Tier</option>
                      <option value="Two Tiers">Two Tiers</option>
                      <option value="Three Tiers">Three Tiers</option>
                      <option value="Floating Spacer Tier">Floating Spacer Tier</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Dietary / Allergy Consideration
                    </label>
                    <input
                      type="text"
                      value={cakeDetails.dietaryNotes}
                      onChange={(e) => setCakeDetails({ ...cakeDetails, dietaryNotes: e.target.value })}
                      placeholder="e.g. Eggless requested, Nut-friendly, Halal compliant"
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Desserts Section */}
            {selectedServices.includes('desserts') && (
              <div className="p-4 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#4B142D]">
                  🧁 Desserts & Sweet Treats
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Estimated Treat Quantities
                    </label>
                    <select
                      value={dessertDetails.approximateQuantity}
                      onChange={(e) => setDessertDetails({ ...dessertDetails, approximateQuantity: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="2-3 dozen (approx 24-36 pcs)">2–3 dozen (approx 24–36 pcs)</option>
                      <option value="4-6 dozen (approx 48-72 pcs)">4–6 dozen (approx 48–72 pcs)</option>
                      <option value="8+ dozen (Full dessert table 96+ pcs)">8+ dozen (Full dessert table)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Display Stand Rental
                    </label>
                    <div className="flex items-center gap-4 pt-1.5">
                      <label className="flex items-center gap-1.5 text-xs">
                        <input
                          type="radio"
                          name="displayRent"
                          checked={dessertDetails.requiresDisplayRental}
                          onChange={() => setDessertDetails({ ...dessertDetails, requiresDisplayRental: true })}
                        />
                        <span>Yes, include stands</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs">
                        <input
                          type="radio"
                          name="displayRent"
                          checked={!dessertDetails.requiresDisplayRental}
                          onChange={() => setDessertDetails({ ...dessertDetails, requiresDisplayRental: false })}
                        />
                        <span>Treats only</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mehendi Section */}
            {selectedServices.includes('mehendi') && (
              <div className="p-4 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#4B142D]">
                  🌿 Mehendi Henna Art
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Sitting Scope & Numbers
                    </label>
                    <select
                      value={mehendiDetails.peopleCount}
                      onChange={(e) => setMehendiDetails({ ...mehendiDetails, peopleCount: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="Bridal Only (Full arms & feet)">Bridal Only (Full arms & feet)</option>
                      <option value="Bridal + Close Family (3-5 people)">Bridal + Close Family (3–5 people)</option>
                      <option value="Mehendi Party Group (Hourly rate for guests)">Mehendi Party Group (Hourly rate)</option>
                      <option value="Individual Celebration Guest">Individual Celebration Guest</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Sitting Location
                    </label>
                    <select
                      value={mehendiDetails.sittingLocation}
                      onChange={(e) => setMehendiDetails({ ...mehendiDetails, sittingLocation: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="At Client Residence (Mobile)">At Client Residence (Mobile)</option>
                      <option value="At Event Venue / Banquet Hall">At Event Venue / Banquet Hall</option>
                      <option value="Studio Appointment">Studio Appointment</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Hire Section */}
            {selectedServices.includes('hire') && (
              <div className="p-4 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#4B142D]">
                  🎪 Equipment & Bouncy Castle Hire
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Seating & Tables Required
                    </label>
                    <input
                      type="text"
                      value={`${hireDetails.tableCount} tables, ${hireDetails.chairCount} chairs`}
                      onChange={(e) => setHireDetails({ ...hireDetails, chairCount: e.target.value })}
                      placeholder="e.g. 4 tables, 24 chairs"
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Bouncy Castle Inflatable
                    </label>
                    <label className="flex items-center gap-2 pt-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hireDetails.bouncyCastleSelected}
                        onChange={(e) => setHireDetails({ ...hireDetails, bouncyCastleSelected: e.target.checked })}
                        className="rounded text-[#4B142D]"
                      />
                      <span>Include children’s bouncy castle</span>
                    </label>
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Setup Surface Type
                    </label>
                    <select
                      value={hireDetails.setupSurface}
                      onChange={(e) => setHireDetails({ ...hireDetails, setupSurface: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="Level Natural Grass (Secured with pegs)">Level Natural Grass</option>
                      <option value="Indoor Hall / Gymnasium (Sandbag weighted)">Indoor Hall / Gymnasium</option>
                      <option value="Paved / Concrete Courtyard">Paved / Concrete Courtyard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Hire Duration
                    </label>
                    <select
                      value={hireDetails.durationHours}
                      onChange={(e) => setHireDetails({ ...hireDetails, durationHours: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="Standard 4 Hours">Standard 4 Hours</option>
                      <option value="Full Day (6-8 Hours)">Full Day (6–8 Hours)</option>
                      <option value="Weekend / Overnight Package">Weekend / Overnight Package</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Backdrops Section */}
            {selectedServices.includes('backdrops') && (
              <div className="p-4 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#4B142D]">
                  ✨ Backdrops & Floral Installations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Preferred Style
                    </label>
                    <select
                      value={backdropDetails.preferredStyle}
                      onChange={(e) => setBackdropDetails({ ...backdropDetails, preferredStyle: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded-md bg-white"
                    >
                      <option value="Gold Circular Moongate Arch">Gold Circular Moongate Arch</option>
                      <option value="Double Sailboard Panels with Vinyl">Double Sailboard Panels</option>
                      <option value="Lush Silk Floral Wall">Lush Silk Floral Wall</option>
                      <option value="Shimmer Wall with Neon Sign">Shimmer Wall with Neon Sign</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-[#4B142D] mb-1">
                      Installation Inclusions
                    </label>
                    <div className="flex items-center gap-3 pt-1.5">
                      <label className="flex items-center gap-1.5">
                        <input
                          type="checkbox"
                          checked={backdropDetails.includesBalloons}
                          onChange={(e) => setBackdropDetails({ ...backdropDetails, includesBalloons: e.target.checked })}
                        />
                        <span>Organic Balloon Garland</span>
                      </label>
                      <label className="flex items-center gap-1.5">
                        <input
                          type="checkbox"
                          checked={backdropDetails.includesFloral}
                          onChange={(e) => setBackdropDetails({ ...backdropDetails, includesFloral: e.target.checked })}
                        />
                        <span>Floral Accents</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-[#F7E9E5]">
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 border border-[#71384F] text-[#71384F] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F7E9E5] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 bg-[#4B142D] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#71384F] transition-colors flex items-center gap-2"
              >
                <span>Upload Photos & Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Reference Photos & Review */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C69A59] font-semibold mb-1">
                Final Step
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#4B142D]">
                Inspiration photos & Proposal Review
              </h3>
              <p className="text-xs text-[#71384F] mt-1">
                Share visual references (cake styles, colour swatches, Pinterest mood boards).
              </p>
            </div>

            {/* Photo Upload Zone */}
            <div className="border-2 border-dashed border-[#D9A0A5] hover:border-[#4B142D] rounded-lg p-6 text-center transition-colors bg-[#FFF9F6]/40">
              <Upload className="w-8 h-8 text-[#C69A59] mx-auto mb-2" />
              <p className="text-xs font-medium text-[#4B142D]">
                Drag and drop inspiration photos or click to browse
              </p>
              <p className="text-[11px] text-[#71384F] mt-1">
                PNG, JPG, or WEBP up to 5MB each.
              </p>
              <label className="mt-3 inline-block px-4 py-1.5 bg-white border border-[#D9A0A5] text-[#4B142D] text-xs font-semibold rounded cursor-pointer hover:bg-[#F7E9E5]">
                Select Image Files
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* Photo Previews */}
              {referencePhotos.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-[#D9A0A5]/40">
                  {referencePhotos.map((photo, index) => (
                    <div key={index} className="relative group rounded overflow-hidden border border-[#D9A0A5]">
                      <img
                        src={photo.dataUrl}
                        alt={`Inspiration ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 bg-[#4B142D]/80 text-white rounded-full p-1 text-[10px] hover:bg-rose-700"
                        title="Remove photo"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Special Requests */}
            <div>
              <label className="block text-xs font-medium text-[#4B142D] mb-1">
                Special Requests or Notes for our Studio
              </label>
              <textarea
                rows={3}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Mention any specific timing requirements, surprise arrangements, or dietary restrictions..."
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md text-xs focus:border-[#4B142D] outline-none"
              />
            </div>

            {/* Review Summary Card */}
            <div className="bg-[#F7E9E5]/60 rounded-lg p-4 border border-[#D9A0A5]/40 text-xs text-[#4B142D] space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#C69A59]" />
                <span>Proposal Request Summary</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#71384F]">
                <div>
                  <span className="font-medium text-[#4B142D]">Client:</span> {customer.fullName} ({customer.phone})
                </div>
                <div>
                  <span className="font-medium text-[#4B142D]">Date:</span> {event.eventDate || 'Date pending'} ({event.suburbOrVenue || 'Venue pending'})
                </div>
                <div>
                  <span className="font-medium text-[#4B142D]">Event:</span> {event.eventType} ({event.guestCount} guests)
                </div>
                <div>
                  <span className="font-medium text-[#4B142D]">Services:</span> {selectedServices.join(', ')}
                </div>
              </div>
            </div>

            {/* MANDATORY BOOKING DISCLAIMER */}
            <div className="p-4 bg-white border-2 border-[#C69A59]/80 rounded-lg text-xs text-[#71384F] space-y-2">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="disclaimer-terms"
                  required
                  checked={termsAcknowledged}
                  onChange={(e) => setTermsAcknowledged(e.target.checked)}
                  className="mt-0.5 rounded text-[#4B142D] focus:ring-[#4B142D]"
                />
                <label htmlFor="disclaimer-terms" className="leading-relaxed cursor-pointer font-medium text-[#4B142D]">
                  I understand that <span className="underline">submitting an enquiry does not confirm my booking</span>. Availability, pricing and payment requirements will be confirmed separately by Sweet Creations.
                </label>
              </div>
              {errors.terms && <p className="text-rose-600 pl-5 text-[11px]">{errors.terms}</p>}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#F7E9E5]">
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 border border-[#71384F] text-[#71384F] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F7E9E5] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !termsAcknowledged}
                className={`px-8 py-3 text-xs font-semibold uppercase tracking-wider rounded-md text-white transition-all shadow-sm flex items-center gap-2 ${
                  isSubmitting || !termsAcknowledged
                    ? 'bg-slate-400 cursor-not-allowed opacity-70'
                    : 'bg-[#4B142D] hover:bg-[#71384F] active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin text-sm">↻</span>
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#C69A59]" />
                    <span>Send Quote Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
