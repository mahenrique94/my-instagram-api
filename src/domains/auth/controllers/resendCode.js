const { withAsyncPipes, withDecorators, withPipeline, withValidations } = require('../../../utils/decorators')
const pipes = require('../pipes')
const validations = require('../validations')

module.exports = withDecorators({
    pipeline: withPipeline([
        withValidations(validations.resendCode),
        withAsyncPipes([pipes.checkEmailHasCode, pipes.resendCode, pipes.sendResendCodeEmail]),
    ]),
})
