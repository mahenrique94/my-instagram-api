const { getUserId } = require('../../../utils/auth')
const repositories = require('../repositories')

module.exports = ctx =>
    repositories.create({
        ...ctx.request.body,
        media: ctx.state.file,
        userId: getUserId(ctx),
    })
