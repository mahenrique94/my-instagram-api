const uuid = require('uuid')

module.exports = (userFollowerId, userFollowingId) => ({
    id: uuid.v4(),
    user_follower_id: userFollowerId,
    user_following_id: userFollowingId,
})
