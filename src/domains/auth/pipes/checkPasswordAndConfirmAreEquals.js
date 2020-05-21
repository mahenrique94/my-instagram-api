const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')

module.exports = async ctx => {
    const { confirmPassword, password } = ctx.request.body
    if (confirmPassword !== password) {
        ctx.state.valid = false
        createResponse(ctx.response)
            .withCode(codes.BAD_REQUEST)
            .withBody(Boom.badRequest, null, {
                result: withMessage(ctx, 'errors.passwordsAreDifferent'),
            })
            .end()
    }
}
