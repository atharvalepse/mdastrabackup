'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import LeadConnectorForm from './LeadConnectorForm';
import './Hero.css';
import './ServiceHero.css';

/**
 * ServiceHero — replicates the SEO Hero design for all service pages.
 *
 * Props:
 *   title       – JSX or string for the main h1 (can include <span className="text-gradient">)
 *   valueProps  – Array of { icon: LucideComponent, title: string, desc: string }
 *   formTitle   – String for the form card heading
 *   formSubtitle – String for the form card subheading
 *   formName    – Internal form name sent to the submission handler
 *   stats       – Array of { number: string, label: string } (max 3)
 *   primaryCta  – { href, label } — overrides default booking link
 *   secondaryCta – { href, label } — overrides default phone link
 */
const ServiceHero = ({
  title,
  valueProps = [],
  formTitle = 'Get Your Free Consultation',
  formSubtitle = 'Transform your business with personalized strategies',
  formName = 'Service Consultation',
  stats = [
    { number: '150%', label: 'Avg. Growth' },
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
  ],
  primaryCta = {
    href: 'https://booking.mdastra.com/Consultation',
    label: 'Book an Appointment',
  },
  secondaryCta = {
    href: 'tel:+18557500568',
    label: 'Contact Us: +1 855-750-0568',
  },
}) => {
  return (
    <section className="hero">
      {/* Video Background */}
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
        {/* Left — Content */}
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {valueProps.length > 0 && (
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
          )}

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={primaryCta.href}
              target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
              rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn btn-primary btn-lg"
            >
              {primaryCta.label}
              <ArrowRight size={18} />
            </a>
            <a href={secondaryCta.href} className="btn btn-secondary btn-lg">
              {secondaryCta.label}
            </a>
          </motion.div>
        </div>

        {/* Right — Form Card */}
        <motion.div
          className="hero-form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="hero-form-card">
            <div className="hero-form-header">
              <h3>{formTitle}</h3>
              <p>{formSubtitle}</p>
            </div>

            <LeadConnectorForm />
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="hero-floating-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="floating-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHero;
