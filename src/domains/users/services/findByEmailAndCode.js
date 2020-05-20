const repositories = require('../repositories')

module.exports = (email, code) => repositories.findByEmailAndCode(email, code)
