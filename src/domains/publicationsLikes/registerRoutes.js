const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router
        .delete(`/${env.api.version}/${env.api.prefix}/publications/:publicationId/likes/:likeId`, checkAuth, controllers.remove)
        .post(`/${env.api.version}/${env.api.prefix}/publications/:publicationId/likes`, checkAuth, controllers.create)
}
