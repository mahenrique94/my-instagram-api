const db = require('../../../db/models')
const models = require('../models')

module.exports = async body => {
    const newLike = await db.publications_likes.create(models.create(body))
    return newLike.toJSON()
}
