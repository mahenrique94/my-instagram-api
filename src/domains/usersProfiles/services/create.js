const repositories = require('../repositories')

module.exports = (name, userId) => repositories.create(name, userId)
