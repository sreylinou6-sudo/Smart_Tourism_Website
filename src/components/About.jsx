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
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How does Smart Tourism help my travel in Cambodia?',
        a: 'We provide curated destination recommendations, cultural guidelines, interactive maps, and 24/7 support to make your trip effortless.'
      },
      {
        q: 'Can I contact local guides directly through this platform?',
        a: 'Yes! We connect you with verified local guides and authentic experiences across all major provinces.'
      },
      {
        q: 'Is the platform free to use for travelers?',
        a: 'Exploring destinations, guides, and itineraries on Smart Tourism is 100% free.'
      }
    ],
    contactTitle: 'Ready to Explore?',
    contactSubtitle: 'Connect with our team directly for custom itineraries or instant travel assistance.',
    cta: 'Chat on Telegram'
  },
  kh: {
    badge: 'អំពីទេសចរណ៍ឆ្លាត',
    title: 'ស្វែងរកកម្ពុជា​ដោយសុវត្ថិភាព និងងាយស្រួល។',
    subtitle:
      'យើងជួយអ្នកធ្វើដំណើរស្វែងរកកន្លែងដ៏អស្ចារ្យតាមរយៈការណែនាំដែលគិតយ៉ាងល្អ ចំណេះដឹងពីស្រុក និងឧបករណ៍ធ្វើដំណើរដែលមានប្រយោជន៍។',
    missionTitle: 'បេសកកម្មរបស់យើង',
    missionText:
      'ធ្វើឱ្យការធ្វើដំណើរកាន់តែទាក់ទាញ ទាន់សម័យ និងមានតម្លៃដោយភ្ជាប់អ្នកទស្សនាជាមួយកន្លែងដែលបានជ្រើសរើស រឿងរ៉ាវវប្បធម៌ និងការគាំទ្រធ្វើផែនការដែលអាចទុកចិត្តបាន។',
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
        title: 'ការធ្វើដំណើរប្រកបដោយចីរភាព',
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
    faqTitle: 'សំណួរដែលជួបញឹកញាប់ (FAQ)',
    faqs: [
      {
        q: 'តើ Smart Tourism ជួយអ្វីខ្លះដល់ការធ្វើដំណើរកម្សាន្ត?',
        a: 'យើងផ្តល់ជូននូវការណែនាំទីតាំងស្អាតៗ គន្លឹះធ្វើដំណើរពីអ្នកស្រុក និងសេវាគាំទ្រ ២៤/៧ ដើម្បីឱ្យដំណើរកម្សាន្តរបស់អ្នករលូន។'
      },
      {
        q: 'តើខ្ញុំអាចទាក់ទងអ្នកនាំផ្លូវក្នុងស្រុកបានទេ?',
        a: 'បាន! យើងមានបណ្តាញភ្ជាប់ជាមួយអ្នកនាំផ្លូវ (Tour Guide) ក្នុងស្រុកដែលមានអាជ្ញាបណ្ណ និងបទពិសោធន៍ច្បាស់លាស់។'
      },
      {
        q: 'តើការប្រើប្រាស់ Website នេះមានគិតថ្លៃដែរឬទេ?',
        a: 'ការចូលមើលព័ត៌មានទីតាំង គម្រោងធ្វើដំណើរ និងការណែនាំផ្សេងៗគឺឥតគិតថ្លៃ ១០០%។'
      }
    ],
    contactTitle: 'ត្រៀមខ្លួនសម្រាប់ដំណើរកម្សាន្តហើយឬនៅ?',
    contactSubtitle: 'ទាក់ទងមកកាន់ក្រុមការងារយើងផ្ទាល់សម្រាប់ការរៀបចំគម្រោងដើរលេង ឬសួរព័ត៌មានបន្ថែម។',
    cta: 'ផ្ញើសារតាម Telegram'
  }
};

function About({ language = 'en' }) {
  const isKhmer = language === 'kh';
  const content = aboutContent[isKhmer ? 'kh' : 'en'];
  
  // Toggle accordion state for FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

      {/* Stats Section */}
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
          {content.faqs.map((faq, index) => (
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
          href="https://t.me/your_telegram_id" 
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