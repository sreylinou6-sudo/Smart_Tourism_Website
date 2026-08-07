import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faShieldHeart,
  faClock,
  faPhone,
  faLocationDot,
  faWallet,
  faPlaneDeparture,
  faPassport,
  faMapLocationDot,
  faMobileScreen,
  faCalendarDays,
  faHandHoldingHeart,
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Info.css';

const infoSections = {
  en: {
    title: 'Cambodia Travel Essentials',
    subtitle: 'Everything you need to research, plan, and explore Cambodia smoothly and safely.',
    heroBadge: 'Complete Travel Guide',
    introTitle: 'Why travelers reliance on this guide',
    introText:
      'From visa requirements and cultural etiquette to local apps and estimated budgets, this comprehensive guide covers all aspects of traveling in Cambodia.',
    
    // Core Cards
    cards: [
      {
        title: 'Arrival & Visas',
        text: 'E-Visas and Visa-on-Arrival are available ($30-$36). Use the official Cambodia e-Arrival app before landing.',
        icon: faPassport
      },
      {
        title: 'Safety & Etiquette',
        text: 'Dress modestly at temples (cover shoulders & knees). Respect monks and local customs.',
        icon: faShieldHeart
      },
      {
        title: 'Best Time to Visit',
        text: 'November to April brings dry, cooler weather—ideal for temples, islands, and outdoor activities.',
        icon: faClock
      }
    ],

    // Top Destinations by Region
    regionsTitle: 'Explore by Region',
    regions: [
      {
        name: 'Cultural & Heritage (Siem Reap)',
        details: 'Home to Angkor Wat. Pass fees: $37 (1-day), $62 (3-days), $72 (7-days).'
      },
      {
        name: 'Capital & History (Phnom Penh)',
        details: 'Royal Palace, National Museum, Riverside promenade, and historical landmarks.'
      },
      {
        name: 'Coastal & Islands (Sihanoukville, Koh Rong, Kampot, Kep)',
        details: 'White sand beaches, island hopping, pepper plantations, and fresh seafood.'
      },
      {
        name: 'Eco-Tourism & Nature (Mondulkiri, Ratanakiri, Cardamom)',
        details: 'Elephant sanctuaries, jungle trekking, waterfalls, and Indigenous culture.'
      }
    ],

    // Useful Local Apps
    appsTitle: 'Essential Local Apps',
    apps: [
      { name: 'Ride-Hailing:', desc: 'Grab, PassApp, TADA (easy tuk-tuk & taxi booking)' },
      { name: 'Intercity Transport:', desc: 'CamboTicket, BookMeBus (buses, ferries, VIP vans)' },
      { name: 'Payments:', desc: 'Bakong Tourist App, KHQR, Cash (USD & KHR)' }
    ],

    // Estimated Budget
    budgetTitle: 'Estimated Budget (Per Day)',
    budgets: [
      { level: 'Budget Backpacker', cost: '$20 – $35 / day' },
      { level: 'Mid-Range Traveler', cost: '$50 – $100 / day' },
      { level: 'Luxury Experience', cost: '$150+ / day' }
    ],

    // Festivals Calendar
    festivalsTitle: 'Major Festivals & Events',
    festivals: [
      { name: 'Khmer New Year', time: 'Mid-April' },
      { name: 'Pchum Ben (Ancestors Day)', time: 'September / October' },
      { name: 'Water Festival (Bon Om Touk)', time: 'November' }
    ],

    // Emergency Contacts
    emergencyTitle: 'Emergency Contacts',
    contacts: [
      { label: 'Tourist Police', val: '+855 23 724 793' },
      { label: 'General Emergency', val: '117 (Police) / 119 (Ambulance)' },
      { label: 'Top Hospitals', val: 'Royal Phnom Penh Hospital / Calmette Hospital' }
    ]
  },
  kh: {
    title: 'ព័ត៌មានសំខាន់ចំពោះការធ្វើដំណើរនៅកម្ពុជា',
    subtitle: 'គ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីស្រាវជ្រាវ រៀបចំផែនការ និងស្វែងយល់ពីកម្ពុជាដោយសុវត្ថិភាព។',
    heroBadge: 'មគ្គុទ្ទេសក៍ទេសចរណ៍ពេញលេញ',
    introTitle: 'ហេតុអ្វីអ្នកធ្វើដំណើរត្រូវការការណែនាំនេះ',
    introText:
      'ចាប់ពីតម្រូវការទិដ្ឋាការ វប្បធម៌ កម្មវិធីទូរស័ព្ទក្នុងស្រុក រហូតដល់ការប្រមាណថវិកា ទំព័រនេះរួមបញ្ចូលព័ត៌មានគ្រប់ជ្រុងជ្រោយសម្រាប់ការដើរកម្សាន្ត។',
    
    // Core Cards
    cards: [
      {
        title: 'ការចូលប្រទេស និងទិដ្ឋាការ',
        text: 'មាន e-Visa និង Visa-on-Arrival ($30-$36)។ គួរប្រើប្រាស់កម្មវិធី Cambodia e-Arrival មុនពេលមកដល់។',
        icon: faPassport
      },
      {
        title: 'សុវត្ថិភាព និងការគោរពវប្បធម៌',
        text: 'ស្លៀកពាក់សមរម្យនៅប្រាសាទ (គ្របស្មា និងជង្គង់)។ គោរពព្រះសង្ឃ និងទំនៀមទម្លាប់ក្នុងស្រុក។',
        icon: faShieldHeart
      },
      {
        title: 'ពេលវេលាល្អបំផុត',
        text: 'ខែវិច្ឆិកា ដល់ ខែមេសា មានអាកាសធាតុស្ងួត និងត្រជាក់ស្រួល ល្អសម្រាប់ទស្សនាប្រាសាទ និងតំបន់ឆ្នេរ។',
        icon: faClock
      }
    ],

    // Top Destinations by Region
    regionsTitle: 'តំបន់ទេសចរណ៍តាមផ្នែក',
    regions: [
      {
        name: 'តំបន់វប្បធម៌ និងបេតិកភណ្ឌ (សៀមរាប)',
        details: 'ដែនដីអច្ឆរិយៈអង្គរវត្ត។ តម្លៃសំបុត្រប្រាសាទ: $37 (1 ថ្ងៃ), $62 (3 ថ្ងៃ), $72 (7 ថ្ងៃ)។'
      },
      {
        name: 'រាជធានី និងប្រវត្តិសាស្ត្រ (ភ្នំពេញ)',
        details: 'ព្រះបរមរាជវាំង, សារមន្ទីរជាតិ, មាត់ទន្លេ និងទីតាំងប្រវត្តិសាស្ត្រសំខាន់ៗ។'
      },
      {
        name: 'តំបន់ឆ្នេរ និងកោះ (ព្រះសីហនុ, កោះរ៉ុង, កំពត, កែប)',
        details: 'ឆ្នេរខ្សាច់ស, ការកម្សាន្តតាមកោះ, ចំការម្រេច និងអាហារសមុទ្រស្រស់ៗ។'
      },
      {
        name: 'អេកូទេសចរណ៍ និងធម្មជាតិ (មណ្ឌលគិរី, រតនគិរី, ជួរភ្នំក្រវាញ)',
        details: 'ជម្រកដំរី, ការដើរព្រៃ (Trekking), ទឹកធ្លាក់ និងវប្បធម៌ជនជាតិដើមភាគតិច។'
      }
    ],

    // Useful Local Apps
    appsTitle: 'កម្មវិធីទូរស័ព្ទចាំបាច់ (Apps)',
    apps: [
      { name: 'ការធ្វើដំណើរ:', desc: 'Grab, PassApp, TADA (កក់កង់បី និងតាក់ស៊ី)' },
      { name: 'សំបុត្រឡានក្រុង/ទូក:', desc: 'CamboTicket, BookMeBus' },
      { name: 'ការទូទាត់ប្រាក់:', desc: 'Bakong Tourist App, KHQR, ប្រាក់ស្រស់ (USD & រៀល)' }
    ],

    // Estimated Budget
    budgetTitle: 'ប្រមាណថវិកាចំណាយ (ក្នុងមួយថ្ងៃ)',
    budgets: [
      { level: 'កម្រិតសន្សំសំចៃ (Backpacker)', cost: '$20 – $35 / ថ្ងៃ' },
      { level: 'កម្រិតមធ្យម (Mid-Range)', cost: '$50 – $100 / ថ្ងៃ' },
      { level: 'កម្រិតឧត្ដម (Luxury)', cost: '$150+ / ថ្ងៃ' }
    ],

    // Festivals Calendar
    festivalsTitle: 'ពិធីបុណ្យ និងព្រឹត្តិការណ៍ធំៗ',
    festivals: [
      { name: 'ពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិ', time: 'ពាក់កណ្តាលខែមេសា' },
      { name: 'ពិធីបុណ្យភ្ជុំបិណ្ឌ', time: 'ខែកញ្ញា / តុលា' },
      { name: 'ពិធីបុណ្យអុំទូក បណ្តែតប្រទីប', time: 'ខែវិច្ឆិកា' }
    ],

    // Emergency Contacts
    emergencyTitle: 'លេខទូរស័ព្ទសង្គ្រោះបន្ទាន់',
    contacts: [
      { label: 'នគរបាលទេសចរណ៍', val: '+855 23 724 793' },
      { label: 'អាជ្ញាធរបន្ទាន់', val: '117 (ប៉ូលីស) / 119 (រថយន្តសង្គ្រោះ)' },
      { label: 'មន្ទីរពេទ្យធំៗ', val: 'មន្ទីរពេទ្យរ៉ូយ៉ាល់ភ្នំពេញ / មន្ទីរពេទ្យកាល់ម៉ែត' }
    ]
  }
};

function Info({ language = 'kh' }) {
  const isKhmer = language === 'kh';
  const content = infoSections[isKhmer ? 'kh' : 'en'];

  return (
    <section className="info-page">
      {/* Hero Section */}
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

      {/* Primary Info Cards */}
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

      {/* Main Research Panels */}
      <div className="info-panel-grid">
        
        {/* Regions Section */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <h2>{content.regionsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.regions.map((reg, idx) => (
              <div key={idx} className="detail-item">
                <strong>{reg.name}</strong>
                <p>{reg.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Apps Section */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faMobileScreen} />
            <h2>{content.appsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.apps.map((app, idx) => (
              <div key={idx} className="detail-item">
                <strong>{app.name}</strong> <span>{app.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faWallet} />
            <h2>{content.budgetTitle}</h2>
          </div>
          <div className="detail-list">
            {content.budgets.map((b, idx) => (
              <div key={idx} className="detail-item budget-item">
                <span>{b.level}</span>
                <span className="budget-tag">{b.cost}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Festivals Calendar */}
        <div className="info-panel-section">
          <div className="section-heading">
            <FontAwesomeIcon icon={faCalendarDays} />
            <h2>{content.festivalsTitle}</h2>
          </div>
          <div className="detail-list">
            {content.festivals.map((f, idx) => (
              <div key={idx} className="detail-item budget-item">
                <strong>{f.name}</strong>
                <span className="time-tag">{f.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Emergency & Support Panel */}
      <div className="info-panel-single accent">
        <div className="section-heading">
          <FontAwesomeIcon icon={faHospital} />
          <h2>{content.emergencyTitle}</h2>
        </div>
        <div className="contact-grid">
          {content.contacts.map((c, idx) => (
            <div key={idx} className="contact-card">
              <span className="contact-label">{c.label}:</span>
              <span className="contact-val">{c.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;