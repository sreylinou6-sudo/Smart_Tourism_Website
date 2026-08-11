import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import useModal from '../../hooks/useModal';
import kh from '../../locales/kh/kh';
import en from '../../locales/en/en';
import '../../styles/EventModal.css';

const translations = { kh, en };

const EventModal = () => {
  const { language } = useContext(LanguageContext);
  
  // ប្រើប្រាស់ Custom Hook useModal
  const { isOpen, closeModal } = useModal('hasSeenTourismEvent', 1000);

  const currentLocale = translations[language] || translations.kh;
  const content = currentLocale.eventData;

  // ប្រសិនបើ isOpen = false ឬគ្មានទិន្នន័យ eventData ទេ នោះមិនបង្ហាញ Modal ឡើយ
  if (!isOpen || !content || !content.isActive) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>&times;</button>
        
        <div className="modal-badge">{content.badge}</div>
        <h2>{content.title}</h2>
        <p className="modal-description">{content.description}</p>

        {content.promoCode && (
          <div className="promo-box">
            <span>{content.promoLabel}</span>
            <strong>{content.promoCode}</strong>
          </div>
        )}

        <div className="modal-actions">
          <button className="btn-primary" onClick={closeModal}>
            {content.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;