const uuid = require('uuid')

const { createPasswordAndSalt } = require('../../../utils/crypt')

module.exports = ({ email, password, username }) => {
    const data = createPasswordAndSalt(password)
    return {
        email,
        id: uuid.v4(),
        password: data.password,
        salt: data.salt,
        username,
    }
}
