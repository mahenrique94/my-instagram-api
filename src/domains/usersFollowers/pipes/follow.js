const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse, tryAsyncCall } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')
const services = require('../services')

module.exports = async ctx => {
    await tryAsyncCall(services.follow, ctx)
        .onSuccess(() => {
            createResponse(ctx.response)
                .withCode(codes.CREATED)
                .withBody(() => ({
                    result: withMessage(ctx, 'success.follow'),
                }))
                .end()
        })
        .onError(() => {
            createResponse(ctx.response)
                .withCode(codes.INTERNAL_SERVER_ERROR)
                .withBody(Boom.internal, null, ctx.state.error.message)
                .end()
        })
        .call()
}
