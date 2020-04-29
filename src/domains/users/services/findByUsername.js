const repositories = require('../repositories')

module.exports = username => repositories.findByUsername(username)
