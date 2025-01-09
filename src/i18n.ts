import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Подключение динамической загрузки
  .use(LanguageDetector) // Определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false, // React сам экранирует данные
    },
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json', // Путь до файлов с переводами
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'], // Определение языка из пути URL
      lookupFromPathIndex: 0, // Язык определяется из первой части пути
      caches: ['localStorage', 'cookie'], // Кэширование настроек языка
    },
    react: {
      useSuspense: true, // Включение Suspense для ожидания загрузки переводов
    },
  });

export default i18n;
