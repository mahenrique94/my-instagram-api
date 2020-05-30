const env = require('../../env')

const controllers = require('./controllers')

module.exports = router => {
    router
        .delete(`/${env.api.version}/${env.api.prefix}/publications/:publicationId`, controllers.remove)
        // .get(`/${env.api.version}/${env.api.prefix}/publications`, controllers.timeline)
        .post(`/${env.api.version}/${env.api.prefix}/publications`, controllers.create)
}
