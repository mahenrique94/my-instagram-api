const usersServices = require('../../users/services')

module.exports = async ctx => {
    const { code, data } = ctx.state
    await usersServices.updateVerificationCodeByEmail(data.email, code)
}
