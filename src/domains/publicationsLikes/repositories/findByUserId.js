const db = require('../../../db/models')

module.exports = async userId => db.publications_likes.findOne({ raw: true, where: { user_id: userId } })
