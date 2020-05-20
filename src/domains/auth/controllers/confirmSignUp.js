const { withAsyncPipes, withDecorators, withPipeline, withValidations } = require('../../../utils/decorators')
const pipes = require('../pipes')
const validations = require('../validations')

module.exports = withDecorators({
    pipeline: withPipeline([
        withValidations(validations.confirmSignUp),
        withAsyncPipes([pipes.checkCodeAndEmail, pipes.confirmSignUp, pipes.sendConfirmSignUpEmail]),
    ]),
})
