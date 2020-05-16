const { isFunction, tryCall } = require('../functions/')

module.exports = ({ pipeline }) => async ctx => {
    ctx.state.valid = true
    if (isFunction(pipeline)) {
        await tryCall(pipeline, ctx)
    }
}
