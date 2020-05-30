const decodeToken = require('./decodeToken')

module.exports = ctx => {
    const token = decodeToken(ctx.request.header.authorization)
    return token.payload.id
}
