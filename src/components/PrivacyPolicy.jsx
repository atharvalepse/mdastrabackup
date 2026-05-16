'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  const sections = [
    {
      id: 'introduction',
      number: '1',
      title: 'Introduction',
      content: (
        <>
          <p>MD Astra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit mdastra.com or engage with our digital marketing services.</p>
          <p>By using our website, you agree to the practices described in this policy. If you do not agree, please discontinue use of our site.</p>
        </>
      )
    },
    {
      id: 'information-we-collect',
      number: '2',
      title: 'Information We Collect',
      content: (
        <>
          <h4>a) Information You Provide Directly</h4>
          <p>When you fill out our contact form, book an appointment, or request a free strategy call, we may collect:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Website URL</li>
            <li>Business name and industry</li>
            <li>Any messages or inquiries you submit</li>
          </ul>
          
          <h4>b) Information Collected Automatically</h4>
          <p>When you visit mdastra.com, we automatically collect:</p>
          <ul>
            <li>IP address and approximate location</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on site</li>
            <li>Referral source</li>
            <li>Click and scroll behavior</li>
          </ul>
          
          <h4>c) Information from Third-Party Platforms</h4>
          <p>As a Google Partner-certified agency, we may receive performance and analytics data through:</p>
          <ul>
            <li><strong>Google Analytics 4 (GA4)</strong> — website traffic and conversion tracking</li>
            <li><strong>Google Ads</strong> — ad performance and lead attribution</li>
            <li><strong>Meta Ads (Facebook & Instagram)</strong> — campaign data and pixel tracking</li>
            <li><strong>LeadConnectorHQ / GoHighLevel</strong> — appointment booking and CRM</li>
            <li><strong>Google Business Profile</strong> — local search performance</li>
          </ul>
        </>
      )
    },
    {
      id: 'how-we-use',
      number: '3',
      title: 'How We Use Your Information',
      content: (
        <>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and schedule strategy calls</li>
            <li>Deliver and manage our digital marketing services</li>
            <li>Send relevant communications about your account or campaigns</li>
            <li>Analyze website performance and optimize user experience</li>
            <li>Track leads, calls, bookings, and conversions</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing emails or updates (you may opt out at any time)</li>
          </ul>
          <p><strong>We do not sell your personal information to third parties.</strong></p>
        </>
      )
    },
    {
      id: 'cookies',
      number: '4',
      title: 'Cookies and Tracking Technologies',
      content: (
        <>
          <p>Our website uses cookies and similar tracking technologies:</p>
          <div className="cookie-table">
            <div className="cookie-row cookie-header">
              <span>Cookie Type</span>
              <span>Purpose</span>
            </div>
            <div className="cookie-row">
              <span>Essential Cookies</span>
              <span>Required for the website to function</span>
            </div>
            <div className="cookie-row">
              <span>Analytics Cookies</span>
              <span>Track usage via Google Analytics 4</span>
            </div>
            <div className="cookie-row">
              <span>Advertising Cookies</span>
              <span>Enable remarketing via Google & Meta pixels</span>
            </div>
            <div className="cookie-row">
              <span>Functional Cookies</span>
              <span>Remember preferences and form inputs</span>
            </div>
          </div>
          <p>You may disable cookies in your browser settings. Doing so may affect certain website features.</p>
        </>
      )
    },
    {
      id: 'third-party',
      number: '5',
      title: 'Third-Party Services',
      content: (
        <>
          <p>We use trusted third-party platforms that may access your data solely to perform services on our behalf:</p>
          <ul>
            <li><strong>Google LLC</strong> — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Meta Platforms, Inc.</strong> — <a href="https://www.meta.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a></li>
            <li><strong>LeadConnectorHQ / GoHighLevel</strong> — <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer">GoHighLevel Privacy Policy</a></li>
          </ul>
          <p>These parties are not permitted to use your data for any purpose beyond what we authorize.</p>
        </>
      )
    },
    {
      id: 'data-sharing',
      number: '6',
      title: 'Data Sharing and Disclosure',
      content: (
        <>
          <p>We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> Vendors who help us operate our website or deliver services</li>
            <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> For any other purpose with your explicit permission</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-retention',
      number: '7',
      title: 'Data Retention',
      content: (
        <>
          <p>We retain your personal data as long as necessary to:</p>
          <ul>
            <li>Fulfill the purposes described in this policy</li>
            <li>Maintain active client relationships</li>
            <li>Comply with legal, accounting, or reporting requirements</li>
          </ul>
          <p>When no longer needed, your data will be securely deleted or anonymized.</p>
        </>
      )
    },
    {
      id: 'privacy-rights',
      number: '8',
      title: 'Your Privacy Rights',
      content: (
        <>
          <h4>For US Residents (including California – CCPA)</h4>
          <ul>
            <li><strong>Right to Know</strong> — Request details on what personal data we collect and how it's used</li>
            <li><strong>Right to Delete</strong> — Request deletion of your personal data</li>
            <li><strong>Right to Opt-Out</strong> — Opt out of the sale of personal information (we do not sell data)</li>
            <li><strong>Right to Non-Discrimination</strong> — Exercise your rights without receiving unequal service</li>
          </ul>
          
          <h4>For All Users</h4>
          <ul>
            <li>Opt out of marketing emails at any time via the unsubscribe link</li>
            <li>Request access to, correction of, or a portable copy of your data</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:info@mdastra.com">info@mdastra.com</a>.</p>
        </>
      )
    },
    {
      id: 'children',
      number: '9',
      title: "Children's Privacy",
      content: (
        <>
          <p>Our services are intended for business owners and marketing professionals. We do not knowingly collect personal information from anyone under the age of 13. If you believe a child has provided us with data, contact us immediately and we will delete it.</p>
        </>
      )
    },
    {
      id: 'security',
      number: '10',
      title: 'Security',
      content: (
        <>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>SSL/TLS encryption for all data transmitted through our site</li>
            <li>Restricted access to personal data on a need-to-know basis</li>
            <li>Regular security reviews of platforms and integrations</li>
          </ul>
          <p>No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </>
      )
    },
    {
      id: 'third-party-links',
      number: '11',
      title: 'Links to Third-Party Websites',
      content: (
        <>
          <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies before sharing personal information.</p>
        </>
      )
    },
    {
      id: 'changes',
      number: '12',
      title: 'Changes to This Policy',
      content: (
        <>
          <p>We may update this Privacy Policy periodically. We will notify you of material changes by updating the "Last Updated" date at the top of this page. Continued use of our website after any changes constitutes acceptance of the updated policy.</p>
        </>
      )
    }
  ];

  return (
    <main className="privacy-page">
      {/* Hero */}
      <section className="section privacy-hero" ref={heroRef}>
        <div className="container">
          <motion.div
            className="privacy-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="privacy-icon">
              <Shield size={48} />
            </div>
            <h1 className="heading-xl privacy-title">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <div className="privacy-dates">
              <p><strong>Effective Date:</strong> April 11, 2026</p>
              <p><strong>Last Updated:</strong> April 11, 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section section-alt privacy-content" ref={contentRef}>
        <div className="container">
          <motion.div
            className="privacy-sections"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sections.map((section) => (
              <div key={section.id} className="privacy-section" id={section.id}>
                <div className="privacy-section-header">
                  <span className="privacy-section-number">{section.number}</span>
                  <h2 className="heading-sm privacy-section-title">{section.title}</h2>
                </div>
                <div className="privacy-section-body">
                  {section.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section privacy-contact">
        <div className="container">
          <motion.div
            className="privacy-contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-md">Contact Us</h2>
            <p className="privacy-contact-intro">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="privacy-contact-details">
              <div className="privacy-contact-item">
                <MapPin size={20} />
                <div>
                  <strong>MD Astra</strong>
                  <p>Apex, North Carolina 27502, USA</p>
                </div>
              </div>
              <div className="privacy-contact-item">
                <Mail size={20} />
                <a href="mailto:info@mdastra.com">info@mdastra.com</a>
              </div>
              <div className="privacy-contact-item">
                <Phone size={20} />
                <a href="tel:+18557500568">+1 855-750-0568</a>
              </div>
            </div>
            <div className="privacy-hours">
              <p><strong>Business Hours:</strong></p>
              <p>Mon–Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
