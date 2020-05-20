const registerAuthRoutes = require('../domains/auth/registerRoutes')
const registerUsersProfilesRoutes = require('../domains/usersProfiles/registerRoutes')

module.exports = router => {
    registerAuthRoutes(router)
    registerUsersProfilesRoutes(router)
}
