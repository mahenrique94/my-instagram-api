const db = require('../../db/models')

module.exports = {
    findOne: payload => db.users.findOne({ where: payload }),
}
