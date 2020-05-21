const db = require('../../../db/models')
const models = require('../models')

module.exports = async (userFollowerId, userFollowingId) => {
    const newFollower = await db.users_followers.create(models.follow(userFollowerId, userFollowingId))
    return newFollower.toJSON()
}
