const Boom = require('boom')

const { withMessage } = require('../i18n')

const { codes } = require('../../constants/http')
const { checkToken } = require('../auth')
const { createResponse } = require('../controllers')

module.exports = (ctx, next) => {
    const { authorization } = ctx.headers
    if (authorization) {
        if (checkToken(authorization)) {
            return next()
        }
        return createResponse(ctx.response)
            .withCode(codes.UNAUTHORIZED)
            .withBody(Boom.unauthorized, null, withMessage(ctx, 'errors.unauthorized'))
            .end()
    }
    return createResponse(ctx.response)
        .withCode(codes.UNAUTHORIZED)
        .withBody(Boom.unauthorized, null, withMessage(ctx, 'errors.unauthorized'))
        .end()
}
