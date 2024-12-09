import { createI18n } from 'vue-i18n';
import en from './en.ts';
import fa from './fa.ts';

const i18n = createI18n({
  locale: 'en',
  fallbackLng: 'en',
  messages: {
    en: { ...en },
    fa: { ...fa },
  },
});

export default i18n;
