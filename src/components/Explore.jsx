import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faLocationDot, 
  faHeart, 
  faArrowRight, 
  faSliders, 
  faMagnifyingGlass 
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import '../styles/Explore.css';

const placesData = [
  {
    id: 1,
    title: "Angkor Wat Temple Complex",
    location: "Siem Reap",
    category: "Historical",
    rating: 4.9,
    reviews: 1280,
    price: "$37",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw",
    isPopular: true
  },
  {
    id: 2,
    title: "Koh Rong Sanloem Island",
    location: "Sihanoukville",
    category: "Beaches",
    rating: 4.8,
    reviews: 850,
    price: "$25",
    image: "https://i0.wp.com/dreamsbecomewings.com/wp-content/uploads/2023/01/B201ADBE-EAB2-488A-992B-4EAA8A138ED2.jpeg?fit=2048%2C1536&ssl=1",
    isPopular: true
  },
  {
    id: 3,
    title: "Bokor National Park",
    location: "Kampot",
    category: "Nature",
    rating: 4.6,
    reviews: 420,
    price: "Free",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco-LlaonMIofcG8QZp_U1FHLUmDEHMNnA2gLQ-Zofgt_KqR52IbU14WY&s=10",
    isPopular: false
  },
  {
    id: 4,
    title: "Royal Palace & Silver Pagoda",
    location: "Phnom Penh",
    category: "Culture",
    rating: 4.7,
    reviews: 960,
    price: "$10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8oBFhRGVIjXwMdJ9Ju14ZYT9NytIYrUMpUs6NSwmnzzT22DVgMcybk4&s=10",
    isPopular: false
  },
  {
    id: 5,
    title: "Kirirom Pine Forest",
    location: "Kampong Speu",
    category: "Adventure",
    rating: 4.5,
    reviews: 310,
    price: "$5",
    image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/methode/2019/04/08/4c398e80-575b-11e9-a3ae-f2742b367090_image_hires_140430.jpg?itok=OrrdOs3K&v=1554703484",
    isPopular: false
  },
  {
    id: 6,
    title: "Phnom Kulen Waterfalls",
    location: "Siem Reap",
    category: "Nature",
    rating: 4.8,
    reviews: 640,
    price: "$20",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/PhnomKulen.jpg",
    isPopular: true
  }
];

function Explore() {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const categories = ['All', 'Historical', 'Beaches', 'Nature', 'Culture', 'Adventure'];

  const filteredPlaces = placesData.filter(place => {
    const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
    const matchesSearch = place.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          place.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explore-page">
      <div className="explore-container">
        
        {/* Header & Controls */}
        <div className="explore-header">
          <div>
            <h1 className="explore-title">Explore Destinations</h1>
            <p className="explore-subtitle">Find top-rated spots and hidden treasures across the region.</p>
          </div>

          {/* Search Field */}
          <div className="explore-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search destination or province..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="categories-bar">
          <div className="category-pills">
            {categories.map((cat, index) => (
              <button 
                key={index} 
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Places Card Grid */}
        <div className="places-grid">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="place-card">
              
              {/* Card Image Area */}
              <div className="place-image-container">
                <img src={place.image} alt={place.title} className="place-image" />
                
                {/* Popular Badge */}
                {place.isPopular && <span className="popular-badge">Top Rated</span>}
                
                {/* Favorite Heart Button */}
                <button 
                  className="favorite-btn" 
                  onClick={() => toggleFavorite(place.id)}
                  aria-label="Save place"
                >
                  <FontAwesomeIcon 
                    icon={favorites.includes(place.id) ? faHeartSolid : faHeartRegular} 
                    className={favorites.includes(place.id) ? 'active' : ''} 
                  />
                </button>

                {/* Price Tag Overlay */}
                <div className="price-tag">
                  <span>Entry:</span> <strong>{place.price}</strong>
                </div>
              </div>

              {/* Card Body Area */}
              <div className="place-card-body">
                <div className="place-meta">
                  <span className="place-category">{place.category}</span>
                  <div className="place-rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <span>{place.rating}</span>
                    <small>({place.reviews})</small>
                  </div>
                </div>

                <h3 className="place-title">{place.title}</h3>

                <div className="place-location">
                  <FontAwesomeIcon icon={faLocationDot} /> {place.location}, Cambodia
                </div>

                <div className="place-card-footer">
                  <button className="details-btn">
                    View Details <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Explore;