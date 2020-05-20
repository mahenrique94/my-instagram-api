const db = require('../../../db/models')

module.exports = async (body, userId) => {
    const user = await db.users_profiles.findOne({ where: { user_id: userId } })
    await user.update(body)
    return user.toJSON()
}
