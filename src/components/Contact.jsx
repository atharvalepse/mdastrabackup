'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import LeadConnectorForm from './LeadConnectorForm';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Apex, North Carolina, 27502, USA',
      color: '#00e5c0'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 855-750-0568',
      link: 'tel:+18557500568',
      color: '#7c5cff'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mdastra.com',
      link: 'mailto:info@mdastra.com',
      color: '#ff6b9d'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM', 'Sun: Closed'],
      color: '#ffb347'
    }
  ];



  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Get In Touch</span>
            <h2 className="heading-lg">
              Schedule a <span className="text-gradient">Consultation!</span>
            </h2>
            <p className="contact-description">
              Start Your Journey Today! Whether you have a question about our services,
              need a custom strategy, or want to start a project, we'd love to hear from you.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  style={{ '--card-accent': info.color }}
                >
                  <div className="contact-card-icon">
                    <info.icon size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : Array.isArray(info.content) ? (
                      info.content.map((line, i) => <span key={i}>{line}</span>)
                    ) : (
                      <span>{info.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h3>Start Your Journey Today!!</h3>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              <LeadConnectorForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
