const repositories = require('../repositories')

module.exports = ctx => repositories.removeById(ctx.params.likeId)
