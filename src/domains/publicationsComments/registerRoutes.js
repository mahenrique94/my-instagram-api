const env = require('../../env')
const { checkAuth } = require('../../utils/middlewares')

const controllers = require('./controllers')

module.exports = router => {
    router
        .delete(`/${env.api.version}/${env.api.prefix}/publications/:publicationId/comments/:commentId`, checkAuth, controllers.remove)
        .post(`/${env.api.version}/${env.api.prefix}/publications/:publicationId/comments`, checkAuth, controllers.create)
}
