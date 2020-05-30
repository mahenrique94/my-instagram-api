const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router
        .get(`/${env.api.version}/${env.api.prefix}/publications/timeline`, checkAuth, controllers.timeline)
        .delete(`/${env.api.version}/${env.api.prefix}/publications/:publicationId`, checkAuth, controllers.remove)
        .post(`/${env.api.version}/${env.api.prefix}/publications`, checkAuth, controllers.create)
}
