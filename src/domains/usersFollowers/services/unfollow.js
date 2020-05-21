const repositories = require('../repositories')

module.exports = ctx => repositories.unfollow(ctx.params.userId, ctx.request.body.userFollowId)
