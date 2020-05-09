const repositories = require('../../users/repositories')

module.exports = ctx => repositories.create(ctx.request.body)
