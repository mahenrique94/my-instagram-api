const { patterns } = require('./patterns')

const validations = {
    biography: { optional: true, type: 'string' },
    code: { length: 6, pattern: patterns.NUMBERS_ONLY_SIX, type: 'string' },
    confirmPassword: { max: 16, min: 8, type: 'string' },
    describe: { type: 'string' },
    email: { max: 255, min: 5, type: 'email' },
    gender: { optional: true, type: 'enum', values: ['M', 'F'] },
    id: { type: 'uuid' },
    name: { max: 120, min: 1, type: 'string' },
    password: { max: 16, min: 8, type: 'string' },
    phone: { max: 30, optional: true, type: 'string' },
    username: { max: 30, min: 5, type: 'string' },
    website: { max: 255, optional: true, type: 'string' },
}

module.exports = { validations }
