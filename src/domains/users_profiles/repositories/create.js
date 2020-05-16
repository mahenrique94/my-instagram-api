const db = require('../../../db/models')
const models = require('../models')

module.exports = async (name, userId) => {
    const newUserProfile = await db.users_profiles.create(models.create(name, userId))
    return newUserProfile.toJSON()
}
