const Validator = require('fastest-validator')

const { validations } = require('../../../constants/validations')

module.exports = body => {
    const v = new Validator()
    const schema = {
        email: validations.email,
    }
    return v.validate(body, schema)
}
