import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ShieldAlert,
  Lock,
  Unlock,
  Layers,
  Image,
  Inbox,
  Package,
  Settings,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  RefreshCw,
  ExternalLink,
  Save
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { Logo } from '../components/common/Logo';

export const AdminPage: React.FC = () => {
  const {
    services,
    packages,
    gallery,
    enquiries,
    businessInfo,
    updateService,
    updatePackage,
    addGalleryItem,
    deleteGalleryItem,
    updateBusinessInfo,
    updateEnquiryStatus,
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    resetToDefaults
  } = useStore();

  const [activeTab, setActiveTab] = useState<'enquiries' | 'services' | 'gallery' | 'packages' | 'settings' | 'backend'>('enquiries');
  const [accessCode, setAccessCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // New gallery item modal state
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: '',
    category: 'cakes' as ServiceCategory,
    image: '/assets/images/custom_cakes_showcase_1792550725256.jpg',
    caption: '',
    isRepresentative: false,
    tags: 'Wedding, Cake Art'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(accessCode)) {
      setAuthError('');
    } else {
      setAuthError('Please enter a demo password or access code to proceed.');
    }
  };

  const handleCreateGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryItem.title.trim()) return;

    addGalleryItem({
      title: newGalleryItem.title,
      category: newGalleryItem.category,
      image: newGalleryItem.image,
      caption: newGalleryItem.caption || 'Artisanal creation by Sweet Creations studio.',
      isRepresentative: newGalleryItem.isRepresentative,
      tags: newGalleryItem.tags.split(',').map((t) => t.trim()).filter(Boolean)
    });

    setNewGalleryItem({
      title: '',
      category: 'cakes',
      image: '/assets/images/custom_cakes_showcase_1792550725256.jpg',
      caption: '',
      isRepresentative: false,
      tags: 'Bespoke, Celebration'
    });
    triggerSaveToast();
  };

  const triggerSaveToast = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  // Login Gate
  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-20 px-4">
        <div className="bg-white rounded-2xl shadow-md border border-[#F7E9E5] p-8 text-center space-y-6">
          <div className="flex justify-center pb-2">
            <Logo size="lg" />
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C69A59] font-bold">
              Owner Administration
            </span>
            <h1 className="font-heading text-2xl font-bold text-[#4B142D] mt-1">
              Sweet Creations Studio CMS
            </h1>
            <p className="text-xs text-[#71384F] mt-2 leading-relaxed">
              Manage live service catalogues, incoming quote requests, gallery imagery, and pricing flags.
            </p>
          </div>

          <div className="p-3 bg-[#FFF9F6] border border-[#D9A0A5]/40 rounded-lg text-left text-[11px] text-[#71384F] space-y-1">
            <p className="font-semibold text-[#4B142D] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C69A59]" />
              Architectural Notice:
            </p>
            <p>
              In this preview build, enter any demo passcode (e.g., <code className="bg-white px-1 py-0.5 rounded border">demo</code> or <code className="bg-white px-1 py-0.5 rounded border">sweet</code>) or click Unlock Demo CMS below. Real production uses Supabase Auth or Firebase with role-based access control.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-[#4B142D] mb-1">
                Demo Studio Access Code
              </label>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter passcode (e.g. demo)"
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded-md text-xs focus:border-[#4B142D] outline-none"
              />
              {authError && <p className="text-rose-600 text-xs mt-1">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#4B142D] text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-[#71384F] transition-all"
            >
              Unlock Demo CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner & Architectural Banner */}
      <div className="bg-[#4B142D] text-[#FFF9F6] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-[#C69A59] font-bold">
              Studio Management Portal
            </span>
            <span className="bg-[#71384F] text-[#FFF9F6] text-[10px] uppercase px-2 py-0.5 rounded">
              Local Browser State Active
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
            Sweet Creations Content & Enquiries Console
          </h1>
          <p className="text-xs text-[#D9A0A5] mt-1 max-w-xl">
            Edits update your current browser session immediately. Connect a persistent cloud database (Supabase / Firebase) for multi-device sync.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={resetToDefaults}
            className="px-3.5 py-2 border border-[#D9A0A5]/40 text-[#FFF9F6] hover:bg-[#71384F] text-xs uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-colors"
            title="Reset data back to initial seeds"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={adminLogout}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider rounded-md transition-colors"
          >
            Exit Admin
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 animate-in fade-in duration-150">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Changes saved to local preview storage successfully!</span>
        </div>
      )}

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 border-b border-[#F7E9E5] overflow-x-auto pb-2 scrollbar-none text-xs">
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'enquiries'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Quote Requests ({enquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('services')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'services'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Services & Pricing Flags ({services.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'gallery'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <Image className="w-4 h-4" />
          <span>Gallery Imagery ({gallery.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('packages')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'packages'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Celebration Packages ({packages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'settings'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Studio Business Info</span>
        </button>

        <button
          onClick={() => setActiveTab('backend')}
          className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'backend'
              ? 'bg-[#4B142D] text-white'
              : 'text-[#71384F] hover:bg-[#F7E9E5]'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-[#C69A59]" />
          <span>Production Architecture Guide</span>
        </button>
      </div>

      {/* TAB 1: ENQUIRIES (CRM) */}
      {activeTab === 'enquiries' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-[#4B142D]">
              Incoming Quotation Requests
            </h2>
            <span className="text-xs text-[#71384F]">
              Total logged: {enquiries.length}
            </span>
          </div>

          {enquiries.length === 0 ? (
            <div className="bg-white p-12 rounded-xl border border-[#F7E9E5] text-center space-y-3">
              <Inbox className="w-10 h-10 text-[#C69A59] mx-auto" />
              <p className="font-heading text-lg font-bold text-[#4B142D]">
                No quotes received yet in this browser session
              </p>
              <p className="text-xs text-[#71384F] max-w-sm mx-auto">
                Test submitting a quote through the client-facing quotation portal to see incoming inquiries formatted here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-white rounded-xl border border-[#F7E9E5] p-6 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F7E9E5]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#4B142D] px-2 py-0.5 bg-[#F7E9E5] rounded">
                          #{enq.id}
                        </span>
                        <span className="text-xs text-[#71384F]">
                          Received: {new Date(enq.createdAt).toLocaleDateString()} at{' '}
                          {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-[#4B142D] mt-1">
                        {enq.customer.fullName} — {enq.event.eventType}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#71384F]">Status:</span>
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className="text-xs px-2.5 py-1 rounded border border-[#D9A0A5] bg-white font-medium text-[#4B142D]"
                      >
                        <option value="new">New Inquiry</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="quoted">Quoted Sent</option>
                        <option value="booked">Booked (Deposit Paid)</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#71384F]">
                    <div>
                      <p className="font-semibold text-[#4B142D] mb-1">Customer Details</p>
                      <p>Phone: {enq.customer.phone}</p>
                      <p>Email: {enq.customer.email}</p>
                      <p>Contact Via: {enq.customer.preferredContact}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#4B142D] mb-1">Event Logistics</p>
                      <p>Date: {enq.event.eventDate} ({enq.event.eventTime || 'Time TBD'})</p>
                      <p>Venue/Suburb: {enq.event.suburbOrVenue}</p>
                      <p>Guests: {enq.event.guestCount}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#4B142D] mb-1">Aesthetic & Services</p>
                      <p>Services: {enq.selectedServices.join(', ')}</p>
                      <p>Theme: {enq.event.themeOrVibe || 'None stated'}</p>
                      <p>Colours: {enq.event.colorPalette || 'Standard palette'}</p>
                    </div>
                  </div>

                  {/* Reference Photos */}
                  {enq.referencePhotos && enq.referencePhotos.length > 0 && (
                    <div className="pt-2 border-t border-[#F7E9E5]">
                      <span className="text-[11px] font-semibold text-[#4B142D] block mb-2">
                        Client Reference Photos ({enq.referencePhotos.length}):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {enq.referencePhotos.map((photo, i) => (
                          <a
                            key={i}
                            href={photo.dataUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-20 h-20 rounded border border-[#D9A0A5] overflow-hidden hover:opacity-80"
                          >
                            <img src={photo.dataUrl} alt={photo.name} className="w-full h-full object-cover" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {enq.additionalNotes && (
                    <div className="p-3 bg-[#FFF9F6] rounded border border-[#F7E9E5] text-xs text-[#71384F]">
                      <span className="font-semibold text-[#4B142D]">Special Notes: </span>
                      {enq.additionalNotes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SERVICES & CONFIRMATION FLAGS */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#4B142D]">
                Service Listings & Confirmation Flags
              </h2>
              <p className="text-xs text-[#71384F]">
                Publish/unpublish services and flag price confirmation statuses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl border border-[#F7E9E5] p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C69A59] font-bold">
                      {srv.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#4B142D]">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Toggle Published */}
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={srv.isPublished}
                      onChange={(e) => {
                        updateService({ ...srv, isPublished: e.target.checked });
                        triggerSaveToast();
                      }}
                      className="rounded text-[#4B142D]"
                    />
                    <span className={srv.isPublished ? 'text-emerald-700 font-medium' : 'text-slate-400'}>
                      {srv.isPublished ? 'Published' : 'Hidden'}
                    </span>
                  </label>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="block text-[#71384F] font-medium mb-1">Tagline</label>
                    <input
                      type="text"
                      value={srv.tagline}
                      onChange={(e) => updateService({ ...srv, tagline: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[#71384F] font-medium mb-1">
                      Price Confirmation Note
                    </label>
                    <input
                      type="text"
                      value={srv.priceNote || ''}
                      onChange={(e) => updateService({ ...srv, priceNote: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded text-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#F7E9E5]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={srv.priceConfirmed}
                        onChange={(e) => {
                          updateService({ ...srv, priceConfirmed: e.target.checked });
                          triggerSaveToast();
                        }}
                        className="rounded text-[#4B142D]"
                      />
                      <span className="text-xs text-[#4B142D] font-medium">
                        Owner Approved Fixed Pricing
                      </span>
                    </label>

                    <button
                      onClick={triggerSaveToast}
                      className="px-3 py-1 bg-[#4B142D] text-white text-[11px] font-semibold rounded hover:bg-[#71384F]"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: GALLERY MANAGER */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#4B142D]">
                Gallery Imagery Management
              </h2>
              <p className="text-xs text-[#71384F]">
                Replace representative portfolio images with approved client celebration photographs.
              </p>
            </div>
          </div>

          {/* Add Gallery Item Form */}
          <form
            onSubmit={handleCreateGalleryItem}
            className="bg-white p-6 rounded-xl border border-[#F7E9E5] space-y-4 text-xs"
          >
            <h3 className="font-heading text-lg font-bold text-[#4B142D] flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#C69A59]" />
              <span>Add New Creation to Portfolio</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-[#4B142D] mb-1">Creation Title *</label>
                <input
                  type="text"
                  required
                  value={newGalleryItem.title}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, title: e.target.value })}
                  placeholder="e.g. Lavender & Gold Sugar Rose Cake"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">Category</label>
                <select
                  value={newGalleryItem.category}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, category: e.target.value as ServiceCategory })}
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none bg-white"
                >
                  <option value="cakes">Custom Cakes</option>
                  <option value="desserts">Desserts & Treats</option>
                  <option value="mehendi">Mehendi Henna Art</option>
                  <option value="backdrops">Backdrops & Balloons</option>
                  <option value="displays">Displays & Hire</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">Image Asset Path / URL</label>
                <input
                  type="text"
                  required
                  value={newGalleryItem.image}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, image: e.target.value })}
                  placeholder="/assets/images/... or https://"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-medium text-[#4B142D] mb-1">Caption / Description</label>
                <input
                  type="text"
                  value={newGalleryItem.caption}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, caption: e.target.value })}
                  placeholder="Detail the floral accents, finish, and flavours..."
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-[#4B142D] mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newGalleryItem.tags}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, tags: e.target.value })}
                  placeholder="Wedding, 3-Tier, Gold"
                  className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newGalleryItem.isRepresentative}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, isRepresentative: e.target.checked })}
                  className="rounded text-[#4B142D]"
                />
                <span className="text-[#71384F]">
                  Flag as Representative Styling Concept (Uncheck if actual Sweet Creations work)
                </span>
              </label>

              <button
                type="submit"
                className="px-5 py-2 bg-[#4B142D] text-white uppercase tracking-wider font-semibold rounded hover:bg-[#71384F]"
              >
                Add Image to Gallery
              </button>
            </div>
          </form>

          {/* Current Gallery Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#F7E9E5] p-4 flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="relative aspect-video rounded overflow-hidden bg-[#F7E9E5]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => deleteGalleryItem(item.id)}
                      className="p-1.5 bg-rose-600 text-white rounded-full hover:bg-rose-700 shadow-sm"
                      title="Delete image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#C69A59] block">
                    {item.category} {item.isRepresentative ? '(Representative)' : '(Verified Work)'}
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#4B142D]">{item.title}</h4>
                  <p className="text-[11px] text-[#71384F] line-clamp-2">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: PACKAGES */}
      {activeTab === 'packages' && (
        <div className="space-y-6">
          <h2 className="font-heading text-xl font-bold text-[#4B142D]">
            Celebration Package Configurations
          </h2>
          <div className="space-y-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white p-6 rounded-xl border border-[#F7E9E5] space-y-3 shadow-xs text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-[#4B142D]">{pkg.title}</h3>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pkg.isPublished}
                      onChange={(e) => {
                        updatePackage({ ...pkg, isPublished: e.target.checked });
                        triggerSaveToast();
                      }}
                      className="rounded text-[#4B142D]"
                    />
                    <span className={pkg.isPublished ? 'text-emerald-700 font-semibold' : 'text-slate-400'}>
                      {pkg.isPublished ? 'Active' : 'Hidden'}
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#71384F] font-medium mb-1">Subtitle</label>
                    <input
                      type="text"
                      value={pkg.subtitle}
                      onChange={(e) => updatePackage({ ...pkg, subtitle: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[#71384F] font-medium mb-1">Ideal For</label>
                    <input
                      type="text"
                      value={pkg.idealFor}
                      onChange={(e) => updatePackage({ ...pkg, idealFor: e.target.value })}
                      className="w-full px-2.5 py-1.5 border border-[#D9A0A5]/60 rounded text-xs"
                    />
                  </div>
                </div>

                <button
                  onClick={triggerSaveToast}
                  className="px-4 py-1.5 bg-[#4B142D] text-white text-xs font-semibold rounded hover:bg-[#71384F]"
                >
                  Save Package Updates
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: STUDIO SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#F7E9E5] space-y-6 max-w-2xl text-xs">
          <div>
            <h2 className="font-heading text-xl font-bold text-[#4B142D]">
              Studio Business & Contact Channels
            </h2>
            <p className="text-[#71384F] mt-1">
              Configure real telephone numbers, email dispatch addresses, and service area radiuses.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-[#4B142D] mb-1">
                WhatsApp Phone Number (E.164 format with country code)
              </label>
              <input
                type="text"
                value={businessInfo.whatsappNumber}
                onChange={(e) => updateBusinessInfo({ ...businessInfo, whatsappNumber: e.target.value })}
                placeholder="+61400000000"
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded font-mono outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-[#4B142D] mb-1">
                Business Contact Email
              </label>
              <input
                type="email"
                value={businessInfo.email}
                onChange={(e) => updateBusinessInfo({ ...businessInfo, email: e.target.value })}
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-[#4B142D] mb-1">
                Service Delivery Area
              </label>
              <input
                type="text"
                value={businessInfo.serviceArea}
                onChange={(e) => updateBusinessInfo({ ...businessInfo, serviceArea: e.target.value })}
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-[#4B142D] mb-1">
                Instagram Handle
              </label>
              <input
                type="text"
                value={businessInfo.instagramHandle}
                onChange={(e) => updateBusinessInfo({ ...businessInfo, instagramHandle: e.target.value })}
                className="w-full px-3 py-2 border border-[#D9A0A5]/60 rounded outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={triggerSaveToast}
                className="px-6 py-2.5 bg-[#4B142D] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#71384F]"
              >
                Save Business Information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: BACKEND INTEGRATION ARCHITECTURE */}
      {activeTab === 'backend' && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#F7E9E5] space-y-6 text-xs text-[#71384F] leading-relaxed">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#C69A59] font-bold">
              Engineering Handoff
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#4B142D]">
              Backend Integration Architecture Guide
            </h2>
          </div>

          <div className="p-4 bg-[#FFF9F6] border-l-4 border-[#C69A59] rounded space-y-2">
            <p className="font-semibold text-[#4B142D]">
              Ready for Zero-Friction Cloud Deployment (Supabase / Firebase / Node Express)
            </p>
            <p>
              The frontend is built with strict boundary separation. Every data model (services, enquiries, packages, gallery items) is typed in <code className="bg-white px-1 py-0.5 border">src/types/index.ts</code>.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#4B142D]">
              1. Persistent Database (Supabase PostgreSQL / Cloud SQL)
            </h3>
            <p>
              To replace the browser localStorage layer with Supabase, provision a Supabase project and create two tables:
            </p>
            <pre className="bg-[#4B142D] text-[#FFF9F6] p-4 rounded-lg font-mono text-[11px] overflow-x-auto">
{`-- Enquiries Table
create table quote_enquiries (
  id text primary key,
  created_at timestamptz default now(),
  status text default 'new',
  customer_info jsonb not null,
  event_info jsonb not null,
  selected_services text[] not null,
  service_details jsonb,
  reference_photos jsonb,
  additional_notes text
);

-- Row Level Security (RLS)
alter table quote_enquiries enable row level security;
create policy "Public insert quote" on quote_enquiries for insert with check (true);
create policy "Admin read quotes" on quote_enquiries for select using (auth.role() = 'authenticated');`}
            </pre>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#4B142D]">
              2. Transactional Email Dispatch (Resend / SendGrid / NodeMailer)
            </h3>
            <p>
              Add an Express server endpoint or Supabase Edge Function to dispatch quote notification emails to both the client and the studio owner:
            </p>
            <pre className="bg-[#4B142D] text-[#FFF9F6] p-4 rounded-lg font-mono text-[11px] overflow-x-auto">
{`// Example Resend dispatch
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'quotes@sweetcreationsstudio.com',
  to: [enquiry.customer.email, process.env.STUDIO_OWNER_EMAIL],
  subject: \`Quote Enquiry #\${enquiry.id} Received - Sweet Creations\`,
  html: renderQuoteTemplate(enquiry)
});`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
