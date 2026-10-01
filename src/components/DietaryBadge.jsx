import { useLang } from '../context/LangContext';
import './DietaryBadge.css';

/**
 * Small coloured tag for dietary indicators.
 * type: 'vegan' | 'vegetarian' | 'spicy'
 */
export default function DietaryBadge({ type }) {
  const { lang } = useLang();

  const config = {
    vegan: {
      label: { en: 'Vegan', de: 'Vegan' },
      className: 'badge--vegan',
      icon: '🌱',
    },
    vegetarian: {
      label: { en: 'Veg', de: 'Veg' },
      className: 'badge--veg',
      icon: '🥦',
    },
    spicy: {
      label: { en: 'Spicy', de: 'Scharf' },
      className: 'badge--spicy',
      icon: '🌶',
    },
  };

  const c = config[type];
  if (!c) return null;

  return (
    <span className={`dietary-badge ${c.className}`} aria-label={c.label[lang]}>
      <span aria-hidden="true">{c.icon}</span>
      <span>{c.label[lang]}</span>
    </span>
  );
}
