import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faLocationDot, 
  faHeart, 
  faBus, 
  faUtensils, 
  faTicket, 
  faShip, 
  faBed, 
  faWater, 
  faTree, 
  faCamera,
  faMountain
} from '@fortawesome/free-solid-svg-icons';
import '../styles/FeaturedProducts.css';

const featuredTours = [
  {
    id: 1,
    title: "Angkor Wat Day Tour",
    location: "Siem Reap, Cambodia",
    price: "$65",
    unit: "per person",
    rating: 4.8,
    reviews: "1.5k",
    image: "https://images.unsplash.com/photo-1500049222538-2df4c3032dbe?q=80&w=800&auto=format&fit=crop",
    highlights: [
      { icon: faCamera, text: "Guided tour" },
      { icon: faBus, text: "Transport" },
      { icon: faUtensils, text: "Lunch" },
      { icon: faTicket, text: "Pass included" }
    ],
    link: "/explore/angkor-wat"
  },
  {
    id: 2,
    title: "Koh Rong Island Getaway",
    location: "Sihanoukville, Cambodia",
    price: "$120",
    unit: "per person",
    rating: 4.9,
    reviews: "950",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016bb5d?q=80&w=800&auto=format&fit=crop",
    highlights: [
      { icon: faShip, text: "Boat transfer" },
      { icon: faBed, text: "Beachfront stay" },
      { icon: faWater, text: "Snorkeling" }
    ],
    link: "/explore/koh-rong"
  },
  {
    id: 3,
    title: "Cardamom Rainforest Adventure",
    location: "Koh Kong, Cambodia",
    price: "$85",
    unit: "per person",
    rating: 4.7,
    reviews: "720",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    highlights: [
      { icon: faTree, text: "Trekking" },
      { icon: faBed, text: "Eco-lodge" },
      { icon: faWater, text: "Waterfall visit" }
    ],
    link: "/explore/cardamom"
  },
  {
    id: 4,
    title: "Kampot River & Bokor Mountain",
    location: "Kampot, Cambodia",
    price: "$50",
    unit: "per person",
    rating: 4.6,
    reviews: "680",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    highlights: [
      { icon: faShip, text: "River cruise" },
      { icon: faMountain, text: "Mountain tour" },
      { icon: faUtensils, text: "Pepper farm" }
    ],
    link: "/explore/kampot"
  }
];

function FeaturedProducts() {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((bId) => bId !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  return (
    <section className="featured-section">
      <div className="featured-container">
        
        {/* Header Title */}
        <div className="featured-header">
          <span className="featured-subtitle">FEATURED</span>
          <h2 className="featured-title">DISCOVERIES</h2>
        </div>

        {/* Cards Grid */}
        <div className="featured-grid">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="featured-card">
              
              {/* Card Image Banner */}
              <div className="card-image-wrapper">
                <img src={tour.image} alt={tour.title} className="card-image" />
                
                {/* Bookmark Heart Button */}
                <button 
                  className={`bookmark-btn ${bookmarks.includes(tour.id) ? 'active' : ''}`}
                  onClick={() => toggleBookmark(tour.id)}
                  aria-label="Bookmark tour"
                >
                  Bookmark <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

              {/* Card Body Details */}
              <div className="card-body">
                <h3 className="card-tour-title">{tour.title}</h3>

                {/* Price & Rating */}
                <div className="card-price-row">
                  <div className="price-info">
                    <span className="price-amount">{tour.price}</span>
                    <span className="price-unit"> / {tour.unit}</span>
                  </div>
                </div>

                <div className="card-rating-row">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <span className="rating-score">{tour.rating}</span>
                  <span className="rating-count">({tour.reviews} reviews)</span>
                </div>

                <div className="card-location">
                  <FontAwesomeIcon icon={faLocationDot} /> {tour.location}
                </div>

                {/* Feature Highlights Grid */}
                <div className="highlights-grid">
                  {tour.highlights.map((item, index) => (
                    <div key={index} className="highlight-item">
                      <FontAwesomeIcon icon={item.icon} className="highlight-icon" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Explore CTA Button */}
                <Link to={tour.link} className="explore-btn">
                  EXPLORE
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;