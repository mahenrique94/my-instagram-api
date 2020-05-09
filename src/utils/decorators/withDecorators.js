const { isFunction, tryCall } = require('../functions/')

module.exports = ({ pipeline }) => handler => async ctx => {
    ctx.state.valid = true
    if (isFunction(pipeline)) {
        await tryCall(pipeline, ctx)
    }

    if (ctx.state.valid) {
        await handler(ctx)
    }
}
