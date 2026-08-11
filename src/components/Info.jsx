import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faShieldHeart,
  faClock,
  faMapLocationDot,
  faMobileScreen,
  faWallet,
  faCalendarDays,
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Info.css';

// info.json (en/kh) អាចផ្ទុកតែ string សម្រាប់ icon (ឧ. "passport")
// ដូច្នេះត្រូវ map string នោះទៅ FontAwesome icon object វិញនៅទីនេះ
const iconMap = {
  passport: faPassport,
  shieldheart: faShieldHeart,
  clock: faClock
};

function Info() {
  const { t } = useLanguage();

  // t('info') ត្រូវ return object ទាំងមូលពី info.en.json / info.kh.json
  const content = t('info');

  // ការពារ error បើ translation មិនទាន់ load ឬ key khុសឆ្គង
  if (!content || typeof content !== 'object') {
    return null;
  }

  return (
    <section className="info-page">
      {/* Hero Section */}
      <div className="info-hero">
        <div className="info-hero-copy">
          <span className="info-badge">{content.heroBadge}</span>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <div className="info-hero-card">
          <h3>{content.introTitle}</h3>
          <p>{content.introText}</p>
        </div>
      </div>

      {/* Primary Info Cards */}
      <div className="info-grid">
        {content.cards?.map((item, index) => (
          <article className="info-card" key={index}>
            <div className="info-icon-wrap">
              <FontAwesomeIcon icon={iconMap[item.icon] || faPassport} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      {/* Main Research Panels */}
      <div className="info-panel-grid">

        {/* Regions Section */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <h2>{content.regionsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.regions?.map((reg, idx) => (
              <div key={idx} className="detail-item">
                <strong>{reg.name}</strong>
                <p>{reg.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Apps Section */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faMobileScreen} />
            <h2>{content.appsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.apps?.map((app, idx) => (
              <div key={idx} className="detail-item">
                <strong>{app.name}</strong> <span>{app.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faWallet} />
            <h2>{content.budgetTitle}</h2>
          </div>
          <div className="detail-list">
            {content.budgets?.map((b, idx) => (
              <div key={idx} className="detail-item budget-item">
                <span>{b.level}</span>
                <span className="budget-tag">{b.cost}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Festivals Calendar */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faCalendarDays} />
            <h2>{content.festivalsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.festivals?.map((f, idx) => (
              <div key={idx} className="detail-item budget-item">
                <strong>{f.name}</strong>
                <span className="time-tag">{f.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Emergency & Support Panel */}
      <div className="info-panel-single accent">
        <div className="section-heading">
          <FontAwesomeIcon icon={faHospital} />
          <h2>{content.emergencyTitle}</h2>
        </div>
        <div className="contact-grid">
          {content.contacts?.map((c, idx) => (
            <div key={idx} className="contact-card">
              <span className="contact-label">{c.label}:</span>
              <span className="contact-val">{c.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;