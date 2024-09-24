import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const locales = {
    en: 'en-US',
    de: 'de-DE',
    es: 'es-MX',
    fr: 'fr-FR',
    pt: 'pt-BR',
    vi: 'vi-VN',
    th: 'th-TH',
    zh_CN: 'zh-CN',
}

i18n
    // i18next-http-backend
    // loads translations from your server
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: import.meta.env.DEV,
        // debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

i18n.services.formatter.add('DATE_HUGE', (date, lng) => {
    const options: Intl.DateTimeFormatOptions = {
        // weekday: 'long',
        year: 'numeric',
        // month: 'long',
        day: 'numeric',
        // weekday: 'short',
        // year: 'numeric',
        month: 'numeric',
        // day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // dateStyle: 'medium',
        // timeStyle: 'short',
        // timeZone: 'America/Los_Angeles',
        timeZone: 'Pacific/Honolulu',
    }

    return new Intl.DateTimeFormat(locales[lng], options).format(date)
})

i18n.services.formatter.add('DATE_SHORT', (date, lng) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }

    return new Intl.DateTimeFormat(locales[lng], options).format(date)
})

export default i18n
