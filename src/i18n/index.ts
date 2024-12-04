import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en'
import uk from './locales/uk'
import { Translation } from '@/types/i18n'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<Translation>({
    resources: {
      en,
      uk
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n