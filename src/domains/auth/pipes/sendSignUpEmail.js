const { getHeaderLanguage } = require('../../../utils/i18n')
const emailQueues = require('../../emails/queues')

module.exports = ctx => {
    const { code, data } = ctx.state
    const { email, name, username } = data
    emailQueues.signUp.queue.add({
        code,
        email,
        language: getHeaderLanguage(ctx),
        name,
        username,
    })
}
