import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faShieldHeart,
  faClock,
  faPhone,
  faLocationDot,
  faWallet,
  faPlaneDeparture
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Info.css';

const infoSections = {
  en: {
    title: 'Travel Essentials',
    subtitle: 'Everything you need to explore Cambodia smoothly and confidently.',
    heroBadge: 'Plan with ease',
    introTitle: 'Why travelers love this guide',
    introText:
      'From arrival tips to local etiquette, this page brings together practical guidance for a memorable trip.',
    cards: [
      {
        title: 'Arrival & Transit',
        text: 'Most international flights land in Phnom Penh or Siem Reap. Taxis and app-based rides are widely available.',
        icon: faPlaneDeparture
      },
      {
        title: 'Stay Safe',
        text: 'Keep your passport secure, carry modest clothing for temples, and check local weather before heading out.',
        icon: faShieldHeart
      },
      {
        title: 'Best Time to Visit',
        text: 'The dry season from November to April is ideal for beaches, temples, and outdoor adventures.',
        icon: faClock
      }
    ],
    quickFactsTitle: 'Quick Facts',
    quickFacts: [
      'Currency: USD and Cambodian riel are both commonly used.',
      'Language: Khmer is the official language, but English is widely spoken in tourism areas.',
      'Connectivity: Mobile data is easy to find and very affordable.'
    ],
    contactTitle: 'Need help?',
    contactText: 'Our local support team is ready to help you plan your trip and answer questions about transport and booking.',
    contactButton: 'Contact Support'
  },
  kh: {
    title: 'ព័ត៌មានសំខាន់ចំពោះការធ្វើដំណើរ',
    subtitle: 'គ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីស្វែងរកកម្ពុជាដោយសុវត្ថិភាព និងងាយស្រួល។',
    heroBadge: 'រៀបចំដោយងាយស្រួល',
    introTitle: 'ហេតុអ្វីអ្នកធ្វើដំណើរដាច់ដោយអំណាច',
    introText:
      'ពីការណែនាំនៅពេលចូលប្រទេសរហូតដល់គោលការណ៍ក្នុងស្រុកនេះបានបង្រួមព័ត៌មានជាក់ស្តែងសម្រាប់ការធ្វើដំណើរដ៏ពិសេស។',
    cards: [
      {
        title: 'ចូលមក និងធ្វើដំណើរ',
        text: 'ជើងហោះហើរអន្តរជាតិភាគច្រើនចុះនៅភ្នំពេញ ឬសៀមរាប។ តាក់ស៊ី និងរថយន្តតាមកម្មវិធីមានរួមទាំងច្រើន។',
        icon: faPlaneDeparture
      },
      {
        title: 'រក្សាសុវត្ថិភាព',
        text: 'រក្សាសំបុត្ររបស់អ្នកឱ្យសុវត្ថិភាព ចូរបំពាក់សម្លៀកបំពាក់សមស្របនៅព្រះវិហារ និងពិនិត្យអាកាសធាតុមុនចេញទ voy.',
        icon: faShieldHeart
      },
      {
        title: 'ពេលវេលាល្អបំផុត',
        text: 'រដូវស្ងួតពីខែវិច្ឆិកា ដល់ខែមេសា គឺល្អបំផុតសម្រាប់ឆ្នេរ ព្រះវិហារ និងសកម្មភាពក្រៅកាយ។',
        icon: faClock
      }
    ],
    quickFactsTitle: 'ព័តមានរហ័ស',
    quickFacts: [
      'រូបិយប័ណ្ណ: USD និងរៀលកម្ពុជា ត្រូវបានប្រើប្រាស់ភាគច្រើន។',
      'ភាសា: ខ្មែរគឺជាភាសាផ្លូវការ ប៉ុន្តែភាសាអង់គ្លេសត្រូវបាននិយាយច្រើននៅតំបន់ទេសចរណ៍។',
      'ការតភ្ជាប់: ទិន្នន័យទូរស័ព្ទអាចរកបានយ៉ាងងាយ និងមានតម្លៃទាប។'
    ],
    contactTitle: 'ត្រូវការជំនួយ?',
    contactText: 'ក្រុមជំនួយក្នុងស្រុករបស់យើងរួចផ្តល់ជូនដល់អ្នកនូវការណែនាំ និងការឆ្លើយសំណួរចំពោះការដឹកជញ្ជូន និងការកក់។',
    contactButton: 'ទំនាក់ទំនងជំនួយ'
  }
};

function Info({ language = 'en' }) {
  const isKhmer = language === 'kh';
  const content = infoSections[isKhmer ? 'kh' : 'en'];

  return (
    <section className="info-page">
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

      <div className="info-grid">
        {content.cards.map((item, index) => (
          <article className="info-card" key={index}>
            <div className="info-icon-wrap">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="info-panel">
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faCircleInfo} />
            <h2>{content.quickFactsTitle}</h2>
          </div>
          <ul className="info-list">
            {content.quickFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel-section accent">
          <div className="section-heading">
            <FontAwesomeIcon icon={faPhone} />
            <h2>{content.contactTitle}</h2>
          </div>
          <p>{content.contactText}</p>
          <div className="contact-meta">
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> {isKhmer ? 'ភ្នំពេញ និងសៀមរាប' : 'Phnom Penh & Siem Reap'}
            </span>
            <span>
              <FontAwesomeIcon icon={faWallet} /> {isKhmer ? 'សាលាដឹកជញ្ជូន និងការកក់' : 'Transport & booking support'}
            </span>
          </div>
          <button type="button" className="info-btn">
            {content.contactButton}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;