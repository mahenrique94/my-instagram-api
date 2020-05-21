const db = require('../../../db/models')
const models = require('../models')

module.exports = (userFollowerId, userFollowingId) =>
    db.users_followers.destroy({ where: models.unfollow(userFollowerId, userFollowingId) })
