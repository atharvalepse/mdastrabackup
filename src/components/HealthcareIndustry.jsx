'use client'
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Target,
  TrendingUp,
  MapPin,
  Share2,
  Globe,
  BarChart3,
  Search,
  Layout,
  Users,
  Shield,
  CheckCircle2,
  Phone,
  ArrowRight,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './HealthcareIndustry.css';

const HealthcareIndustry = () => {
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
      icon: Target,
      title: 'Patient Acquisition & Lead Generation',
      items: [
        'Google Ads focused on high-intent patient searches',
        'Call-focused and appointment-driven campaigns',
        'Location-based targeting for local patient demand'
      ]
    },
    {
      icon: MapPin,
      title: 'Local SEO & Google Business Profile Growth',
      items: [
        'Google Maps optimization for "near me" searches',
        'Local SEO for service + city keywords',
        'Review and reputation strategy for trust building'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media & Content Marketing',
      items: [
        'Educational content that builds credibility',
        'Organic social media for patient trust',
        'Meta Ads for awareness, retargeting, and lead generation'
      ]
    },
    {
      icon: Layout,
      title: 'Website & Conversion Optimization',
      items: [
        'Healthcare-focused website messaging',
        'Appointment booking optimization',
        'Landing pages designed for compliance and conversion'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics, Tracking & ROI Measurement',
      items: [
        'Call, form, and booking tracking',
        'Channel-level performance insights',
        'Clear reporting tied to patient acquisition'
      ]
    },
    {
      icon: Globe,
      title: 'Patient Education & Email Engagement',
      items: [
        'Educational newsletters and health awareness content',
        'Automated patient follow-up and re-engagement sequences',
        'Seasonal health campaigns to drive preventive visits'
      ]
    }
  ];

  const frameworkSteps = [
    {
      number: '01',
      title: 'Patient Intent & Market Analysis',
      description: 'We analyze how patients search for symptoms, treatments, and providers—mapping demand to high-intent keywords and channels.'
    },
    {
      number: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We design the right mix of Google Ads, local SEO, content, and social media to capture demand at every stage of the patient journey.'
    },
    {
      number: '03',
      title: 'Trust & Authority Building',
      description: 'Healthcare decisions require confidence. We strengthen trust through reviews, educational content, local authority signals, and consistent messaging.'
    },
    {
      number: '04',
      title: 'Conversion & Booking Optimization',
      description: 'Every campaign is aligned with appointment booking, call handling, and lead quality—reducing wasted spend and improving ROI.'
    },
    {
      number: '05',
      title: 'Measurement, Optimization & Scaling',
      description: 'We track patient inquiries, cost per lead, and booking trends—scaling what works and refining underperforming tactics.'
    },
    {
      number: '06',
      title: 'Patient Retention & Referral Growth',
      description: 'We implement email engagement, follow-up sequences, and referral strategies that keep patients connected and drive word-of-mouth growth.'
    }
  ];

  const benefits = [
    'Increasing visibility for high-intent patient searches',
    'Driving more appointment requests and calls',
    'Building long-term trust and authority',
    'Reducing dependency on third-party referral platforms',
    'Creating predictable patient acquisition systems',
    'Strengthening patient retention through ongoing engagement'
  ];

  const painPoints = [
    'Generates traffic but few appointments',
    'Relies too heavily on referrals or ads without ROI',
    'Lacks local visibility on Google Maps',
    'Doesn\'t clearly track patient inquiries'
  ];

  const whyChooseReasons = [
    {
      icon: Users,
      title: 'Healthcare-Focused Growth Partner',
      description: 'Strategies built specifically for patient acquisition and trust.'
    },
    {
      icon: Shield,
      title: 'Compliance-Conscious Marketing Execution',
      description: 'Ethical, platform-approved marketing aligned with healthcare standards.'
    },
    {
      icon: Search,
      title: 'Local & High-Intent Demand Capture',
      description: 'Expertise in Google Search, Maps, and location-based targeting.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Driven Strategy',
      description: 'Optimized for calls, bookings, and patient quality—not just clicks.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Performance & ROI Tracking',
      description: 'Clear visibility into leads, costs, and growth impact.'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Patient Engagement',
      description: 'Coordinated email, social, and content strategies that keep patients informed and engaged.'
    }
  ];

  const faqs = [
    {
      question: 'Do you specialize in healthcare marketing?',
      answer: 'Yes. MD Astra specializes in digital marketing for healthcare businesses, including physical therapy clinics, medical practices, and wellness providers.'
    },
    {
      question: 'Can you help generate more patient appointments?',
      answer: 'Absolutely. Our strategies are designed to increase calls, bookings, and qualified patient inquiries.'
    },
    {
      question: 'Is healthcare marketing compliant with Google and platform policies?',
      answer: 'Yes. MD Astra follows platform-approved and ethical marketing practices suitable for healthcare businesses.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Paid campaigns can generate results within weeks, while SEO and content marketing compound results over 3–6 months.'
    },
    {
      question: 'Do you work with single-location and multi-location clinics?',
      answer: 'Yes. We support both single-location and multi-location healthcare businesses.'
    },
    {
      question: 'Do you offer patient retention or email marketing for healthcare?',
      answer: 'Yes. We build email engagement campaigns, patient follow-up sequences, and seasonal health awareness outreach to keep patients connected and encourage return visits.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const healthcareValueProps = [
    {
      icon: Target,
      title: 'Patient Acquisition',
      desc: 'High-intent patient targeting'
    },
    {
      icon: TrendingUp,
      title: 'Trust & Authority',
      desc: 'Build credibility and reputation'
    },
    {
      icon: BarChart3,
      title: 'ROI Measurement',
      desc: 'Clear tracking of patient acquisition'
    }
  ];

  return (
    <div className="healthcare-industry">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Healthcare Digital Marketing & <span className="text-gradient">Growth Partner</span>
          </>
        }
        valueProps={healthcareValueProps}
        formTitle="Get Your Free Healthcare Marketing Audit"
        formSubtitle="Built to Attract Patients, Build Trust & Drive Sustainable Growth"
        formName="Healthcare Marketing Consultation"
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
      <section className="section section-alt healthcare-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Healthcare Marketing Services <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="healthcare-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="healthcare-service-card"
                variants={itemVariants}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <ul>
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
      <section className="section healthcare-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Healthcare <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>From Patient Intent to Appointment Booking</p>
          </motion.div>

          <motion.p
            className="framework-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MD Astra executes healthcare marketing through a <strong>structured growth framework</strong> designed
            to convert intent into appointments.
          </motion.p>

          <motion.div
            className="framework-steps"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="framework-step"
                variants={itemVariants}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt healthcare-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Impact</span>
            <h2 className="heading-lg">
              How MD Astra Helps Healthcare <span className="text-gradient">Businesses Grow</span>
            </h2>
            <p>Effective healthcare marketing must be patient-first and results-driven.</p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefits-card benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="benefits-card-header">
                <h3>MD Astra helps healthcare businesses by:</h3>
              </div>
              <ul className="benefits-list">
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
              className="benefits-card benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="benefits-card-header">
                <h3>If your healthcare marketing:</h3>
              </div>
              <ul className="benefits-list">
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
              <div className="benefits-conclusion">
                <p>Then it's not built for growth.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="benefits-statement"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              MD Astra builds healthcare marketing systems that{' '}
              <strong>turn patient intent into booked appointments</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section healthcare-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Choose Us</span>
            <h2 className="heading-lg">
              Why Healthcare Businesses <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="why-choose-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                variants={itemVariants}
              >
                <div className="why-choose-icon">
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
      <section className="section section-alt healthcare-faq" ref={faqRef}>
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
            <p>Healthcare Marketing</p>
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
                  onClick={() => toggleFaq(index)}
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
      <ServicePageCTA
        heading={
          <>
            Ready to Grow Your <span className="text-gradient">Healthcare Practice?</span>
          </>
        }
        subtext="If you want a healthcare marketing partner focused on patient growth, trust, and long-term success, MD Astra is ready to help."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default HealthcareIndustry;
