'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Search,
  MapPin,
  Share2,
  Globe,
  Database,
  Users,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  Award,
  Phone,
  Calendar,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Home,
  FileText,
  BarChart3,
  Mail
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './RealEstateIndustry.css';

const RealEstateIndustry = () => {
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyRef = useRef(null);
  const faqRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const [openFAQ, setOpenFAQ] = useState(0);

  const services = [
    {
      icon: Search,
      title: 'Seller & Buyer Lead Generation',
      items: [
        'Google Ads for high-intent buyer and seller searches',
        'Meta Ads for listings, home valuation, and lead magnets',
        'Call- and form-focused campaigns'
      ]
    },
    {
      icon: MapPin,
      title: 'Local SEO & Google Maps Visibility',
      items: [
        '"Realtor near me" and city-based keyword targeting',
        'Google Business Profile optimization',
        'Local landing pages for buyer and seller intent'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Marketing & Content',
      items: [
        'Instagram & Facebook content for brand authority',
        'Listing promotions & community content',
        'Reels and video content for reach and engagement'
      ]
    },
    {
      icon: Globe,
      title: 'Website & Landing Pages for Conversion',
      items: [
        'Real estate websites optimized for lead capture',
        'Seller and buyer landing pages',
        'Home valuation & consultation funnels'
      ]
    },
    {
      icon: Database,
      title: 'CRM, Tracking & Lead Quality Optimization',
      items: [
        'Call, form & lead tracking',
        'CRM-ready integrations',
        'Lead quality and ROI reporting'
      ]
    },
    {
      icon: Mail,
      title: 'Email Drip Campaigns & Lead Nurturing',
      items: [
        'Automated follow-up sequences for new leads',
        'Market update and listing alert emails',
        'Drip campaigns for long-term buyer and seller nurturing'
      ]
    }
  ];

  const frameworkSteps = [
    {
      number: '01',
      icon: Target,
      title: 'Local Market & Intent Analysis',
      description: 'We analyze your local market, competition, and how buyers and sellers search—by city, price range, and intent.'
    },
    {
      number: '02',
      icon: BarChart3,
      title: 'Channel Strategy & Funnel Design',
      description: 'We design a channel mix across Google Search, Maps, Meta Ads, social media, and websites to capture demand at every stage.'
    },
    {
      number: '03',
      icon: Shield,
      title: 'Authority & Trust Building',
      description: 'Real estate decisions are trust-driven. We build credibility through reviews, content, listings, and consistent brand presence.'
    },
    {
      number: '04',
      icon: Users,
      title: 'Conversion & Lead Nurturing',
      description: 'Campaigns are optimized to generate quality inquiries, not low-intent leads, supporting longer decision cycles.'
    },
    {
      number: '05',
      icon: TrendingUp,
      title: 'Measurement, Optimization & Scaling',
      description: 'We track cost per lead, lead quality, and pipeline impact—scaling what produces listings and closings.'
    },
    {
      number: '06',
      icon: Calendar,
      title: 'Retention & Referral Growth',
      description: 'We help build lasting client relationships through email nurturing, review generation, and referral systems that drive repeat business and word-of-mouth growth.'
    }
  ];

  const benefits = [
    'Generating more seller and buyer inquiries',
    'Reducing dependency on third-party platforms like Zillow',
    'Improving visibility in competitive local markets',
    'Building long-term personal and brand authority',
    'Creating predictable lead pipelines',
    'Leveraging virtual tours and video to engage remote buyers'
  ];

  const challenges = [
    'Generates low-quality leads',
    'Relies heavily on paid portals',
    'Lacks consistent branding and strategy',
    'Doesn\'t track ROI clearly'
  ];

  const reasons = [
    {
      icon: Home,
      title: 'Real Estate–Specific Growth Expertise',
      description: 'Strategies built specifically for buyers, sellers, and local markets.'
    },
    {
      icon: Award,
      title: 'Lead Quality Over Lead Volume',
      description: 'Focused on motivated prospects—not cheap, unqualified leads.'
    },
    {
      icon: TrendingUp,
      title: 'Paid + Organic Marketing Alignment',
      description: 'Google Ads, Meta Ads, SEO, GMB, and content working together.'
    },
    {
      icon: Target,
      title: 'Conversion & Pipeline Focus',
      description: 'Optimized for appointments, listings, and long-term pipeline health.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting & ROI Tracking',
      description: 'Clear visibility into lead performance and growth impact.'
    },
    {
      icon: FileText,
      title: 'Content & Neighborhood Marketing',
      description: 'Hyper-local content strategies that position you as the go-to expert in your target markets.'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with individual agents and brokerages?',
      answer: 'Yes. MD Astra supports solo agents, teams, and full brokerages.'
    },
    {
      question: 'Can you help generate seller leads?',
      answer: 'Absolutely. Seller lead generation is a core focus, including home valuation and consultation funnels.'
    },
    {
      question: 'Do you manage social media for real estate?',
      answer: 'Yes. We handle organic and paid social media marketing, including listings, reels, and local content.'
    },
    {
      question: 'How soon can real estate marketing generate leads?',
      answer: 'Paid campaigns can generate leads within weeks, while SEO and authority building compound over time.'
    },
    {
      question: 'Do you integrate with CRMs?',
      answer: 'Yes. We integrate campaigns with popular real estate CRMs for seamless lead management.'
    },
    {
      question: 'Do you offer virtual tour and video marketing for listings?',
      answer: 'Yes. We help create and promote virtual tour content and listing videos across social media, ads, and your website to attract remote and local buyers.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const realEstateValueProps = [
    {
      icon: Target,
      title: 'Seller & Buyer Leads',
      desc: 'High-intent real estate targeting'
    },
    {
      icon: TrendingUp,
      title: 'Local Authority',
      desc: 'Build local market dominance'
    },
    {
      icon: BarChart3,
      title: 'ROI Tracking',
      desc: 'Clear visibility into lead performance'
    }
  ];

  return (
    <div className="real-estate-industry">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Real Estate <span className="text-gradient">Digital Marketing</span> & Growth Partner
          </>
        }
        valueProps={realEstateValueProps}
        formTitle="Get Your Free Real Estate Marketing Audit"
        formSubtitle="Built to Generate Seller Leads, Buyer Inquiries & Scalable Growth"
        formName="Real Estate Marketing Consultation"
        primaryCta={{
          href: 'https://booking.mdastra.com/Consultation',
          label: 'Book a Free Strategy Call',
        }}
        secondaryCta={{
          href: 'tel:+18557500568',
          label: 'Contact Us: +1 855-750-0568',
        }}
      />

      {/* Services Section */}
      <section className="section real-estate-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Real Estate Marketing Services <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="section section-alt real-estate-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Real Estate <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>From Online Visibility to Listings & Closings</p>
          </motion.div>

          <motion.p
            className="framework-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            MD Astra executes real estate marketing through a <strong>structured growth framework</strong> designed to support long-term pipeline development.
          </motion.p>

          <motion.div
            className="framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="framework-card"
                variants={itemVariants}
              >
                <div className="framework-number">{step.number}</div>
                <div className="framework-icon">
                  <step.icon size={24} />
                </div>
                <h3 className="framework-title">{step.title}</h3>
                <p className="framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section real-estate-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              How MD Astra Helps <span className="text-gradient">Real Estate Businesses</span> Grow
            </h2>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefits-column"
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="benefits-intro">
                Effective real estate marketing connects <strong>local intent with trust and action</strong>.
              </p>
              <p className="benefits-subheading">MD Astra helps real estate businesses by:</p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="benefits-column"
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="challenges-card">
                <h4>If your real estate marketing:</h4>
                <ul className="challenges-list">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
                <p className="challenges-conclusion">Then it's not built for growth.</p>
              </div>
              <p className="benefits-footer">
                MD Astra builds real estate marketing systems that <strong>turn online interest into signed listings and closed deals</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-alt real-estate-why" ref={whyRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Real Estate Professionals <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="reasons-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="reason-card"
                variants={itemVariants}
              >
                <div className="reason-icon">
                  <reason.icon size={24} />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section real-estate-faq" ref={faqRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Got Questions?</span>
            <h2 className="heading-lg">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p>Real Estate Marketing</p>
          </motion.div>

          <motion.div
            className="faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFAQ === index ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      className="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ServicePageCTA
        heading={
          <>
            Ready to Grow Your <span className="text-gradient">Real Estate Business?</span>
          </>
        }
        subtext="If you want more listings, better lead quality, and predictable growth, MD Astra is ready to be your marketing partner."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default RealEstateIndustry;
