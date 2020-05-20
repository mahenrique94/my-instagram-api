const path = require('path')

const { sendEmail } = require('../../../utils/email')
const { createQueue } = require('../../../utils/queue')
const { compile } = require('../../../utils/template')
const models = require('../models')

module.exports = () => ({
    handler: async job => {
        try {
            const { email } = job.data
            console.log('Sending a new code email for:', email)
            await sendEmail(
                models
                    .email()
                    .to(email)
                    .from('my-instagram@example.com')
                    .subject('[My Instagram] Resend code')
                    .message(compile(path.resolve(__dirname, '../', 'templates', 'resendCode.pug'), job.data)),
            )
        } catch (e) {
            console.log(e.message)
        }
    },
    queue: createQueue('Resend confirmation code'),
})
