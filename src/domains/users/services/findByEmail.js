const repositories = require('../repositories')

module.exports = email => repositories.findByEmail(email)
