import { useEffect, useRef, useCallback } from 'react';
import { useLang } from '../context/LangContext';
import { allergenLabels } from '../data/menu';
import DietaryBadge from './DietaryBadge';
import './FoodModal.css';

export default function FoodModal({ item, onClose }) {
  const { lang } = useLang();
  const backdropRef = useRef(null);
  const containerRef = useRef(null);
  const closeRef = useRef(null);

  const handleClose = useCallback(() => {
    // Add exit animation
    const backdrop = backdropRef.current;
    const container = containerRef.current;
    if (backdrop) backdrop.classList.add('modal-backdrop--closing');
    if (container) container.classList.add('modal-container--closing');
    setTimeout(onClose, 220);
  }, [onClose]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scrolling while modal is open
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // Focus the close button on mount
    setTimeout(() => closeRef.current?.focus(), 100);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [handleClose]);

  if (!item) return null;

  const name = item.name[lang] || item.name.en;
  const altName = item.name[lang === 'de' ? 'en' : 'de'];
  const description = item.description[lang] || item.description.en;
  const priceNote = item.priceNote?.[lang];

  return (
    <div
      className="modal-backdrop"
      onClick={handleClose}
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        ref={containerRef}
      >
        {/* Drag handle for mobile (visual indicator) */}
        <div className="modal-handle" aria-hidden="true">
          <span />
        </div>

        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={handleClose}
          ref={closeRef}
          aria-label={lang === 'de' ? 'Schließen' : 'Close'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Image */}
        <div className="modal-img-wrap">
          <img
            src={item.image}
            alt={name}
            className="modal-img"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70';
            }}
          />
          <div className="modal-img-gradient" />

          {/* Floating Badges */}
          <div className="modal-floating-badges">
            {item.dishNumber && (
              <span className="modal-dish-number-badge">Nr. {item.dishNumber}</span>
            )}
            {item.isVegan && <DietaryBadge type="vegan" />}
            {!item.isVegan && item.isVegetarian && <DietaryBadge type="vegetarian" />}
            {item.isSpicy && <DietaryBadge type="spicy" />}
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          {/* Header: Title + Price */}
          <div className="modal-header">
            <div className="modal-header-text">
              <h2 id="modal-dish-title" className="modal-title">{name}</h2>
              {altName && (
                <p className="modal-alt-title">{altName}</p>
              )}
            </div>
            <div className="modal-price-box">
              <span className="modal-price">{item.price.toFixed(2).replace('.', ',')} €</span>
              {priceNote && <span className="modal-price-note">{priceNote}</span>}
            </div>
          </div>

          <div className="modal-divider" />

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'de' ? 'Beschreibung & Zutaten' : 'Description & Ingredients'}
            </h3>
            <p className="modal-description">{description}</p>
          </div>

          {/* Dietary Indicators */}
          {(item.isVegan || item.isVegetarian || item.isSpicy) && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                {lang === 'de' ? 'Ernährungshinweise' : 'Dietary Information'}
              </h3>
              <div className="modal-dietary-pills">
                {item.isVegan && (
                  <span className="diet-pill diet-pill--vegan">
                    🌱 {lang === 'de' ? '100% Vegan' : '100% Vegan'}
                  </span>
                )}
                {!item.isVegan && item.isVegetarian && (
                  <span className="diet-pill diet-pill--veg">
                    🥦 {lang === 'de' ? 'Vegetarisch' : 'Vegetarian'}
                  </span>
                )}
                {item.isSpicy && (
                  <span className="diet-pill diet-pill--spicy">
                    🌶 {lang === 'de' ? 'Pikant / Scharf' : 'Spicy'}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Allergens */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'de' ? 'Allergene' : 'Allergens'}
            </h3>
            {item.allergens && item.allergens.length > 0 ? (
              <div className="modal-allergens-list">
                {item.allergens.map((code) => {
                  const label = allergenLabels[code]?.[lang] || allergenLabels[code]?.en || code;
                  return (
                    <span key={code} className="allergen-tag">
                      <span className="allergen-code">{code}</span>
                      <span className="allergen-name">{label}</span>
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="modal-no-allergens">
                {lang === 'de'
                  ? 'Keine kennzeichnungspflichtigen Allergene deklariert.'
                  : 'No major allergens declared.'}
              </p>
            )}
          </div>

          {/* Polite Disclaimer */}
          <div className="modal-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="modal-notice-icon">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p>
              {lang === 'de'
                ? 'Haben Sie Fragen zu Allergenen oder Unverträglichkeiten? Unser Servicepersonal berät Sie gerne.'
                : 'Have questions regarding allergies or intolerances? Please speak with our service staff.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
