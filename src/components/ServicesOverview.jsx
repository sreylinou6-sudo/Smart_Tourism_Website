import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkedAlt, 
  faTicketAlt, 
  faRoute, 
  faHeadset 
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ServicesOverview.css';
const iconMap = {
  faMapMarkedAlt: faMapMarkedAlt,
  faTicketAlt: faTicketAlt,
  faRoute: faRoute,
  faHeadset: faHeadset
};

const ServicesOverview = () => {
  const { t } = useLanguage();
  const title = t('ServicesOverview.title');
  const subtitle = t('ServicesOverview.subtitle');
  const serviceItems = t('ServicesOverview.items');

  return (
    <section className="services-overview">
      <div className="services-header">
        <h2 className="services-title">{title}</h2>
        <p className="services-subtitle">{subtitle}</p>
      </div>

      <div className="services-grid">
        {Array.isArray(serviceItems) && serviceItems.map((item, index) => {
          const IconComponent = iconMap[item.icon] || faRoute;

          return (
            <div className="service-card" key={item.id || index}>
              <div className="service-icon">
                <FontAwesomeIcon icon={IconComponent} />
              </div>
              <h3 className="service-item-title">{item.title}</h3>
              <p className="service-item-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesOverview;