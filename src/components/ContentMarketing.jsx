'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Share2,
  Users,
  BarChart3,
  Compass,
  Layers,
  FileEdit,
  Radio,
  LineChart,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './ContentMarketing.css';

const ContentMarketing = () => {
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
      title: 'Content Strategy & Planning',
      items: [
        'Audience & buyer-journey analysis',
        'Content gap & competitor research',
        'Funnel-based content mapping (awareness → conversion)',
        'Monthly & quarterly content roadmaps'
      ]
    },
    {
      icon: TrendingUp,
      title: 'SEO-Driven Content Marketing',
      items: [
        'Blog & pillar content creation',
        'Topic clusters & internal linking strategy',
        'Search-intent–focused content',
        'Authority-building educational content'
      ]
    },
    {
      icon: Share2,
      title: 'Social & Distribution-Led Content',
      items: [
        'Content repurposing for social media',
        'Distribution strategy across platforms',
        'Content amplification support for ads & outreach'
      ]
    },
    {
      icon: Users,
      title: 'Lead-Nurturing Content',
      items: [
        'Educational content for longer buying cycles',
        'Trust-building guides, FAQs & resources',
        'Content aligned with sales conversations'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking & Optimization',
      items: [
        'Content engagement & traffic analysis',
        'Lead attribution from content',
        'Continuous optimization based on performance'
      ]
    },
    {
      icon: Sparkles,
      title: 'Thought Leadership & Brand Authority',
      items: [
        'Industry insights & expert commentary',
        'Whitepapers, case studies & research content',
        'Executive positioning & byline articles',
        'Authority-building across key platforms'
      ]
    }
  ];

  const frameworkSteps = [
    {
      icon: Compass,
      number: '01',
      title: 'Audience, Market & Intent Research',
      description: 'We identify who your buyers are, how they search, what questions they ask, and where content can influence decisions.'
    },
    {
      icon: Layers,
      number: '02',
      title: 'Funnel-Based Content Architecture',
      description: 'Content is mapped across awareness, consideration, and decision stages—so every asset serves a clear purpose.'
    },
    {
      icon: FileEdit,
      number: '03',
      title: 'Creation, Optimization & Publishing',
      description: 'Content is created with SEO, clarity, and authority in mind—optimized for search engines and human readers alike.'
    },
    {
      icon: Radio,
      number: '04',
      title: 'Distribution & Visibility',
      description: 'Content is amplified through SEO, social media, Google Business Profile, and paid channels where needed.'
    },
    {
      icon: LineChart,
      number: '05',
      title: 'Measurement, Insights & Scaling',
      description: 'We track what content drives traffic, engagement, leads, and revenue—then scale what performs best.'
    },
    {
      icon: Target,
      number: '06',
      title: 'Content Refresh & Evergreen Optimization',
      description: 'We regularly update and optimize existing content to maintain rankings, improve relevance, and maximize the long-term value of every asset.'
    }
  ];

  const benefits = [
    'Increasing organic visibility and brand authority',
    'Educating prospects before sales conversations',
    'Supporting SEO and reducing long-term ad dependency',
    'Improving conversion rates across digital channels',
    'Generating consistent inbound leads over time',
    'Building a library of reusable assets that compound in value'
  ];

  const painPoints = [
    'Attracts traffic but no leads',
    'Lacks structure or strategy',
    'Doesn\'t align with your sales process',
    'Feels disconnected from SEO or ads'
  ];

  const whyChoose = [
    {
      title: 'Strategy-First Content Marketing',
      description: 'We lead with research, intent, and goals—not volume-based publishing.'
    },
    {
      title: 'SEO & Demand-Led Approach',
      description: 'Content is designed to rank, educate, and convert—not just inform.'
    },
    {
      title: 'Industry-Specific Content Frameworks',
      description: 'Proven strategies for healthcare, ecommerce, real estate, restaurants, B2B, and local services.'
    },
    {
      title: 'Integrated with Your Entire Marketing Stack',
      description: 'Content supports SEO, social media, paid ads, GMB, and website funnels.'
    },
    {
      title: 'Transparent Performance & ROI Tracking',
      description: 'Clear visibility into how content contributes to growth.'
    },
    {
      title: 'Dedicated Content Strategists',
      description: 'Hands-on experts guiding content direction, quality, and performance—not outsourced writing mills.'
    }
  ];

  const faqs = [
    {
      question: 'Is content marketing different from content creation?',
      answer: 'Yes. Content creation focuses on producing individual assets. Content marketing focuses on strategy, distribution, optimization, and long-term growth outcomes.'
    },
    {
      question: 'Do you create SEO-focused content?',
      answer: 'Yes. SEO-driven content marketing is a core part of MD Astra\'s approach, including blogs, pillar pages, and educational content.'
    },
    {
      question: 'Can content marketing generate leads?',
      answer: 'Absolutely. When aligned with intent and funnels, content marketing generates high-quality inbound leads over time.'
    },
    {
      question: 'Is content marketing suitable for local businesses?',
      answer: 'Yes. Content marketing works for local, B2B, and ecommerce businesses when tailored to local search and buyer behavior.'
    },
    {
      question: 'How long does content marketing take to show results?',
      answer: 'Initial traction may appear in 60–90 days, with compounding growth in 4–6 months and beyond, depending on competition and consistency.'
    },
    {
      question: 'Do you offer content marketing for ecommerce businesses?',
      answer: 'Yes. MD Astra creates content strategies for ecommerce brands, including product-focused content, category pages, and blog strategies designed to drive organic traffic and sales.'
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

  const cmValueProps = [
    {
      icon: Target,
      title: 'Strategy-First Content Marketing',
      desc: 'Research, intent & goals — not volume-based publishing'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Demand-Led Approach',
      desc: 'Content designed to rank, educate & convert'
    },
    {
      icon: BarChart3,
      title: 'Transparent Performance Tracking',
      desc: 'Clear visibility into how content drives growth'
    }
  ];

  const cmStats = [
    { number: '4–6 mo', label: 'Compounding Growth' },
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
  ];

  return (
    <div className="content-marketing-page">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Content Marketing &{' '}
            <span className="text-gradient">Demand Growth Partner</span>
          </>
        }
        valueProps={cmValueProps}
        formTitle="Get Your Free Content Strategy Audit"
        formSubtitle="Strategic Content That Attracts, Educates & Converts"
        formName="Content Marketing Consultation"
        stats={cmStats}
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
      <section className="section section-alt cm-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Services</span>
            <h2 className="heading-lg">
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p>Content Marketing Services Designed for Growth</p>
          </motion.div>

          <motion.div
            className="cm-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="cm-service-card"
                variants={cardVariants}
              >
                <div className="cm-service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="cm-service-title">{service.title}</h3>
                <ul className="cm-service-list">
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
            Content That Works While <span className="text-gradient">You Sleep</span>
          </>
        }
        subtext="Strategic content marketing builds compounding authority and inbound demand. Stop guessing — let MD Astra build a content engine that converts."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Content Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />

      {/* Framework Section */}
      <section className="section cm-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Content Marketing <span className="text-gradient">Framework</span>
            </h2>
            <p>From Attention to Authority to Action</p>
          </motion.div>

          <motion.p
            className="cm-framework-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MD Astra executes content marketing as a <strong>structured growth framework</strong>,
            ensuring content compounds value over time.
          </motion.p>

          <motion.div
            className="cm-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="cm-framework-card"
                variants={cardVariants}
              >
                <div className="cm-framework-number">{step.number}</div>
                <div className="cm-framework-icon">
                  <step.icon size={24} />
                </div>
                <h3 className="cm-framework-title">{step.title}</h3>
                <p className="cm-framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt cm-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why It Matters</span>
            <h2 className="heading-lg">
              How Content Marketing <span className="text-gradient">Helps Businesses Grow</span>
            </h2>
            <p>Effective content marketing creates compounding returns.</p>
          </motion.div>

          <div className="cm-benefits-wrapper">
            <motion.div
              className="cm-benefits-column"
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="cm-benefits-heading">Content marketing helps businesses by:</h3>
              <ul className="cm-benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="cm-pain-column"
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="cm-pain-heading">If your content:</h3>
              <ul className="cm-pain-list">
                {painPoints.map((pain, index) => (
                  <li key={index}>
                    <AlertCircle size={20} />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
              <p className="cm-pain-conclusion">
                Then it's not true content marketing.
              </p>
              <p className="cm-solution">
                MD Astra builds content strategies that <strong>attract the right audience and convert them over time</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section cm-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Businesses Choose <span className="text-gradient">MD Astra</span> for Content Marketing
            </h2>
          </motion.div>

          <motion.div
            className="cm-why-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="cm-why-card"
                variants={cardVariants}
              >
                <div className="cm-why-icon">
                  <Sparkles size={20} />
                </div>
                <h3 className="cm-why-title">{item.title}</h3>
                <p className="cm-why-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt cm-faq" ref={faqRef}>
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
            <p>Content Marketing Services</p>
          </motion.div>

          <motion.div
            className="cm-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`cm-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="cm-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="cm-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="cm-faq-question">{faq.question}</span>
                  <span className="cm-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="cm-faq-content"
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
      <section className="section cm-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="cm-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg cm-cta-title">
              Ready to Build Authority That <span className="text-gradient">Drives Growth?</span>
            </h2>
            <p className="cm-cta-description">
              If you want content marketing that fuels SEO, supports sales, and compounds over time,
              MD Astra is ready to lead the strategy.
            </p>
            <motion.a
              href="#contact"
              className="btn btn-primary btn-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book a Free Content Marketing Strategy Call
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA #3 — Contact Form */}
      <Contact />
    </div>
  );
};

export default ContentMarketing;
