import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/SlideShow.css';

function SlideShow({ onExplore }) {
  const { t } = useLanguage();
  const labels = t('slideshow');
  const slideData = t('slideData');
  const hasSlides = Array.isArray(slideData) && slideData.length > 0;
  const [current, setCurrent] = useState(0);
  const length = hasSlides ? slideData.length : 0;

  const nextSlide = useCallback(() => {
    if (length === 0) return;
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    if (length === 0) return;
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    if (length === 0) return undefined;
    const timer = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => window.clearInterval(timer);
  }, [current, nextSlide, length]);

  // ការពារ error បើ translation ឬ slideData មិនទាន់ load
  if (!labels || typeof labels !== 'object' || !hasSlides) {
    return null;
  }

  const goToLabel = (index) => (labels.goTo || '').replace('{n}', index + 1);

  return (
    <section className="slideshow" aria-label={labels.ariaLabel}>
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
                <span className="slide-badge">{slide.badge}</span>
                <span className="slide-location">
                  <FontAwesomeIcon icon={faLocationDot} /> {slide.location}
                </span>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.description}</p>
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
            aria-label={goToLabel(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default SlideShow;