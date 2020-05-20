const { patterns } = require('./patterns')

const validations = {
    code: { length: 6, pattern: patterns.NUMBERS_ONLY_SIX, type: 'string' },
    confirmPassword: { max: 16, min: 8, type: 'string' },
    email: { max: 255, min: 5, type: 'email' },
    name: { max: 120, min: 1, type: 'string' },
    password: { max: 16, min: 8, type: 'string' },
    username: { max: 30, min: 5, type: 'string' },
}

module.exports = { validations }
