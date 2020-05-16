const { UI } = require('bull-board')
const app = require('express')()

module.exports = () => {
    console.log('[Express] Creating a new server')
    app.use('/admin/queues', UI)
    return app
}
