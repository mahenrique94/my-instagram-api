const { Op } = require('sequelize')

const db = require('../../../db/models')

module.exports = async followingIds => db.publications.findAll({ raw: true, where: { user_id: { [Op.in]: followingIds } } })
