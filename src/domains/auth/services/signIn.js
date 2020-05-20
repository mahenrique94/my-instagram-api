const { createToken } = require('../../../utils/auth')
const { removeKeys } = require('../../../utils/object')
const services = require('../../users/services')

module.exports = async ctx => {
    const { email, password, username } = ctx.request.body
    const user = await services.findByEmailOrUsernameAndPassword(email, username, password)
    if (user) {
        const safeUser = removeKeys(user, ['code', 'password', 'salt', 'deletedAt'])
        ctx.state.token = createToken(safeUser)
        return user
    }
}
