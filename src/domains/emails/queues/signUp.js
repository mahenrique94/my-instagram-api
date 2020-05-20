const path = require('path')

const { sendEmail } = require('../../../utils/email')
const { createQueue } = require('../../../utils/queue')
const { compile } = require('../../../utils/template')
const models = require('../models')

module.exports = () => ({
    handler: async job => {
        try {
            const { email } = job.data
            console.log('Sending a new confirmation email for:', email)
            await sendEmail(
                models
                    .email()
                    .to(email)
                    .from('my-instagram@example.com')
                    .subject('[My Instagram] New account')
                    .message(compile(path.resolve(__dirname, '../', 'templates', 'signUp.pug'), job.data)),
            )
        } catch (e) {
            console.log(e.message)
        }
    },
    queue: createQueue('Sign up confirmation email'),
})
