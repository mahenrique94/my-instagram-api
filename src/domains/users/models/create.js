const uuid = require('uuid/v4')

const { createPasswordAndSalt } = require('../../../utils/crypt')

module.exports = ({ email, password, username }) => {
    const data = createPasswordAndSalt(password)
    return {
        email,
        id: uuid(),
        password: data.password,
        salt: data.salt,
        username,
    }
}
