import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import '../../styles/TermsAndConditions.css';

export default function TermsAndConditions() {
  const { t } = useLanguage();
  useEffect(() => {
    // កំណត់ចំណងជើង Tab Browser
    document.title = "Smart Tourism | Terms and Conditions"; 
  }, [t]);
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1 className="legal-title">{t('TermsAndConditions.terms_title')}</h1>
        <p className="legal-date">{t('TermsAndConditions.updated_date')}</p>
        <h3 className="legal-section-title">{t('TermsAndConditions.terms_sec1_title')}</h3>
        <p className="legal-text">{t('TermsAndConditions.terms_sec1_desc')}</p>
        <h3 className="legal-section-title">{t('TermsAndConditions.terms_sec2_title')}</h3>
        <p className="legal-text">{t('TermsAndConditions.terms_sec2_desc')}</p>
      </div>
    </div>
  );
}