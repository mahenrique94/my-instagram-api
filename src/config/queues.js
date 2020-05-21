require('../config/env')

const registerQueues = [require('../domains/emails/registerQueues')]

module.exports = () => registerQueues.forEach(register => register())
