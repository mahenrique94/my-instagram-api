const { createRandomCode } = require('../../../utils/string')

module.exports = ctx => {
    ctx.state.code = createRandomCode()
}
