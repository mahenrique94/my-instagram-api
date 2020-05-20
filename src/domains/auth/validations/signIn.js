const { validations } = require('../../../constants/validations')

const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        password: validations.password,
    }

    if (body.hasOwnProperty('username')) {
        schema.username = validations.username
    }

    if (body.hasOwnProperty('email')) {
        schema.email = validations.email
    }

    return v.validate(body, schema)
}
