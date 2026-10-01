import { useLang } from '../context/LangContext';
import './SearchBar.css';

export default function SearchBar({ value, onChange }) {
  const { lang } = useLang();

  return (
    <div className="search-wrap">
      <div className="search-bar">
        <svg
          className="search-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          id="menu-search"
          type="search"
          className="search-input"
          placeholder={lang === 'de' ? 'Gericht suchen…' : 'Search dishes…'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={lang === 'de' ? 'Speisekarte durchsuchen' : 'Search the menu'}
          autoComplete="off"
        />
        {value && (
          <button
            className="search-clear"
            onClick={() => onChange('')}
            aria-label={lang === 'de' ? 'Suche löschen' : 'Clear search'}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
