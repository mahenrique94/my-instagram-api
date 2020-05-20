const usersServices = require('../../users/services')

module.exports = async ctx => {
    const { email } = ctx.request.body
    const existsEmail = await usersServices.findByEmail(email)
    if (existsEmail) {
        if (existsEmail.code) {
            ctx.state.code = existsEmail.code
        }
    }
}
