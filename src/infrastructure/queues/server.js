const { UI } = require('bull-board')
const app = require('express')()

module.exports = () => {
    app.use('/admin/queues', UI)
    return app
}
