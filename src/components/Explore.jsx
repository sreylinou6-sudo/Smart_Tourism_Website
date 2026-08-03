import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faHeart,
  faArrowRight,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import '../styles/Explore.css';

const placesData = [
  {
    id: 1,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
  {
    id: 2,
    title: { en: 'Koh Rong Sanloem Island', kh: 'កោះកុងសែន' },
    location: { en: 'Sihanoukville', kh: 'ព្រះសីហនុ' },
    category: { en: 'Beaches', kh: 'ឆ្នេរខ្សាច់' },
    rating: 4.8,
    reviews: 850,
    price: '$25',
    image: 'https://dontforgettomove.com/wp-content/uploads/2015/06/Saracen-Bay-Resort.jpg',
    isPopular: true
  },
  {
    id: 3,
    title: { en: 'Bokor National Park', kh: 'ឧទ្យានជាតិបូកគោ' },
    location: { en: 'Kampot', kh: 'កំពត' },
    category: { en: 'Nature', kh: 'ធម្មជាតិ' },
    rating: 4.6,
    reviews: 420,
    price: 'Free',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco-LlaonMIofcG8QZp_U1FHLUmDEHMNnA2gLQ-Zofgt_KqR52IbU14WY&s=10',
    isPopular: false
  },
  {
    id: 4,
    title: { en: 'Royal Palace & Silver Pagoda', kh: 'ព្រះបរមរាជវាំងចតុមុខមង្គល' },
    location: { en: 'Phnom Penh', kh: 'ភ្នំពេញ' },
    category: { en: 'Culture', kh: 'វប្បធម៌' },
    rating: 4.7,
    reviews: 960,
    price: '$10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8oBFhRGVIjXwMdJ9Ju14ZYT9NytIYrUMpUs6NSwmnzzT22DVgMcybk4&s=10',
    isPopular: false
  },
  {
    id: 5,
    title: { en: 'Kirirom Pine Forest', kh: 'ព្រៃក្តារីរំ' },
    location: { en: 'Kampong Speu', kh: 'កំពតស្ពឺ' },
    category: { en: 'Adventure', kh: 'ការជំរុញ' },
    rating: 4.5,
    reviews: 310,
    price: '$5',
    image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/methode/2019/04/08/4c398e80-575b-11e9-a3ae-f2742b367090_image_hires_140430.jpg?itok=OrrdOs3K&v=1554703484',
    isPopular: false
  },
  {
    id: 6,
    title: { en: 'Phnom Kulen Waterfalls', kh: 'ទឹកធ្លាក់ភ្នំគូលែន' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Nature', kh: 'ធម្មជាតិ' },
    rating: 4.8,
    reviews: 640,
    price: '$20',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/PhnomKulen.jpg',
    isPopular: true
  },
   {
    id: 7,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
   {
    id: 8,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
   {
    id: 9,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
   {
    id: 10,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
   {
    id: 11,
    title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
    location: { en: 'Siem Reap', kh: 'សៀមរាប' },
    category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
    rating: 4.9,
    reviews: 1280,
    price: '$37',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
    isPopular: true
  },
];

function Explore({ language = 'en' }) {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const isKhmer = language === 'kh';

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((favId) => favId !== id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  };

  const categories = isKhmer
    ? ['ទាំងអស់', 'ប្រវត្តិសាស្ត្រ', 'ឆ្នេរខ្សាច់', 'ធម្មជាតិ', 'វប្បធម៌', 'ការជំរុញ']
    : ['All', 'Historical', 'Beaches', 'Nature', 'Culture', 'Adventure'];

  const filteredPlaces = placesData.filter((place) => {
    const categoryValue = place.category[isKhmer ? 'kh' : 'en'];
    const titleValue = place.title[isKhmer ? 'kh' : 'en'];
    const locationValue = place.location[isKhmer ? 'kh' : 'en'];
    const matchesCategory = selectedCategory === 'All' || selectedCategory === 'ទាំងអស់' || categoryValue === selectedCategory;
    const matchesSearch = titleValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      locationValue.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const labels = {
    title: isKhmer ? 'ស្វែងរកកន្លែងទេសចរណ៍' : 'Explore Destinations',
    subtitle: isKhmer
      ? 'ស្វែងរកកន្លែងដែលទទួលបានការវាយតម្លៃខ្ពស់ និងកន្លែងបាំងមិនចេញនៅទូទាំងតំបន់។'
      : 'Find top-rated spots and hidden treasures across the region.',
    search: isKhmer ? 'ស្វែងរកកន្លែង ឬ ខេត្ត...' : 'Search destination or province...',
    badge: isKhmer ? 'វាយតម្លៃខ្ពស់' : 'Top Rated',
    entry: isKhmer ? 'ចូល' : 'Entry',
    details: isKhmer ? 'មើលព័ត៌មានលម្អិត' : 'View Details',
    save: isKhmer ? 'រក្សាភាសា' : 'Save place'
  };

  return (
    <div className="explore-page">
      <div className="explore-container">
        <div className="explore-header">
          <div>
            <h1 className="explore-title">{labels.title}</h1>
            <p className="explore-subtitle">{labels.subtitle}</p>
          </div>

          <div className="explore-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder={labels.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

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

        <div className="places-grid">
          {filteredPlaces.map((place) => {
            const currentTitle = place.title[isKhmer ? 'kh' : 'en'];
            const currentLocation = place.location[isKhmer ? 'kh' : 'en'];
            const currentCategory = place.category[isKhmer ? 'kh' : 'en'];
            return (
              <div key={place.id} className="place-card">
                <div className="place-image-container">
                  <img src={place.image} alt={currentTitle} className="place-image" />

                  {place.isPopular && <span className="popular-badge">{labels.badge}</span>}

                  <button
                    className={`favorite-btn ${favorites.includes(place.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(place.id)}
                    aria-label={labels.save}
                  >
                    <FontAwesomeIcon
                      icon={favorites.includes(place.id) ? faHeart : faHeartRegular}
                      className={favorites.includes(place.id) ? 'active' : ''}
                    />
                  </button>

                  <div className="price-tag">
                    <span>{labels.entry}:</span> <strong>{place.price}</strong>
                  </div>
                </div>

                <div className="place-card-body">
                  <div className="place-meta">
                    <span className="place-category">{currentCategory}</span>
                    <div className="place-rating">
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <span>{place.rating}</span>
                      <small>({place.reviews})</small>
                    </div>
                  </div>

                  <h3 className="place-title">{currentTitle}</h3>

                  <div className="place-location">
                    <FontAwesomeIcon icon={faLocationDot} /> {currentLocation}, {isKhmer ? 'កម្ពុជា' : 'Cambodia'}
                  </div>

                  <div className="place-card-footer">
                    <button className="details-btn">
                      {labels.details} <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Explore;