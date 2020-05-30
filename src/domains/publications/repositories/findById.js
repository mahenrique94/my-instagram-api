const db = require('../../../db/models')

module.exports = async id => db.publications.findOne({ raw: true, where: { id } })
