const db = require('../../../db/models')
const models = require('../models')

module.exports = async body => {
    const newUser = await db.users.create(models.create(body))
    return newUser.toJSON()
}
