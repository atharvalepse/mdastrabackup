'use client'
import { motion } from 'framer-motion';
import { Clock, Video, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  const inclusions = [
    'Marketing & funnel review',
    'Personalized growth plan',
    'Clear next steps for scaling'
  ];

  return (
    <main className="booking-page-clean">
      {/* Visual Header Banner */}
      <section className="booking-header-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <motion.h1 
            className="banner-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Consultation Today
          </motion.h1>
        </div>
      </section>

      {/* Embedded Calendar & Sidebar Card */}
      <section className="booking-calendar-section">
        <div className="container">
          <motion.div 
            className="booking-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Sidebar Details */}
            <div className="booking-sidebar">
              <div className="host-profile">
                <div className="host-avatar">M</div>
                <div className="host-info">
                  <div className="host-name">Madhu</div>
                  <div className="host-role">Founder, MD Astra</div>
                </div>
              </div>
              
              <h2 className="session-title">30-Min Strategy Call</h2>
              
              <div className="session-meta">
                <div className="meta-item">
                  <Clock size={18} />
                  <span>30 minutes</span>
                </div>
                <div className="meta-item">
                  <Video size={18} />
                  <span>Google Meet Video Call</span>
                </div>
                <div className="meta-item">
                  <Globe size={18} />
                  <span>US & International timezones</span>
                </div>
              </div>

              <div className="inclusion-box">
                <h4 className="inclusion-title">What's Included</h4>
                <ul className="inclusion-list">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="inclusion-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="trust-badge">
                <ShieldCheck size={16} />
                <span>Secure scheduling verified by LeadConnector</span>
              </div>
            </div>

            {/* Live Booking Frame */}
            <div className="booking-main">
              <iframe
                className="booking-iframe"
                src="https://api.leadconnectorhq.com/widget/booking/OERuH4o3uLORlmS5lqE6"
                title="Book a consultation with MD Astra"
                loading="lazy"
                allow="geolocation"
                scrolling="no"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
