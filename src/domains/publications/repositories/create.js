const db = require('../../../db/models')
const models = require('../models')

module.exports = async body => {
    const newPublication = await db.publications.create(models.create(body))
    return newPublication.toJSON()
}
