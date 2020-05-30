const { withAsyncPipes, withDecorators, withPipeline } = require('../../../utils/decorators')
const publicationsPipes = require('../../publications/pipes')
const pipes = require('../pipes')

module.exports = withDecorators({
    pipeline: withPipeline([
        withAsyncPipes([publicationsPipes.checkPublicationExists, pipes.create]),
    ]),
})
