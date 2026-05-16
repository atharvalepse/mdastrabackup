'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    'Increasing visibility for high-intent searches in Raleigh, Charlotte, Cary, and surrounding cities',
    'Outranking competitors for "near me" and city-based keywords',
    'Turning website traffic into calls, bookings, and appointments',
    'Driving consistent leads from Google Search and Maps',
    'Providing clear reporting and measurable outcomes'
  ];

  const painPoints = [
    'Poor page-1 rankings',
    'A Google Business Profile that doesn\'t generate calls',
    'Traffic without conversions',
    'Unclear SEO reporting or strategy'
  ];

  return (
    <section className="section benefits home-benefits" id="benefits" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Why SEO Matters</span>
          <h2 className="heading-lg">
            How SEO Helps North Carolina{' '}
            <span className="text-gradient">Business Owners</span>
          </h2>
          <p>
            Turn Google Searches into Predictable Business Growth
          </p>
        </motion.div>

        <div className="benefits-grid">
          <motion.div
            className="benefits-card benefits-positive"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="benefits-card-header">
              <div className="benefits-icon benefits-icon-positive">
                <CheckCircle2 size={24} />
              </div>
              <h3>SEO helps NC businesses by:</h3>
            </div>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
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
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="benefits-card-header">
              <div className="benefits-icon benefits-icon-negative">
                <XCircle size={24} />
              </div>
              <h3>If you've experienced:</h3>
            </div>
            <ul className="benefits-list benefits-list-negative">
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
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
              <p>Then SEO hasn't been aligned with business growth.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="benefits-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            MD Astra builds SEO campaigns that are{' '}
            <strong>transparent, predictable, and focused on attracting qualified customers</strong>
            —not just clicks.
          </p>
          <a href="tel:+18557500568" className="btn btn-primary">
            <Phone size={18} />
            Contact Us: +1 855-750-0568
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
