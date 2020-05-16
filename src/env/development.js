module.exports = {
    api: {
        host: 'localhost',
        port: 8080,
        prefix: 'api',
        protocol: 'http',
        version: 'v1',
    },
    bull: {
        board: {
            host: 'localhost',
            port: 8181,
            protocol: 'http',
        },
        db: {
            host: '127.0.0.1',
            password: process.env.MEMORY_DB_PASSWORD,
            port: 6379,
        },
    },
}
