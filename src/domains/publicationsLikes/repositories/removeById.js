const db = require('../../../db/models')

module.exports = async id => db.publications_likes.destroy({ where: { id } })
