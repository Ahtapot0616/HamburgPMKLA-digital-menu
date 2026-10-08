import { useLang } from '../context/LangContext';
import { IconEmblem, IconGrill } from './Icons';
import './HeroSection.css';

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="hero-luxury" aria-label="Restaurant hero">
      {/* Background with warm ambient lighting & texture */}
      <div className="hero-luxury-bg" aria-hidden="true">
        <div className="hero-luxury-ambient-glow" />
        <div className="hero-luxury-pattern" />
      </div>

      <div className="hero-luxury-inner">
        {/* Crest */}
        <div className="hero-luxury-crest">
          <IconEmblem size={34} className="hero-luxury-emblem" />
          <span className="hero-luxury-est">EST. 1992 • BERLIN</span>
        </div>

        {/* Title & Tagline */}
        <div className="hero-luxury-headings">
          <span className="hero-luxury-kicker">
            <IconGrill size={13} className="hero-kicker-icon" />
            <span>{lang === 'de' ? 'Ocakbaşı & Türkische Küche' : 'Authentic Anatolian Charcoal Grill'}</span>
          </span>
          <h1 className="hero-luxury-title">Pamukkale</h1>
          <p className="hero-luxury-desc">
            {lang === 'de'
              ? 'Meisterhafte Holzkohlegrill-Spezialitäten, frisch gebackene Pide und traditionelle Meze in herzlicher Atmosphäre.'
              : 'Mastercrafted charcoal grilled specialties, stone-baked pide, and traditional meze crafted with passion.'}
          </p>
        </div>

        {/* Quick Highlights / Table Features */}
        <div className="hero-luxury-features" aria-label="Restaurant attributes">
          <span className="hero-feat-chip">
            <span className="hero-feat-dot" />
            {lang === 'de' ? 'Holzkohlegrill' : 'Charcoal Grill'}
          </span>
          <span className="hero-feat-chip">
            <span className="hero-feat-dot" />
            {lang === 'de' ? 'Täglich Frische Meze' : 'Fresh Daily Meze'}
          </span>
          <span className="hero-feat-chip">
            <span className="hero-feat-dot" />
            {lang === 'de' ? 'Steinofen Pide' : 'Stone-Oven Pide'}
          </span>
        </div>
      </div>
    </section>
  );
}
