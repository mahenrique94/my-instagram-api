const db = require('../../../db/models')

module.exports = async id => db.publications.destroy({ where: { id } })
