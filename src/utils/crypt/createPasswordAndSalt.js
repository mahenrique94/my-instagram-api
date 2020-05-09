const createRandomString = require('./createRandomString')
const encryptPassword = require('./encryptPassword')

const SALT_LENGTH = 128

module.exports = password => {
    const salt = createRandomString(SALT_LENGTH)
    return {
        password: encryptPassword(password, salt),
        salt,
    }
}
