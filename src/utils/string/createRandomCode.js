const verificationCode = require('generate-sms-verification-code')

const CODE_LENGTH = 6
const CODE_TYPE = 'number'

module.exports = () => verificationCode(CODE_LENGTH, { type: CODE_TYPE })
