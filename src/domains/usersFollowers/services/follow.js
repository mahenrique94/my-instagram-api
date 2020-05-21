const repositories = require('../repositories')

module.exports = ctx => repositories.follow(ctx.params.userId, ctx.request.body.userFollowId)
