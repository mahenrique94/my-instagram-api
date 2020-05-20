const { Op } = require('sequelize')

const db = require('../../../db/models')
const { encryptPassword } = require('../../../utils/crypt')

module.exports = async (email, username, password) => {
    const operators = []

    if (email) {
        operators.push({ email })
    }

    if (username) {
        operators.push({ username })
    }

    const user = await db.users.findOne({
        raw: true,
        where: {
            code: null,
            [Op.or]: operators,
        },
    })
    if (user) {
        const passwordEncrypted = encryptPassword(password, user.salt)
        if (passwordEncrypted === user.password.toString()) {
            return user
        }
    }
}
