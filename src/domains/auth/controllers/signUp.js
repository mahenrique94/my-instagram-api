const { withAsyncPipes, withDecorators, withPipeline, withValidations } = require('../../../utils/decorators')
const pipes = require('../pipes')
const validations = require('../validations')

module.exports = withDecorators({
    pipeline: withPipeline([
        withValidations(validations.signUp),
        withAsyncPipes([
            pipes.checkPasswordAndConfirmAreEquals,
            pipes.existsEmail,
            pipes.existsUsername,
            pipes.signUp,
            pipes.createActivationCode,
            pipes.assignActivationCodeForUser,
            pipes.sendSignUpEmail,
        ]),
    ]),
})
