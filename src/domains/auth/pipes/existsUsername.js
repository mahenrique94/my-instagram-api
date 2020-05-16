const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')
const usersServices = require('../../users/services')

module.exports = async ctx => {
    const existsUsername = await usersServices.findByUsername(ctx.request.body.username)
    if (existsUsername) {
        ctx.state.valid = false
        createResponse(ctx.response)
            .withCode(codes.BAD_REQUEST)
            .withBody(Boom.badRequest, null, {
                result: withMessage(ctx, 'errors.usernameInUse', {
                    username: existsUsername.username,
                }),
            })
            .end()
    }
}
