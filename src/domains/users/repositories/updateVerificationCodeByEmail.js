const db = require('../../../db/models')

module.exports = async (email, code) => {
    const user = await db.users.findOne({ where: { email } })
    await user.update({
        code,
    })
}
