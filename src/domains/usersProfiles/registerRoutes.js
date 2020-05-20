const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router.patch(`/${env.api.version}/${env.api.prefix}/users/:userId/profiles`, checkAuth, controllers.updateProfile)
}
