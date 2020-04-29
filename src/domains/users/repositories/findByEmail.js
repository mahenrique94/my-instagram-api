const db = require('../../../db/models')

module.exports = email => db.users.findOne({ raw: true, where: { email } })
