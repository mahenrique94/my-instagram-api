const db = require('../../../db/models')

module.exports = async email => {
    const user = await db.users.findOne({ where: { email } })
    await user.update({
        code: null,
    })
}
