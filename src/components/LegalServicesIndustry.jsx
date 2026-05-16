'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Scale,
  Target,
  MapPin,
  FileText,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  XCircle,
  Shield,
  Award,
  Users,
  ChevronDown,
  HelpCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './LegalServicesIndustry.css';

const LegalServicesIndustry = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFAQIndex, setOpenFAQIndex] = useState(0);

  const services = [
    {
      icon: Target,
      title: 'High-Intent Lead Generation',
      items: [
        'Google Ads for legal service searches',
        'Call-focused and consultation-driven campaigns',
        'Practice-area and location-based targeting'
      ]
    },
    {
      icon: MapPin,
      title: 'Local SEO & Google Maps Visibility',
      items: [
        '"Lawyer near me" and city-based keyword optimization',
        'Google Business Profile optimization for law firms',
        'Local SEO for practice-area searches'
      ]
    },
    {
      icon: FileText,
      title: 'Law Firm Website & Conversion Optimization',
      items: [
        'Legal website messaging focused on trust and clarity',
        'Consultation booking and call optimization',
        'Practice-area landing pages'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Content & Authority Building',
      items: [
        'Educational legal content for trust and credibility',
        'FAQs, guides, and practice-area content',
        'Thought leadership for long-term authority'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics, Tracking & Lead Quality Optimization',
      items: [
        'Call and form tracking',
        'Lead quality and cost-per-consultation insights',
        'ROI-focused performance reporting'
      ]
    },
    {
      icon: Users,
      title: 'Client Intake & Referral Network Marketing',
      items: [
        'Intake funnel optimization for higher conversion',
        'Case study and testimonial marketing for social proof',
        'Referral partner outreach and co-marketing strategies'
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Legal Search Intent & Market Analysis',
      description: 'We analyze how potential clients search for legal help—by practice area, urgency, and location—to prioritize high-value opportunities.'
    },
    {
      step: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We design a channel mix across Google Search, Maps, content, and websites to capture demand at every stage of the legal decision process.'
    },
    {
      step: '03',
      title: 'Trust, Authority & Compliance',
      description: 'Legal decisions are trust-based. We strengthen credibility through reviews, authoritative content, and compliance-aligned messaging.'
    },
    {
      step: '04',
      title: 'Conversion & Consultation Optimization',
      description: 'Campaigns are optimized to generate qualified consultations, not low-intent inquiries.'
    },
    {
      step: '05',
      title: 'Measurement, Optimization & Scaling',
      description: 'We track cost per lead, consultation quality, and pipeline impact—scaling what delivers real client growth.'
    },
    {
      step: '06',
      title: 'Intake Optimization & Referral Growth',
      description: 'We refine the client intake process and build referral network strategies to increase consultation-to-retained-client conversion rates.'
    }
  ];

  const benefits = [
    'Increasing qualified case inquiries',
    'Improving visibility for competitive legal keywords',
    'Reducing reliance on third-party legal directories',
    'Building long-term authority and brand trust',
    'Creating predictable consultation pipelines',
    'Leveraging case studies and testimonials for social proof'
  ];

  const painPoints = [
    'Generates low-quality leads',
    'Relies heavily on paid directories',
    'Lacks clear ROI tracking',
    'Doesn\'t reflect your firm\'s expertise'
  ];

  const whyChooseUs = [
    {
      icon: Scale,
      title: 'Legal Industry–Focused Expertise',
      description: 'Strategies built specifically for law firms and legal services.'
    },
    {
      icon: Award,
      title: 'High-Intent Lead Quality Focus',
      description: 'Optimized for serious inquiries—not mass submissions.'
    },
    {
      icon: Shield,
      title: 'Compliance-Conscious Marketing Execution',
      description: 'Ethical, platform-approved strategies aligned with legal advertising standards.'
    },
    {
      icon: TrendingUp,
      title: 'Paid + Organic Channel Alignment',
      description: 'Google Ads, local SEO, content, and websites working together.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting & ROI Visibility',
      description: 'Clear insights into leads, consultations, and growth impact.'
    },
    {
      icon: Users,
      title: 'Dedicated Legal Growth Strategists',
      description: 'Hands-on experts who understand law firm operations and client acquisition.'
    }
  ];

  const faqs = [
    {
      question: 'Do you specialize in marketing for law firms?',
      answer: 'Yes. MD Astra specializes in digital marketing for law firms and legal services, including local and practice-area-focused strategies.'
    },
    {
      question: 'Can you generate qualified legal leads?',
      answer: 'Absolutely. Our strategies are designed to generate high-intent calls and consultation requests.'
    },
    {
      question: 'Is legal advertising compliant with Google and bar regulations?',
      answer: 'Yes. We follow platform guidelines and ethical best practices suitable for law firms.'
    },
    {
      question: 'How soon can legal marketing show results?',
      answer: 'Paid campaigns can generate inquiries within weeks, while SEO and authority building compound over 3–6 months.'
    },
    {
      question: 'Do you work with solo attorneys and large firms?',
      answer: 'Yes. We support solo practitioners, boutique firms, and multi-partner law firms.'
    },
    {
      question: 'Can you help with case study and testimonial marketing?',
      answer: 'Yes. We help law firms develop compelling case studies and client testimonials that build credibility and drive new consultations through social proof.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? -1 : index);
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

  const legalValueProps = [
    {
      icon: Target,
      title: 'Qualified Leads',
      desc: 'High-intent client targeting'
    },
    {
      icon: Shield,
      title: 'Brand Authority',
      desc: 'Build trust and credibility'
    },
    {
      icon: BarChart3,
      title: 'ROI Tracking',
      desc: 'Clear visibility into case acquisition'
    }
  ];

  return (
    <div className="legal-services-page">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Legal Services & Law Firm <span className="text-gradient">Digital Marketing</span> Partner
          </>
        }
        valueProps={legalValueProps}
        formTitle="Get Your Free Legal Marketing Audit"
        formSubtitle="Built to Generate Qualified Legal Leads, Build Authority & Drive Sustainable Growth"
        formName="Legal Marketing Consultation"
        primaryCta={{
          href: 'https://booking.mdastra.com/Consultation',
          label: 'Book a Free Strategy Call',
        }}
        secondaryCta={{
          href: 'tel:+18557500568',
          label: 'Contact Us: +1 855-750-0568',
        }}
      />

      {/* What We Deliver Section */}
      <section className="section section-alt legal-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Legal Marketing Services <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="legal-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="legal-service-card"
                variants={cardVariants}
              >
                <div className="legal-service-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
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

      {/* Legal Growth Framework Section */}
      <section className="section legal-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Legal Growth Framework</span>
            <h2 className="heading-lg">
              From Legal Intent to <span className="text-gradient">Qualified Consultations</span>
            </h2>
            <p>
              MD Astra executes legal marketing through a structured growth framework designed to support ethical, scalable client acquisition.
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
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt legal-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              How MD Astra Helps <span className="text-gradient">Law Firms Grow</span>
            </h2>
            <p>
              Effective legal marketing connects <strong>urgency, trust, and action</strong>.
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
                <h3>MD Astra helps law firms by:</h3>
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
                <h3>If your legal marketing:</h3>
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
                <p>Then it's not built for growth.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="benefits-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              MD Astra builds legal marketing systems that{' '}
              <strong>turn legal intent into booked consultations</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section legal-why-us" ref={whyUsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Us</span>
            <h2 className="heading-lg">
              Why Law Firms <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="why-us-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="why-us-card"
                variants={cardVariants}
              >
                <div className="why-us-icon">
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
      <section className="section section-alt legal-faq" ref={faqRef}>
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
            <p>Legal Marketing</p>
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
                className={`faq-item ${openFAQIndex === index ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQIndex === index}
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
                  {openFAQIndex === index && (
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
            Ready to Grow Your <span className="text-gradient">Law Firm?</span>
          </>
        }
        subtext="If you want more qualified consultations, stronger authority, and predictable growth, MD Astra is ready to be your legal marketing partner."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default LegalServicesIndustry;
