import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faHeart,
  faBus,
  faUtensils,
  faCamera,
  faShip,
  faBed,
  faTree,
  faMountain,
  faCompass
} from '@fortawesome/free-solid-svg-icons';
import '../styles/FeaturedDestinations.css';

// Data in 2 languages (English & Khmer)
const featuredDestinationsData = {
  en: [
    {
      id: 1,
      title: 'Angkor Wat Day Tour',
      location: 'Siem Reap, Cambodia',
      price: '$65',
      unit: 'per person',
      rating: 4.8,
      reviews: '1.5k',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJqAns7QwBntewCPA19xmp8lz78YutodX5SXCdbBnRNzSIZxIObKaETs&s=10',
      badge: 'Most loved',
      highlights: [
        { icon: faCamera, text: 'Guided tour' },
        { icon: faBus, text: 'Transport' },
        { icon: faUtensils, text: 'Lunch' }
      ],
      summary: 'A full-day visit through temple corridors, cultural storytelling, and iconic viewpoints.',
      bestTime: 'Start early to enjoy the calmest atmosphere and most vivid sunrise light.',
      entryFee: '$65 package includes transport and lunch',
      link: '/explore/angkor-wat'
    },
    {
      id: 2,
      title: 'Koh Rong Island Escape',
      location: 'Sihanoukville, Cambodia',
      price: '$120',
      unit: 'per person',
      rating: 4.9,
      reviews: '950',
      image: 'https://www.global-gallivanting.com/wp-content/uploads/2014/02/Untitled-design-15.jpg',
      badge: 'Beach retreat',
      highlights: [
        { icon: faShip, text: 'Boat transfer' },
        { icon: faBed, text: 'Beach stay' },
        { icon: faCamera, text: 'Snorkeling' }
      ],
      summary: 'Spend a relaxing day by the sea with quiet beaches, coral reefs, and island cafés.',
      bestTime: 'Visit between November and February for calm water and sunny afternoons.',
      entryFee: '$120 package includes boat transfer and beach stay',
      link: '/explore/koh-rong'
    },
    {
      id: 3,
      title: 'Cardamom Rainforest Adventure',
      location: 'Koh Kong, Cambodia',
      price: '$85',
      unit: 'per person',
      rating: 4.7,
      reviews: '720',
      image: 'https://ak-d.tripcdn.com/images/1mi0f224x99i2z8ft3D32.jpg?proc=source/trip',
      badge: 'Nature escape',
      highlights: [
        { icon: faTree, text: 'Trekking' },
        { icon: faBed, text: 'Eco lodge' },
        { icon: faMountain, text: 'Waterfalls' }
      ],
      summary: 'Discover the rainforest with jungle walks, wildlife encounters, and scenic waterfalls.',
      bestTime: 'The rainy season reveals fuller waterfalls and greener landscapes.',
      entryFee: '$85 package covers an eco-lodge experience',
      link: '/explore/cardamom'
    },
    {
      id: 4,
      title: 'Kampot River & Bokor',
      location: 'Kampot, Cambodia',
      price: '$50',
      unit: 'per person',
      rating: 4.6,
      reviews: '680',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLHqkukYmfoionW9Ov2wxvp8qDIKkspHjBv21PIWIZ9y9Qv4-P7u2TvA&s=10',
      badge: 'Weekend pick',
      highlights: [
        { icon: faShip, text: 'River cruise' },
        { icon: faMountain, text: 'Mountain view' },
        { icon: faUtensils, text: 'Local food' }
      ],
      summary: 'Combine riverside scenery, mountain views, and local flavors in a relaxed getaway.',
      bestTime: 'Late afternoon is perfect for fresh air and golden light.',
      entryFee: '$50 package includes the river experience',
      link: '/explore/kampot'
    }
  ],
  kh: [
    {
      id: 1,
      title: 'ទស្សនាប្រាសាទអង្គរវត្តមួយថ្ងៃ',
      location: 'សៀមរាប, កម្ពុជា',
      price: '$65',
      unit: 'ក្នុងម្នាក់',
      rating: 4.8,
      reviews: '1.5ពាន់',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJqAns7QwBntewCPA19xmp8lz78YutodX5SXCdbBnRNzSIZxIObKaETs&s=10',
      badge: 'ពេញនិយមបំផុត',
      highlights: [
        { icon: faCamera, text: 'មគ្គុទ្ទេសក៍' },
        { icon: faBus, text: 'ការដឹកជញ្ជូន' },
        { icon: faUtensils, text: 'អាហារថ្ងៃត្រង់' }
      ],
      summary: 'ទស្សនាប្រាសាទបុរាណ ស្ដាប់រឿងរ៉ាវវប្បធម៌ និងទស្សនាទិដ្ឋភាពថ្ងៃរះដ៏ស្រស់ស្អាត។',
      bestTime: 'គួរចាប់ផ្ដើមពីព្រលឹមដើម្បីរីករាយនឹងបរិយាកាសស្ងប់ស្ងាត់ និងទិដ្ឋភាពថ្ងៃរះ។',
      entryFee: 'កញ្ចប់ $65 រួមបញ្ចូលការធ្វើដំណើរ និងអាហារថ្ងៃត្រង់',
      link: '/explore/angkor-wat'
    },
    {
      id: 2,
      title: 'ដំណើរកម្សាន្តកោះរ៉ុង',
      location: 'ព្រះសីហនុ, កម្ពុជា',
      price: '$120',
      unit: 'ក្នុងម្នាក់',
      rating: 4.9,
      reviews: '950',
      image: 'https://www.global-gallivanting.com/wp-content/uploads/2014/02/Untitled-design-15.jpg',
      badge: 'សម្រាកតំបន់ឆ្នេរ',
      highlights: [
        { icon: faShip, text: 'សំបុត្រទូក' },
        { icon: faBed, text: 'ស្នាក់នៅឆ្នេរ' },
        { icon: faCamera, text: 'មុជទឹកមើលផ្កាប្រកាំង' }
      ],
      summary: 'សម្រាកកាយនៅតំបន់ឆ្នេរខ្សាច់សស្អាត ទឹកសមុទ្រថ្លាយ៉ង់ និងហាងកាហ្វេលើកោះ។',
      bestTime: 'ចន្លោះខែវិច្ឆិកា ដល់ខែកុម្ភៈ មានរលកស្ងប់ស្ងាត់ និងធាតុអាកាសល្អ។',
      entryFee: 'កញ្ចប់ $120 រួមបញ្ចូលការធ្វើដំណើរតាមទូក និងការស្នាក់នៅ',
      link: '/explore/koh-rong'
    },
    {
      id: 3,
      title: 'ផ្សងព្រេងព្រៃក្រវ៉ាញ',
      location: 'កោះកុង, កម្ពុជា',
      price: '$85',
      unit: 'ក្នុងម្នាក់',
      rating: 4.7,
      reviews: '720',
      image: 'https://ak-d.tripcdn.com/images/1mi0f224x99i2z8ft3D32.jpg?proc=source/trip',
      badge: 'ផ្សារភ្ជាប់ធម្មជាតិ',
      highlights: [
        { icon: faTree, text: 'ដើរព្រៃ' },
        { icon: faBed, text: 'ស្នាក់នៅបែបធម្មជាតិ' },
        { icon: faMountain, text: 'ទឹកធ្លាក់' }
      ],
      summary: 'ស្វែងយល់ពីព្រៃឈើធម្មជាតិ ការដើរព្រៃ មើលសត្វព្រៃ និងទឹកធ្លាក់ដ៏ស្រស់ស្អាត។',
      bestTime: 'រដូវវស្សាបង្ហាញពីសម្រស់ទឹកធ្លាក់ពេញប្រៀប និងព្រៃឈើខៀវស្រងាត់។',
      entryFee: 'កញ្ចប់ $85 រួមបញ្ចូលការស្នាក់នៅបែប Eco-lodge',
      link: '/explore/cardamom'
    },
    {
      id: 4,
      title: 'ទស្សនាទន្លេកំពត និងភ្នំបូកគោ',
      location: 'កំពត, កម្ពុជា',
      price: '$50',
      unit: 'ក្នុងម្នាក់',
      rating: 4.6,
      reviews: '680',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLHqkukYmfoionW9Ov2wxvp8qDIKkspHjBv21PIWIZ9y9Qv4-P7u2TvA&s=10',
      badge: 'ជម្រើសចុងសប្តាហ៍',
      highlights: [
        { icon: faShip, text: 'ជិះទូកតាមទន្លេ' },
        { icon: faMountain, text: 'ទេសភាពលើភ្នំ' },
        { icon: faUtensils, text: 'អាហារក្នុងស្រុក' }
      ],
      summary: 'រីករាយជាមួយទេសភាពមាត់ទន្លេ ខ្យល់អាកាសលើភ្នំ និងម្ហូបអាហារក្នុងស្រុកដ៏មានរស់ជាតិ។',
      bestTime: 'ពេលរសៀលជ្រាលជ្រេល្អបំផុតសម្រាប់ខ្យល់អាកាសបរិសុទ្ធ និងពន្លឺព្រះអាទិត្យអស្ដង្គត។',
      entryFee: 'កញ្ចប់ $50 រួមបញ្ចូលការជិះទូកកម្សាន្ត',
      link: '/explore/kampot'
    }
  ]
};

// UI Translations
const uiTranslations = {
  en: {
    label: 'Featured Destinations',
    title: 'Explore the best trips in Cambodia',
    subtitle: 'Hand-picked experiences for culture lovers, beach seekers, and nature explorers.',
    reviewsLabel: 'reviews',
    ctaBtn: 'Explore now',
    saveAria: 'Save destination'
  },
  kh: {
    label: 'តំបន់ទេសចរណ៍ល្បីៗ',
    title: 'ស្វែងរកដំណើរកម្សាន្តល្អបំផុតនៅកម្ពុជា',
    subtitle: 'បទពិសោធន៍ដ៏ពិសេសសម្រាប់អ្នកស្នេហាវប្បធម៌ អ្នកចូលចិត្តតំបន់ឆ្នេរ និងធម្មជាតិ។',
    reviewsLabel: 'ការវាយតម្លៃ',
    ctaBtn: 'ស្វែងរកឥឡូវនេះ',
    saveAria: 'រក្សាទុកតំបន់ទេសចរណ៍'
  }
};

function FeaturedDestinations({ onExplore, language = 'en', theme = 'light' }) {
  const [savedTrips, setSavedTrips] = useState([]);

  // Resolve language key (defaulting to 'en' if undefined or invalid)
  const langKey = language === 'kh' ? 'kh' : 'en';
  
  const currentUI = uiTranslations[langKey];
  const destinations = featuredDestinationsData[langKey];

  const toggleSave = (id) => {
    setSavedTrips((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={`featured-destinations-section ${theme}`}>
      <div className="featured-destinations-container">
        
        <div className="featured-destinations-header">
          <div className="featured-destinations-heading">
            <span className="featured-destinations-label">
              <FontAwesomeIcon icon={faCompass} /> {currentUI.label}
            </span>
            <h2>{currentUI.title}</h2>
            <p>{currentUI.subtitle}</p>
          </div>
        </div>

        <div className="featured-destinations-grid">
          {destinations.map((destination) => {
            const isSaved = savedTrips.includes(destination.id);

            return (
              <article key={destination.id} className="destination-card">
                <div className="destination-image-wrap">
                  <img src={destination.image} alt={destination.title} className="destination-image" />
                  <span className="destination-badge">{destination.badge}</span>
                  <button
                    type="button"
                    className={`save-btn ${isSaved ? 'active' : ''}`}
                    onClick={() => toggleSave(destination.id)}
                    aria-label={currentUI.saveAria}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>

                <div className="destination-body">
                  <div className="destination-top-row">
                    <div>
                      <h3>{destination.title}</h3>
                      <p className="destination-location">
                        <FontAwesomeIcon icon={faLocationDot} /> {destination.location}
                      </p>
                    </div>
                    <div className="destination-price">
                      {destination.price}
                      <span className="price-unit"> / {destination.unit}</span>
                    </div>
                  </div>

                  <div className="destination-meta">
                    <div className="rating-pill">
                      <FontAwesomeIcon icon={faStar} /> {destination.rating}
                    </div>
                    <span className="review-count">
                      {destination.reviews} {currentUI.reviewsLabel}
                    </span>
                  </div>

                  <div className="destination-highlights">
                    {destination.highlights.map((item, index) => (
                      <div key={index} className="highlight-chip">
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <button type="button" className="destination-cta" onClick={() => onExplore?.(destination)}>
                    {currentUI.ctaBtn}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;