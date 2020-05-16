require('../../config/env')

const env = require('../../env')

const server = require('./server')

module.exports = () => {
    const app = server()
    app.listen(env.bull.board.port, env.bull.board.host, () => {
        console.log(`[Express] Server listening at ${env.bull.board.protocol}://${env.bull.board.host}:${env.bull.board.port}`)
        console.log('Press CTRL+C to stop it')
    })
}
