import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { services } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Packages', path: '/packages' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#D9A0A5]/30 py-1'
          : 'bg-[#FFF9F6] border-b border-[#F7E9E5] py-1.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#4B142D] rounded-xs"
            aria-label="Sweet Creations Home"
          >
            <Logo size="md" variant="plum" />
          </Link>

          {/* Zone 2: Navigation Links (Single-Line, 4-5 items) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#71384F]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services'));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#4B142D] ${
                        isActive ? 'text-[#4B142D] font-semibold border-b-2 border-[#C69A59]' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown Flyout */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-[#F7E9E5] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-4 py-2 border-b border-[#F7E9E5]">
                          <span className="text-xs uppercase tracking-wider text-[#C69A59] font-medium">
                            Our Bespoke Offerings
                          </span>
                        </div>
                        <div className="max-h-80 overflow-y-auto py-1">
                          {services
                            .filter((s) => s.isPublished)
                            .map((srv) => (
                              <Link
                                key={srv.id}
                                to={`/services/${srv.slug}`}
                                className="block px-4 py-2 text-xs text-[#4B142D] hover:bg-[#F7E9E5]/60 transition-colors"
                              >
                                <p className="font-medium text-[#4B142D]">{srv.title}</p>
                                <p className="text-[11px] text-[#71384F] truncate">{srv.tagline}</p>
                              </Link>
                            ))}
                        </div>
                        <div className="border-t border-[#F7E9E5] pt-1 px-4 pb-2">
                          <Link
                            to="/services"
                            className="text-xs font-semibold text-[#71384F] hover:text-[#4B142D] flex items-center justify-between"
                          >
                            <span>View All Services</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#4B142D] ${
                    isActive ? 'text-[#4B142D] font-semibold border-b-2 border-[#C69A59]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/quote"
              className="px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#4B142D] rounded-md hover:bg-[#71384F] transition-colors whitespace-nowrap shrink-0 shadow-xs active:scale-95"
            >
              Request Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F6] border-b border-[#D9A0A5]/30 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-base font-medium py-1.5 px-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md"
            >
              Home
            </Link>

            <div>
              <div className="flex items-center justify-between py-1.5 px-2 text-[#4B142D] font-medium">
                <Link to="/services">Services</Link>
                <span className="text-xs text-[#71384F] uppercase tracking-wider">All Offerings</span>
              </div>
              <div className="pl-4 mt-1 space-y-1.5 border-l-2 border-[#D9A0A5]/40 ml-2">
                {services
                  .filter((s) => s.isPublished)
                  .map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}`}
                      className="block text-sm py-1 text-[#71384F] hover:text-[#4B142D]"
                    >
                      {srv.title}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              to="/packages"
              className="text-base font-medium py-1.5 px-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md"
            >
              Packages
            </Link>

            <Link
              to="/gallery"
              className="text-base font-medium py-1.5 px-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="text-base font-medium py-1.5 px-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md"
            >
              About Us
            </Link>

            <Link
              to="/faqs"
              className="text-base font-medium py-1.5 px-2 text-[#4B142D] hover:bg-[#F7E9E5] rounded-md"
            >
              FAQs
            </Link>

            <div className="pt-3 border-t border-[#F7E9E5]">
              <Link
                to="/quote"
                className="w-full text-center block py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#4B142D] rounded-md"
              >
                Start Smart Quote Enquiry
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
