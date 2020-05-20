const { isFuture } = require('date-fns')

const { toInt } = require('../numbers')

const decodeToken = require('./decodeToken')

module.exports = token => {
    const decoded = decodeToken(token)
    return isFuture(new Date(toInt(decoded.expiresIn)))
}
