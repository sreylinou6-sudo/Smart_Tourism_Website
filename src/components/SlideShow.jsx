import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import '../styles/SlideShow.css';

const slideData = [
  {
    id: 1,
    badge: { en: 'Cultural Wonder', kh: 'អាថ៌កំបាំងវប្បធម៌' },
    title: { en: 'The Majestic Angkor Wat', kh: 'អង្គរវត្តដ៏អស្ចារ្យ' },
    location: { en: 'Siem Reap, Cambodia', kh: 'សៀមរាប កម្ពុជា' },
    description: {
      en: 'Step back in time and explore the world’s largest religious monument, a masterpiece of Khmer architecture.',
      kh: 'ត្រឡប់ទៅមកពីអតីតកាល និងស្វែងយល់ពីអគារ religieuxធំជាងគេនៅក្នុងពិភពលោក ដែលជាស្នាដៃអក្សរសិល្ប៍កម្ពុជា។'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtp3lhc9frrwi1RLy15b_3k1EDMUBz-8cX3D-7EqqpPQ&s=10',
    link: '/explore/angkor-wat'
  },
  {
    id: 2,
    badge: { en: 'Island Escape', kh: 'ការលាលែងកោះ' },
    title: { en: 'Tropical Paradise Koh Rong', kh: 'កោះរ៉ុងត្រជាក់ដ៏ល្អ' },
    location: { en: 'Sihanoukville, Cambodia', kh: 'ខេត្តព្រះសីហនុ កម្ពុជា' },
    description: {
      en: 'Relax on pristine white sands and swim in crystal-clear turquoise waters at Cambodia’s premier island destination.',
      kh: 'សម្រាកលើឆ្នេរថ្មពណ៌ស្កឹម និងហែលទឹកនៅក្នុងទឹកពណ៌ប៊ីរីច្បាស់នៅកន្លែងជំរាបកោះដ៏ល្បីរបស់កម្ពុជា។'
    },
    image: 'https://d122axpxm39woi.cloudfront.net/images/destinations/origin/684161671e05d.jpg',
    link: '/explore/koh-rong'
  },
  {
    id: 3,
    badge: { en: 'Wild Nature', kh: 'ធម្មជាតិដ៏ស្រស់ស្អាត' },
    title: { en: 'Eco-Adventure in Cardamom', kh: 'ការរីករាយធម្មជាតិក្នុងក្រវាត់កាពី' },
    location: { en: 'Koh Kong, Cambodia', kh: 'កោះកុង កម្ពុជា' },
    description: {
      en: 'Immerse yourself in one of Southeast Asia’s last great rainforests and discover rare wildlife and hidden waterfalls.',
      kh: 'សិក្សារួមជាមួយព្រៃកម្ពុជា ដ៏អស្ចារ្យមួយនៅឈានមុខកំពូលនៃអាស៊ីអាគ្នេយ៍ និងស្វែងរកសត្វកម្រិតកម្រិត។'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop',
    link: '/explore/cardamom'
  }
];

function SlideShow({ language = 'en' }) {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;
  const isKhmer = language === 'kh';

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => window.clearInterval(timer);
  }, [current, nextSlide]);

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  const labels = {
    prev: isKhmer ? 'ស្លាយមុន' : 'Previous slide',
    next: isKhmer ? 'ស្លាយបន្ទាប់' : 'Next slide',
    cta: isKhmer ? 'ស្វែងរកឥឡូវនេះ' : 'Explore Now',
    goTo: (index) => (isKhmer ? `ទៅស្លាយទី ${index + 1}` : `Go to slide ${index + 1}`)
  };

  return (
    <section className="slideshow" aria-label={isKhmer ? 'ស្លាយកន្លែងទេសចរណ៍' : 'Travel slideshow'}>
      <button className="nav-arrow left" onClick={prevSlide} aria-label={labels.prev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="nav-arrow right" onClick={nextSlide} aria-label={labels.next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {slideData.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
          {index === current && (
            <>
              <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="slide-overlay" />
              </div>

              <div className="slide-content">
                <span className="slide-badge">{slide.badge[isKhmer ? 'kh' : 'en']}</span>
                <span className="slide-location">
                  <FontAwesomeIcon icon={faLocationDot} /> {slide.location[isKhmer ? 'kh' : 'en']}
                </span>
                <h2 className="slide-title">{slide.title[isKhmer ? 'kh' : 'en']}</h2>
                <p className="slide-desc">{slide.description[isKhmer ? 'kh' : 'en']}</p>
                <Link to={slide.link} className="slide-cta">
                  {labels.cta} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="slide-indicators">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
            aria-label={labels.goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default SlideShow;