const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        email: { max: 255, min: 5, type: 'email' },
    }
    return v.validate(body, schema)
}
