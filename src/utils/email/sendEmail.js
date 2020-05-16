const env = require('../../env')

const nodemailer = require('nodemailer')

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
