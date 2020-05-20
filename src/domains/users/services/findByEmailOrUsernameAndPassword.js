const repositories = require('../repositories')

module.exports = (email, username, password) => repositories.findByEmailOrUsernameAndPassword(email, username, password)
