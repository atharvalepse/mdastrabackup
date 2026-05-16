'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import './ServicePageCTA.css';

/**
 * ServicePageCTA — mid-page call-to-action banner.
 *
 * Props:
 *   heading   – Main headline text (JSX or string)
 *   subtext   – Supporting paragraph text
 *   cta1      – { href, label, icon? } — primary CTA
 *   cta2      – { href, label, icon? } — secondary CTA
 *   cta3      – { href, label, icon? } — tertiary CTA (outline)
 */
const ServicePageCTA = ({
  heading,
  subtext,
  cta1 = {
    href: 'https://booking.mdastra.com/Consultation',
    label: 'Book a Free Consultation',
  },
  cta2 = {
    href: 'tel:+18557500568',
    label: 'Call +1 855-750-0568',
  },
  cta3 = {
    href: '#contact',
    label: 'Send Us a Message',
  },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="svc-cta-banner" ref={ref}>
      {/* Animated background glows */}
      <div className="svc-cta-glow svc-cta-glow-left" aria-hidden="true" />
      <div className="svc-cta-glow svc-cta-glow-right" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="svc-cta-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="svc-cta-text">
            <motion.h2
              className="svc-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {heading}
            </motion.h2>
            {subtext && (
              <motion.p
                className="svc-cta-subtext"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                {subtext}
              </motion.p>
            )}
          </div>

          <motion.div
            className="svc-cta-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <a
              href={cta1.href}
              target={cta1.href.startsWith('http') ? '_blank' : undefined}
              rel={cta1.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn svc-cta-btn-primary"
            >
              {cta1.icon ? <cta1.icon size={18} /> : <Calendar size={18} />}
              {cta1.label}
              <ArrowRight size={16} />
            </a>

            <a href={cta2.href} className="btn svc-cta-btn-secondary">
              {cta2.icon ? <cta2.icon size={18} /> : <Phone size={18} />}
              {cta2.label}
            </a>

            <a href={cta3.href} className="btn svc-cta-btn-outline">
              {cta3.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePageCTA;
