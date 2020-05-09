module.exports = pipes => async ctx => {
    for await (const pipe of pipes) {
        if (ctx.state.valid) {
            await pipe(ctx)
        }
    }
}
