import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; 
import '../../styles/PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  useEffect(() => {
    // កំណត់ចំណងជើង Tab Browser
    document.title = "Smart Tourism | Privacy Policy"; 
  }, [t]);
  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1 className="privacy-title">{t('PrivacyPolicy.privacy_title')}</h1>
        <p className="privacy-date">{t('PrivacyPolicy.privacy_updated_date')}</p>
        <h3 className="privacy-section-title">{t('PrivacyPolicy.privacy_sec1_title')}</h3>
        <p className="privacy-text">{t('PrivacyPolicy.privacy_sec1_desc')}</p>

        <h3 className="privacy-section-title">{t('PrivacyPolicy.privacy_sec2_title')}</h3>
        <p className="privacy-text">{t('PrivacyPolicy.privacy_sec2_desc')}</p>

        <h3 className="privacy-section-title">{t('PrivacyPolicy.privacy_sec3_title')}</h3>
        <p className="privacy-text">{t('PrivacyPolicy.privacy_sec3_desc')}</p>
      </div>
    </div>
  );
}