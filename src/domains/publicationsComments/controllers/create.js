const { withAsyncPipes, withDecorators, withPipeline, withValidations } = require('../../../utils/decorators')
const publicationsPipes = require('../../publications/pipes')
const pipes = require('../pipes')
const validations = require('../validations')

module.exports = withDecorators({
    pipeline: withPipeline([
        withValidations(validations.create),
        withAsyncPipes([publicationsPipes.checkPublicationExists, pipes.create]),
    ]),
})
