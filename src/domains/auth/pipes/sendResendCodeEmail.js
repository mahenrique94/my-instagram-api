const { getHeaderLanguage } = require('../../../utils/i18n')
const emailQueues = require('../../emails/queues')

module.exports = ctx => {
    const { code } = ctx.state
    const { email } = ctx.request.body
    emailQueues.resendCode.queue.add({
        code,
        email,
        language: getHeaderLanguage(ctx),
    })
}
