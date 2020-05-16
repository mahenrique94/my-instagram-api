const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        confirmPassword: { max: 16, min: 8, type: 'string' },
        email: { max: 255, min: 5, type: 'email' },
        name: { max: 120, min: 1, type: 'string' },
        password: { max: 16, min: 8, type: 'string' },
        username: { max: 30, min: 5, type: 'string' },
    }
    return v.validate(body, schema)
}
