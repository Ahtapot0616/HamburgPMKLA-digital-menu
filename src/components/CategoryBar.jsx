import { useRef, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import './CategoryBar.css';

export default function CategoryBar({ categories, activeId, onSelect }) {
  const { lang } = useLang();
  const barRef = useRef(null);
  const activeRef = useRef(null);

  // Scroll active pill into view whenever it changes
  useEffect(() => {
    if (activeRef.current && barRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
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
              <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
              <span className="cat-label">{cat.label[lang]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
