const { withAsyncPipes, withDecorators, withPipeline } = require('../../../utils/decorators')
const pipes = require('../pipes')

module.exports = withDecorators({
    pipeline: withPipeline([withAsyncPipes([pipes.checkPublicationExists, pipes.remove, pipes.removeMedia])]),
})
