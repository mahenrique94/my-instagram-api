const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/auth/sign-in', controllers.signIn)
}
