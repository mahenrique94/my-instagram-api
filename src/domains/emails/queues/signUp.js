const { createQueue } = require('../../../utils/queue')

module.exports = () => ({
    handler: (job, done) => {
        console.log(job.data)
        done()
    },
    queue: createQueue('Sign up confirmation email'),
})
