const repositories = require('../repositories')

module.exports = id => repositories.findById(id)
