require('../config/env')

const env = require('../env')

const server = require('./server')

module.exports = () => {
    const app = server()
    app.listen(env.api.port, env.api.host, () => {
        console.log(`[Koa] Server listening at ${env.api.protocol}://${env.api.host}:${env.api.port}`)
        console.log('Press CTRL+C to stop it')
    })
}
