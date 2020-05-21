const Validator = require('fastest-validator')

const { validations } = require('../../../constants/validations')

module.exports = body => {
    const v = new Validator()
    const schema = {
        userFollowId: validations.id,
    }
    return v.validate(body, schema)
}
