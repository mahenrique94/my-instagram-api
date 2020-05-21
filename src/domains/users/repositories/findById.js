const db = require('../../../db/models')

module.exports = id => db.users.findOne({ raw: true, where: { id } })
