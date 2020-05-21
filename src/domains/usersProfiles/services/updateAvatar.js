const repositories = require('../repositories')

module.exports = ctx => repositories.updateAvatar(ctx.state.file, ctx.params.userId)
