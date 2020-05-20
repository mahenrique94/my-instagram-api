const repositories = require('../repositories')

module.exports = ctx => repositories.updateProfile(ctx.request.body, ctx.params.userId)
