const i18next = require('i18next')

const { messages } = require('./languages/')

const DEFAULT_LOCALE = 'en'
const DEFAULT_NAMESPACE = 'translations'

i18next.init({
    debug: false,
    defaultNS: [DEFAULT_NAMESPACE],
    fallbackLng: DEFAULT_LOCALE,
    lng: DEFAULT_LOCALE,
    ns: [DEFAULT_NAMESPACE],
    resources: messages,
})

module.exports = { DEFAULT_LOCALE, i18n: i18next }
