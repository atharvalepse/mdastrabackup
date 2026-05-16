'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Zap,
  Monitor,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Award,
  Shield,
  DollarSign,
  Phone,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Gavel,
  Heart,
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import CaseStudies from './CaseStudies';
import './GoogleAds.css';

const googleAdsFeatured = [
  {
    slug: 'google-ads-ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Google Ads',
    industry: 'E-commerce / DTC (Sporting Goods)',
    location: 'National',
    service: 'Google Ads (PPC)',
    color: '#6b21a8',
    colorBg: '#f3e8ff',
    results: [
      { metric: '$525K+', label: 'Revenue Generated' },
      { metric: '23.4x', label: 'Return on Ad Spend' },
    ],
    highlights: [
      'From underperforming to $23.40 for every $1 spent',
      'Built a scalable, repeatable revenue framework'
    ]
  },
  {
    slug: 'google-ads-healthcare-raleigh',
    icon: Heart,
    title: 'Healthcare Patient Leads',
    industry: 'Healthcare – Physical Therapy',
    location: 'Raleigh, NC',
    service: 'Google Ads (PPC)',
    color: '#6b21a8',
    colorBg: '#f3e8ff',
    results: [
      { metric: '81', label: 'Qualified Leads' },
      { metric: '$3.75', label: 'Average CPC' },
    ],
    highlights: [
      'CTR up to 23% on high-intent keyword groups',
      'Cost per conversion as low as $14'
    ]
  },
  {
    slug: 'google-ads-legal-services',
    icon: Gavel,
    title: 'Legal Services Google Ads',
    industry: 'Legal Services',
    location: 'Local / Regional',
    service: 'Google Ads (PPC)',
    color: '#6b21a8',
    colorBg: '#f3e8ff',
    results: [
      { metric: '108', label: 'Qualified Leads (30 Days)' },
      { metric: '108x', label: 'Lead Volume Increase' },
    ],
    highlights: [
      'Scaled from 1 lead to 108 in just 30 days',
      'High-intent targeting for family & business law'
    ]
  },
];

const GoogleAds = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const services = [
    {
      icon: Search,
      title: 'Search Ads (High-Intent Buyer Traffic)',
      items: [
        'Keyword targeting based on buyer intent',
        'Service, product & location-based campaigns',
        'Call-focused and lead-generation campaigns',
        'Competitor & branded search strategies'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Google Shopping & Merchant Center (GMC)',
      items: [
        'Google Merchant Center setup & optimization',
        'Product feed optimization for performance',
        'Standard Shopping & Performance Max for ecommerce',
        'ROAS-focused campaign structuring'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Max (PMax) Campaigns',
      items: [
        'Full-funnel PMax strategy',
        'Asset group & creative optimization',
        'Audience signals & intent layering',
        'Conversion-focused scaling'
      ]
    },
    {
      icon: Monitor,
      title: 'Display, Discovery & YouTube Ads',
      items: [
        'Retargeting & remarketing campaigns',
        'Awareness-to-conversion nurture flows',
        'Cross-channel visibility & demand capture'
      ]
    },
    {
      icon: BarChart3,
      title: 'Conversion Tracking & Analytics',
      items: [
        'GA4, Google Ads & call tracking setup',
        'Form, call, booking & purchase attribution',
        'Performance dashboards & ROI reporting'
      ]
    },
    {
      icon: DollarSign,
      title: 'Budget & Bid Strategy Management',
      items: [
        'Smart bidding & manual bid optimization',
        'Budget allocation across campaign types',
        'Seasonal & competitive bid adjustments',
        'Spend efficiency & waste reduction'
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Buyer Intent & Market Analysis',
      description: 'We analyze how customers search, compare, and convert—mapping keywords and campaign types to real buying behavior.'
    },
    {
      step: '02',
      title: 'Campaign Architecture & Funnel Design',
      description: 'Campaigns are structured by intent level (high, mid, low), service or product category, location, and conversion goal.'
    },
    {
      step: '03',
      title: 'Landing Page & Conversion Alignment',
      description: 'Ads are aligned with conversion-optimized landing pages to improve Quality Score, reduce CPC, and increase conversion rates.'
    },
    {
      step: '04',
      title: 'Continuous Optimization & Testing',
      description: 'Bids, keywords, creatives, audiences, and placements are tested and refined continuously to improve performance.'
    },
    {
      step: '05',
      title: 'ROI Tracking & Performance Scaling',
      description: 'We track cost-per-lead, cost-per-sale, ROAS, and revenue—then scale what works and eliminate waste.'
    },
    {
      step: '06',
      title: 'Budget Reallocation & Growth Expansion',
      description: 'We reallocate budget from underperforming campaigns to top performers and expand into new keywords, audiences, and campaign types for continued growth.'
    }
  ];

  const benefits = [
    'Capturing customers actively searching for products or services',
    'Generating immediate leads and sales',
    'Scaling predictable growth faster than organic alone',
    'Supporting ecommerce revenue through Shopping & PMax',
    'Providing clear, trackable ROI',
    'Outpacing competitors with data-backed bidding and targeting strategies'
  ];

  const painPoints = [
    'Drive clicks but not conversions',
    'Spend budget without clear ROI',
    "Aren't structured by intent",
    'Lack proper tracking or optimization'
  ];

  const whyChoosePoints = [
    {
      icon: Target,
      title: 'Intent-Driven Campaign Strategy',
      description: 'Built around how real buyers search, compare, and convert.'
    },
    {
      icon: Award,
      title: 'Certified Google Partner Expertise',
      description: 'Platform-approved execution across Search, Shopping, PMax, Display, and YouTube.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion & Revenue Focused',
      description: 'Optimized for leads, sales, bookings, and ROAS—not impressions.'
    },
    {
      icon: Users,
      title: 'Ecommerce & Lead Generation Specialists',
      description: 'Proven frameworks for both service businesses and ecommerce brands.'
    },
    {
      icon: Shield,
      title: 'Transparent Reporting & ROI Visibility',
      description: 'Clear insights into spend, performance, and revenue impact.'
    },
    {
      icon: DollarSign,
      title: 'Budget Efficiency & Waste Elimination',
      description: 'Every dollar is optimized through strategic bidding, negative keywords, and continuous refinement.'
    }
  ];

  const faqs = [
    {
      question: 'What types of Google Ads campaigns do you manage?',
      answer: 'MD Astra manages Search, Shopping, Performance Max, Display, Discovery, YouTube, and Remarketing campaigns.'
    },
    {
      question: 'Do you work with Google Merchant Center?',
      answer: 'Yes. We handle Google Merchant Center setup, feed optimization, and Shopping campaign management.'
    },
    {
      question: 'How quickly can Google Ads generate results?',
      answer: 'Google Ads can generate leads and sales within days to weeks, with performance improving as data and optimization mature.'
    },
    {
      question: 'Do you provide landing pages for Google Ads?',
      answer: 'Yes. We often build or optimize conversion-focused landing pages to improve Quality Score and ROI.'
    },
    {
      question: 'Is Google Ads suitable for local businesses?',
      answer: 'Absolutely. Google Ads is highly effective for local service businesses, especially when combined with call tracking and local intent targeting.'
    },
    {
      question: 'How do you manage Google Ads budgets?',
      answer: 'We continuously monitor spend efficiency, reallocate budgets to top-performing campaigns, and eliminate wasted spend through negative keywords and bid optimization.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const googleAdsValueProps = [
    {
      icon: Search,
      title: 'Intent-Driven Campaign Strategy',
      desc: 'Built around how real buyers search & convert'
    },
    {
      icon: TrendingUp,
      title: 'Conversion & Revenue Focused',
      desc: 'Optimized for leads, sales, bookings & ROAS'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting & ROI Visibility',
      desc: 'Clear insights into spend, performance & revenue'
    }
  ];

  const googleAdsStats = [
    { number: '23.4x', label: 'Return on Ad Spend' },
    { number: '$525K+', label: 'Revenue Generated' },
    { number: '500+', label: 'Clients Served' },
  ];

  return (
    <div className="google-ads-page">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            High-Intent Traffic. Qualified Leads.{' '}
            <span className="text-gradient">Measurable Revenue.</span>
          </>
        }
        valueProps={googleAdsValueProps}
        formTitle="Get Your Free Google Ads Audit"
        formSubtitle="Google Ads Built Around Buyer Intent — Not Guesswork"
        formName="Google Ads Consultation"
        stats={googleAdsStats}
        primaryCta={{
          href: 'https://booking.mdastra.com/Consultation',
          label: 'Book a Free Google Ads Strategy Call',
        }}
        secondaryCta={{
          href: 'tel:+18557500568',
          label: 'Contact Us: +1 855-750-0568',
        }}
      />

      <CaseStudies featured={googleAdsFeatured} />

      {/* What We Do - Services Section */}
      <section className="section section-alt google-ads-services" id="services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Do</span>
            <h2 className="heading-lg">
              Full-Scope Google Ads Services{' '}
              <span className="text-gradient">Focused on Performance</span>
            </h2>
          </motion.div>

          <motion.div
            className="google-ads-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="google-ads-service-card"
                variants={cardVariants}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-items">
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

      {/* Mid-Page CTA #2 — after services */}
      <ServicePageCTA
        heading={
          <>
            Every Click Should Drive <span className="text-gradient">Real Revenue</span>
          </>
        }
        subtext="MD Astra builds Google Ads campaigns around buyer intent — not guesswork. Get a free audit and see exactly where your budget is being wasted."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Get a Free Google Ads Audit' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />

      {/* Growth Framework Section */}
      <section className="section google-ads-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Approach</span>
            <h2 className="heading-lg">
              Our Google Ads{' '}
              <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>
              Built to Capture Intent, Convert Demand & Scale Profitably. MD Astra executes
              Google Ads using a structured, intent-led framework—ensuring every dollar works
              toward measurable outcomes.
            </p>
          </motion.div>

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
                variants={cardVariants}
              >
                <div className="framework-step">{step.step}</div>
                <h3 className="framework-title">{step.title}</h3>
                <p className="framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt google-ads-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Growth Impact</span>
            <h2 className="heading-lg">
              How Google Ads Helps{' '}
              <span className="text-gradient">Businesses Grow</span>
            </h2>
            <p>
              When executed correctly, Google Ads captures <strong>ready-to-buy demand</strong>.
            </p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefits-card benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="benefits-card-header">
                <div className="benefits-icon benefits-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>Google Ads helps businesses by:</h3>
              </div>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="benefit-check">
                      <CheckCircle2 size={18} />
                    </span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="benefits-card benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="benefits-card-header">
                <div className="benefits-icon benefits-icon-negative">
                  <XCircle size={24} />
                </div>
                <h3>If your Google Ads:</h3>
              </div>
              <ul className="benefits-list benefits-list-negative">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="benefit-x">
                      <XCircle size={18} />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="benefits-conclusion">
                <p>Then they're not built for growth.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="benefits-cta-box"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              MD Astra builds Google Ads campaigns that{' '}
              <strong>turn search intent into revenue</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose MD Astra Section */}
      <section className="section google-ads-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Businesses Choose MD Astra{' '}
              <span className="text-gradient">for Google Ads</span>
            </h2>
          </motion.div>

          <motion.div
            className="why-choose-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                variants={cardVariants}
              >
                <div className="why-choose-icon">
                  <point.icon size={24} />
                </div>
                <h3 className="why-choose-title">{point.title}</h3>
                <p className="why-choose-description">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt google-ads-faq" ref={faqRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Got Questions?</span>
            <h2 className="heading-lg">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p>Google Ads Services</p>
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
                className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFaqIndex === index}
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
                  {openFaqIndex === index && (
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
      <section className="section google-ads-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="google-ads-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              Ready to Turn Search Intent{' '}
              <span className="text-gradient">into Revenue?</span>
            </h2>
            <p>
              If you want Google Ads that are built for <strong>conversions, efficiency,
              and scalable growth</strong>, MD Astra is ready to lead your paid search strategy.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              <Phone size={20} />
              Book a Free Google Ads Strategy Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA #3 — Contact Form */}
      <Contact />
    </div>
  );
};

export default GoogleAds;
