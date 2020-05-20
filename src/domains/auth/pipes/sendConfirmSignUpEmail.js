const { getHeaderLanguage } = require('../../../utils/i18n')
const emailQueues = require('../../emails/queues')

module.exports = ctx => {
    const { email } = ctx.request.body
    emailQueues.confirmSignUp.queue.add({
        email,
        language: getHeaderLanguage(ctx),
    })
}
