'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Zap,
  Code2,
  FileText,
  RefreshCw,
  BarChart3,
  Target,
  Users,
  Lightbulb,
  Layout,
  Settings,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Award,
  Phone,
  Calendar,
  ChevronDown,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './WebsiteDevelopment.css';

const WebsiteDevelopment = () => {
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
      icon: Zap,
      title: 'Conversion-Focused Website Design',
      features: [
        'User-focused UI/UX strategy',
        'Clear messaging aligned with buyer intent',
        'Trust signals, authority positioning & social proof',
        'Mobile-first, responsive layouts'
      ]
    },
    {
      icon: Code2,
      title: 'Custom Website Development',
      features: [
        'Custom-built websites (no cookie-cutter templates)',
        'SEO-ready and performance-optimized architecture',
        'Scalable structure for future growth',
        'Secure, fast-loading builds'
      ]
    },
    {
      icon: FileText,
      title: 'Landing Pages for Lead Generation',
      features: [
        'High-converting landing pages',
        'Built for Google Ads & LinkedIn campaigns',
        'Clear CTAs for demos, consultations & inquiries'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign & Optimization',
      features: [
        'Website audits & performance improvement',
        'Conversion rate optimization (CRO)',
        'Content restructuring for clarity and impact'
      ]
    },
    {
      icon: BarChart3,
      title: 'SEO & Analytics Integration',
      features: [
        'SEO-friendly development best practices',
        'GA4 & conversion tracking setup',
        'CRM-ready lead capture integration'
      ]
    },
    {
      icon: Settings,
      title: 'Website Maintenance & Ongoing Support',
      features: [
        'Ongoing website updates & content changes',
        'Security monitoring & performance audits',
        'Plugin, dependency & platform management',
        'Priority technical support & troubleshooting'
      ]
    }
  ];

  const frameworkSteps = [
    {
      icon: Users,
      number: '01',
      title: 'Business Discovery & Buyer Alignment',
      description: 'We start by understanding your audience, buying cycle, service offerings, and competitive landscape in North Carolina. This ensures your website speaks directly to decision-makers—not generic visitors.'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Information Architecture & Messaging',
      description: 'We design page structure, navigation, and messaging that clearly communicates value, builds trust, and guides prospects toward conversion.'
    },
    {
      icon: Layout,
      number: '03',
      title: 'UX/UI Design & Development',
      description: 'Design and development focus on clarity, speed, accessibility, and conversion—ensuring the site performs across devices and platforms.'
    },
    {
      icon: Settings,
      number: '04',
      title: 'Conversion & Tracking Setup',
      description: 'We implement contact forms, lead tracking, CTAs, and analytics so your website becomes a measurable growth asset.'
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'Launch, Optimization & Scalability',
      description: 'After launch, we refine performance and ensure your site is scalable for future marketing campaigns and business expansion.'
    },
    {
      icon: Target,
      number: '06',
      title: 'Ongoing Monitoring & Performance Iteration',
      description: 'We continuously monitor site performance, user behavior, and conversion data to identify improvements and keep your website evolving with your business.'
    }
  ];

  const benefits = [
    'Establishing credibility and authority instantly',
    'Supporting longer decision-making cycles',
    'Generating qualified inbound leads',
    'Improving conversion rates from ads and organic traffic',
    'Aligning marketing and sales efforts',
    'Enabling seamless integration with digital marketing campaigns'
  ];

  const painPoints = [
    'Looks outdated or generic',
    'Doesn\'t convert traffic into inquiries',
    'Fails to communicate your value clearly',
    'Isn\'t optimized for SEO or paid ads'
  ];

  const whyChooseReasons = [
    {
      icon: Target,
      title: 'Strategic Website Partner, Not Just Developers',
      description: 'We align website design with sales, marketing, and revenue goals.'
    },
    {
      icon: Users,
      title: 'B2B-Focused Messaging & UX',
      description: 'Built specifically for decision-makers, stakeholders, and longer buying cycles.'
    },
    {
      icon: Zap,
      title: 'Performance & Conversion-Driven Builds',
      description: 'Every site is optimized for speed, clarity, and lead generation.'
    },
    {
      icon: BarChart3,
      title: 'SEO-Ready & Marketing-Integrated',
      description: 'Websites built to support SEO, Google Ads, and LinkedIn campaigns from day one.'
    },
    {
      icon: Award,
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts guiding strategy, structure, and performance—never outsourced builds.'
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Support & Continuous Improvement',
      description: 'Post-launch maintenance, updates, and performance optimization to keep your site evolving with your business.'
    }
  ];

  const faqs = [
    {
      question: 'Do you specialize in B2B website development?',
      answer: 'Yes. MD Astra specializes in B2B website development for service-based and growth-focused businesses across North Carolina.'
    },
    {
      question: 'Can you redesign an existing website?',
      answer: 'Absolutely. We handle website redesigns, performance optimization, and conversion improvements while preserving SEO value.'
    },
    {
      question: 'Are your websites SEO-ready?',
      answer: 'Yes. Every MD Astra website is built with SEO best practices, technical optimization, and clean architecture.'
    },
    {
      question: 'Do you build websites for lead generation?',
      answer: 'Yes. Our websites are designed to generate qualified B2B leads, support ad campaigns, and align with sales processes.'
    },
    {
      question: 'How long does a B2B website project take?',
      answer: 'Most projects take 4–8 weeks, depending on scope, content readiness, and integrations.'
    },
    {
      question: 'Do you provide ongoing website maintenance and support?',
      answer: 'Yes. MD Astra offers ongoing website maintenance, security monitoring, content updates, and performance optimization to keep your site running at its best.'
    }
  ];

  const toggleFaq = (index) => {
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

  const webDevValueProps = [
    {
      icon: Code2,
      title: 'Conversion-Focused Website Design',
      desc: 'Built to turn visitors into qualified leads'
    },
    {
      icon: TrendingUp,
      title: 'SEO-Ready & Performance-Optimized',
      desc: 'Fast, scalable builds aligned with growth goals'
    },
    {
      icon: Target,
      title: 'B2B Strategy-First Approach',
      desc: 'Aligned with your sales, marketing & revenue goals'
    }
  ];

  const webDevStats = [
    { number: '4–8 wks', label: 'Avg. Project Timeline' },
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
  ];

  return (
    <div className="websitedev-page">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Website Development &{' '}
            <span className="text-gradient">Conversion Strategy Partner</span>
          </>
        }
        valueProps={webDevValueProps}
        formTitle="Book a Free Website Strategy Call"
        formSubtitle="We build websites that convert, scale & support growth"
        formName="Website Development Consultation"
        stats={webDevStats}
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
      <section className="section section-alt websitedev-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Build</span>
            <h2 className="heading-lg">
              Website Development Services <span className="text-gradient">That Drive Results</span>
            </h2>
          </motion.div>

          <motion.div
            className="websitedev-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="websitedev-service-card"
                variants={cardVariants}
              >
                <div className="websitedev-service-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <ul className="websitedev-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
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
            Your Website Should Be Your <span className="text-gradient">Best Salesperson</span>
          </>
        }
        subtext="MD Astra builds conversion-ready websites that generate leads, support sales, and scale with your business. Book a free strategy call today."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <section className="section websitedev-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Website Development Framework</span>
            <h2 className="heading-lg">
              Strategy-First Websites Built for <span className="text-gradient">Growth</span>
            </h2>
            <p>
              At MD Astra, website development follows a <strong>structured growth framework</strong>, ensuring your website supports sales, marketing, and long-term scalability.
            </p>
          </motion.div>

          <motion.div
            className="websitedev-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="websitedev-framework-card"
                variants={cardVariants}
              >
                <div className="websitedev-framework-number">{step.number}</div>
                <div className="websitedev-framework-icon">
                  <step.icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt websitedev-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              How a High-Performance Website Helps{' '}
              <span className="text-gradient">Businesses in North Carolina</span>
            </h2>
            <p>
              For B2B buyers, your website is often the <strong>first sales conversation</strong>.
            </p>
          </motion.div>

          <div className="websitedev-benefits-grid">
            <motion.div
              className="websitedev-benefits-card websitedev-benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="websitedev-benefits-header">
                <div className="websitedev-benefits-icon websitedev-benefits-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>A strategic website helps North Carolina B2B companies by:</h3>
              </div>
              <ul className="websitedev-benefits-list">
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
              className="websitedev-benefits-card websitedev-benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="websitedev-benefits-header">
                <div className="websitedev-benefits-icon websitedev-benefits-icon-negative">
                  <XCircle size={24} />
                </div>
                <h3>If your current website:</h3>
              </div>
              <ul className="websitedev-benefits-list websitedev-benefits-list-negative">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <XCircle size={18} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="websitedev-benefits-conclusion">
                <p>Then it's not supporting your growth.</p>
                <p className="websitedev-benefits-highlight">
                  MD Astra builds websites that <strong>work as sales assets—not just design projects</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section websitedev-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Choose MD Astra</span>
            <h2 className="heading-lg">
              Why B2B Businesses <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="websitedev-why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="websitedev-why-card"
                variants={cardVariants}
              >
                <div className="websitedev-why-icon">
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
      <section className="section section-alt websitedev-faq" ref={faqRef}>
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
            <p>Website Development</p>
          </motion.div>

          <motion.div
            className="websitedev-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`websitedev-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="websitedev-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="websitedev-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="websitedev-faq-question">{faq.question}</span>
                  <span className="websitedev-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="websitedev-faq-content"
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
      <section className="section websitedev-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="websitedev-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              Ready to Build a Website That <span className="text-gradient">Supports Growth</span>?
            </h2>
            <p>
              If your business needs a website that <strong>converts, scales, and supports digital marketing</strong>, MD Astra is ready to help.
            </p>
            <div className="websitedev-cta-actions">
              <a href="#contact" className="btn btn-primary">
                <Calendar size={18} />
                Book a Free Website Strategy Call
              </a>
              <a href="tel:+18557500568" className="btn btn-secondary">
                <Phone size={18} />
                Contact Us: +1 855-750-0568
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA #3 — Contact Form */}
      <Contact />
    </div>
  );
};

export default WebsiteDevelopment;
