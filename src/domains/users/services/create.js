const services = require('../../usersProfiles/services')
const repositories = require('../repositories')

module.exports = async body => {
    const newUser = await repositories.create(body)
    const newUserProfile = await services.create(body.name, newUser.id)
    return {
        ...newUserProfile,
        ...newUser,
    }
}
