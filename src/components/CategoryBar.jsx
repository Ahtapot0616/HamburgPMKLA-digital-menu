import { useRef, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { CategoryIcon } from './Icons';
import './CategoryBar.css';

export default function CategoryBar({ categories, activeId, onSelect }) {
  const { lang } = useLang();
  const barRef = useRef(null);
  const activeRef = useRef(null);

  // Scroll active pill into view whenever it changes
  useEffect(() => {
    if (activeRef.current && barRef.current) {
      const bar = barRef.current;
      const pill = activeRef.current;
      const barRect = bar.getBoundingClientRect();
      const pillRect = pill.getBoundingClientRect();

      // Center the active pill in the scrollable area
      const scrollLeft = pill.offsetLeft - bar.offsetLeft - (barRect.width / 2) + (pillRect.width / 2);
      bar.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeId]);

  return (
    <nav
      className="category-bar-wrap"
      aria-label={lang === 'de' ? 'Speisekategorien' : 'Menu categories'}
    >
      <div className="category-bar" ref={barRef} role="list">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              id={`cat-${cat.id}`}
              role="listitem"
              ref={isActive ? activeRef : null}
              className={`cat-pill ${isActive ? 'cat-pill--active' : ''}`}
              onClick={() => onSelect(cat.id)}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="cat-icon" aria-hidden="true">
                <CategoryIcon id={cat.id} size={16} />
              </span>
              <span className="cat-label">{cat.label[lang]}</span>
            </button>
          );
        })}
      </div>
      {/* Fade edges to indicate scrollability */}
      <div className="catbar-fade catbar-fade--left" aria-hidden="true" />
      <div className="catbar-fade catbar-fade--right" aria-hidden="true" />
    </nav>
  );
}
