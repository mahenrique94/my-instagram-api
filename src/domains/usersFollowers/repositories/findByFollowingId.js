const db = require('../../../db/models')

module.exports = userFollowingId => db.users_followers.findOne({ raw: true, where: { user_following_id: userFollowingId } })
