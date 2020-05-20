const Validator = require('fastest-validator')

const { validations } = require('../../../constants/validations')

module.exports = body => {
    const v = new Validator()
    const schema = {
        password: validations.password,
    }

    if (body.username) {
        schema.username = validations.username
    }

    if (body.email) {
        schema.email = validations.email
    }

    return v.validate(body, schema)
}
