'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Share2,
  Target,
  TrendingUp,
  Users,
  Image as ImageIcon,
  Zap,
  BarChart3,
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './SocialMediaMarketing.css';

const SocialMediaMarketing = () => {
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
      icon: Share2,
      title: 'Organic Social Media Marketing',
      items: [
        'Facebook & Instagram page management',
        'Strategic content calendars & posting cadence',
        'Reels, carousels & static content creation',
        'Community engagement & brand voice management'
      ]
    },
    {
      icon: Target,
      title: 'Meta Ads (Facebook & Instagram Advertising)',
      items: [
        'Lead generation & sales campaigns',
        'Full-funnel ad strategy (TOFU → BOFU)',
        'Audience research & targeting',
        'Creative testing & optimization'
      ]
    },
    {
      icon: ImageIcon,
      title: 'Creative & Ad Content Development',
      items: [
        'Scroll-stopping visuals & ad creatives',
        'High-converting ad copy & hooks',
        'Creative variations for performance scaling'
      ]
    },
    {
      icon: Zap,
      title: 'Funnel & Conversion Optimization',
      items: [
        'Landing page alignment with ads',
        'Lead form & conversion tracking',
        'Retargeting & remarketing strategies'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking & Reporting',
      items: [
        'Lead, call & conversion tracking',
        'Cost-per-lead and ROI insights',
        'Ongoing optimization based on data'
      ]
    },
    {
      icon: Users,
      title: 'Community Building & Engagement',
      items: [
        'Audience growth & follower development',
        'Community interaction & response management',
        'User-generated content initiatives',
        'Brand loyalty & advocacy programs'
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Brand, Audience & Goal Alignment',
      description: 'We define your ideal audience, messaging, creative direction, and business goals before launching campaigns.'
    },
    {
      step: '02',
      title: 'Content & Campaign Strategy',
      description: 'We build a content and ad roadmap aligned with awareness, consideration, and conversion stages.'
    },
    {
      step: '03',
      title: 'Execution Across Organic & Paid',
      description: 'Organic content builds trust and engagement, while paid campaigns drive reach, leads, and sales at scale.'
    },
    {
      step: '04',
      title: 'Testing, Optimization & Scaling',
      description: 'Creatives, audiences, and offers are continuously tested to improve performance and lower costs.'
    },
    {
      step: '05',
      title: 'Measurement & ROI Focus',
      description: 'We track leads, calls, bookings, and revenue—so social media performance is always tied to outcomes.'
    },
    {
      step: '06',
      title: 'Community Building & Long-Term Growth',
      description: 'We foster community engagement and brand loyalty through consistent interaction, user-generated content, and audience development strategies.'
    }
  ];

  const benefits = [
    'Increasing brand visibility and recall',
    'Generating qualified leads through Meta Ads',
    'Supporting sales with retargeting & nurturing',
    'Building trust through consistent organic content',
    'Reducing long-term cost per acquisition',
    'Building an engaged community that drives word-of-mouth growth'
  ];

  const painPoints = [
    'Gets engagement but no leads',
    'Runs ads without clear ROI',
    'Lacks a structured funnel',
    'Isn\'t aligned with your website or offers'
  ];

  const whyChooseReasons = [
    {
      title: 'Performance-Driven Social Media Strategy',
      description: 'Built to generate leads, sales, and measurable ROI.'
    },
    {
      title: 'Paid + Organic Expertise Under One Roof',
      description: 'Seamless integration of Meta Ads and organic social media.'
    },
    {
      title: 'Creative Meets Conversion',
      description: 'Content and ads designed to engage—and convert.'
    },
    {
      title: 'Industry-Specific Social Frameworks',
      description: 'Proven strategies across healthcare, ecommerce, real estate, restaurants, and local services.'
    },
    {
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts optimizing performance—not automated tools.'
    },
    {
      title: 'Data-Driven Creative Optimization',
      description: 'Every creative decision backed by performance data and continuous testing.'
    }
  ];

  const faqs = [
    {
      question: 'Do you manage both organic and paid social media?',
      answer: 'Yes. MD Astra manages both organic social media marketing and Meta Ads to create a full-funnel social media strategy.'
    },
    {
      question: 'Which platforms do you specialize in?',
      answer: 'We specialize in Facebook and Instagram, including paid advertising and organic content.'
    },
    {
      question: 'Can social media marketing generate leads?',
      answer: 'Absolutely. When structured correctly, Meta Ads and organic content can generate consistent, high-quality leads.'
    },
    {
      question: 'Do you create the content and ad creatives?',
      answer: 'Yes. We handle content creation, ad creatives, copywriting, and creative testing.'
    },
    {
      question: 'How soon can I see results from Meta Ads?',
      answer: 'Paid campaigns typically generate results within 2–4 weeks, with optimization improving performance over time.'
    },
    {
      question: 'Do you handle social media for ecommerce brands?',
      answer: 'Yes. We run both organic content and Meta Ads campaigns tailored for ecommerce, including product launches, seasonal promotions, and ROAS-focused advertising.'
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

  const smmValueProps = [
    {
      icon: Target,
      title: 'Performance-Driven Social Strategy',
      desc: 'Built to generate leads, sales & measurable ROI'
    },
    {
      icon: Share2,
      title: 'Paid + Organic Expertise Under One Roof',
      desc: 'Seamless integration of Meta Ads & organic social'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Creative Optimization',
      desc: 'Every creative decision backed by performance data'
    }
  ];

  const smmStats = [
    { number: '2–4 wks', label: 'Paid Campaign Results' },
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
  ];

  return (
    <div className="social-media-marketing">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Social Media Marketing &{' '}
            <span className="text-gradient">Paid Growth Partner</span>
          </>
        }
        valueProps={smmValueProps}
        formTitle="Get Your Free Social Media Audit"
        formSubtitle="Meta & Instagram Strategies Built for Leads, Sales & Brand Growth"
        formName="Social Media Marketing Consultation"
        stats={smmStats}
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
      <section className="section smm-services" id="services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Do</span>
            <h2 className="heading-lg">
              End-to-End Social Media <span className="text-gradient">Marketing Services</span>
            </h2>
          </motion.div>

          <motion.div
            className="smm-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="smm-service-card"
                variants={cardVariants}
              >
                <div className="smm-service-icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <ul className="smm-service-list">
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
            Stop Posting, Start <span className="text-gradient">Converting</span>
          </>
        }
        subtext="Likes don’t pay bills. MD Astra turns your Facebook and Instagram into a consistent lead generation engine through paid ads and strategic organic content."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Social Media Audit' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />

      {/* Framework Section */}
      <section className="section section-alt smm-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Social Media <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>From Visibility to Engagement to Conversion</p>
          </motion.div>

          <motion.div
            className="smm-framework-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              MD Astra executes social media marketing through a structured growth framework,
              ensuring every post and ad supports business objectives.
            </p>
          </motion.div>

          <motion.div
            className="smm-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="smm-framework-card"
                variants={cardVariants}
              >
                <div className="smm-framework-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section smm-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Impact</span>
            <h2 className="heading-lg">
              How Social Media Marketing <span className="text-gradient">Helps Businesses Grow</span>
            </h2>
            <p>Effective social media marketing creates consistent demand and brand authority.</p>
          </motion.div>

          <div className="smm-benefits-grid">
            <motion.div
              className="smm-benefits-card smm-benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="smm-benefits-header">
                <div className="smm-benefits-icon smm-benefits-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>Social media helps businesses by:</h3>
              </div>
              <ul className="smm-benefits-list">
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
              className="smm-benefits-card smm-benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="smm-benefits-header">
                <div className="smm-benefits-icon smm-benefits-icon-negative">
                  <XCircle size={24} />
                </div>
                <h3>If your social media:</h3>
              </div>
              <ul className="smm-benefits-list smm-benefits-list-negative">
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
              <div className="smm-benefits-conclusion">
                <p>Then it's not working as a growth channel.</p>
                <p className="smm-benefits-solution">
                  MD Astra builds social media systems that convert attention into action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section section-alt smm-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Businesses Choose MD Astra for <span className="text-gradient">Social Media Marketing</span>
            </h2>
          </motion.div>

          <motion.div
            className="smm-why-choose-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="smm-why-choose-card"
                variants={cardVariants}
              >
                <div className="smm-why-choose-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section smm-faq" ref={faqRef}>
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
            className="smm-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`smm-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="smm-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="smm-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="smm-faq-question">{faq.question}</span>
                  <span className="smm-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="smm-faq-content"
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
      <section className="section smm-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="smm-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              Ready to Turn Social Media Into a <span className="text-gradient">Growth Channel?</span>
            </h2>
            <p>
              If you want social media marketing that drives leads, sales, and brand authority—not just
              engagement—MD Astra is ready to scale your growth.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              <MessageCircle size={20} />
              Book a Free Social Media Strategy Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA #3 — Contact Form */}
      <Contact />
    </div>
  );
};

export default SocialMediaMarketing;
