const { getUserId } = require('../../../utils/auth')
const repositories = require('../repositories')

module.exports = ctx =>
    repositories.create({
        publicationId: ctx.params.publicationId,
        userId: getUserId(ctx),
    })
