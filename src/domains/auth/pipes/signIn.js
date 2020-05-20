const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse, tryAsyncCall } = require('../../../utils/controllers')
const { Unauthorized } = require('../../../utils/errors')
const services = require('../services')

module.exports = async ctx => {
    await tryAsyncCall(services.signIn, ctx)
        .onSuccess(() => {
            createResponse(ctx.response)
                .withCode(codes.OK)
                .withBody(() => ({
                    result: ctx.state.token,
                }))
                .end()
        })
        .onError(() => {
            if (ctx.state.error instanceof Unauthorized) {
                return createResponse(ctx.response)
                    .withCode(codes.UNAUTHORIZED)
                    .withBody(Boom.unauthorized, null, ctx.state.error.message)
                    .end()
            }

            if (ctx.state.error instanceof Error) {
                return createResponse(ctx.response)
                    .withCode(codes.INTERNAL_SERVER_ERROR)
                    .withBody(Boom.internal, null, ctx.state.error.message)
                    .end()
            }
        })
        .call()
}
