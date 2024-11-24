import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
      title={i18n.language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
};

export default LanguageSelector;