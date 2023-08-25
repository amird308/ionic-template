import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: 'en',
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",  
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;