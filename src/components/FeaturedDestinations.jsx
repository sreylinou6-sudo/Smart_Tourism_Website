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

const featuredDestinations = [
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
];

function FeaturedDestinations({ onExplore }) {
  const [savedTrips, setSavedTrips] = useState([]);

  const toggleSave = (id) => {
    setSavedTrips((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section className="featured-destinations-section">
      <div className="featured-destinations-container">
        <div className="featured-destinations-header">
          <div className="featured-destinations-heading">
            <span className="featured-destinations-label">
              <FontAwesomeIcon icon={faCompass} /> Featured Destinations
            </span>
            <h2>Explore the best trips in Cambodia</h2>
            <p>Hand-picked experiences for culture lovers, beach seekers, and nature explorers.</p>
          </div>
        </div>

        <div className="featured-destinations-grid">
          {featuredDestinations.map((destination) => {
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
                    aria-label="Save destination"
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
                    <div className="destination-price">{destination.price}</div>
                  </div>

                  <div className="destination-meta">
                    <div className="rating-pill">
                      <FontAwesomeIcon icon={faStar} /> {destination.rating}
                    </div>
                    <span className="review-count">{destination.reviews} reviews</span>
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
                    Explore now
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
