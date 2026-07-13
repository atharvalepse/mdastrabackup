'use client'
import { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
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
  ArrowUpRight,
  Layers,
  Search,
  Filter,
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudiesPage.css';

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

const categories = ['All', ...new Set(caseStudies.map((s) => s.category))];

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesCategory =
        activeCategory === 'All' || study.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.client.industry.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="csp">
      {/* Hero */}
      <section className="csp-hero" ref={heroRef}>
        <div className="csp-hero-bg">
          <div className="csp-hero-gradient" />
          <div className="csp-hero-pattern" />
        </div>
        <div className="container">
          <motion.div
            className="csp-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Proven Results</span>
            <h1 className="heading-xl">
              Our <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="csp-hero-desc">
              Real campaigns. Real numbers. Explore how MD Astra drives
              measurable growth for businesses across industries through SEO,
              Google Ads, Meta Ads, and local marketing.
            </p>

            {/* Stats bar */}
            <motion.div
              className="csp-stats"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="csp-stat">
                <span className="csp-stat-value">{caseStudies.length}</span>
                <span className="csp-stat-label">Case Studies</span>
              </div>
              <div className="csp-stat-divider" />
              <div className="csp-stat">
                <span className="csp-stat-value">{categories.length - 1}</span>
                <span className="csp-stat-label">Service Categories</span>
              </div>
              <div className="csp-stat-divider" />
              <div className="csp-stat">
                <span className="csp-stat-value">10+</span>
                <span className="csp-stat-label">Industries Served</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="csp-filters-section">
        <div className="container">
          <div className="csp-filters">
            <div className="csp-search-wrap">
              <Search size={18} className="csp-search-icon" />
              <input
                type="text"
                className="csp-search input"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search case studies"
              />
            </div>
            <div className="csp-category-tabs" role="tablist" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`csp-tab${activeCategory === cat ? ' csp-tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat === 'All' && <Filter size={14} />}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section csp-grid-section" ref={gridRef}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="csp-empty">
              <Search size={40} />
              <h3>No case studies found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <motion.div
              className="csp-grid"
              variants={containerVariants}
              initial="hidden"
              animate={gridInView ? 'visible' : 'hidden'}
              key={activeCategory + searchQuery}
            >
              {filtered.map((study, index) => {
                const isFeature = index === 0 && activeCategory === 'All' && searchQuery === '';
                return (
                  <motion.article
                    key={study.slug}
                    className={`csp-card${isFeature ? ' csp-card--featured' : ''}`}
                    variants={cardVariants}
                    style={{
                      '--card-accent': study.categoryColor,
                      '--card-accent-bg': study.categoryBg,
                    }}
                  >
                    {/* Thumbnail area */}
                    {study.images && study.images.length > 0 && (
                      <div className="csp-card-thumb">
                        <img
                          src={study.images[0].src}
                          alt={study.images[0].caption}
                          loading="lazy"
                        />
                        <div className="csp-card-thumb-overlay" />
                      </div>
                    )}

                    <div className="csp-card-body">
                      {/* Category + Industry */}
                      <div className="csp-card-meta">
                        <span
                          className="csp-card-badge"
                          style={{
                            background: study.categoryBg,
                            color: study.categoryColor,
                          }}
                        >
                          {study.category}
                        </span>
                        <span className="csp-card-industry">
                          <Layers size={13} />
                          {study.client.industry}
                        </span>
                      </div>

                      <h2 className="csp-card-title">
                        <Link href={`/case-studies/${study.slug}`}>
                          {study.title}
                        </Link>
                      </h2>

                      <p className="csp-card-subtitle">{study.subtitle}</p>

                      {/* Key metrics */}
                      <div className="csp-card-metrics">
                        {study.results.metrics.slice(0, isFeature ? 4 : 2).map((metric, i) => {
                          const IconComp = iconMap[metric.icon] || TrendingUp;
                          return (
                            <div key={i} className="csp-card-metric">
                              <IconComp size={16} className="csp-card-metric-icon" />
                              <span className="csp-card-metric-value">{metric.value}</span>
                              <span className="csp-card-metric-label">{metric.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Location + Duration */}
                      <div className="csp-card-details">
                        <span className="csp-card-detail">
                          <MapPin size={14} />
                          {study.client.location}
                        </span>
                        <span className="csp-card-detail">
                          <Calendar size={14} />
                          {study.client.duration}
                        </span>
                      </div>

                      {/* Conclusion excerpt */}
                      {isFeature && (
                        <p className="csp-card-excerpt">
                          {study.conclusion.length > 200
                            ? study.conclusion.substring(0, 200) + '...'
                            : study.conclusion}
                        </p>
                      )}

                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="csp-card-link"
                      >
                        Read Full Case Study
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section csp-cta">
        <div className="container">
          <div className="csp-cta-inner">
            <h2 className="heading-lg">
              Ready for <span className="text-gradient">Similar Results</span>?
            </h2>
            <p>
              Let MD Astra build a custom growth strategy for your business.
              Schedule a free consultation today.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Started
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
