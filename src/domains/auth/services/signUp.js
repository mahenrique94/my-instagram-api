const services = require('../../users/services')

module.exports = ctx => services.create(ctx.request.body)
