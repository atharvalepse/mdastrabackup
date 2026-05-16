'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  TrendingUp,
  Rocket,
  Target,
  Megaphone,
  Search,
  Layout,
  BarChart3,
  Users,
  BadgeCheck,
  Layers,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle,
  FileText,
  Headphones,
  Star
} from 'lucide-react';
import LeadConnectorForm from './LeadConnectorForm';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import Contact from './Contact';
import './Hero.css';
import './Home.css';
import './CTA.css';
import './FAQ.css';

function Home() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const frameworkRef = useRef(null);
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });


  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFaq, setOpenFaq] = useState(0);

  const valueProps = [
    {
      icon: Award,
      title: 'Global Recognition Award 2025',
      desc: 'Recognized for measurable business impact'
    },
    {
      icon: Rocket,
      title: 'Scalable Growth Systems',
      desc: 'Across paid ads, social media, search, and websites'
    },
    {
      icon: TrendingUp,
      title: 'Performance-Driven Results',
      desc: 'Strategies that generate leads, sales, and brand growth'
    }
  ];

  const serviceCategories = [
    {
      icon: Target,
      title: 'Performance Advertising',
      items: [
        'Google Ads (Search, Display, Performance Max)',
        'Meta Ads (Facebook & Instagram)',
        'High-intent lead generation & sales funnels',
        'Conversion tracking and ROI optimization'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" stroke="#e9d5ff" strokeWidth="2" />
          <circle cx="60" cy="60" r="35" stroke="#c4b5fd" strokeWidth="2" />
          <circle cx="60" cy="60" r="20" fill="#f3e8ff" />
          <circle cx="60" cy="60" r="8" fill="#7c3aed" />
          <path d="M90 30L65 55" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M82 28L92 30L90 40" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="25" r="4" fill="#c026d3" opacity="0.3" />
        </svg>
      )
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing & Content Creation',
      items: [
        'Organic Facebook, Instagram & LinkedIn marketing',
        'Brand storytelling & content strategy',
        'Reels, creatives, carousels & ad content',
        'Community engagement & growth-focused posting'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="35" width="40" height="50" rx="6" fill="#f3e8ff" />
          <rect x="26" y="42" width="28" height="20" rx="3" fill="#e9d5ff" />
          <circle cx="40" cy="74" r="4" fill="#7c3aed" />
          <circle cx="80" cy="30" r="12" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" />
          <path d="M76 30L79 33L85 27" stroke="#c026d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="90" cy="60" r="8" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="1.5" />
          <path d="M87 60L90 63L94 57" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="75" cy="85" r="10" fill="#fdf4ff" stroke="#d946ef" strokeWidth="1.5" />
          <path d="M72 85L75 88L79 82" stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M48 50L70 35" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M50 60L82 60" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M48 70L68 82" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      icon: Search,
      title: 'SEO & Local Search Visibility',
      items: [
        'Search engine optimization (SEO)',
        'Google Business Profile optimization & growth',
        'Local SEO for Maps & "near me" searches',
        'Content-driven authority building'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" fill="#f3e8ff" stroke="#c4b5fd" strokeWidth="2" />
          <circle cx="50" cy="50" r="18" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="72" y1="72" x2="95" y2="95" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
          <path d="M42 48L48 54L58 44" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="90" cy="25" r="6" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" />
          <path d="M88 25L90 27L93 23" stroke="#c026d3" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M25 85L35 75L45 80L55 70L65 75" stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
      )
    },
    {
      icon: Layout,
      title: 'Website Design & Conversion Optimization',
      items: [
        'Conversion-focused website development',
        'Landing pages for ads & lead generation',
        'UX/UI optimization for higher conversions',
        'Mobile-first, SEO-ready builds'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="20" width="90" height="65" rx="6" fill="#f3e8ff" stroke="#c4b5fd" strokeWidth="1.5" />
          <rect x="15" y="20" width="90" height="16" rx="6" fill="#e9d5ff" />
          <circle cx="28" cy="28" r="3" fill="#7c3aed" />
          <circle cx="38" cy="28" r="3" fill="#c026d3" />
          <circle cx="48" cy="28" r="3" fill="#d946ef" opacity="0.5" />
          <rect x="22" y="44" width="35" height="4" rx="2" fill="#c4b5fd" />
          <rect x="22" y="54" width="25" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="22" y="62" width="30" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="22" y="70" width="20" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="68" y="44" width="30" height="32" rx="4" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1" />
          <path d="M78 56L82 60L88 52" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="40" y="90" width="40" height="6" rx="3" fill="#e9d5ff" />
        </svg>
      )
    },
    {
      icon: BarChart3,
      title: 'Analytics, Tracking & Growth Insights',
      items: [
        'GA4 & conversion tracking',
        'Lead & call attribution',
        'Performance dashboards',
        'Data-backed optimization decisions'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="80" width="16" height="25" rx="3" fill="#e9d5ff" />
          <rect x="37" y="60" width="16" height="45" rx="3" fill="#c4b5fd" />
          <rect x="59" y="45" width="16" height="60" rx="3" fill="#7c3aed" opacity="0.6" />
          <rect x="81" y="25" width="16" height="80" rx="3" fill="#7c3aed" />
          <path d="M23 75L45 55L67 40L89 20" stroke="#c026d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="23" cy="75" r="3" fill="#c026d3" />
          <circle cx="45" cy="55" r="3" fill="#c026d3" />
          <circle cx="67" cy="40" r="3" fill="#c026d3" />
          <circle cx="89" cy="20" r="3" fill="#c026d3" />
          <path d="M82 18L90 20L88 28" stroke="#c026d3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      icon: FileText,
      title: 'Content Marketing & Authority Building',
      items: [
        'Blog content & thought leadership',
        'Email marketing & nurture sequences',
        'Video content & brand storytelling',
        'Content strategy aligned with SEO goals'
      ],
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="15" width="55" height="70" rx="6" fill="#f3e8ff" stroke="#c4b5fd" strokeWidth="1.5" />
          <rect x="33" y="28" width="30" height="4" rx="2" fill="#7c3aed" />
          <rect x="33" y="38" width="38" height="3" rx="1.5" fill="#c4b5fd" />
          <rect x="33" y="46" width="35" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="33" y="54" width="28" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="33" y="62" width="32" height="3" rx="1.5" fill="#e9d5ff" />
          <rect x="33" y="70" width="20" height="3" rx="1.5" fill="#e9d5ff" />
          <circle cx="85" cy="40" r="18" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" />
          <path d="M78 40L83 45L93 35" stroke="#c026d3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 90L55 95L70 95L75 90" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M58 95L60 102L62 95" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Business & Audience Discovery',
      description: 'We understand your business goals, ideal customers, competition, and buying behavior before recommending channels or budgets.'
    },
    {
      step: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We map the right mix of ads, social, search, content, and website funnels to attract, nurture, and convert customers.'
    },
    {
      step: '03',
      title: 'Campaign Execution & Optimization',
      description: 'Ads, content, SEO, and websites are launched with continuous testing, refinement, and performance tuning.'
    },
    {
      step: '04',
      title: 'Conversion & Revenue Tracking',
      description: 'We track what matters—calls, leads, bookings, and sales—so decisions are based on data, not assumptions.'
    },
    {
      step: '05',
      title: 'Scale What Works',
      description: 'Winning campaigns are scaled, underperforming tactics are refined or removed, and growth compounds over time.'
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: 'Award-Winning Digital Growth Partner',
      description: 'Recognized with the Global Recognition Award 2025 for measurable business impact.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue-Focused Strategies, Not Vanity Metrics',
      description: 'Every campaign is built to generate leads, sales, and scalable growth.'
    },
    {
      icon: Layers,
      title: 'Industry-Specific Marketing Frameworks',
      description: 'Tailored strategies for healthcare, ecommerce, real estate, restaurants, and local businesses.'
    },
    {
      icon: BadgeCheck,
      title: 'Google Partner-Certified Expertise',
      description: 'Platform-approved execution across Google Ads, analytics, and performance marketing.'
    },
    {
      icon: Users,
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts focused on performance, ROI, and long-term success—never account hand-offs.'
    },
    {
      icon: Headphones,
      title: 'Transparent Reporting & Communication',
      description: 'Monthly performance reports, regular strategy calls, and clear dashboards—always know where your investment is going.'
    }
  ];

  const faqs = [
    {
      question: 'What services does MD Astra offer?',
      answer: 'MD Astra provides full-service digital marketing, including Google Ads, Meta Ads, social media marketing, SEO, Google Business Profile optimization, website development, and content creation.'
    },
    {
      question: 'Is MD Astra a social media marketing agency?',
      answer: 'Yes. MD Astra specializes in social media marketing and content creation designed to build trust, engagement, and conversion across Facebook, Instagram, and LinkedIn.'
    },
    {
      question: 'Do you manage paid ads and organic marketing together?',
      answer: 'Absolutely. We often combine paid advertising with organic social, SEO, and websites to maximize ROI and reduce long-term ad dependency.'
    },
    {
      question: 'How does MD Astra measure success?',
      answer: 'We track leads, calls, bookings, conversions, and revenue, not just impressions or clicks. Clients always know what\'s working and why.'
    },
    {
      question: 'How do I get started?',
      answer: 'Book a free strategy call, and our team will analyze your business, current marketing, and growth opportunities before recommending a tailored plan.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <main>
      {/* Hero Section - Video Background */}
      <section className="hero">
        <motion.div
          className="hero-bg-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="container hero-container">
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Award-Winning Digital Marketing &{' '}
              <span className="text-gradient">Growth Partner</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Grow faster with a digital marketing partner built for results.
              We design and execute performance-driven strategies that generate leads,
              sales, and long-term brand growth.
            </motion.p>

            <motion.div
              className="hero-value-props"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {valueProps.map((prop, index) => (
                <div key={index} className="value-prop">
                  <div className="value-prop-icon">
                    <prop.icon size={22} />
                  </div>
                  <div className="value-prop-text">
                    <strong>{prop.title}</strong>
                    <span>{prop.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="https://booking.mdastra.com/Consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Book an Appointment
                <ArrowRight size={18} />
              </a>
              <a href="tel:+18557500568" className="btn btn-secondary btn-lg">
                Contact Us: +1 855-750-0568
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-form-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="hero-form-card">
              <LeadConnectorForm />
            </div>
          </motion.div>
        </div>

        <div className="hero-testimonial-strip">
          {[
            {
              quote: 'Our numbers have been greatly improved on our website. Madu has put together an amazing team that works hard to deliver on our needs and goals.',
              name: 'Jennifer Dressler',
              role: 'Business Owner (Ecommerce)'
            },
            {
              quote: 'Their expertise in SEO, social media marketing, and Google ads has significantly enhanced our online presence and visibility.',
              name: 'Soul Flavorscape of India',
              role: 'Restaurant'
            },
            {
              quote: 'MD Astra has been a great asset to the development of my practice. Their team is dedicated, knowledgeable, and truly understands the needs of a growing business.',
              name: 'Chaitali Patel',
              role: 'Healthcare Professional'
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              className="hero-quote-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
            >
              <div className="hero-quote-stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="hero-quote-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="hero-quote-author">
                <span className="hero-quote-name">{t.name}</span>
                <span className="hero-quote-role">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Shape Divider for smooth transition to white section */}
        <div className="hero-shape-divider" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '60px' }}>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="var(--color-bg)"></path>
          </svg>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* What We Do - Services */}
      <section className="section home-services-section" id="services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Do</span>
            <h2 className="heading-lg">
              End-to-End Digital Marketing Services That{' '}
              <span className="text-gradient">Drive Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="home-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="home-service-card"
                variants={cardVariants}
              >
                <div className="home-service-illustration">
                  {category.illustration}
                </div>
                <div className="home-service-icon">
                  <category.icon size={24} />
                </div>
                <h3 className="home-service-title">{category.title}</h3>
                <ul className="home-service-items">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Growth Framework */}
      <section className="section section-alt home-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Growth Framework</span>
            <h2 className="heading-lg">
              Strategy First. Execution Second.{' '}
              <span className="text-gradient">Growth Always.</span>
            </h2>
            <p>
              MD Astra executes digital marketing as a structured growth framework, not disconnected services.
            </p>
          </motion.div>

          <motion.div
            className="home-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="home-framework-card"
                variants={cardVariants}
              >
                <div className="home-framework-step">{step.step}</div>
                <h3 className="home-framework-title">{step.title}</h3>
                <p className="home-framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Businesses Choose MD Astra */}
      <section className="section home-why-section" id="about" ref={whyRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Businesses <span className="text-gradient">Choose</span> MD Astra
            </h2>
          </motion.div>

          <motion.div
            className="home-why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="home-why-card"
                variants={cardVariants}
              >
                <div className="home-why-icon">
                  <reason.icon size={28} />
                </div>
                <h3 className="home-why-title">{reason.title}</h3>
                <p className="home-why-description">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt home-faq" id="faq" ref={faqRef}>
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
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
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
                  {openFaq === index && (
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

      {/* CTA */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="cta-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Free Strategy Call Available</span>
            </motion.div>

            <h2 className="cta-title">
              Ready to Scale Your Business?
            </h2>

            <p className="cta-description">
              Whether you need more leads, stronger branding, or a complete digital
              growth strategy—MD Astra is built to deliver.
            </p>

            <div className="cta-buttons">
              <motion.a
                href="https://booking.mdastra.com/Consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MessageCircle size={20} />
                Book an Appointment
              </motion.a>
              <motion.a
                href="tel:+18557500568"
                className="btn btn-secondary btn-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Phone size={20} />
                Schedule a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </main>
  );
}

export default Home;
