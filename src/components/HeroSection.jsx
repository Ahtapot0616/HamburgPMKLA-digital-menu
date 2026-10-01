import { useLang } from '../context/LangContext';
import './HeroSection.css';

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="hero" aria-label="Restaurant hero">
      {/* Layered background */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
          alt=""
          className="hero-bg-img"
          aria-hidden="true"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      {/* Decorative top arc */}
      <div className="hero-arc" aria-hidden="true" />

      <div className="hero-content">
        {/* Ornament */}
        <div className="hero-ornament" aria-hidden="true">
          <span className="ornament-line" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1L11.8 7.1H18.1L13 10.9L14.8 17L10 13.1L5.2 17L7 10.9L1.9 7.1H8.2L10 1Z" fill="var(--gold)" />
          </svg>
          <span className="ornament-line" />
        </div>

        <h1 className="hero-title">
          <span className="hero-title-top">
            {lang === 'de' ? 'Unsere Speisekarte' : 'Our Menu'}
          </span>
          <span className="hero-title-brand">Pamukkale</span>
        </h1>

        <p className="hero-subtitle">
          {lang === 'de'
            ? 'Authentische türkische Küche — mit Liebe zubereitet'
            : 'Authentic Turkish cuisine — made with love'}
        </p>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
