const Boom = require('Boom')

const { codes } = require('../../constants/http')
const { isNotEmpty } = require('../array')
const { createResponse } = require('../controllers')

module.exports = validations => ctx => {
    const errors = validations(ctx.request.body)
    if (isNotEmpty(errors)) {
        ctx.state.valid = false
        createResponse(ctx.response).withCode(codes.BAD_REQUEST).withBody(Boom.badRequest, null, errors).end()
    }
}
