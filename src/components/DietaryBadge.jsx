import { useLang } from '../context/LangContext';
import { IconVegan, IconVegetarian, IconSpicy } from './Icons';
import './DietaryBadge.css';

/**
 * Small luxury indicator badge for dietary requirements.
 * type: 'vegan' | 'vegetarian' | 'spicy'
 */
export default function DietaryBadge({ type }) {
  const { lang } = useLang();

  const config = {
    vegan: {
      label: { en: 'Vegan', de: 'Vegan' },
      className: 'badge--vegan',
      Icon: IconVegan,
    },
    vegetarian: {
      label: { en: 'Veg', de: 'Veg' },
      className: 'badge--veg',
      Icon: IconVegetarian,
    },
    spicy: {
      label: { en: 'Spicy', de: 'Scharf' },
      className: 'badge--spicy',
      Icon: IconSpicy,
    },
  };

  const c = config[type];
  if (!c) return null;

  const IconComponent = c.Icon;

  return (
    <span className={`dietary-badge ${c.className}`} aria-label={c.label[lang]}>
      <span className="dietary-badge-icon" aria-hidden="true">
        <IconComponent size={11} />
      </span>
      <span>{c.label[lang]}</span>
    </span>
  );
}
