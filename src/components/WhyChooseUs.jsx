import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faShieldHalved,
  faGem,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/WhyChooseUs.css';
const iconMap = {
  faRocket,
  faShieldHalved,
  faGem,
  faHeadset,
};

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { title, subtitle, features } = t('WhyChooseUs') || {};

  return (
    <section className="why-choose-us">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Features Cards Grid */}
        <div className="feature-grid">
          {features?.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={iconMap[feature.icon]} size="2x" />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;