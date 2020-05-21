const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router
        .delete(`/${env.api.version}/${env.api.prefix}/users/:userId/followers`, checkAuth, controllers.unfollow)
        .post(`/${env.api.version}/${env.api.prefix}/users/:userId/followers`, checkAuth, controllers.follow)
}
