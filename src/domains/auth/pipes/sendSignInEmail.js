const { getHeaderLanguage } = require('../../../utils/i18n')
const emailQueues = require('../../emails/queues')

module.exports = ctx => {
    const { email, username } = ctx.state.data
    emailQueues.signIn.queue.add({
        email,
        language: getHeaderLanguage(ctx),
        username,
    })
}
