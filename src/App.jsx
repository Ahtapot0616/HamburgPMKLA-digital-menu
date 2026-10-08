import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { LangProvider, useLang } from './context/LangContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedDishes from './components/FeaturedDishes';
import SearchBar from './components/SearchBar';
import CategoryBar from './components/CategoryBar';
import FoodCard from './components/FoodCard';
import FoodModal from './components/FoodModal';
import { CategoryIcon, IconVegetarian, IconVegan, IconSpicy } from './components/Icons';
import { categories, menuItems } from './data/menu';
import './App.css';

const currentYear = new Date().getFullYear();

function MenuContent() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState('all'); // 'all', 'vegetarian', 'vegan', 'spicy'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef({});

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Full category list including "All"
  const allCategories = useMemo(() => {
    return [
      { id: 'all', label: { en: 'All Items', de: 'Alle Gerichte' } },
      ...categories,
    ];
  }, []);

  // Filter items based on activeCategory, searchQuery, and selectedDietary
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Category Filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // 2. Dietary Filter
      if (selectedDietary === 'vegetarian' && !item.isVegetarian) return false;
      if (selectedDietary === 'vegan' && !item.isVegan) return false;
      if (selectedDietary === 'spicy' && !item.isSpicy) return false;

      // 3. Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameDe = (item.name.de || '').toLowerCase();
        const nameEn = (item.name.en || '').toLowerCase();
        const descDe = (item.description.de || '').toLowerCase();
        const descEn = (item.description.en || '').toLowerCase();
        const catLabelDe = (categories.find(c => c.id === item.category)?.label.de || '').toLowerCase();
        const catLabelEn = (categories.find(c => c.id === item.category)?.label.en || '').toLowerCase();

        const matches =
          nameDe.includes(query) ||
          nameEn.includes(query) ||
          descDe.includes(query) ||
          descEn.includes(query) ||
          catLabelDe.includes(query) ||
          catLabelEn.includes(query);

        if (!matches) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  // Group items by category for structured display when "all" is active and not searching
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    return categories
      .map((cat) => {
        const items = filteredItems.filter((item) => item.category === cat.id);
        return {
          ...cat,
          items,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery, filteredItems]);

  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  const handleCategorySelect = useCallback((id) => {
    setActiveCategory(id);
    const contentEl = document.getElementById('menu-content-anchor');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const setSectionRef = useCallback((catId) => (el) => {
    sectionRefs.current[catId] = el;
  }, []);

  return (
    <div className="menu-app">
      {/* Sticky Header */}
      <Header />

      {/* Hero Atmosphere */}
      <HeroSection />

      {/* Chef's Signatures Carousel */}
      <FeaturedDishes onSelectItem={setSelectedItem} />

      {/* Anchor for smooth scroll navigation */}
      <div id="menu-content-anchor" />

      {/* Main Search Bar & Dietary Quick Toggles */}
      <div className="menu-controls-wrapper">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Dietary quick toggles */}
        <div className="dietary-filter-bar">
          <div className="dietary-filter-inner">
            <button
              className={`dietary-filter-pill ${selectedDietary === 'all' ? 'dietary-filter-pill--active' : ''}`}
              onClick={() => setSelectedDietary('all')}
            >
              {lang === 'de' ? 'Alle' : 'All'}
            </button>
            <button
              className={`dietary-filter-pill ${selectedDietary === 'vegetarian' ? 'dietary-filter-pill--active' : ''}`}
              onClick={() => setSelectedDietary(selectedDietary === 'vegetarian' ? 'all' : 'vegetarian')}
            >
              <IconVegetarian size={13} className="filter-pill-icon" />
              <span>{lang === 'de' ? 'Vegetarisch' : 'Vegetarian'}</span>
            </button>
            <button
              className={`dietary-filter-pill ${selectedDietary === 'vegan' ? 'dietary-filter-pill--active' : ''}`}
              onClick={() => setSelectedDietary(selectedDietary === 'vegan' ? 'all' : 'vegan')}
            >
              <IconVegan size={13} className="filter-pill-icon" />
              <span>{lang === 'de' ? 'Vegan' : 'Vegan'}</span>
            </button>
            <button
              className={`dietary-filter-pill ${selectedDietary === 'spicy' ? 'dietary-filter-pill--active' : ''}`}
              onClick={() => setSelectedDietary(selectedDietary === 'spicy' ? 'all' : 'spicy')}
            >
              <IconSpicy size={13} className="filter-pill-icon" />
              <span>{lang === 'de' ? 'Scharf' : 'Spicy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Sticky Category Navigation */}
      <CategoryBar
        categories={allCategories}
        activeId={activeCategory}
        onSelect={handleCategorySelect}
      />

      {/* Menu Content Area */}
      <main className="menu-container">
        {/* Results summary if searching or filtered */}
        {(searchQuery.trim() !== '' || selectedDietary !== 'all') && (
          <div className="search-status-bar">
            <p>
              {lang === 'de' ? (
                <>
                  <strong>{filteredItems.length}</strong> Gerichte gefunden
                  {searchQuery && <> für „<em>{searchQuery}</em>"</>}
                </>
              ) : (
                <>
                  Found <strong>{filteredItems.length}</strong> dishes
                  {searchQuery && <> for "<em>{searchQuery}</em>"</>}
                </>
              )}
            </p>
            {(searchQuery || selectedDietary !== 'all') && (
              <button
                className="reset-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDietary('all');
                }}
              >
                {lang === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
              </button>
            )}
          </div>
        )}

        {/* View Mode 1: Grouped by Category */}
        {groupedCategories ? (
          <div className="category-sections">
            {groupedCategories.map((cat) => (
              <section
                key={cat.id}
                className="category-section"
                id={`section-${cat.id}`}
                ref={setSectionRef(cat.id)}
              >
                <div className="category-section-header">
                  <div className="category-section-title-wrap">
                    <span className="category-section-icon" aria-hidden="true">
                      <CategoryIcon id={cat.id} size={22} />
                    </span>
                    <h2 className="category-section-title">{cat.label[lang]}</h2>
                  </div>
                  <span className="category-section-count">
                    {cat.items.length} {lang === 'de' ? 'Gerichte' : 'items'}
                  </span>
                </div>

                <div className="food-grid">
                  {cat.items.map((item) => (
                    <FoodCard
                      key={item.id}
                      item={item}
                      onClick={setSelectedItem}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* View Mode 2: Flat List (Specific Category or Search Result) */
          <div>
            {activeCategory !== 'all' && searchQuery.trim() === '' && (
              <div className="single-category-header">
                <span className="single-category-icon" aria-hidden="true">
                  <CategoryIcon id={activeCategory} size={26} />
                </span>
                <div>
                  <h2 className="single-category-title">{activeCategoryObj?.label[lang]}</h2>
                  <p className="single-category-subtitle">
                    {filteredItems.length} {lang === 'de' ? 'ausgewählte Spezialitäten' : 'selected specialties'}
                  </p>
                </div>
              </div>
            )}

            {filteredItems.length > 0 ? (
              <div className="food-grid">
                {filteredItems.map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    onClick={setSelectedItem}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon" aria-hidden="true">
                  <CategoryIcon id="grill" size={48} />
                </div>
                <h3 className="empty-state-title">
                  {lang === 'de' ? 'Keine Gerichte gefunden' : 'No dishes found'}
                </h3>
                <p className="empty-state-desc">
                  {lang === 'de'
                    ? 'Bitte versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.'
                    : 'Please try another search term or pick another category.'}
                </p>
                <button
                  className="empty-state-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setSelectedDietary('all');
                  }}
                >
                  {lang === 'de' ? 'Alle Gerichte anzeigen' : 'View all dishes'}
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Dish Detail Modal */}
      {selectedItem && (
        <FoodModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Back to top button */}
      <button
        className={`back-to-top ${showBackToTop ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label={lang === 'de' ? 'Nach oben scrollen' : 'Scroll to top'}
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Restaurant Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-ornament" aria-hidden="true">◆</span>
              <span className="footer-brand-title">Pamukkale</span>
              <span className="footer-ornament" aria-hidden="true">◆</span>
            </div>
            <p className="footer-tagline">
              {lang === 'de'
                ? 'Authentische anatolische Gastfreundschaft & Holzkohlegrill-Tradition'
                : 'Authentic Anatolian hospitality & charcoal grill tradition'}
            </p>
          </div>

          <div className="footer-details-grid">
            <div className="footer-col">
              <h4>{lang === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}</h4>
              <p>{lang === 'de' ? 'Montag – Sonntag' : 'Monday – Sunday'}</p>
              <p className="footer-highlight">11:30 – 23:00</p>
            </div>

            <div className="footer-col">
              <h4>{lang === 'de' ? 'Standort & Kontakt' : 'Location & Contact'}</h4>
              <p>Pamukkale Restaurant</p>
              <p>Musterstraße 42, 10115 Berlin</p>
              <p className="footer-phone">+49 (0) 30 123 4567</p>
            </div>

            <div className="footer-col">
              <h4>{lang === 'de' ? 'Hinweis für Gäste' : 'Guest Notice'}</h4>
              <p>
                {lang === 'de'
                  ? 'Dies ist eine digitale Speisekarte zur Tischanzeige. Bitte bestellen Sie direkt bei unserem Servicepersonal.'
                  : 'This is a digital viewing menu. Please place your order directly with our service staff.'}
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} Pamukkale Restaurant. All rights reserved.</p>
            <p className="footer-crafted">
              {lang === 'de' ? 'Digitale Speisekarte • Vor Ort genießen' : 'Digital Menu • Dine with us'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <MenuContent />
    </LangProvider>
  );
}
