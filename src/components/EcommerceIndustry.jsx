'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ShoppingCart,
  Search,
  Facebook,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Users,
  Shield,
  Award,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Mail
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './EcommerceIndustry.css';

const EcommerceIndustry = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const helpsRef = useRef(null);
  const whyRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const helpsInView = useInView(helpsRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const services = [
    {
      icon: Search,
      title: 'Google Ads & Shopping (GMC)',
      items: [
        'Google Search Ads for high-intent buyers',
        'Google Shopping & Performance Max campaigns',
        'Google Merchant Center setup & feed optimization',
        'ROAS-focused ecommerce campaign structuring'
      ]
    },
    {
      icon: Facebook,
      title: 'Meta Ads for Ecommerce',
      items: [
        'Facebook & Instagram sales campaigns',
        'Catalog ads & dynamic retargeting',
        'Funnel-based prospecting and remarketing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Ecommerce SEO & Product Visibility',
      items: [
        'Category & product page SEO',
        'Search-intent keyword targeting',
        'Content-driven organic traffic growth'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Website & Conversion Rate Optimization (CRO)',
      items: [
        'Ecommerce UX/UI optimization',
        'Product page conversion improvements',
        'Checkout flow optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics, Attribution & Performance Tracking',
      items: [
        'Purchase & revenue tracking',
        'ROAS, CAC & LTV insights',
        'Funnel and attribution reporting'
      ]
    },
    {
      icon: Mail,
      title: 'Email & SMS Marketing',
      items: [
        'Automated welcome and abandoned cart sequences',
        'Post-purchase upsell and cross-sell flows',
        'Segmented promotional campaigns for repeat revenue'
      ]
    }
  ];

  const framework = [
    {
      step: '01',
      title: 'Buyer Intent & Market Analysis',
      description: 'We analyze how customers discover, compare, and purchase products—mapping campaigns to real buying behavior.'
    },
    {
      step: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We design the right mix of Google Search, Shopping, Performance Max, Meta Ads, SEO, and email-ready funnels.'
    },
    {
      step: '03',
      title: 'Conversion & Offer Optimization',
      description: 'Product pages, pricing, offers, and creatives are optimized to improve conversion rates and average order value.'
    },
    {
      step: '04',
      title: 'Retargeting & Customer Nurturing',
      description: 'We implement remarketing strategies to convert warm traffic and increase repeat purchases.'
    },
    {
      step: '05',
      title: 'Measurement, Optimization & Scaling',
      description: 'We track revenue, ROAS, and profit—scaling what works and cutting inefficiencies.'
    },
    {
      step: '06',
      title: 'Customer Retention & Lifetime Value Growth',
      description: 'We implement loyalty programs, email flows, and re-engagement strategies to maximize customer lifetime value and repeat purchases.'
    }
  ];

  const helps = [
    'Increasing online sales and revenue',
    'Improving ROAS and lowering acquisition costs',
    'Scaling profitable campaigns across platforms',
    'Building brand trust and repeat customers',
    'Reducing reliance on single-channel traffic',
    'Growing customer lifetime value through retention and loyalty'
  ];

  const problems = [
    'Drives traffic but low sales',
    'Has rising ad costs and declining ROAS',
    'Lacks proper tracking and attribution',
    'Isn\'t optimized for conversion'
  ];

  const whyChoose = [
    {
      icon: Target,
      title: 'Ecommerce-Specific Growth Expertise',
      description: 'Proven strategies for product-based and DTC brands.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue & ROAS-Focused Execution',
      description: 'Every decision is tied to sales, profit, and scalability.'
    },
    {
      icon: Zap,
      title: 'Paid + Organic Channel Alignment',
      description: 'Google Ads, Shopping, Meta Ads, SEO, and CRO working together.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Tracking & Attribution',
      description: 'Clear visibility into revenue, ROAS, and performance drivers.'
    },
    {
      icon: Users,
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts focused on long-term ecommerce success.'
    },
    {
      icon: Award,
      title: 'Full-Funnel Retention & Loyalty Strategy',
      description: 'Beyond acquisition—we build systems for repeat purchases and long-term customer value.'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with Shopify and WooCommerce stores?',
      answer: 'Yes. MD Astra supports Shopify, WooCommerce, and custom ecommerce platforms.'
    },
    {
      question: 'Can you manage Google Merchant Center and Shopping Ads?',
      answer: 'Absolutely. GMC setup, feed optimization, and Shopping campaigns are a core strength.'
    },
    {
      question: 'How quickly can ecommerce ads generate sales?',
      answer: 'Paid campaigns can generate sales within days to weeks, with performance improving through optimization.'
    },
    {
      question: 'Do you help improve conversion rates?',
      answer: 'Yes. We optimize product pages, funnels, and checkout flows to increase conversions.'
    },
    {
      question: 'Do you focus on ROAS or revenue?',
      answer: 'We focus on profitable growth, balancing ROAS, CAC, and long-term scalability.'
    },
    {
      question: 'Do you help with email and SMS marketing for ecommerce?',
      answer: 'Yes. We set up automated email and SMS flows including abandoned cart recovery, post-purchase sequences, and promotional campaigns to drive repeat revenue.'
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

  const ecommerceValueProps = [
    {
      icon: Target,
      title: 'Targeted ROAS',
      desc: 'High-intent buyer targeting'
    },
    {
      icon: TrendingUp,
      title: 'Scale Revenue',
      desc: 'Grow sales and profit margins'
    },
    {
      icon: BarChart3,
      title: 'Attribution',
      desc: 'Clear tracking of CAC and LTV'
    }
  ];

  return (
    <div className="ecommerce-industry">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Ecommerce Digital Marketing & <span className="text-gradient">Growth Partner</span>
          </>
        }
        valueProps={ecommerceValueProps}
        formTitle="Get Your Free Ecommerce Marketing Audit"
        formSubtitle="Built to Scale Revenue, Improve ROAS & Drive Profitable Growth"
        formName="Ecommerce Marketing Consultation"
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
      <section className="section section-alt ecommerce-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Ecommerce Marketing Services <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="ecommerce-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="ecommerce-service-card"
                variants={cardVariants}
              >
                <div className="ecommerce-service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="ecommerce-service-title">{service.title}</h3>
                <ul className="ecommerce-service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <ArrowRight size={14} />
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
      <section className="section ecommerce-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Ecommerce <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>
              From Product Discovery to Repeat Purchases. MD Astra executes ecommerce marketing through a structured growth framework designed to maximize both short-term sales and long-term brand value.
            </p>
          </motion.div>

          <motion.div
            className="ecommerce-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {framework.map((step, index) => (
              <motion.div
                key={index}
                className="ecommerce-framework-card"
                variants={cardVariants}
              >
                <div className="ecommerce-framework-step">{step.step}</div>
                <h3 className="ecommerce-framework-title">{step.title}</h3>
                <p className="ecommerce-framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How MD Astra Helps Section */}
      <section className="section section-alt ecommerce-helps" ref={helpsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={helpsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              How MD Astra Helps <span className="text-gradient">Ecommerce Brands Grow</span>
            </h2>
            <p>
              Effective ecommerce marketing connects <strong>demand with conversion and retention</strong>.
            </p>
          </motion.div>

          <motion.div
            className="ecommerce-helps-content"
            initial={{ opacity: 0, y: 30 }}
            animate={helpsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ecommerce-helps-section">
              <h3 className="ecommerce-helps-heading">MD Astra helps ecommerce brands by:</h3>
              <ul className="ecommerce-helps-list ecommerce-helps-list-positive">
                {helps.map((help, index) => (
                  <li key={index}>
                    <Shield size={20} />
                    <span>{help}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ecommerce-helps-section">
              <h3 className="ecommerce-helps-heading">If your ecommerce marketing:</h3>
              <ul className="ecommerce-helps-list ecommerce-helps-list-problems">
                {problems.map((problem, index) => (
                  <li key={index}>
                    <ArrowRight size={20} />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="ecommerce-helps-tagline">Then it's not built for growth.</p>
              <p className="ecommerce-helps-conclusion">
                MD Astra builds ecommerce marketing systems that <strong>turn clicks into customers and customers into revenue</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section ecommerce-why" ref={whyRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Us</span>
            <h2 className="heading-lg">
              Why Ecommerce Brands <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="ecommerce-why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="ecommerce-why-card"
                variants={cardVariants}
              >
                <div className="ecommerce-why-icon">
                  <item.icon size={24} />
                </div>
                <h3 className="ecommerce-why-title">{item.title}</h3>
                <p className="ecommerce-why-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt ecommerce-faq" ref={faqRef}>
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
            <p>Ecommerce Marketing</p>
          </motion.div>

          <motion.div
            className="ecommerce-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`ecommerce-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="ecommerce-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="ecommerce-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="ecommerce-faq-question">{faq.question}</span>
                  <span className="ecommerce-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="ecommerce-faq-content"
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
            Ready to Scale Your <span className="text-gradient">Ecommerce Brand?</span>
          </>
        }
        subtext="If you want predictable revenue growth, better ROAS, and a marketing partner who understands ecommerce, MD Astra is ready to help."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default EcommerceIndustry;
