'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'SEO Service', href: '/services/seo' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'GMB Service', href: '/services/gmb' },
    { label: 'Content Marketing', href: '/services/content-marketing' },
    { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { label: 'Google Ads', href: '/services/google-ads' },
  ];

  const caseStudyGroups = [
    {
      category: 'SEO',
      links: [
        { label: 'Restaurant (Morrisville, NC)', href: '/case-studies/seo-restaurant-morrisville' },
        { label: 'Physical Therapy / Healthcare', href: '/case-studies/seo-healthcare-physical-therapy' },
        { label: 'Home Energy & HVAC', href: '/case-studies/seo-home-energy-hvac' },
      ],
    },
    {
      category: 'Google Ads',
      links: [
        { label: 'Healthcare (Raleigh, NC)', href: '/case-studies/google-ads-healthcare-raleigh' },
        { label: 'E-commerce (23.4x ROAS)', href: '/case-studies/google-ads-ecommerce' },
        { label: 'Legal Services', href: '/case-studies/google-ads-legal-services' },
      ],
    },
    {
      category: 'Meta Ads',
      links: [
        { label: 'Real Estate Training', href: '/case-studies/meta-ads-real-estate-training' },
        { label: 'Food & Tiffin Services', href: '/case-studies/meta-ads-food-tiffin-services' },
        { label: 'Real Estate Auction', href: '/case-studies/meta-ads-real-estate-auction' },
      ],
    },
    {
      category: 'Google Business Profile',
      links: [
        { label: 'HVAC Services', href: '/case-studies/gbp-hvac-services' },
      ],
    },
  ];

  const industryLinks = [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Restaurant', href: '/industries/restaurant' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Ecommerce', href: '/industries/ecommerce' },
    { label: 'Local Service Business', href: '/industries/local-service' },
    { label: 'Legal Services & Law Firms', href: '/industries/legal-services' },
    { label: 'Education & Coaching', href: '/industries/education' },
    { label: 'Fashion & Lifestyle', href: '/industries/fashion' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="tel:+18557500568" className="top-bar-item">
              <Phone size={14} />
              <span>+1 855-750-0568</span>
            </a>
            <a href="mailto:info@mdastra.com" className="top-bar-item">
              <Mail size={14} />
              <span>info@mdastra.com</span>
            </a>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-item">
              <Clock size={14} />
              <span>Working Hours: 9:00 - 6:00 Mon - Fri</span>
            </div>
            <div className="top-bar-socials">
              <a href="https://www.facebook.com/MDAstra555" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
              <a href="https://www.instagram.com/mdastra555" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://x.com/MdAstra1" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@MdAstra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/md-astra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <Link href="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
            <img src="/logo.png" alt="" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-name">MDASTRA</span>
              <span className="logo-tagline">Your Partner in Progress</span>
            </div>
          </Link>

          <nav className="nav-desktop">
            <Link href="/" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-link nav-dropdown-trigger">
                Services
                <ChevronDown size={16} className={`chevron ${isServicesOpen ? 'open' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="dropdown-item"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Case Studies Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <button className="nav-link nav-dropdown-trigger">
                Case Studies
                <ChevronDown size={16} className={`chevron ${isCaseStudiesOpen ? 'open' : ''}`} />
              </button>

              <AnimatePresence>
                {isCaseStudiesOpen && (
                  <motion.div
                    className="dropdown-menu dropdown-menu--grouped"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {caseStudyGroups.map((group) => (
                      <div key={group.category} className="dropdown-group">
                        <span className="dropdown-group-label">{group.category}</span>
                        {group.links.map((study) => (
                          <Link
                            key={study.href}
                            href={study.href}
                            className="dropdown-item"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                          >
                            {study.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="nav-link nav-dropdown-trigger">
                Industries
                <ChevronDown size={16} className={`chevron ${isIndustriesOpen ? 'open' : ''}`} />
              </button>

              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {industryLinks.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="dropdown-item"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                      >
                        {industry.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
              Contact Us
            </Link>
            <a href="https://booking.mdastra.com/Consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
              Book an Appointment
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  className="mobile-nav-link mobile-dropdown-trigger"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown size={16} className={`chevron ${isMobileServicesOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      className="mobile-dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="mobile-dropdown-item"
                          onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Case Studies Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
              >
                <button
                  className="mobile-nav-link mobile-dropdown-trigger"
                  onClick={() => setIsMobileCaseStudiesOpen(!isMobileCaseStudiesOpen)}
                >
                  Case Studies
                  <ChevronDown size={16} className={`chevron ${isMobileCaseStudiesOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileCaseStudiesOpen && (
                    <motion.div
                      className="mobile-dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {caseStudyGroups.map((group) => (
                        <div key={group.category} className="mobile-dropdown-group">
                          <span className="mobile-dropdown-group-label">{group.category}</span>
                          {group.links.map((study) => (
                            <Link
                              key={study.href}
                              href={study.href}
                              className="mobile-dropdown-item"
                              onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                            >
                              {study.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Industries Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.05 }}
              >
                <button
                  className="mobile-nav-link mobile-dropdown-trigger"
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                >
                  Industries
                  <ChevronDown size={16} className={`chevron ${isMobileIndustriesOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileIndustriesOpen && (
                    <motion.div
                      className="mobile-dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {industryLinks.map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          className="mobile-dropdown-item"
                          onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                        >
                          {industry.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <Link
                href="/contact"
                className="mobile-nav-link"
                style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              >
                Contact Us
              </Link>

              <a href="https://booking.mdastra.com/Consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-cta" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
                Book an Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
