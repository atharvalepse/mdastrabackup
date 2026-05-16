'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, MapPin, BarChart3, CheckCircle } from 'lucide-react';
import LeadConnectorForm from './LeadConnectorForm';
import './Hero.css';

const Hero = () => {
  const valueProps = [
    {
      icon: TrendingUp,
      title: 'Sustained Organic Growth',
      desc: 'Driven by high-intent search demand'
    },
    {
      icon: MapPin,
      title: 'North Carolina-Focused Local SEO',
      desc: 'Strategies aligned with real customer behavior'
    },
    {
      icon: BarChart3,
      title: 'Transparent Performance Tracking',
      desc: 'Tied directly to leads, calls, and conversions'
    }
  ];

  return (
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
            Rank at the Top in{' '}
            <span className="text-gradient">North Carolina</span>{' '}
            with MD Astra
          </motion.h1>

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

      {/* Floating Stats */}
      <div className="hero-floating-stats">
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="stat-number">150%</span>
          <span className="stat-label">Avg. Traffic Growth</span>
        </motion.div>
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="stat-number">10+</span>
          <span className="stat-label">Years Experience</span>
        </motion.div>
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="stat-number">500+</span>
          <span className="stat-label">Clients Served</span>
        </motion.div>
      </div>

      {/* Shape Divider for smooth transition to white section */}
      <div className="hero-shape-divider" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '60px' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="var(--color-bg)"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
