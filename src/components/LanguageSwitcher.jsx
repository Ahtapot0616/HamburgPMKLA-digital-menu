import { useLang } from '../context/LangContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      <button
        id="lang-de"
        className={`lang-btn ${lang === 'de' ? 'lang-btn--active' : ''}`}
        onClick={() => setLang('de')}
        aria-pressed={lang === 'de'}
      >
        DE
      </button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button
        id="lang-en"
        className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
