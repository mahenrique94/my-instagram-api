const env = require('../../env')

module.exports = token => token.replace(env.token.prefix, '')
