const { validations } = require('../../../constants/validations')

const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        confirmPassword: validations.confirmPassword,
        email: validations.email,
        name: validations.name,
        password: validations.password,
        username: validations.username,
    }
    return v.validate(body, schema)
}
