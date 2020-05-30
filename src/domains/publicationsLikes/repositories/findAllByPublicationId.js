const db = require('../../../db/models')

module.exports = async publicationId => db.publications_likes.findAll({ where: { publication_id: publicationId } })
