import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import DietaryBadge from './DietaryBadge';
import './FoodCard.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80';

export default function FoodCard({ item, onClick }) {
  const { lang } = useLang();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.image);

  useEffect(() => {
    setImgSrc(item.image);
    setImageLoaded(false);
  }, [item.image]);

  const name = item.name[lang] || item.name.en;
  const description = item.description[lang] || item.description.en;
  const priceNote = item.priceNote?.[lang];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(item);
    }
  };

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE);
    }
    setImageLoaded(true);
  };

  return (
    <article
      className="food-card"
      onClick={() => onClick(item)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={name}
    >
      {/* Image */}
      <div className="food-card-img-wrap">
        <img
          ref={(el) => {
            if (el && el.complete && !imageLoaded) {
              setImageLoaded(true);
            }
          }}
          src={imgSrc}
          alt={name}
          className={`food-card-img ${imageLoaded ? 'food-card-img--loaded' : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
        {/* Subtle bottom gradient for text readability */}
        <div className="food-card-img-gradient" aria-hidden="true" />

        {/* Badges overlay */}
        <div className="food-card-badges">
          {item.dishNumber && (
            <span className="food-card-number-badge">Nr. {item.dishNumber}</span>
          )}
          {item.isVegan && <DietaryBadge type="vegan" />}
          {!item.isVegan && item.isVegetarian && <DietaryBadge type="vegetarian" />}
          {item.isSpicy && <DietaryBadge type="spicy" />}
        </div>
      </div>

      {/* Body */}
      <div className="food-card-body">
        <h3 className="food-card-name">{name}</h3>
        <p className="food-card-desc">{description}</p>

        <div className="food-card-footer">
          <div className="food-card-price-wrap">
            <span className="food-card-price">
              {item.price.toFixed(2).replace('.', ',')} €
            </span>
            {priceNote && (
              <span className="food-card-price-note">{priceNote}</span>
            )}
          </div>
          <span className="food-card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
