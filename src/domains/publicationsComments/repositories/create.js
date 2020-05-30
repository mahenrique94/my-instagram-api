const db = require('../../../db/models')
const models = require('../models')

module.exports = async body => {
    const newComment = await db.publications_comments.create(models.create(body))
    return newComment.toJSON()
}
