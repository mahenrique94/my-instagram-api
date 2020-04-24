const Boom = require('boom')
const Validator = require('fastest-validator')
const jwt = require('jsonwebtoken')

const services = require('./services')

module.exports = {
    signIn: async ctx => {
        const v = new Validator()
        const {
            request: { body },
            response,
        } = ctx

        const schema = {
            password: { max: 16, min: 8, type: 'string' },
            username: { max: 30, min: 5, type: 'string' },
        }
        const errors = v.validate(body, schema)

        if (Array.isArray(errors) && errors.length) {
            response.status = 400
            return (response.body = Boom.badRequest(null, errors))
        }

        const user = await services.signIn(body)
        if (user) {
            response.body = {
                result: jwt.sign({ username: user.username }, 'meusegredo'),
            }
        } else {
            response.status = 401
            response.body = { result: Boom.unauthorized() }
        }
    },
}
