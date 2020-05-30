const db = require('../../../db/models')

module.exports = async publicationId => db.publications_comments.findAll({ where: { publication_id: publicationId } })
