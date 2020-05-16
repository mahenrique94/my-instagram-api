const env = require('../../env')

const Bull = require('bull')
const { setQueues } = require('bull-board')

module.exports = name => {
    const queue = new Bull(name, {
        redis: env.bull.db,
    })
    setQueues([queue])
    return queue
}
