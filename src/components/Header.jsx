import { useLang } from '../context/LangContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

export default function Header() {
  const { lang } = useLang();

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="header-brand">
          <div className="brand-emblem" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="var(--gold)" strokeWidth="1.2" />
              <path d="M16 6 C10 6 6 10.5 6 16 C6 21.5 10 26 16 26 C22 26 26 21.5 26 16 C26 10.5 22 6 16 6Z" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5" />
              <path d="M16 9 L17.2 13.4 L21.8 13.4 L18.3 16.1 L19.5 20.5 L16 17.8 L12.5 20.5 L13.7 16.1 L10.2 13.4 L14.8 13.4 Z" fill="var(--gold)" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">Pamukkale</span>
            <span className="brand-sub">
              {lang === 'de' ? 'Türkisches Restaurant' : 'Turkish Restaurant'}
            </span>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
