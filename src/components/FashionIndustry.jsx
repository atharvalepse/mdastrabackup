'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ShoppingBag,
  Instagram,
  Image,
  Search,
  TrendingUp,
  Users,
  Target,
  Palette,
  BarChart3,
  Zap,
  Award,
  Eye,
  DollarSign,
  Heart,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Phone,
  CheckCircle2
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './FashionIndustry.css';

const FashionIndustry = () => {
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
      icon: ShoppingBag,
      title: 'Ecommerce Growth & Sales Campaigns',
      items: [
        'Google Ads & Shopping for high-intent buyers',
        'Meta Ads (Instagram & Facebook) for product discovery',
        'Performance Max campaigns for scale'
      ]
    },
    {
      icon: Instagram,
      title: 'Social Media Marketing & Brand Building',
      items: [
        'Instagram-first content & reels strategy',
        'Lifestyle storytelling & visual branding',
        'Influencer-style and community-driven content'
      ]
    },
    {
      icon: Palette,
      title: 'Content Creation & Brand Storytelling',
      items: [
        'High-quality creatives & visuals',
        'Campaign-based content launches',
        'Seasonal collections & drop promotions'
      ]
    },
    {
      icon: Search,
      title: 'SEO & Product Visibility',
      items: [
        'Category & product page SEO',
        'Fashion and lifestyle keyword targeting',
        'Content-led organic discovery'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Website, CRO & Funnel Optimization',
      items: [
        'Conversion-focused ecommerce UX',
        'Product page & checkout optimization',
        'Retargeting and upsell funnels'
      ]
    },
    {
      icon: Users,
      title: 'Influencer & UGC Campaigns',
      items: [
        'Influencer partnership outreach & management',
        'User-generated content campaigns',
        'Brand ambassador and collaboration programs'
      ]
    }
  ];

  const frameworkSteps = [
    {
      number: '01',
      title: 'Brand Positioning & Audience Insight',
      description: 'We define your brand story, customer persona, and competitive edge—aligning messaging with lifestyle aspirations and buying behavior.'
    },
    {
      number: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We design a channel mix across Instagram, Google Search & Shopping, Meta Ads, and SEO to capture demand at every stage.'
    },
    {
      number: '03',
      title: 'Creative, Content & Campaign Execution',
      description: 'Visual storytelling and performance creatives are developed to drive engagement, desire, and action.'
    },
    {
      number: '04',
      title: 'Conversion & Retention Optimization',
      description: 'We optimize product pages, retargeting, and post-purchase journeys to increase conversion rates and lifetime value.'
    },
    {
      number: '05',
      title: 'Measurement, Optimization & Scaling',
      description: 'We track revenue, ROAS, and customer behavior—scaling what drives profitable growth.'
    },
    {
      number: '06',
      title: 'Community Building & Brand Advocacy',
      description: 'We build loyal brand communities through influencer partnerships, UGC campaigns, and ambassador programs that amplify reach organically.'
    }
  ];

  const helpPoints = [
    'Increasing online sales and brand demand',
    'Building strong brand recall and loyalty',
    'Scaling profitable paid campaigns',
    'Improving conversion rates and repeat purchases',
    'Reducing dependency on discounts and marketplaces',
    'Growing a loyal community of brand advocates and repeat buyers'
  ];

  const painPoints = [
    'Looks good but doesn\'t convert',
    'Has rising ad costs with low ROAS',
    'Lacks cohesive brand storytelling',
    'Isn\'t optimized for ecommerce performance'
  ];

  const whyChooseReasons = [
    {
      icon: Award,
      title: 'Brand + Performance Expertise',
      description: 'We balance creative storytelling with data-driven execution.'
    },
    {
      icon: ShoppingBag,
      title: 'Social & Commerce Alignment',
      description: 'Instagram, Meta Ads, Google Shopping, and SEO working together.'
    },
    {
      icon: DollarSign,
      title: 'Conversion & ROAS Focus',
      description: 'Optimized for sales, profitability, and scalability.'
    },
    {
      icon: Zap,
      title: 'Trend-Aware, Strategy-Led Execution',
      description: 'Built for fast-moving fashion cycles and launches.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting & Growth Insights',
      description: 'Clear visibility into revenue, ROAS, and customer behavior.'
    },
    {
      icon: Heart,
      title: 'Community & Influencer-First Growth',
      description: 'Building authentic brand communities through influencer collaborations and user-generated content.'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with D2C fashion brands?',
      answer: 'Yes. MD Astra specializes in D2C and ecommerce-focused fashion and lifestyle brands.'
    },
    {
      question: 'Can you manage Instagram and Meta Ads?',
      answer: 'Absolutely. Instagram-first content and Meta Ads are core strengths for fashion brands.'
    },
    {
      question: 'Do you help with product launches and collections?',
      answer: 'Yes. We support new drops, seasonal collections, and campaign launches.'
    },
    {
      question: 'How quickly can fashion ads generate sales?',
      answer: 'Paid campaigns can generate sales within days to weeks, with performance improving through optimization.'
    },
    {
      question: 'Do you focus on brand building or sales?',
      answer: 'We do both—brand building that directly supports sales and long-term growth.'
    },
    {
      question: 'Can you help with influencer marketing for fashion brands?',
      answer: 'Yes. We manage influencer partnerships, user-generated content campaigns, and brand collaborations tailored to your brand identity and target audience.'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const fashionValueProps = [
    {
      icon: Target,
      title: 'Brand Demand',
      desc: 'Drive desire and purchase intent'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      desc: 'Scale profitable sales channels'
    },
    {
      icon: BarChart3,
      title: 'ROAS Tracking',
      desc: 'Clear visibility into performance'
    }
  ];

  return (
    <div className="fashion-industry-page">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Fashion & Lifestyle Brand <span className="text-gradient">Digital Marketing</span> & Growth Partner
          </>
        }
        valueProps={fashionValueProps}
        formTitle="Get Your Free Fashion Marketing Audit"
        formSubtitle="Built to Drive Brand Demand, Online Sales & Scalable Growth"
        formName="Fashion Marketing Consultation"
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
      <section className="section fashion-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Fashion & Lifestyle Marketing Services <span className="text-gradient">Built for Growth</span>
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

      {/* Growth Framework Section */}
      <section className="section fashion-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Framework</span>
            <h2 className="heading-lg">
              Our Fashion & Lifestyle <span className="text-gradient">Growth Framework</span>
            </h2>
            <p className="framework-subtitle">From Discovery to Desire to Purchase</p>
            <p>
              MD Astra executes fashion and lifestyle marketing through a <strong>structured growth framework</strong> designed
              to balance brand-building with revenue.
            </p>
          </motion.div>

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
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="section fashion-helps" ref={helpsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={helpsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Impact & Results</span>
            <h2 className="heading-lg">
              How MD Astra Helps <span className="text-gradient">Fashion & Lifestyle Brands</span> Grow
            </h2>
            <p>Effective fashion marketing connects <strong>emotion, identity, and purchase intent</strong>.</p>
          </motion.div>

          <div className="helps-grid">
            <motion.div
              className="helps-column"
              initial={{ opacity: 0, x: -30 }}
              animate={helpsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="helps-heading">MD Astra helps fashion and lifestyle brands by:</h3>
              <ul className="helps-list">
                {helpPoints.map((point, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="helps-column"
              initial={{ opacity: 0, x: 30 }}
              animate={helpsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="helps-heading">If your fashion marketing:</h3>
              <ul className="pain-points-list">
                {painPoints.map((point, index) => (
                  <li key={index}>
                    <Eye size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="pain-conclusion">Then it's not built for growth.</p>
              <p className="solution-text">
                MD Astra builds fashion and lifestyle marketing systems that <strong>turn brand love into revenue</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section fashion-why" ref={whyRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Fashion & Lifestyle Brands <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="why-card"
                variants={itemVariants}
              >
                <div className="why-icon">
                  <reason.icon size={24} />
                </div>
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-description">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section fashion-faq" ref={faqRef}>
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
            <p>Fashion & Lifestyle Marketing</p>
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
            Ready to Scale Your <span className="text-gradient">Fashion or Lifestyle Brand</span>?
          </>
        }
        subtext="If you want stronger brand demand, higher sales, and scalable growth, MD Astra is ready to be your growth partner."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default FashionIndustry;
