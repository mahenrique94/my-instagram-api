const db = require('../../../db/models')

module.exports = (email, code) => db.users.findOne({ raw: true, where: { code, email } })
