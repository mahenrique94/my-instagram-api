const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse, tryAsyncCall } = require('../../../utils/controllers')
const { withAsyncPipes, withDecorators, withPipeline, withValidations } = require('../../../utils/decorators')
const { removeKeys } = require('../../../utils/object')
const pipes = require('../pipes')
const services = require('../services')
const validations = require('../validations')

const signUp = async ctx => {
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

module.exports = withDecorators({
    pipeline: withPipeline([withValidations(validations.signUp), withAsyncPipes([pipes.existsEmail, pipes.existsUsername])]),
})(signUp)
