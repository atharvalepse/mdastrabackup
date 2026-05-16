'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  TrendingUp,
  Layers,
  BadgeCheck,
  Users,
  Phone,
  CheckCircle2
} from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Award,
      title: 'Award-Winning Digital Growth Partner',
      description: 'Recognized for delivering measurable business impact—not generic marketing execution.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue-First Strategies, Zero Vanity Metrics',
      description: 'Every campaign is engineered to drive qualified leads, sales, and scalable revenue—not empty traffic.'
    },
    {
      icon: Layers,
      title: 'Industry-Specific Growth Frameworks',
      description: 'Custom SEO and digital marketing systems built for healthcare, ecommerce, real estate, restaurants, and competitive local markets.'
    },
    {
      icon: BadgeCheck,
      title: 'Google Partner-Certified Excellence',
      description: 'Platform-approved, best-practice execution that scales safely and outperforms average agencies.'
    },
    {
      icon: Users,
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts focused on conversion, ROI, and long-term business growth—not account hand-offs.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="section why-choose-us home-why-choose" id="about" ref={ref}>
      <div className="container">
        <div className="why-choose-grid">
          <motion.div
            className="why-choose-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why MD Astra</span>
            <h2 className="heading-lg">
              Why Businesses <span className="text-gradient">Choose</span> MD Astra?
            </h2>

            <motion.ul
              className="reasons-list"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {reasons.map((reason, index) => (
                <motion.li key={index} className="reason-item" variants={itemVariants}>
                  <div className="reason-icon">
                    <reason.icon size={22} />
                  </div>
                  <div className="reason-content">
                    <h4 className="reason-title">{reason.title}</h4>
                    <p className="reason-description">{reason.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="tel:+18557500568"
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Phone size={18} />
              Contact Us: +1 855-750-0568
            </motion.a>
          </motion.div>

          <motion.div
            className="why-choose-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="visual-card">
              <div className="visual-header">
                <span className="visual-badge">MD Astra</span>
                <h3>Growth-Focused Results</h3>
              </div>
              <div className="visual-stats">
                <div className="visual-stat">
                  <div className="stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Increased</span>
                    <span className="stat-value">ROI & Growth</span>
                  </div>
                </div>
                <div className="visual-stat">
                  <div className="stat-icon">
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Targeted</span>
                    <span className="stat-value">Quality Leads</span>
                  </div>
                </div>
                <div className="visual-stat">
                  <div className="stat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Reliable &</span>
                    <span className="stat-value">Proven Process</span>
                  </div>
                </div>
                <div className="visual-stat">
                  <div className="stat-icon">
                    <Award size={20} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Transparent</span>
                    <span className="stat-value">Communication</span>
                  </div>
                </div>
                <div className="visual-stat">
                  <div className="stat-icon">
                    <BadgeCheck size={20} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Time-Saving</span>
                    <span className="stat-value">& Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
