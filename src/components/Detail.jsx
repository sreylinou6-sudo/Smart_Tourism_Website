import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Detail.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faLocationDot, 
  faCheckCircle, 
  faFolderOpen 
} from '@fortawesome/free-solid-svg-icons';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const slideData = t('slideData');

  const item = Array.isArray(slideData)
    ? slideData.find((d) => d.id === parseInt(id))
    : null;

  if (!item) {
    return (
      <div className="detail-not-found">
        <h2>
          <FontAwesomeIcon icon={faFolderOpen} className="icon-not-found" /> រកមិនឃើញទិន្នន័យទេ!
        </h2>
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} /> ត្រឡប់ក្រោយ
        </button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> ត្រឡប់ក្រោយ
      </button>
      <img src={item.image} alt={item.title} />
      {item.badge && <span className="detail-badge">{item.badge}</span>}

      <h1>{item.title}</h1>

      <h3 className="detail-location">
        <FontAwesomeIcon icon={faLocationDot} className="icon-location" /> {item.location}
      </h3>

      <p className="detail-description">{item.description}</p>
      <p className="detail-summary">{item.summary}</p>

      <ul className="detail-highlights">
        {item.highlights?.map((h, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={faCheckCircle} className="icon-check" /> {h}
          </li>
        ))}
      </ul>

      <p>
        <strong>ពេលវេលាល្អបំផុត:</strong> {item.bestTime}
      </p>
      <p>
        <strong>តម្លៃចូល:</strong> {item.entryFee}
      </p>
    </div>
  );
}

export default Detail;