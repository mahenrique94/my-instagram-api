const Boom = require('boom')

const { codes } = require('../../../constants/http')
const { isNotEmpty } = require('../../../utils/array')
const { removeKeys } = require('../../../utils/obj')
const usersServices = require('../../users/services')
const services = require('../services')
const validations = require('../validations')

module.exports = async ctx => {
    const {
        request: { body },
        response,
    } = ctx
    const errors = validations.signUp(body)
    if (isNotEmpty(errors)) {
        response.status = codes.BAD_REQUEST
        response.body = Boom.badRequest(null, errors)
        return response
    }

    const existsEmail = await usersServices.findByEmail(body.email)
    if (existsEmail) {
        response.status = codes.BAD_REQUEST
        response.body = Boom.badRequest(null, {
            result: `The email ${existsEmail.email} already in use`,
        })
        return response
    }

    const existsUsername = await usersServices.findByUsername(body.username)
    if (existsUsername) {
        response.status = codes.BAD_REQUEST
        response.body = Boom.badRequest(null, {
            result: `The username ${existsUsername.username} already in use`,
        })
        return response
    }

    try {
        const newUser = await services.signUp(body)
        response.status = codes.CREATED
        response.body = {
            result: removeKeys(newUser, ['password', 'salt']),
        }
    } catch (e) {
        response.status = codes.INTERNAL_SERVER_ERROR
        response.body = Boom.internal(e.message, e.stack)
    }
}
