const server = require('./server')

module.exports = () => {
    const app = server()
    app.listen(8080)
}
