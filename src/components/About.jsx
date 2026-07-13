'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Contact from './Contact';
import './About.css';

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const partnerRef = useRef(null);
  const partnerInView = useInView(partnerRef, { once: true, margin: "-100px" });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const values = [
    {
      number: '01',
      title: 'Integrity',
      description: 'We believe in building trust through honest, transparent communication and ethical practices in every aspect of our work.'
    },
    {
      number: '02',
      title: 'Excellence',
      description: 'We are committed to delivering top-quality results by staying on the cutting edge of digital marketing trends and continuously improving our skills and strategies.'
    },
    {
      number: '03',
      title: 'Collaboration',
      description: 'We see our clients as partners, working closely together to understand their goals and create tailored solutions that drive success.'
    },
    {
      number: '04',
      title: 'Innovation',
      description: 'We embrace creativity and innovation, constantly exploring new ways to solve challenges and deliver exceptional digital marketing strategies.'
    },
    {
      number: '05',
      title: 'Customer-Centricity',
      description: 'Our clients\' needs are at the heart of everything we do. We focus on providing personalized services that meet their unique business objectives.'
    },
    {
      number: '06',
      title: 'Accountability',
      description: 'We take full responsibility for our actions and results, ensuring that our clients receive the highest level of service and measurable outcomes.'
    }
  ];

  const highlights = [
    'A passionate team dedicated to your growth',
    'Affordable, premium-quality services',
    'Ready to elevate your brand\'s digital presence to new heights'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="section about-hero" ref={heroRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl about-hero-title">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="about-hero-subtitle">
              Creating impactful, audience-driven solutions that deliver real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted Partner */}
      <section className="section section-alt about-partner" ref={partnerRef}>
        <div className="container">
          <motion.div
            className="about-partner-card"
            initial={{ opacity: 0, y: 40 }}
            animate={partnerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-partner-image">
              <img src="/about/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443-1024x768.jpg" alt="MD Astra team collaborating" loading="lazy" />
            </div>
            <div className="about-partner-content">
              <h2 className="heading-md about-partner-title">
                <span className="text-gradient">Trusted & Strategic Digital Partner</span>
              </h2>
              <p className="about-partner-description">
                At MD Astra, we collaborate with you to craft strategies that engage and
                inspire your audience. With a commitment to excellence, we ensure your
                brand stands out in a competitive digital landscape.
              </p>
              <ul className="about-partner-highlights">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={partnerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="/contact"
                className="btn btn-primary"
                initial={{ opacity: 0, y: 10 }}
                animate={partnerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section about-values" ref={valuesRef}>
        <div className="container">
          <div className="about-values-grid">
            <motion.div
              className="about-values-list"
              variants={containerVariants}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="about-value-item"
                  variants={itemVariants}
                >
                  <div className="about-value-number">{value.number}</div>
                  <div className="about-value-content">
                    <h3 className="about-value-title">{value.title}</h3>
                    <p className="about-value-description">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="about-values-image"
              initial={{ opacity: 0, x: 40 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="/about/the-best-moment-is-checking-the-results-of-work-2024-11-28-10-59-52-utc.webp" alt="MD Astra team working together" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </main>
  );
};

export default About;
