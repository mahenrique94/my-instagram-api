const db = require('../../../db/models')
const models = require('../models')

module.exports = async (file, userId) => {
    const user = await db.users_profiles.findOne({ where: { user_id: userId } })
    await user.update(models.updateAvatar(file))
    return user.toJSON()
}
