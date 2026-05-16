'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Megaphone,
  Instagram,
  Globe,
  Star,
  Search,
  Target,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Phone,
  BarChart3
} from 'lucide-react';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import Contact from './Contact';
import './RestaurantIndustry.css';

const RestaurantIndustry = () => {
  const restaurantValueProps = [
    {
      icon: Target,
      title: 'Local Customers',
      desc: 'High-intent local targeting'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      desc: 'Drive orders and foot traffic'
    },
    {
      icon: BarChart3,
      title: 'ROI Tracking',
      desc: 'Clear visibility into performance'
    }
  ];

  return (
    <div className="restaurant-industry">
      <ServiceHero
        title={
          <>
            Restaurant Digital Marketing & <span className="text-gradient">Growth Partner</span>
          </>
        }
        valueProps={restaurantValueProps}
        formTitle="Get Your Free Restaurant Marketing Audit"
        formSubtitle="Built to Drive Foot Traffic, Orders & Repeat Customers"
        formName="Restaurant Marketing Consultation"
        primaryCta={{
          href: 'https://booking.mdastra.com/Consultation',
          label: 'Book a Free Strategy Call',
        }}
        secondaryCta={{
          href: 'tel:+18557500568',
          label: 'Contact Us: +1 855-750-0568',
        }}
      />
      <IntroSection />
      <ServicesSection />
      <FrameworkSection />
      <BenefitsSection />
      <WhyChooseSection />
      <FAQSection />
      <ServicePageCTA
        heading={
          <>
            Ready to Grow Your <span className="text-gradient">Restaurant?</span>
          </>
        }
        subtext="If you want more customers, stronger local visibility, and predictable revenue growth, MD Astra is ready to partner with your restaurant."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />
      <Contact />
    </div>
  );
};



// Intro Section
const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          className="restaurant-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-center">
            Restaurant Marketing Designed to Drive Real Revenue
          </h2>
          <div className="restaurant-intro-content">
            <p>
              Restaurant marketing isn't about likes or reach—it's about <strong>getting customers through the door, increasing orders, and building repeat business</strong>. MD Astra partners with restaurants to build <strong>conversion-focused digital marketing systems</strong> that turn local search and social visibility into measurable sales.
            </p>
            <p className="restaurant-tagline">
              We market restaurants like <strong>revenue-driven local businesses</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MapPin,
      title: 'Local Visibility & Google Maps Growth',
      items: [
        'Google Business Profile optimization',
        '"Near me" and cuisine-based local SEO',
        'Maps visibility for dine-in, takeout & catering'
      ]
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising for Orders & Visits',
      items: [
        'Google Ads for high-intent searches',
        'Meta Ads for offers, events & promotions',
        'Call, direction & order-focused campaigns'
      ]
    },
    {
      icon: Instagram,
      title: 'Social Media Marketing & Content',
      items: [
        'Instagram & Facebook content creation',
        'Reels, food visuals & promotional creatives',
        'Organic engagement & community building'
      ]
    },
    {
      icon: Globe,
      title: 'Website & Conversion Optimization',
      items: [
        'Restaurant website optimization',
        'Menu visibility & mobile UX',
        'Click-to-call, directions & order CTAs'
      ]
    },
    {
      icon: Star,
      title: 'Reviews, Reputation & Loyalty',
      items: [
        'Review generation strategy',
        'SEO-friendly review responses',
        'Trust & repeat-visit optimization'
      ]
    },
    {
      icon: Calendar,
      title: 'Email Marketing & Customer Retention',
      items: [
        'Email campaigns for specials & seasonal menus',
        'Automated follow-ups to drive repeat visits',
        'Customer loyalty and re-engagement sequences'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">What We Deliver</h2>
          <p>Restaurant Marketing Services Built for Growth</p>
        </motion.div>

        <div className="restaurant-services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="restaurant-service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <service.icon size={28} />
              </div>
              <h3>{service.title}</h3>
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
        </div>
      </div>
    </section>
  );
};

// Framework Section
const FrameworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Local Demand & Customer Intent Analysis',
      description: 'We analyze how customers search for restaurants—by cuisine, location, timing, and intent (dine-in, takeout, catering).'
    },
    {
      number: '2',
      icon: MapPin,
      title: 'Visibility Across Search, Maps & Social',
      description: 'We ensure your restaurant appears where customers decide—Google Search, Google Maps, Instagram, and Facebook.'
    },
    {
      number: '3',
      icon: Calendar,
      title: 'Offer & Promotion Strategy',
      description: 'Seasonal offers, events, and promotions are built into campaigns to drive urgency and action.'
    },
    {
      number: '4',
      icon: Target,
      title: 'Conversion & Action Optimization',
      description: 'Campaigns are optimized for calls, directions, reservations, and orders, not just views.'
    },
    {
      number: '5',
      icon: TrendingUp,
      title: 'Tracking, Optimization & Scaling',
      description: 'We track what drives real customers—then double down on what works and eliminate wasted spend.'
    },
    {
      number: '6',
      icon: Star,
      title: 'Customer Retention & Loyalty Marketing',
      description: 'We build email sequences, loyalty campaigns, and re-engagement strategies that turn first-time diners into regulars.'
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">Our Restaurant Growth Framework</h2>
          <p>From Local Discovery to Repeat Customers</p>
        </motion.div>

        <motion.p
          className="framework-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          MD Astra executes restaurant marketing using a <strong>structured local growth framework</strong> designed to drive immediate and long-term revenue.
        </motion.p>

        <div className="framework-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="framework-step"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">
                  <step.icon size={24} />
                </div>
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    'Increasing visibility for "restaurant near me" searches',
    'Driving more dine-in, takeout, and catering orders',
    'Improving weekday and off-peak traffic',
    'Building strong local brand recognition',
    'Turning first-time diners into repeat customers',
    'Maximizing revenue from delivery and catering channels'
  ];

  const painPoints = [
    'Gets likes but no customers',
    'Has Google Maps visibility but no calls',
    'Runs ads without clear ROI',
    'Lacks consistent promotions or strategy'
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">How MD Astra Helps Restaurants Grow</h2>
        </motion.div>

        <motion.p
          className="benefits-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Effective restaurant marketing connects <strong>local intent with immediate action</strong>.
        </motion.p>

        <div className="benefits-grid">
          <motion.div
            className="benefits-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>MD Astra helps restaurants by:</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <CheckCircle2 size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="benefits-card benefits-card-warning"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>If your restaurant marketing:</h3>
            <ul className="pain-points-list">
              {painPoints.map((point, index) => (
                <li key={index}>
                  <span className="warning-dot"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="pain-points-conclusion">
              Then it's not built for growth.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="benefits-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          MD Astra builds restaurant marketing systems that <strong>turn hunger-driven searches into paying customers</strong>.
        </motion.p>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: 'Restaurant-Specific Growth Expertise',
      description: 'Strategies built specifically for food, hospitality, and local competition.'
    },
    {
      title: 'Local Intent & Timing Mastery',
      description: 'We capture customers when they\'re ready to eat—not just browsing.'
    },
    {
      title: 'Paid + Organic Marketing Under One Roof',
      description: 'Google Ads, Meta Ads, social content, SEO, and GMB fully aligned.'
    },
    {
      title: 'Revenue-Driven Campaign Execution',
      description: 'Focused on orders, visits, and repeat business—not vanity metrics.'
    },
    {
      title: 'Transparent Reporting & Performance Tracking',
      description: 'Clear insights into calls, visits, orders, and ROI.'
    },
    {
      title: 'Seasonal & Event-Driven Campaign Expertise',
      description: 'Promotions, holiday menus, and local events turned into high-converting campaigns.'
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">Why Restaurants Choose MD Astra</h2>
        </motion.div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-choose-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="why-choose-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: 'Do you work with single-location and multi-location restaurants?',
      answer: 'Yes. MD Astra supports both single-location and multi-location restaurant brands.'
    },
    {
      question: 'Can you help increase dine-in and takeout orders?',
      answer: 'Absolutely. Our strategies are designed to drive calls, directions, reservations, and online orders.'
    },
    {
      question: 'Do you manage social media for restaurants?',
      answer: 'Yes. We manage organic Instagram & Facebook marketing, including food visuals, reels, and promotions.'
    },
    {
      question: 'How fast can restaurant marketing show results?',
      answer: 'Paid campaigns and Google Maps optimization can drive results within weeks, while SEO and brand growth compound over time.'
    },
    {
      question: 'Do you help with Google reviews?',
      answer: 'Yes. We implement review growth and response strategies to build trust and improve rankings.'
    },
    {
      question: 'Can you help with delivery platform and catering marketing?',
      answer: 'Yes. We optimize your presence on delivery platforms and run targeted campaigns to grow catering and large-order revenue.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p>Restaurant Marketing</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantIndustry;
