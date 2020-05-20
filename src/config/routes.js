const registerAuthRoutes = require('../domains/auth/registerRoutes')

module.exports = router => {
    registerAuthRoutes(router)
}
