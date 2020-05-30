const db = require('../../../db/models')

module.exports = async id => db.publications_comments.destroy({ where: { id } })
