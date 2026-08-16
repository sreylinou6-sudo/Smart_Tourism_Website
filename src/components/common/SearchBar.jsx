import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/SearchBar.css';

/**
 * Controlled search input.
 *
 * Props:
 * - onSearch(query: string)  -> called on submit / Enter / debounce
 * - suggestions?: Array<{ id, title, category, location, slug }>
 *      Optional list to show live matches under the input (e.g. your
 *      `places` array). Omit this prop if you only want to trigger a
 *      search on submit, without a suggestion dropdown.
 * - onSelectSuggestion?(item)
 * - placeholder?: string -> overrides the locale placeholder
 */
const SearchBar = ({ onSearch, suggestions = [], onSelectSuggestion, placeholder }) => {
  const { t } = useLanguage();
  const { placeholder: defaultPlaceholder, noResults, clear } = t('SearchBar') || {};

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const matches =
    query.trim().length > 0
      ? suggestions.filter((item) => {
          const q = query.trim().toLowerCase();
          return (
            item.title?.toLowerCase().includes(q) ||
            item.category?.toLowerCase().includes(q) ||
            item.location?.toLowerCase().includes(q)
          );
        })
      : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onSearch?.(query.trim());
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
    setIsOpen(false);
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setIsOpen(false);
    onSelectSuggestion?.(item);
    onSearch?.(item.title);
  };

  return (
    <div className="search-bar" ref={wrapperRef}>
      <form className="search-bar__form" onSubmit={handleSubmit} role="search">
        <svg
          className="search-bar__icon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <input
          type="text"
          className="search-bar__input"
          value={query}
          onChange={handleChange}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder || defaultPlaceholder}
          aria-label={placeholder || defaultPlaceholder}
        />

        {query && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label={clear}
          >
            ✕
          </button>
        )}

        <button type="submit" className="search-bar__submit">
          {t('SearchBar')?.button}
        </button>
      </form>

      {isOpen && query.trim() && suggestions.length > 0 && (
        <div className="search-bar__dropdown">
          {matches.length > 0 ? (
            matches.slice(0, 6).map((item) => (
              <button
                type="button"
                key={item.id}
                className="search-bar__suggestion"
                onClick={() => handleSelect(item)}
              >
                <span className="search-bar__suggestion-title">{item.title}</span>
                <span className="search-bar__suggestion-meta">
                  {item.category} · {item.location}
                </span>
              </button>
            ))
          ) : (
            <div className="search-bar__empty">{noResults}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;