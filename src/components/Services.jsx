import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faRoute,
  faHotel,
  faHeadset,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const servicesContent = {
  en: {
    badge: 'Our services',
    title: 'Everything you need for a smoother trip.',
    subtitle:
      'From planning to local support, we make every part of your journey easier, more flexible, and more enjoyable.',
    introTitle: 'Why travelers choose us',
    introText:
      'We combine local knowledge, trusted partners, and thoughtful planning to help you explore Cambodia with confidence.',
    cards: [
      {
        title: 'Trip planning',
        text: 'Build a personalized itinerary with must-see attractions, hidden gems, and day-by-day guidance.',
        icon: faMapLocationDot
      },
      {
        title: 'Transfers & logistics',
        text: 'Arrange airport pickup, transport between cities, and hassle-free travel coordination.',
        icon: faRoute
      },
      {
        title: 'Stay booking',
        text: 'Find comfortable stays near your interests, whether you prefer city comfort or nature escapes.',
        icon: faHotel
      },
      {
        title: 'Local assistance',
        text: 'Get quick help for bookings, directions, language support, and local recommendations.',
        icon: faHeadset
      }
    ],
    benefitsTitle: 'Included with every plan',
    benefits: [
      'Flexible itineraries for families, solo travelers, and groups.',
      'Clear recommendations tailored to your pace and interests.',
      'Reliable local guidance for culture, nature, and coastal destinations.'
    ],
    cta: 'Start planning your journey'
  },
  kh: {
    badge: 'សេវារបស់យើង',
    title: 'គ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីធ្វើដំណើរបានរលូន hơn។',
    subtitle:
      'ពីការរៀបចំរហូតដល់ការគាំទ្រដោយមូលដ្ឋានក្នុងស្រុក យើងធ្វើឱ្យគ្រប់ផ្នែកនៃការធ្វើដំណើររបស់អ្នកងាយស្រួល ប្រកបដោយភាពបត់បែន និងរំភើបជាងមុន។',
    introTitle: 'ហេតុអ្វីអ្នកធ្វើដំណើរជ្រើសយើង',
    introText:
      'យើងលាយបញ្ចូលចំណេះដឹងក្នុងស្រុក ដៃគូដែលអាចទុកចិត្តបាន និងការរៀបចំយ៉ាងគិតទុកជាមុន ដើម្បីជួយអ្នកស្វែងរកកម្ពុជាដោយមានការជឿទុកចិត្ត។',
    cards: [
      {
        title: 'ការរៀបចំទេសចរណ៍',
        text: 'បង្កើតផែនការដែលសមស្របជាមួយកន្លែងដែលត្រូវចូលមើល កន្លែងលាក់ និងការណែនាំរាល់ថ្ងៃ។',
        icon: faMapLocationDot
      },
      {
        title: 'ការដឹកជញ្ជូន និងការគ្រប់គ្រង',
        text: 'រៀបចំការចុះពីយន្តហោះ ការដឹកជញ្ជូនរវាងទីក្រុង និងការសម្របសម្រួលធ្វើដំណើរដោយគ្មានការលំបាក។',
        icon: faRoute
      },
      {
        title: 'ការកក់ទីចាកចេញ',
        text: 'ស្វែងរកកន្លែងស្នាក់នៅមានភាពងាយស្រួលនៅជិតចំណាប់អារម្មណ៍របស់អ្នក ឯកសារស្រួលជាមួយក្រុង ឬភាពស្ងប់ស្ងាត់។',
        icon: faHotel
      },
      {
        title: 'ជំនួយក្នុងស្រុក',
        text: 'ទទួលបានជំនួយលឿនសម្រាប់ការកក់ សេចក្តីណែនាំ ភាសា និងការណែនាំក្នុងស្រុក។',
        icon: faHeadset
      }
    ],
    benefitsTitle: 'រួមបញ្ចូលនៅក្នុងផែនការទាំងអស់',
    benefits: [
      'ផែនការដែលអាចបត់បែនសម្រាប់គ្រួសារ ធ្វើដំណើរតែម្នាក់ឯង និងក្រុម។',
      'ការណែនាំច្បាស់ដែលសមស្របជាមួយល្បឿន និងចំណាប់អារម្មណ៍របស់អ្នក។',
      'ការណែនាំក្នុងស្រុកដែលអាចទុកចិត្តបានសម្រាប់វប្បធម៌ ធម្មជាតិ និងកន្លែងឆ្នេរ។'
    ],
    cta: 'ចាប់ផ្តើមរៀបចំការធ្វើដំណើររបស់អ្នក'
  }
};

function Services({ language = 'en' }) {
  const isKhmer = language === 'kh';
  const content = servicesContent[isKhmer ? 'kh' : 'en'];

  return (
    <section className="services-page">
      <div className="services-hero">
        <div className="services-hero-copy">
          <span className="services-badge">{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <div className="services-hero-panel">
          <h3>{content.introTitle}</h3>
          <p>{content.introText}</p>
        </div>
      </div>

      <div className="services-grid">
        {content.cards.map((item, index) => (
          <article className="service-card" key={index}>
            <div className="service-icon-wrap">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="services-bottom">
        <div className="services-benefits">
          <div className="section-heading">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h2>{content.benefitsTitle}</h2>
          </div>
          <ul>
            {content.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="services-cta-card">
          <h3>{content.cta}</h3>
          <p>{isKhmer ? 'ត្រៀមខ្លួនសម្រាប់ការធ្វើដំណើរដែលរលូន និងគួរឱ្យចងចាំ។' : 'Get ready for a smooth and memorable travel experience.'}</p>
          <button type="button" className="services-btn">
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
