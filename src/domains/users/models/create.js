const uuid = require('uuid/v4')

const { createPassAndSalt } = require('../../../utils/crypt')

module.exports = ({ email, password, username }) => {
    const data = createPassAndSalt(password)
    return {
        email,
        id: uuid(),
        password: data.password,
        salt: data.salt,
        username,
    }
}
