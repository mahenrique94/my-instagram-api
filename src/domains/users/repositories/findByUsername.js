const db = require('../../../db/models')

module.exports = username => db.users.findOne({ raw: true, where: { username } })
