const crypto = require('crypto')

const HASH_ALGORITHM = 'sha512'
const HASH_ITERATION = 1000
const HASH_LENGTH = 256

const SALT_LENGTH = 128

const getRandomString = length =>
    crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length)

const encryptPass = (password, salt) => crypto.pbkdf2Sync(password, salt, HASH_ITERATION, HASH_LENGTH, HASH_ALGORITHM).toString('hex')

const createPassAndSalt = password => {
    const salt = getRandomString(SALT_LENGTH)
    return {
        password: encryptPass(password, salt),
        salt,
    }
}

module.exports = {
    createPassAndSalt,
    encryptPass,
}
