const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')
const services = require('../services')

module.exports = async ctx => {
    const existsLike = await services.findByUserId(ctx)
    if (existsLike) {
        ctx.state.valid = false
        createResponse(ctx.response)
            .withCode(codes.BAD_REQUEST)
            .withBody(Boom.badRequest, null, {
                result: withMessage(ctx, 'errors.alreadyLiked'),
            })
            .end()
    }
}
