const repositories = require('../repositories')

module.exports = (email, code) => repositories.updateVerificationCodeByEmail(email, code)
