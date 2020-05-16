require('../config/env')

const emailQueues = require('../domains/emails/queues')

module.exports = () => {
    emailQueues.signUp.queue.process(emailQueues.signUp.handler)
}
