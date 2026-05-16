'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="cta-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={16} />
            <span>Free Consultation Available</span>
          </motion.div>

          <h2 className="cta-title">
            Ready to Turn Traffic Into Paying Customers?
          </h2>

          <p className="cta-description">
            Ready to transform your digital presence? We're excited to help you take
            your business to the next level.
          </p>

          <div className="cta-buttons">
            <motion.a
              href="#contact"
              className="btn btn-primary btn-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MessageCircle size={20} />
              Start a Live Chat
            </motion.a>
            <motion.a
              href="tel:+18557500568"
              className="btn btn-secondary btn-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Phone size={20} />
              Schedule a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
