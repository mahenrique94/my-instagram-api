const env = require('../../env')

const controllers = require('./controllers')

module.exports = router => {
    router
        .post(`/${env.api.version}/${env.api.prefix}/auth/confirm-code`, controllers.confirmSignUp)
        .post(`/${env.api.version}/${env.api.prefix}/auth/resend-code`, controllers.resendCode)
        .post(`/${env.api.version}/${env.api.prefix}/auth/sign-in`, controllers.signIn)
        .post(`/${env.api.version}/${env.api.prefix}/auth/sign-up`, controllers.signUp)
}
