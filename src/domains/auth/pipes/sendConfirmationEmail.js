const emailQueues = require('../../emails/queues')

module.exports = ctx => {
    emailQueues.signUp.queue.add({
        email: ctx.state.data.email,
        username: ctx.state.data.username,
    })
}
