const db = require('../../../db/models')

module.exports = userId => db.users_followers.findAll({ raw: true, where: { user_follower_id: userId } })
