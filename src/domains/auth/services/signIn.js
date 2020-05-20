const { createToken } = require('../../../utils/auth')
const { Unauthorized } = require('../../../utils/errors')
const { withMessage } = require('../../../utils/i18n')
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
    ctx.state.valid = false
    throw new Unauthorized(withMessage(ctx, 'errors.unauthorized'))
}
