const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const usersServices = require('../../users/services')

module.exports = async ctx => {
    const existsEmail = await usersServices.findByEmail(ctx.request.body.email)
    if (existsEmail) {
        ctx.state.valid = false
        createResponse(ctx.response)
            .withCode(codes.BAD_REQUEST)
            .withBody(Boom.badRequest, null, {
                result: `The email ${existsEmail.email} already in use`,
            })
            .end()
    }
}
