const queues = require('./queues')

module.exports = () => {
    Object.values(queues).forEach(queue => {
        queue.queue.process(queue.handler)
    })
}
