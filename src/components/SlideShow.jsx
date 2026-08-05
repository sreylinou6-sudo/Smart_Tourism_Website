import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import '../styles/SlideShow.css';
import slideData from '../data/slideData';

function SlideShow({ language = 'en', onExplore }) {
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
                <button type="button" className="slide-cta" onClick={() => onExplore?.(slide)}>
                  {labels.cta} <FontAwesomeIcon icon={faArrowRight} />
                </button>
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