const repositories = require('../repositories')

module.exports = ctx => repositories.findByFollowingId(ctx.request.body.userFollowId)
