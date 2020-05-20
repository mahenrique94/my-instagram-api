const Bull = require('bull')
const { setQueues } = require('bull-board')

const env = require('../../env')

module.exports = name => {
    const queue = new Bull(name, {
        redis: env.bull.db,
    })
    setQueues([queue])
    return queue
}
