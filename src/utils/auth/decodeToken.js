const jwt = require('jsonwebtoken')

const env = require('../../env')

const removePrefix = require('./removePrefix')

module.exports = token => jwt.verify(removePrefix(token), env.token.secret)
