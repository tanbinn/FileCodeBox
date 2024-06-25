import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index'
let language = (
  navigator.language || 'en'
).toLowerCase().replace(/-/, '_');
if (['en','zh_cn','zh','es','zh_tw'].indexOf(language) === -1) {
  language = 'en'
}
const lang = (localStorage.getItem('language') || language);
const i18n = createI18n({
  silentTranslationWarn: true,
  globalInjection: true,
  legacy: false,
  locale: lang,
  messages,
});

export default i18n
