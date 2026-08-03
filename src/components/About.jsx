import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faLeaf,
  faUsers,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const aboutContent = {
  en: {
    badge: 'About Smart Tourism',
    title: 'Discover Cambodia with confidence and ease.',
    subtitle:
      'We help travelers explore memorable destinations through thoughtful guidance, local insights, and practical travel tools.',
    missionTitle: 'Our mission',
    missionText:
      'To make tourism more welcoming, informed, and rewarding by connecting visitors with curated places, cultural stories, and reliable planning support.',
    valuesTitle: 'What makes us different',
    values: [
      {
        title: 'Curated discovery',
        text: 'Every destination is selected to offer meaningful experiences and lasting memories.',
        icon: faCompass
      },
      {
        title: 'Local connection',
        text: 'We highlight communities, traditions, and culture so travel feels authentic and respectful.',
        icon: faUsers
      },
      {
        title: 'Sustainable travel',
        text: 'We encourage experiences that support nature, heritage, and long-term community wellbeing.',
        icon: faLeaf
      }
    ],
    statsTitle: 'Why travelers choose us',
    stats: [
      { value: '100+', label: 'handpicked spots' },
      { value: '4.9/5', label: 'average traveler rating' },
      { value: '24/7', label: 'travel support' }
    ],
    cta: 'Plan your next trip'
  },
  kh: {
    badge: 'អំពីទេសចរណ៍ឆ្លាត',
    title: 'ស្វែងរកកម្ពុជា​ដោយសុវត្ថិភាព និងងាយស្រួល។',
    subtitle:
      'យើងជួយអ្នកធ្វើដំណើរស្វែងរកកន្លែងដ៏អស្ចារ្យតាមរយៈការណែនាំដែលគិតយ៉ាងល្អ ចំណេះដឹងពីស្រុក និងឧបករណ៍ធ្វើដំណើរដែលមានប្រយោជន៍។',
    missionTitle: 'បេសកកម្មរបស់យើង',
    missionText:
      'ធ្វើឱ្យការធ្វើដំណើរកាន់តែទាក់ទាញ ទាន់សម័យ និងមានតម្លៃដោយភ្ជាប់អ្នកទស្សនាเข้ากับកន្លែងដែលបានជ្រើសរើស រឿងរ៉ាវវប្បធម៌ និងការគាំទ្រធ្វើផែនការដែលអាចទុកចិត្តបាន។',
    valuesTitle: 'អ្វីដែលធ្វើឱ្យយើងខុសប្លែក',
    values: [
      {
        title: 'ការស្វែងរកដែលបានជ្រើសរើស',
        text: 'កន្លែងនីមួយៗត្រូវបានជ្រើសរើសដើម្បីផ្តល់បទពិសោធន៍ដ៏មានន័យ និងអនុស្សាវរីយ៍ដែលមិនភ្លេច។',
        icon: faCompass
      },
      {
        title: 'ការតភ្ជាប់ជាមួយស្រុក',
        text: 'យើងលើកយកសហគមន៍ អរិយធម៌ និងវប្បធម៌ ដូច្នេះការធ្វើដំណើរជារឿងពិតប្រាកដ និងគោរព។',
        icon: faUsers
      },
      {
        title: 'ការធ្វើដំណើររស់រានមានជីវិត',
        text: 'យើងលើកទឹកចិត្តឱ្យមានបទពិសោធន៍ដែលគាំទ្រព្រៃធម្មជាតិ បេតិកភណ្ឌ និងសុខុមាលភាពសហគមន៍។',
        icon: faLeaf
      }
    ],
    statsTitle: 'ហេតុអ្វីអ្នកធ្វើដំណើរជ្រើសយើង',
    stats: [
      { value: '100+', label: 'កន្លែងដែលបានជ្រើសរើស' },
      { value: '4.9/5', label: 'ការវាយតម្លៃរបស់អ្នកធ្វើដំណើរ' },
      { value: '24/7', label: 'ការគាំទ្រធ្វើដំណើរ' }
    ],
    cta: 'រៀបចំការធ្វើដំណើរបន្ទាប់របស់អ្នក'
  }
};

function About({ language = 'en' }) {
  const isKhmer = language === 'kh';
  const content = aboutContent[isKhmer ? 'kh' : 'en'];

  return (
    <section className="about-page">
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

      <div className="about-section">
        <div className="section-heading">
          <h2>{content.valuesTitle}</h2>
        </div>
        <div className="about-cards">
          {content.values.map((item, index) => (
            <article className="about-card" key={index}>
              <div className="about-card-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-section stats-section">
        <div className="section-heading">
          <h2>{content.statsTitle}</h2>
        </div>
        <div className="stats-grid">
          {content.stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <button className="about-cta" type="button">
          {content.cta}
        </button>
      </div>
    </section>
  );
}

export default About;