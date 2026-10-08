import { useLang } from '../context/LangContext';
import { menuItems } from '../data/menu';
import { IconStar } from './Icons';
import './FeaturedDishes.css';

// Signature IDs selected from real menu
const FEATURED_IDS = ['g7', 'g1', 'g4', 'd2', 'p1'];

export default function FeaturedDishes({ onSelectItem }) {
  const { lang } = useLang();

  const featured = FEATURED_IDS.map((id) => menuItems.find((m) => m.id === id)).filter(Boolean);

  if (featured.length === 0) return null;

  return (
    <section className="featured-section" aria-label="Chef's Specialties">
      <div className="featured-header">
        <div className="featured-title-wrap">
          <span className="featured-badge">
            <IconStar size={13} />
            <span>{lang === 'de' ? 'Empfehlungen des Hauses' : 'Chef’s Signatures'}</span>
          </span>
          <h2 className="featured-title">
            {lang === 'de' ? 'Beliebte Spezialitäten' : 'House Specialties'}
          </h2>
        </div>
        <span className="featured-swipe-hint" aria-hidden="true">
          {lang === 'de' ? 'Wischen zum Entdecken →' : 'Swipe to explore →'}
        </span>
      </div>

      <div className="featured-track">
        {featured.map((dish) => {
          const name = dish.name[lang] || dish.name.en;
          return (
            <div
              key={dish.id}
              className="featured-card"
              onClick={() => onSelectItem(dish)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectItem(dish);
                }
              }}
            >
              <div className="featured-img-wrap">
                <img
                  src={dish.image}
                  alt={name}
                  className="featured-img"
                  loading="lazy"
                />
                <div className="featured-img-gradient" />
                <span className="featured-price">
                  {dish.price.toFixed(2).replace('.', ',')} €
                </span>
                {dish.dishNumber && (
                  <span className="featured-number">Nr. {dish.dishNumber}</span>
                )}
              </div>
              <div className="featured-info">
                <h3 className="featured-name">{name}</h3>
                <p className="featured-desc">{dish.description[lang] || dish.description.en}</p>
                <span className="featured-cta">
                  <span>{lang === 'de' ? 'Details ansehen' : 'View details'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
