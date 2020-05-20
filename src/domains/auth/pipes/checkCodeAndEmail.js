const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')
const usersServices = require('../../users/services')

module.exports = async ctx => {
    const { code, email } = ctx.request.body
    const existsUser = await usersServices.findByEmailAndCode(email, code)
    if (!existsUser) {
        ctx.state.valid = false
        createResponse(ctx.response)
            .withCode(codes.NOT_FOUND)
            .withBody(Boom.notFound, null, {
                result: withMessage(ctx, 'errors.userNotFound'),
            })
            .end()
    }
}
