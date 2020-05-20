const nodemailer = require('nodemailer')

const env = require('../../env')

module.exports = async email => {
    const transporter = nodemailer.createTransport({
        auth: {
            pass: env.email.password,
            user: env.email.user,
        },
        host: env.email.host,
        port: env.email.port,
        secure: false,
    })
    await transporter.sendMail(email)
}
