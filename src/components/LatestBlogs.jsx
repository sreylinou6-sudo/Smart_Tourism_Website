import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LatestBlogs.css';

const LatestBlogs = () => {
  const { t } = useLanguage();
  const { eyebrow, title, viewAll, readMore, places } = t('LatestBlogs') || {};

  if (!places || !places.length) return null;

  const [featured, ...rest] = places;

  return (
    <section className="latest-blogs" aria-labelledby="latest-blogs-heading">
      <div className="latest-blogs__header">
        <div>
          <span className="latest-blogs__eyebrow">{eyebrow}</span>
          <h2 id="latest-blogs-heading" className="latest-blogs__title">
            {title}
          </h2>
        </div>
        <a href="/destinations" className="latest-blogs__viewAll">
          {viewAll} <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="latest-blogs__grid">
        {featured && (
          <a
            href={`/destinations/${featured.slug}`}
            className="blog-card blog-card--featured"
          >
            <div className="blog-card__media">
              <img src={featured.image} alt={featured.title} loading="lazy" />
              <span className="blog-card__badge">{featured.category}</span>
            </div>
            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span>{featured.location}</span>
                <span className="blog-card__dot" aria-hidden="true">•</span>
                <span>{featured.duration}</span>
              </div>
              <h3 className="blog-card__title">{featured.title}</h3>
              <p className="blog-card__excerpt">{featured.excerpt}</p>
              <span className="blog-card__cta">
                {readMore} <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        )}

        <div className="latest-blogs__list">
          {rest.slice(0, 4).map((place) => (
            <a
              href={`/destinations/${place.slug}`}
              className="blog-card"
              key={place.id}
            >
              <div className="blog-card__media blog-card__media--sm">
                <img src={place.image} alt={place.title} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__badge blog-card__badge--inline">
                  {place.category}
                </span>
                <h3 className="blog-card__title blog-card__title--sm">
                  {place.title}
                </h3>
                <div className="blog-card__meta">
                  <span>{place.location}</span>
                  <span className="blog-card__dot" aria-hidden="true">•</span>
                  <span>{place.duration}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;