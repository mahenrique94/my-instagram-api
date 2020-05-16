const { DEFAULT_LOCALE } = require('../../i18n')

module.exports = ctx => ctx.headers.language || DEFAULT_LOCALE
