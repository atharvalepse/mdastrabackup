'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  GraduationCap,
  Target,
  FileText,
  Users,
  Globe,
  BarChart3,
  Search,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './EducationIndustry.css';

const EducationIndustry = () => {
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
      title: 'Lead Generation & Enrollment Campaigns',
      items: [
        'Google Ads for course, coaching, and training searches',
        'Meta Ads for webinar, workshop & program promotions',
        'Funnel-based lead generation & qualification'
      ]
    },
    {
      icon: FileText,
      title: 'Content Marketing & Authority Building',
      items: [
        'Educational content strategy (blogs, guides, videos)',
        'Thought leadership positioning',
        'Trust-building long-form and short-form content'
      ]
    },
    {
      icon: Users,
      title: 'Social Media Marketing & Community Growth',
      items: [
        'Organic Instagram, Facebook & LinkedIn marketing',
        'Reels, educational posts & storytelling',
        'Audience nurturing and engagement'
      ]
    },
    {
      icon: Globe,
      title: 'Website, Landing Pages & Funnel Optimization',
      items: [
        'Conversion-focused websites for educators',
        'Landing pages for courses, programs & sessions',
        'Webinar, discovery call & enrollment funnels'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics, Tracking & Performance Measurement',
      items: [
        'Lead, booking & enrollment tracking',
        'Cost-per-lead and funnel performance insights',
        'ROI-focused reporting'
      ]
    },
    {
      icon: Zap,
      title: 'Email Marketing & Student Nurturing',
      items: [
        'Automated drip sequences for course enrollment',
        'Webinar & event follow-up campaigns',
        'Student re-engagement and upsell flows'
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Audience, Offer & Intent Analysis',
      description: 'We analyze your audience\'s goals, challenges, and search behavior—aligning messaging with real learning intent.'
    },
    {
      step: '02',
      icon: TrendingUp,
      title: 'Funnel & Channel Strategy',
      description: 'We design a funnel across search, social, content, and email-ready pathways to guide prospects from awareness to enrollment.'
    },
    {
      step: '03',
      icon: Shield,
      title: 'Authority & Credibility Building',
      description: 'Education decisions require confidence. We strengthen your authority through content, testimonials, and consistent messaging.'
    },
    {
      step: '04',
      icon: Zap,
      title: 'Conversion & Enrollment Optimization',
      description: 'Campaigns are optimized for quality leads, booked calls, and enrollments, not low-intent signups.'
    },
    {
      step: '05',
      icon: BarChart3,
      title: 'Measurement, Optimization & Scaling',
      description: 'We track enrollment cost, lead quality, and revenue—scaling what drives sustainable growth.'
    },
    {
      step: '06',
      icon: Users,
      title: 'Alumni Engagement & Referral Growth',
      description: 'We activate alumni networks, student testimonials, and referral programs to drive organic growth and lasting social proof.'
    }
  ];

  const benefits = [
    'Increasing qualified inquiries and enrollments',
    'Building long-term personal and brand authority',
    'Reducing dependency on marketplaces and platforms',
    'Supporting scalable online and offline programs',
    'Creating predictable lead and enrollment pipelines',
    'Driving organic referrals through alumni and student advocacy'
  ];

  const painPoints = [
    'Gets attention but no enrollments',
    'Relies heavily on third-party platforms',
    'Lacks structured funnels and tracking',
    'Doesn\'t clearly communicate your value'
  ];

  const whyChooseReasons = [
    {
      icon: GraduationCap,
      title: 'Education & Coaching-Focused Expertise',
      description: 'Strategies built for learning-based and knowledge-driven businesses.'
    },
    {
      icon: Shield,
      title: 'Authority-First, Conversion-Driven Approach',
      description: 'Balancing credibility with performance marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Paid + Organic Channel Alignment',
      description: 'Google Ads, Meta Ads, content, SEO, and funnels working together.'
    },
    {
      icon: Target,
      title: 'Enrollment & ROI Focus',
      description: 'Optimized for booked sessions, enrollments, and lifetime value.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting & Growth Insights',
      description: 'Clear visibility into leads, conversions, and scalability.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Reach & Visibility',
      description: 'Expanding your presence across search, social, and content channels to reach learners wherever they are.'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with online coaches and educators?',
      answer: 'Yes. MD Astra supports online, offline, and hybrid education and coaching businesses.'
    },
    {
      question: 'Can you help sell courses and programs?',
      answer: 'Absolutely. We specialize in course launches, evergreen funnels, and enrollment campaigns.'
    },
    {
      question: 'Do you help with personal branding for coaches?',
      answer: 'Yes. Content and social media strategies are designed to build authority and trust.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Paid campaigns can generate leads within weeks, while content and SEO compound over 3-6 months.'
    },
    {
      question: 'Do you support academies and institutes?',
      answer: 'Yes. We work with training institutes, academies, and professional education brands.'
    },
    {
      question: 'Do you help with webinar and event marketing?',
      answer: 'Yes. We create end-to-end webinar and event funnels including promotion, registration, and follow-up sequences to maximize attendance and conversions.'
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

  const educationValueProps = [
    {
      icon: Target,
      title: 'Enrollment Growth',
      desc: 'High-intent student targeting'
    },
    {
      icon: Shield,
      title: 'Authority Building',
      desc: 'Establish trust and credibility'
    },
    {
      icon: BarChart3,
      title: 'ROI Tracking',
      desc: 'Clear visibility into enrollment cost'
    }
  ];

  return (
    <div className="education-industry">
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Education & Coaching Digital Marketing <span className="text-gradient">& Growth Partner</span>
          </>
        }
        valueProps={educationValueProps}
        formTitle="Get Your Free Education Marketing Audit"
        formSubtitle="Built to Drive Enrollments, Book Sessions & Scale Authority"
        formName="Education Marketing Consultation"
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
      <section className="section education-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Deliver</span>
            <h2 className="heading-lg">
              Education & Coaching Marketing Services{' '}
              <span className="text-gradient">Built for Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="education-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="education-service-card"
                variants={cardVariants}
              >
                <div className="education-service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="education-service-title">{service.title}</h3>
                <ul className="education-service-list">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
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
      <section className="section education-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our Education & Coaching{' '}
              <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>From Awareness to Authority to Enrollment</p>
            <p className="framework-intro">
              MD Astra executes education and coaching marketing through a <strong>structured growth framework</strong> designed
              to support trust-building and scalable growth.
            </p>
          </motion.div>

          <motion.div
            className="education-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="education-framework-card"
                variants={cardVariants}
              >
                <div className="framework-step">{step.step}</div>
                <div className="framework-icon">
                  <step.icon size={24} />
                </div>
                <h3 className="framework-title">{step.title}</h3>
                <p className="framework-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section education-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why It Matters</span>
            <h2 className="heading-lg">
              How MD Astra Helps Education & Coaching{' '}
              <span className="text-gradient">Businesses Grow</span>
            </h2>
            <p>Effective education marketing connects <strong>expertise with trust and action</strong>.</p>
          </motion.div>

          <div className="education-benefits-grid">
            <motion.div
              className="education-benefits-card education-benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="education-benefits-card-header">
                <div className="education-benefits-icon education-benefits-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>MD Astra helps education and coaching businesses by:</h3>
              </div>
              <ul className="education-benefits-list">
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
              className="education-benefits-card education-benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="education-benefits-card-header">
                <div className="education-benefits-icon education-benefits-icon-negative">
                  <XCircle size={24} />
                </div>
                <h3>If your education marketing:</h3>
              </div>
              <ul className="education-benefits-list education-benefits-list-negative">
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
              <div className="education-benefits-conclusion">
                <p>Then it's not built for growth.</p>
                <p className="conclusion-highlight">
                  MD Astra builds education and coaching marketing systems that <strong>turn expertise into enrollments and impact</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section education-why-choose" ref={whyChooseRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Education & Coaching Businesses{' '}
              <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="education-why-choose-grid"
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="education-why-choose-card"
                variants={cardVariants}
              >
                <div className="why-choose-icon">
                  <reason.icon size={24} />
                </div>
                <h3 className="why-choose-title">{reason.title}</h3>
                <p className="why-choose-description">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section education-faq" ref={faqRef}>
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
            <p>Education & Coaching Marketing</p>
          </motion.div>

          <motion.div
            className="education-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`education-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="education-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="education-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="education-faq-question">{faq.question}</span>
                  <span className="education-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    className="education-faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ServicePageCTA
        heading={
          <>
            Ready to Scale Your Education or <span className="text-gradient">Coaching Business?</span>
          </>
        }
        subtext="If you want more enrollments, stronger authority, and predictable growth, MD Astra is ready to be your marketing partner."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};

export default EducationIndustry;
