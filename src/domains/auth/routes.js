const env = require('../../env')

const controllers = require('./controllers')

module.exports = router => {
    router.post(`/${env.api.version}/${env.api.prefix}/auth/sign-up`, controllers.signUp)
}
