'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import './TermsOfService.css';

const TermsOfService = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  const sections = [
    {
      id: 'agreement',
      number: '1',
      title: 'Agreement to Terms',
      content: (
        <>
          <p>By accessing or using the website at mdastra.com or engaging MD Astra for any digital marketing services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our website or services.</p>
          <p>These Terms apply to all visitors, clients, and anyone who accesses or uses our services.</p>
        </>
      )
    },
    {
      id: 'about',
      number: '2',
      title: 'About MD Astra',
      content: (
        <>
          <p>MD Astra is a full-service digital marketing agency headquartered in Apex, North Carolina, USA. We provide services including but not limited to:</p>
          <ul>
            <li>Google Ads (Search, Display, Performance Max)</li>
            <li>Meta Ads (Facebook & Instagram)</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Google Business Profile Optimization</li>
            <li>Social Media Marketing & Content Creation</li>
            <li>Website Design & Development</li>
            <li>Analytics, Tracking & Growth Reporting</li>
            <li>Content Marketing & Email Marketing</li>
          </ul>
        </>
      )
    },
    {
      id: 'website-use',
      number: '3',
      title: 'Use of Our Website',
      content: (
        <>
          <p>You agree to use mdastra.com only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
          <ul>
            <li>Use the site in any way that violates applicable local, national, or international laws or regulations</li>
            <li>Transmit any unsolicited or unauthorized advertising or promotional material (spam)</li>
            <li>Attempt to gain unauthorized access to any part of our website or systems</li>
            <li>Introduce viruses, trojans, or other malicious code</li>
            <li>Scrape, crawl, or harvest any data from our website without express written permission</li>
            <li>Use our website to impersonate any person or entity</li>
          </ul>
          <p>We reserve the right to terminate access to our website for anyone who violates these Terms.</p>
        </>
      )
    },
    {
      id: 'client-services',
      number: '4',
      title: 'Client Services & Engagement',
      content: (
        <>
          <h4>a) Service Agreements</h4>
          <p>All digital marketing services rendered by MD Astra are governed by a separate client agreement or proposal signed between MD Astra and the client. These Terms of Service apply in conjunction with — not in replacement of — any signed service agreement.</p>

          <h4>b) Payments</h4>
          <ul>
            <li>Fees for services are outlined in your individual service proposal or contract</li>
            <li>Payment terms, billing cycles, and accepted payment methods will be specified in your agreement</li>
            <li>Late payments may result in a pause or termination of services</li>
            <li>All fees are non-refundable unless otherwise stated in your agreement</li>
          </ul>

          <h4>c) Client Responsibilities</h4>
          <p>To deliver effective results, clients agree to:</p>
          <ul>
            <li>Provide accurate business information, access credentials, and brand assets in a timely manner</li>
            <li>Respond to communications and requests within a reasonable timeframe</li>
            <li>Grant necessary platform access (Google Ads, Meta Business Manager, website, etc.)</li>
            <li>Notify MD Astra of any changes that may affect campaign strategy</li>
          </ul>

          <h4>d) Results Disclaimer</h4>
          <p>While MD Astra has a proven track record of delivering measurable results, we cannot guarantee specific outcomes such as a defined number of leads, a particular ranking position, or a specific return on ad spend. Digital marketing results depend on many factors including market conditions, industry competition, platform algorithm changes, and client-side factors beyond our control.</p>
        </>
      )
    },
    {
      id: 'intellectual-property',
      number: '5',
      title: 'Intellectual Property',
      content: (
        <>
          <h4>a) Our Content</h4>
          <p>All content on mdastra.com — including text, graphics, logos, images, case studies, videos, and service descriptions — is the property of MD Astra and is protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written consent.</p>

          <h4>b) Client Content</h4>
          <p>Any content, assets, or materials provided by the client to MD Astra for use in campaigns remain the intellectual property of the client. By providing such materials, you grant MD Astra a limited license to use them solely for the purpose of delivering agreed-upon services.</p>

          <h4>c) Work Product</h4>
          <p>Creative assets, ad copies, strategies, and campaign materials developed by MD Astra for a client will be addressed in the individual service agreement regarding ownership upon full payment.</p>
        </>
      )
    },
    {
      id: 'third-party',
      number: '6',
      title: 'Third-Party Platforms & Tools',
      content: (
        <>
          <p>MD Astra uses third-party platforms (including Google, Meta, GoHighLevel, and others) to deliver services. We are not responsible for:</p>
          <ul>
            <li>Changes to third-party platform policies, algorithms, or features</li>
            <li>Platform outages, ad disapprovals, or account suspensions caused by platform policies</li>
            <li>Actions taken by third-party platforms that affect campaign performance</li>
          </ul>
          <p>Clients are responsible for ensuring their business complies with the advertising policies of all platforms used in their campaigns.</p>
        </>
      )
    },
    {
      id: 'confidentiality',
      number: '7',
      title: 'Confidentiality',
      content: (
        <>
          <p>Both parties agree to keep confidential any proprietary information, business data, strategies, or trade secrets shared during the course of the engagement. This obligation survives the termination of any service agreement.</p>
          <p>MD Astra will not disclose your business data, campaign performance, or strategy to any third party without your consent, except as required by law.</p>
        </>
      )
    },
    {
      id: 'testimonials',
      number: '8',
      title: 'Testimonials & Case Studies',
      content: (
        <>
          <p>MD Astra may request permission to feature your business results, testimonials, or campaign outcomes as case studies or social proof on our website or marketing materials. We will always seek your explicit consent before doing so. You may withdraw consent at any time.</p>
        </>
      )
    },
    {
      id: 'liability',
      number: '9',
      title: 'Limitation of Liability',
      content: (
        <>
          <p>To the fullest extent permitted by applicable law, MD Astra and its team members, partners, and contractors shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Damages resulting from third-party platform changes or outages</li>
            <li>Any outcome resulting from information provided on mdastra.com</li>
          </ul>
          <p>Our total liability for any claim arising out of or related to our services shall not exceed the total amount paid by you to MD Astra in the three (3) months preceding the claim.</p>
        </>
      )
    },
    {
      id: 'indemnification',
      number: '10',
      title: 'Indemnification',
      content: (
        <>
          <p>You agree to indemnify, defend, and hold harmless MD Astra and its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
          <ul>
            <li>Your use of our website or services</li>
            <li>Your violation of these Terms</li>
            <li>Content or materials you provide to MD Astra</li>
            <li>Your breach of any applicable law or third-party rights</li>
          </ul>
        </>
      )
    },
    {
      id: 'termination',
      number: '11',
      title: 'Termination',
      content: (
        <>
          <h4>By the Client</h4>
          <p>Clients may terminate service agreements as outlined in their individual contracts. Early termination conditions, notice periods, and any applicable fees will be specified in your agreement.</p>

          <h4>By MD Astra</h4>
          <p>We reserve the right to suspend or terminate services — with or without notice — if:</p>
          <ul>
            <li>A client violates these Terms or the service agreement</li>
            <li>A client engages in fraudulent, abusive, or illegal activity</li>
            <li>Payment obligations are not met</li>
          </ul>
          <p>Termination does not relieve the client of any outstanding payment obligations.</p>
        </>
      )
    },
    {
      id: 'governing-law',
      number: '12',
      title: 'Governing Law & Dispute Resolution',
      content: (
        <>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, USA, without regard to its conflict of law provisions.</p>
          <p>Any disputes arising from these Terms or related services shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Wake County, North Carolina, in accordance with the rules of the American Arbitration Association.</p>
        </>
      )
    },
    {
      id: 'changes',
      number: '13',
      title: 'Changes to These Terms',
      content: (
        <>
          <p>We reserve the right to modify these Terms at any time. When we do, we will update the "Last Updated" date at the top of this page. Continued use of our website or services after changes are posted constitutes your acceptance of the revised Terms.</p>
          <p>We encourage you to review this page periodically.</p>
        </>
      )
    }
  ];

  return (
    <main className="terms-page">
      {/* Hero */}
      <section className="section terms-hero" ref={heroRef}>
        <div className="container">
          <motion.div
            className="terms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="terms-icon">
              <FileText size={48} />
            </div>
            <h1 className="heading-xl terms-title">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <div className="terms-dates">
              <p><strong>Effective Date:</strong> April 11, 2026</p>
              <p><strong>Last Updated:</strong> April 11, 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section section-alt terms-content" ref={contentRef}>
        <div className="container">
          <motion.div
            className="terms-sections"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sections.map((section) => (
              <div key={section.id} className="terms-section" id={section.id}>
                <div className="terms-section-header">
                  <span className="terms-section-number">{section.number}</span>
                  <h2 className="heading-sm terms-section-title">{section.title}</h2>
                </div>
                <div className="terms-section-body">
                  {section.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section terms-contact">
        <div className="container">
          <motion.div
            className="terms-contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-md">Contact Us</h2>
            <p className="terms-contact-intro">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="terms-contact-details">
              <div className="terms-contact-item">
                <MapPin size={20} />
                <div>
                  <strong>MD Astra</strong>
                  <p>Apex, North Carolina 27502, USA</p>
                </div>
              </div>
              <div className="terms-contact-item">
                <Mail size={20} />
                <a href="mailto:info@mdastra.com">info@mdastra.com</a>
              </div>
              <div className="terms-contact-item">
                <Phone size={20} />
                <a href="tel:+18557500568">+1 855-750-0568</a>
              </div>
            </div>
            <div className="terms-hours">
              <p><strong>Business Hours:</strong></p>
              <p>Mon–Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM</p>
            </div>
            <p className="terms-legal-note">
              These Terms of Service are provided for informational purposes. For legal advice specific to your business or jurisdiction, please consult a qualified attorney.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
