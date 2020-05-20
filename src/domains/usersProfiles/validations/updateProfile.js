const Validator = require('fastest-validator')

const { validations } = require('../../../constants/validations')

module.exports = body => {
    const v = new Validator()
    const schema = {
        biography: validations.biography,
        gender: validations.gender,
        name: validations.name,
        phone: validations.phone,
        website: validations.website,
    }
    return v.validate(body, schema)
}
