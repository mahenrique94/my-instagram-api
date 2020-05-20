const repositories = require('../repositories')

module.exports = body => repositories.activeUserByEmail(body.email)
