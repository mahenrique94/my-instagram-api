const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse, tryAsyncCall } = require('../../../utils/controllers')
const { removeKeys } = require('../../../utils/object')
const services = require('../services')

module.exports = async ctx => {
    await tryAsyncCall(services.signUp, ctx)
        .onSuccess(() => {
            createResponse(ctx.response).withCode(codes.CREATED).withBody(removeKeys, ctx.state.data, ['password', 'salt']).end()
        })
        .onError(() => {
            createResponse(ctx.response)
                .withCode(codes.INTERNAL_SERVER_ERROR)
                .withBody(Boom.internal, null, ctx.state.error.message)
                .end()
        })
        .call()
}
