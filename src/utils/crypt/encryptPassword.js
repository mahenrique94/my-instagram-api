const crypto = require('crypto')

const HASH_ALGORITHM = 'sha512'
const HASH_ITERATION = 1000
const HASH_LENGTH = 256

module.exports = (password, salt) => crypto.pbkdf2Sync(password, salt, HASH_ITERATION, HASH_LENGTH, HASH_ALGORITHM).toString('hex')
