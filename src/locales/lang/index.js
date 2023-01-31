// import { createApp } from 'vue'
// import App from '../../App.vue'
import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import enLocale from 'element-plus/es/locale/lang/en'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import en from './en'
import zh from './zh-CN'

const language = (
    (navigator.language ? navigator.language : navigator.userLanguage) || "zh"
).toLowerCase();

const messages={
    en: {
        ...en,
        ...enLocale
    },
    zh: {
        ...zh,
        ...zhLocale
    }
}

const i18n = createI18n({
    locale: language.split("-")[0] || "zh", // 设置默认语言
    messages,
});

export default i18n;
