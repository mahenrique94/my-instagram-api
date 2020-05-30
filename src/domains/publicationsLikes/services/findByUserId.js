const { getUserId } = require('../../../utils/auth')
const repositories = require('../repositories')

module.exports = ctx => repositories.findByUserId(getUserId(ctx))
