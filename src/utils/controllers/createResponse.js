module.exports = response => ({
    withCode: code => ({
        end: () => {
            response.status = code
        },
        withBody: (handleWithBody, ...params) => ({
            end: () => {
                response.status = code
                response.body = handleWithBody(...params)
            },
        }),
    }),
})
