require('../config/env')

const registerEmailQueues = require('../domains/emails/registerQueues')

module.exports = () => {
    registerEmailQueues()
}
