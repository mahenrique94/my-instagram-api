const { patterns } = require('../../../constants/patterns')

const Validator = require('fastest-validator')

module.exports = body => {
    const v = new Validator()
    const schema = {
        code: { length: 6, pattern: patterns.NUMBERS_ONLY_SIX, type: 'string' },
        email: { max: 255, min: 5, type: 'email' },
    }
    return v.validate(body, schema)
}
