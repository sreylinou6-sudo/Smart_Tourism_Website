import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagnifyingGlass, 
  faLocationDot, 
  faCalendarDays, 
  faCompass,
  faUmbrellaBeach,
  faMountain,
  faUtensils,
  faLandmark
} from '@fortawesome/free-solid-svg-icons';
import '../styles/HeroSection.css';

function HeroSection() {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to explore page with search params
    navigate(`/explore?destination=${destination}&category=${category}`);
  };

  return (
    <section className="hero-section">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <span className="hero-badge">
            <FontAwesomeIcon icon={faCompass} /> Discover the Unexplored
          </span>
          <h1 className="hero-title">
            Explore the World with <span className="highlight">Smart Tourism</span>
          </h1>
          <p className="hero-subtitle">
            Uncover curated destinations, secret local spots, and seamless itinerary planning tailored just for your next adventure.
          </p>
        </div>

        {/* Interactive Search Bar Box */}
        <div className="hero-search-box">
          <form onSubmit={handleSearch} className="hero-search-form">
            
            {/* Destination Input */}
            <div className="search-field">
              <FontAwesomeIcon icon={faLocationDot} className="field-icon" />
              <div className="field-input-wrapper">
                <label>Where to?</label>
                <input 
                  type="text" 
                  placeholder="e.g. Siem Reap, Bali, Tokyo" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <div className="field-divider"></div>

            {/* Travel Category Selector */}
            <div className="search-field">
              <FontAwesomeIcon icon={faCompass} className="field-icon" />
              <div className="field-input-wrapper">
                <label>Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="beaches">Beaches & Islands</option>
                  <option value="mountains">Mountains & Hiking</option>
                  <option value="culture">Culture & History</option>
                  <option value="food">Local Cuisine</option>
                </select>
              </div>
            </div>

            <div className="field-divider"></div>

            {/* Date Input */}
            <div className="search-field">
              <FontAwesomeIcon icon={faCalendarDays} className="field-icon" />
              <div className="field-input-wrapper">
                <label>When?</label>
                <input type="date" className="date-input" />
              </div>
            </div>

            {/* Search Button */}
            <button type="submit" className="hero-search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Popular Category Quick Tags */}
        <div className="hero-quick-tags">
          <span className="tags-label">Popular searches:</span>
          <button onClick={() => navigate('/explore?cat=beaches')} className="tag-btn">
            <FontAwesomeIcon icon={faUmbrellaBeach} /> Beaches
          </button>
          <button onClick={() => navigate('/explore?cat=mountains')} className="tag-btn">
            <FontAwesomeIcon icon={faMountain} /> Mountains
          </button>
          <button onClick={() => navigate('/explore?cat=culture')} className="tag-btn">
            <FontAwesomeIcon icon={faLandmark} /> Culture
          </button>
          <button onClick={() => navigate('/explore?cat=food')} className="tag-btn">
            <FontAwesomeIcon icon={faUtensils} /> Food
          </button>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;