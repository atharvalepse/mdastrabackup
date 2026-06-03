'use client'
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Mail, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <main className="thankyou-page">
      {/* Background blobs for aesthetics */}
      <div className="thankyou-bg-blob"></div>
      <div className="thankyou-bg-blob-2"></div>

      <div className="thankyou-container">
        <motion.div 
          className="thankyou-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated checkmark icon */}
          <motion.div 
            className="thankyou-icon-wrapper"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <CheckCircle2 size={48} />
          </motion.div>

          <h1 className="thankyou-title">Thank You!</h1>
          
          <p className="thankyou-subtitle">
            Your appointment request has been successfully booked. We look forward to helping you scale your digital presence.
          </p>

          {/* Booking Info box */}
          <div className="thankyou-info-box">
            <h4 className="thankyou-info-title">What happens next?</h4>
            <div className="thankyou-info-list">
              <div className="thankyou-info-item">
                <Calendar size={18} />
                <span>We sent a confirmation email with a Google Meet calendar link. Please check your inbox (and spam/promotions folder).</span>
              </div>
              <div className="thankyou-info-item">
                <Mail size={18} />
                <span>Our founder, Madhu, will review your submission before our scheduled strategy call.</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="thankyou-actions">
            <Link href="/" className="btn btn-primary">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <Link href="/case-studies" className="btn btn-secondary">
              <span>View Case Studies</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ThankYou;
