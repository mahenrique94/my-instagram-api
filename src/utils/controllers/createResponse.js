module.exports = response => ({
    withCode: code => ({
        withBody: (handleWithBody, ...params) => ({
            end: () => {
                response.status = code
                response.body = handleWithBody(...params)
            },
        }),
    }),
})
