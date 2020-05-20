const { validations } = require('../../../constants/validations')

const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        code: validations.code,
        email: validations.email,
    }
    return v.validate(body, schema)
}
