import { useLang } from '../context/LangContext';
import DietaryBadge from './DietaryBadge';
import './FoodCard.css';

export default function FoodCard({ item, onClick }) {
  const { lang } = useLang();

  const name = item.name[lang] || item.name.en;
  const description = item.description[lang] || item.description.en;
  const priceNote = item.priceNote?.[lang];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(item);
    }
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
          src={item.image}
          alt={name}
          className="food-card-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=60';
          }}
        />
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
