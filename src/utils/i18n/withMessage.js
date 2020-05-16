const { i18n } = require('../../i18n')

const getHeaderLanguage = require('./getHeaderLanguage')

module.exports = (ctx, key, options) =>
    i18n.t(key, {
        ...options,
        lng: getHeaderLanguage(ctx),
    })
