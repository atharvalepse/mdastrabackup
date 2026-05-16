'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Users,
  Globe,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Target,
  Award,
  Shield,
  Clock,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './LocalServiceBusiness.css';

const LocalServiceBusiness = () => {
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
      icon: MapPin,
      title: 'Local SEO & Google Maps Visibility',
      points: [
        '"Service near me" and city-based keyword targeting',
        'Google Business Profile optimization & growth',
        'Local SEO for high-intent searches'
      ]
    },
    {
      icon: Target,
      title: 'Google Ads for Service Businesses',
      points: [
        'Call-focused Search Ads',
        'Emergency and high-intent campaign structuring',
        'Location-based targeting & bid optimization'
      ]
    },
    {
      icon: Users,
      title: 'Social Media & Local Brand Building',
      points: [
        'Organic Facebook & Instagram content',
        'Community-focused engagement',
        'Local promotions and offers'
      ]
    },
    {
      icon: Globe,
      title: 'Website & Conversion Optimization',
      points: [
        'Service-based websites optimized for calls',
        'Landing pages for lead generation',
        'Mobile-first UX for local customers'
      ]
    },
    {
      icon: BarChart3,
      title: 'Tracking, Reporting & Lead Quality Optimization',
      points: [
        'Call tracking & form attribution',
        'Lead quality and cost-per-lead insights',
        'ROI-focused performance reporting'
      ]
    },
    {
      icon: Calendar,
      title: 'Seasonal Campaigns & Customer Retention',
      points: [
        'Seasonal and holiday promotion planning',
        'Email & SMS follow-up sequences for repeat bookings',
        'Customer referral program activation'
      ]
    }
  ];

  const frameworkSteps = [
    {
      number: '01',
      title: 'Local Intent & Market Analysis',
      description: 'We analyze how customers search for services—by urgency, location, and intent—to prioritize the highest-converting opportunities.'
    },
    {
      number: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We design a channel mix across Google Search, Google Maps, Meta Ads, and websites to capture demand at the right moment.'
    },
    {
      number: '03',
      title: 'Trust & Authority Signals',
      description: 'Local service decisions are trust-driven. We strengthen credibility through reviews, consistent branding, and local authority signals.'
    },
    {
      number: '04',
      title: 'Conversion & Call Optimization',
      description: 'Campaigns are optimized to drive phone calls, bookings, and qualified inquiries—not low-quality leads.'
    },
    {
      number: '05',
      title: 'Measurement, Optimization & Scaling',
      description: 'We track call volume, lead quality, and ROI—scaling what generates real revenue.'
    },
    {
      number: '06',
      title: 'Retention, Referrals & Repeat Revenue',
      description: 'We activate follow-up campaigns, referral incentives, and seasonal promotions to maximize lifetime customer value.'
    }
  ];

  const benefits = [
    'Increasing calls and appointment bookings',
    'Outranking competitors in local search results',
    'Reducing dependency on third-party lead platforms',
    'Improving lead quality and conversion rates',
    'Building predictable local demand',
    'Strengthening customer retention and referral rates'
  ];

  const painPoints = [
    'Generates leads but few booked jobs',
    'Depends too much on paid directories',
    'Lacks clear ROI tracking',
    'Isn\'t visible on Google Maps'
  ];

  const whyChooseReasons = [
    {
      icon: Target,
      title: 'Local Intent & Conversion Expertise',
      description: 'Built specifically for service urgency and local demand.'
    },
    {
      icon: Phone,
      title: 'Call & Booking-Focused Strategy',
      description: 'Optimized for phone calls and scheduled appointments.'
    },
    {
      icon: TrendingUp,
      title: 'Paid + Organic Channel Alignment',
      description: 'Google Ads, local SEO, GMB, social, and websites working together.'
    },
    {
      icon: Shield,
      title: 'Transparent Performance & ROI Tracking',
      description: 'Clear visibility into calls, leads, and revenue impact.'
    },
    {
      icon: Award,
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts focused on long-term local growth.'
    },
    {
      icon: Clock,
      title: 'Seasonal & Recurring Campaign Planning',
      description: 'Proactive campaigns aligned to seasonal demand and repeat service cycles.'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with home service businesses?',
      answer: 'Yes. MD Astra supports plumbing, HVAC, electrical, cleaning, and other home service businesses.'
    },
    {
      question: 'Can you help generate more calls?',
      answer: 'Absolutely. Call generation and booking optimization are core focuses of our strategies.'
    },
    {
      question: 'Is local SEO included?',
      answer: 'Yes. Local SEO and Google Business Profile optimization are central to local service marketing.'
    },
    {
      question: 'How fast can local marketing generate results?',
      answer: 'Paid campaigns and Maps optimization can generate results within weeks, while SEO compounds over time.'
    },
    {
      question: 'Do you track call quality?',
      answer: 'Yes. We track call volume, lead quality, and conversion outcomes.'
    },
    {
      question: 'Can you help with seasonal promotions and service area expansion?',
      answer: 'Yes. We plan seasonal campaigns around peak demand periods and help expand your reach into new service areas through targeted local SEO and advertising.'
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

  const lsbValueProps = [
    {
      icon: Target,
      title: 'Local Lead Gen',
      desc: 'High-intent local targeting'
    },
    {
      icon: Phone,
      title: 'Calls & Bookings',
      desc: 'Drive real customer inquiries'
    },
    {
      icon: BarChart3,
      title: 'ROI Tracking',
      desc: 'Clear visibility into lead quality'
    }
  ];

  return (
    <div className="local-service-business">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Local Service Business Digital Marketing & <span className="text-gradient">Growth Partner</span>
          </>
        }
        valueProps={lsbValueProps}
        formTitle="Get Your Free Local Marketing Audit"
        formSubtitle="Built to Drive Calls, Bookings & Consistent Local Demand"
        formName="Local Service Marketing Consultation"
        primaryCta={{
          href: 'https://booking.mdastra.com/Consultation',
          label: 'Book a Free Strategy Call',
        }}
        secondaryCta={{
          href: 'tel:+18557500568',
          label: 'Contact Us: +1 855-750-0568',
        }}
      />

      {/* Services Section - What We Deliver */}
      <section className="section section-alt lsb-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Local Service Marketing Services{' '}
              <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="lsb-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="lsb-service-card"
                variants={cardVariants}
              >
                <div className="lsb-service-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="section lsb-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Approach</span>
            <h2 className="heading-lg">
              Our Local Service <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>From Local Search to Booked Appointments</p>
          </motion.div>

          <motion.div
            className="lsb-framework-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              MD Astra executes local service marketing through a{' '}
              <strong>structured growth framework</strong> designed to capture demand and convert it efficiently.
            </p>
          </motion.div>

          <motion.div
            className="lsb-framework-steps"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="lsb-framework-step"
                variants={cardVariants}
              >
                <div className="lsb-step-number">{step.number}</div>
                <div className="lsb-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt lsb-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">How We Help</span>
            <h2 className="heading-lg">
              How MD Astra Helps Local Service{' '}
              <span className="text-gradient">Businesses Grow</span>
            </h2>
            <p>Effective local service marketing connects urgent intent with immediate action.</p>
          </motion.div>

          <div className="lsb-benefits-grid">
            <motion.div
              className="lsb-benefits-card lsb-benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lsb-benefits-header">
                <div className="lsb-benefits-icon lsb-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>MD Astra helps service businesses by:</h3>
              </div>
              <ul className="lsb-benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="lsb-benefits-card lsb-benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lsb-benefits-header">
                <div className="lsb-benefits-icon lsb-icon-negative">
                  <ArrowRight size={24} />
                </div>
                <h3>If your local marketing:</h3>
              </div>
              <ul className="lsb-benefits-list">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <ArrowRight size={18} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="lsb-benefits-conclusion">
                <p>Then it's not built for growth.</p>
                <p className="lsb-conclusion-highlight">
                  MD Astra builds local service marketing systems that{' '}
                  <strong>turn searches into scheduled jobs</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section lsb-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Choose Us</span>
            <h2 className="heading-lg">
              Why Local Service Businesses{' '}
              <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="lsb-why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="lsb-why-card"
                variants={cardVariants}
              >
                <div className="lsb-why-icon">
                  <reason.icon size={24} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt lsb-faq" ref={faqRef}>
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
            <p>Local Service Marketing</p>
          </motion.div>

          <motion.div
            className="lsb-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`lsb-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="lsb-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="lsb-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="lsb-faq-question">{faq.question}</span>
                  <span className="lsb-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="lsb-faq-content"
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
            Ready to Grow Your <span className="text-gradient">Local Service Business?</span>
          </>
        }
        subtext="If you want more calls, better lead quality, and predictable local growth, MD Astra is ready to be your marketing partner."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default LocalServiceBusiness;
