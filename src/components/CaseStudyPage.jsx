'use client'
import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft,
  TrendingUp,
  Target,
  MapPin,
  DollarSign,
  Phone,
  Eye,
  CreditCard,
  BarChart3,
  Users,
  MousePointer,
  ExternalLink,
  Award,
  Calendar,
  ShoppingCart,
  Link2,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Layers,
  Zap,
  X,
  ZoomIn
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudyPage.css';

const iconMap = {
  'target': Target,
  'trending-up': TrendingUp,
  'map-pin': MapPin,
  'phone': Phone,
  'eye': Eye,
  'dollar-sign': DollarSign,
  'credit-card': CreditCard,
  'bar-chart': BarChart3,
  'users': Users,
  'mouse-pointer': MousePointer,
  'external-link': ExternalLink,
  'award': Award,
  'calendar': Calendar,
  'shopping-cart': ShoppingCart,
  'link': Link2,
};

const CaseStudyPage = ({ slug }) => {
  const study = caseStudies.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });

  const challengesRef = useRef(null);
  const challengesInView = useInView(challengesRef, { once: true, margin: '-80px' });

  const strategyRef = useRef(null);
  const strategyInView = useInView(strategyRef, { once: true, margin: '-80px' });

  const resultsRef = useRef(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: '-80px' });

  const imagesRef = useRef(null);
  const imagesInView = useInView(imagesRef, { once: true, margin: '-80px' });

  const learningsRef = useRef(null);
  const learningsInView = useInView(learningsRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

  /* Lightbox state */
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = useCallback((src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt('');
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxSrc, closeLightbox]);

  if (!study) {
    return (
      <div className="cs-page">
        <div className="container cs-not-found">
          <h2>Case Study Not Found</h2>
          <p>The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies" className="btn btn-primary">
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="cs-page">
      {/* Hero Section */}
      <section className="cs-hero" ref={heroRef}>
        <div className="cs-hero-bg">
          <div className="cs-hero-gradient" />
          <div className="cs-hero-pattern" />
        </div>
        <div className="container">
          <motion.div
            className="cs-hero-content"
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href="/case-studies" className="cs-breadcrumb">
                <ArrowLeft size={16} />
                <span>All Case Studies</span>
              </Link>
            </motion.div>

            <motion.span
              className="cs-category-badge"
              style={{ background: study.categoryBg, color: study.categoryColor }}
              variants={itemVariants}
            >
              {study.category}
            </motion.span>

            <motion.h1 className="heading-xl cs-hero-title" variants={itemVariants}>
              {study.title}
            </motion.h1>

            <motion.p className="cs-hero-subtitle" variants={itemVariants}>
              {study.subtitle}
            </motion.p>

            {/* Client Info Cards */}
            <motion.div className="cs-client-grid" variants={containerVariants}>
              {[
                { label: 'Industry', value: study.client.industry, icon: Layers },
                { label: 'Location', value: study.client.location, icon: MapPin },
                { label: 'Channel', value: study.client.channel, icon: Zap },
                { label: 'Duration', value: study.client.duration, icon: Calendar },
              ].map((item, i) => (
                <motion.div key={i} className="cs-client-card" variants={itemVariants}>
                  <div className="cs-client-card-icon" style={{ color: study.categoryColor }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span className="cs-client-card-label">{item.label}</span>
                    <span className="cs-client-card-value">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objective & Challenges */}
      <section className="section cs-challenges" ref={challengesRef}>
        <div className="container">
          <div className="cs-two-col">
            <motion.div
              className="cs-objective-block"
              initial="hidden"
              animate={challengesInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <div className="cs-block-header">
                <div className="cs-block-icon cs-block-icon--primary">
                  <Target size={22} />
                </div>
                <h2 className="heading-md">Business Objective</h2>
              </div>
              <div className={`cs-objective-layout${study.objectiveImage ? '' : ' cs-objective-layout--text-only'}`}>
                <div className="cs-objective-content">
                  <p className="cs-objective-text">{study.objective}</p>
                  {study.goals && study.goals.length > 0 && (
                    <ul className="cs-goals-list">
                      {study.goals.map((goal, i) => (
                        <li key={i}>
                          <CheckCircle size={16} />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {study.objectiveImage && (
                  <motion.div
                    className="cs-objective-visual cs-lightbox-trigger"
                    initial={{ opacity: 0, x: 20 }}
                    animate={challengesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    onClick={() => openLightbox(study.objectiveImage, `${study.title} — Business Objectives`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(study.objectiveImage, `${study.title} — Business Objectives`); }}
                  >
                    <img src={study.objectiveImage} alt={`${study.title} — Business Objectives`} loading="lazy" />
                    <span className="cs-lightbox-hint"><ZoomIn size={18} /></span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="cs-challenges-block"
              initial="hidden"
              animate={challengesInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
            >
              <div className="cs-block-header">
                <div className="cs-block-icon cs-block-icon--warning">
                  <AlertTriangle size={22} />
                </div>
                <h2 className="heading-md">Initial Challenges</h2>
              </div>
              <div className={`cs-challenges-layout${study.challengesImage ? '' : ' cs-challenges-layout--text-only'}`}>
                <ul className="cs-challenges-list">
                  {study.challenges.map((challenge, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={challengesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
                    >
                      <AlertTriangle size={16} />
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
                {study.challengesImage && (
                  <motion.div
                    className="cs-challenges-visual cs-lightbox-trigger"
                    initial={{ opacity: 0, x: 20 }}
                    animate={challengesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    onClick={() => openLightbox(study.challengesImage, `${study.title} — Initial Challenges`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(study.challengesImage, `${study.title} — Initial Challenges`); }}
                  >
                    <img src={study.challengesImage} alt={`${study.title} — Initial Challenges`} loading="lazy" />
                    <span className="cs-lightbox-hint"><ZoomIn size={18} /></span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy / Phases Timeline */}
      <section className="section section-alt cs-strategy" ref={strategyRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={strategyInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <span className="overline">Strategy & Execution</span>
            <h2 className="heading-lg">
              Our <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>A phased approach designed for measurable, sustainable results.</p>
          </motion.div>

          <div className="cs-timeline">
            {study.phases.map((phase, i) => (
              <motion.div
                key={i}
                className="cs-timeline-item"
                initial={{ opacity: 0, y: 30 }}
                animate={strategyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              >
                <div className="cs-timeline-marker">
                  <span className="cs-timeline-step" style={{ background: study.categoryColor }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < study.phases.length - 1 && <div className="cs-timeline-line" />}
                </div>
                <div className="cs-timeline-content">
                  <h3 className="cs-phase-title">{phase.title}</h3>
                  <div className="cs-phase-body">
                    <div className="cs-phase-actions">
                      <span className="cs-phase-actions-label">Actions Taken</span>
                      <ul>
                        {phase.actions.map((action, j) => (
                          <li key={j}>
                            <ChevronRight size={14} />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="cs-phase-outcome">
                      <span className="cs-phase-outcome-label">Outcome</span>
                      <p>{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section cs-results" ref={resultsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={resultsInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <span className="overline">Performance Impact</span>
            <h2 className="heading-lg">
              The <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="cs-metrics-grid"
            initial="hidden"
            animate={resultsInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {study.results.metrics.map((metric, i) => {
              const IconComp = iconMap[metric.icon] || TrendingUp;
              return (
                <motion.div
                  key={i}
                  className="cs-metric-card"
                  variants={itemVariants}
                  style={{ '--metric-color': study.categoryColor }}
                >
                  <div className="cs-metric-icon" style={{ background: study.categoryBg, color: study.categoryColor }}>
                    <IconComp size={22} />
                  </div>
                  <div className="cs-metric-value">{metric.value}</div>
                  <div className="cs-metric-label">{metric.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Before/After Comparison Table */}
          {study.results.comparison && (
            <motion.div
              className="cs-comparison"
              initial="hidden"
              animate={resultsInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <h3 className="cs-comparison-title">Before vs. After Optimization</h3>
              <div className="cs-comparison-table">
                <div className="cs-comparison-header">
                  {study.results.comparison.headers.map((h, i) => (
                    <div key={i} className={`cs-comparison-cell ${i === 0 ? 'cs-comparison-cell--label' : ''} ${i === 2 ? 'cs-comparison-cell--highlight' : ''}`}>
                      {h}
                    </div>
                  ))}
                </div>
                {study.results.comparison.rows.map((row, i) => (
                  <motion.div
                    key={i}
                    className="cs-comparison-row"
                    initial={{ opacity: 0, x: -10 }}
                    animate={resultsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    {row.map((cell, j) => (
                      <div key={j} className={`cs-comparison-cell ${j === 0 ? 'cs-comparison-cell--label' : ''} ${j === 2 ? 'cs-comparison-cell--highlight' : ''}`}>
                        {cell}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Metrics */}
          {study.results.additionalMetrics && (
            <motion.div
              className="cs-additional-metrics"
              initial="hidden"
              animate={resultsInView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              {study.results.additionalMetrics.map((m, i) => (
                <motion.div key={i} className="cs-additional-metric" variants={itemVariants}>
                  <span className="cs-additional-metric-value">{m.value}</span>
                  <span className="cs-additional-metric-label">{m.label}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Top Pages */}
          {study.results.topPages && study.results.topPages.length > 0 && (
            <motion.div
              className="cs-top-pages"
              initial="hidden"
              animate={resultsInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <h3 className="cs-top-pages-title">Top Performing Pages</h3>
              <ul className="cs-top-pages-list">
                {study.results.topPages.map((page, i) => (
                  <li key={i}>
                    <span className="cs-top-page-rank">#{i + 1}</span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
              {study.results.topPagesInsight && (
                <p className="cs-top-pages-insight">
                  <Lightbulb size={16} />
                  {study.results.topPagesInsight}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Performance Screenshots */}
      {study.images && study.images.length > 0 && (
        <section className="section section-alt cs-images" ref={imagesRef}>
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              animate={imagesInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <span className="overline">Evidence</span>
              <h2 className="heading-lg">
                Performance <span className="text-gradient">Screenshots</span>
              </h2>
            </motion.div>

            <div className={`cs-images-grid cs-images-grid--${study.images.length === 1 ? 'single' : study.images.length === 2 ? 'double' : 'triple'}`}>
              {study.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="cs-image-card"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={imagesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                >
                  <div className="cs-image-wrapper">
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </div>
                  <p className="cs-image-caption">{img.caption}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Learnings & Conclusion */}
      <section className="section cs-learnings" ref={learningsRef}>
        <div className="container">
          <div className="cs-two-col cs-two-col--learnings">
            <motion.div
              className="cs-learnings-block"
              initial="hidden"
              animate={learningsInView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <div className="cs-block-header">
                <div className="cs-block-icon cs-block-icon--accent">
                  <Lightbulb size={22} />
                </div>
                <h2 className="heading-md">Key Learnings</h2>
              </div>
              <ul className="cs-learnings-list">
                {study.learnings.map((learning, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <span className="cs-learning-icon" style={{ background: study.categoryBg, color: study.categoryColor }}>
                      <CheckCircle size={16} />
                    </span>
                    <span>{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="cs-conclusion-block"
              initial="hidden"
              animate={learningsInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="cs-block-header">
                <div className="cs-block-icon cs-block-icon--success">
                  <Award size={22} />
                </div>
                <h2 className="heading-md">Conclusion</h2>
              </div>
              <p className="cs-conclusion-text">{study.conclusion}</p>
              <div className="cs-conclusion-cta">
                <Link href="/contact" className="btn btn-primary btn-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                  Get Similar Results
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation: Prev/Next */}
      <section className="section section-alt cs-nav-section" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="cs-nav-grid"
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href={`/case-studies/${prevStudy.slug}`} className="cs-nav-card cs-nav-card--prev" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                <span className="cs-nav-direction">
                  <ArrowLeft size={14} />
                  Previous Case Study
                </span>
                <span className="cs-nav-title">{prevStudy.title}</span>
                <span className="cs-nav-badge" style={{ background: prevStudy.categoryBg, color: prevStudy.categoryColor }}>
                  {prevStudy.category}
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href={`/case-studies/${nextStudy.slug}`} className="cs-nav-card cs-nav-card--next" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                <span className="cs-nav-direction">
                  Next Case Study
                  <ArrowRight size={14} />
                </span>
                <span className="cs-nav-title">{nextStudy.title}</span>
                <span className="cs-nav-badge" style={{ background: nextStudy.categoryBg, color: nextStudy.categoryColor }}>
                  {nextStudy.category}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal (portal to body to escape stacking contexts) */}
      {lightboxSrc && createPortal(
        <div
          className="cs-lightbox-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            cursor: 'zoom-out',
          }}
          onClick={closeLightbox}
        >
          <button className="cs-lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <X size={24} />
          </button>
          <motion.img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="cs-lightbox-img"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default CaseStudyPage;
