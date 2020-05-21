const registerRoutes = [
    require('../domains/auth/registerRoutes'),
    require('../domains/usersFollowers/registerRoutes'),
    require('../domains/usersProfiles/registerRoutes'),
]

module.exports = router => registerRoutes.forEach(register => register(router))
