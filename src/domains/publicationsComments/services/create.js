const { getUserId } = require('../../../utils/auth')
const repositories = require('../repositories')

module.exports = ctx =>
    repositories.create({
        ...ctx.request.body,
        publicationId: ctx.params.publicationId,
        userId: getUserId(ctx),
    })
