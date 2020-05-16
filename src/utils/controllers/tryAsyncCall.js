module.exports = (asyncCall, ctx) => ({
    onSuccess: handleSuccess => ({
        onError: handleError => ({
            call: async () => {
                try {
                    const result = await asyncCall(ctx)
                    ctx.state.data = result
                    handleSuccess()
                } catch (e) {
                    ctx.state.valid = false
                    ctx.state.error = e
                    handleError()
                }
            },
        }),
    }),
})
