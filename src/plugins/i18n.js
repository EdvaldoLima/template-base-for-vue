import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import { globalLocales } from '@/locales/index';
import { componentsLocales } from '@/locales/loadLocalesInViews';

const messages = {
  en: {
    ...globalLocales.en,
    ...componentsLocales.en,
  },
  ptBr: {
    ...globalLocales.ptBr,
  },
};

export const i18nConfig = new VueI18n({
  locale: 'en',
  messages,
});

export default i18nConfig;
