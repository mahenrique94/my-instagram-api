const env = require('../../env')

const jwt = require('jsonwebtoken')

const removePrefix = require('./removePrefix')

module.exports = token => jwt.verify(removePrefix(token), env.token.secret)
