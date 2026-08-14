import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faLeaf,
  faUsers,
  faGlobe,
  faQuestionCircle,
  faPaperPlane,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';
const iconMap = {
  compass: faCompass,
  leaf: faLeaf,
  users: faUsers
};

function About() {
  const { t } = useLanguage();
  const content = t('about');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  if (!content || typeof content !== 'object') {
    return null;
  }

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <div className="about-hero-panel">
          <div className="about-icon-wrap">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <h3>{content.missionTitle}</h3>
          <p>{content.missionText}</p>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-section">
        <div className="section-heading">
          <h2>{content.valuesTitle}</h2>
        </div>
        <div className="about-cards">
          {content.values?.map((item, index) => (
            <article className="about-card" key={index}>
              <div className="about-card-icon">
                <FontAwesomeIcon icon={iconMap[item.icon] || faCompass} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-section stats-section">
        <div className="section-heading">
          <h2>{content.statsTitle}</h2>
        </div>
        <div className="stats-grid">
          {content.stats?.map((stat, index) => (
            <div className="stat-item" key={index}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="about-section faq-section">
        <div className="section-heading">
          <h2>
            <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '8px', color: 'var(--accent)' }} />
            {content.faqTitle}
          </h2>
        </div>
        <div className="faq-list">
          {content.faqs?.map((faq, index) => (
            <div
              className={`faq-item ${openFaq === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h4>{faq.q}</h4>
                <FontAwesomeIcon icon={faChevronDown} className="faq-icon" />
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action & Contact Banner */}
      <div className="about-section contact-banner">
        <h2>{content.contactTitle}</h2>
        <p>{content.contactSubtitle}</p>
        <a
          href="https://ai-chatbot-psi-sepia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-btn"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          {content.cta}
        </a>
      </div>
    </section>
  );
}
export default About;