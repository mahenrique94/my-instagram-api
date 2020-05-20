const { codes } = require('../../../constants/http')
const { createResponse } = require('../../../utils/controllers')
const { withMessage } = require('../../../utils/i18n')

module.exports = async ctx => {
    createResponse(ctx.response)
        .withCode(codes.OK)
        .withBody(() => ({ result: withMessage(ctx, 'success.resendCode', { email: ctx.request.body.email }) }))
        .end()
}
