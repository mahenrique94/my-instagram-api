const repositories = require('../repositories')

module.exports = ctx => repositories.findById(ctx.params.publicationId)
