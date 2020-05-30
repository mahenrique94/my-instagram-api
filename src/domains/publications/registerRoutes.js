const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router
        .delete(`/${env.api.version}/${env.api.prefix}/publications/:publicationId`, checkAuth, controllers.remove)
        // .get(`/${env.api.version}/${env.api.prefix}/publications`, checkAuth, controllers.timeline)
        .post(`/${env.api.version}/${env.api.prefix}/publications`, checkAuth, controllers.create)
}
