import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faXmark, 
  faExpand, 
  faFilter,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

// Sample tourism gallery data
const galleryData = [
  {
    id: 1,
    title: "Sunrise over Angkor Wat",
    location: "Siem Reap",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1500049222538-2df4c3032dbe?q=80&w=1200&auto=format&fit=crop",
    likes: 342
  },
  {
    id: 2,
    title: "Koh Rong Sanloem Sunset",
    location: "Sihanoukville",
    category: "coastal",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016bb5d?q=80&w=1200&auto=format&fit=crop",
    likes: 512
  },
  {
    id: 3,
    title: "Cardamom Jungle Canopy",
    location: "Koh Kong",
    category: "nature",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    likes: 218
  },
  {
    id: 4,
    title: "Traditional Amok Meal",
    location: "Phnom Penh",
    category: "food",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    likes: 189
  },
  {
    id: 5,
    title: "Banteay Srei Carvings",
    location: "Siem Reap",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    likes: 275
  },
  {
    id: 6,
    title: "Kampot River Sunset",
    location: "Kampot",
    category: "nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    likes: 410
  }
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter items
  const filteredItems = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      {/* Header Banner */}
      <section className="gallery-header">
        <div className="gallery-header-container">
          <span className="gallery-badge">Visual Explorer</span>
          <h1 className="gallery-title">Cambodia Through the Lens</h1>
          <p className="gallery-subtitle">
            Browse through crowd-sourced and curated photos from amazing destinations across the country.
          </p>

          {/* Filter Tabs */}
          <div className="filter-bar">
            <span className="filter-label">
              <FontAwesomeIcon icon={faFilter} /> Filter:
            </span>
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'cultural' ? 'active' : ''}`}
              onClick={() => setActiveFilter('cultural')}
            >
              Cultural & Heritage
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'nature' ? 'active' : ''}`}
              onClick={() => setActiveFilter('nature')}
            >
              Nature & Forests
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'coastal' ? 'active' : ''}`}
              onClick={() => setActiveFilter('coastal')}
            >
              Beaches & Islands
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'food' ? 'active' : ''}`}
              onClick={() => setActiveFilter('food')}
            >
              Cuisine
            </button>
          </div>
        </div>
      </section>

      {/* Main Image Grid */}
      <section className="gallery-grid-container">
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-card-overlay">
                <button className="expand-btn" aria-label="Expand image">
                  <FontAwesomeIcon icon={faExpand} />
                </button>
                <div className="gallery-card-info">
                  <span className="gallery-location">
                    <FontAwesomeIcon icon={faLocationDot} /> {item.location}
                  </span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <span className="gallery-likes">
                    <FontAwesomeIcon icon={faHeart} /> {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-img" />
            <div className="lightbox-details">
              <div>
                <h2>{selectedImage.title}</h2>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {selectedImage.location}
                </p>
              </div>
              <div className="lightbox-likes">
                <FontAwesomeIcon icon={faHeart} className="heart-icon" /> {selectedImage.likes} Likes
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;