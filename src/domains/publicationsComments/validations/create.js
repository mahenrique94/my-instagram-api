const Validator = require('fastest-validator')

const { validations } = require('../../../constants/validations')

module.exports = body => {
    const v = new Validator()
    const schema = {
        describe: validations.describe,
    }
    return v.validate(body, schema)
}
