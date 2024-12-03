import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-dark-300/50 rounded-lg border border-dark-100 hover:border-primary-500/50 transition-colors"
        aria-label="Select language"
      >
        <Languages size={20} className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-400 rounded-lg border border-dark-100 shadow-lg overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-dark-300 transition-colors"
            >
              <div>
                <div className="text-sm font-medium">{lang.nativeName}</div>
                <div className="text-xs text-gray-400">{lang.name}</div>
              </div>
              {i18n.language === lang.code && (
                <Check size={16} className="text-primary-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}