const services = require('../../users/services')

module.exports = ctx => services.confirmSignUp(ctx.request.body)
