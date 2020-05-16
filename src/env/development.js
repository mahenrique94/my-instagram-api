module.exports = {
    api: {
        host: 'localhost',
        port: 8080,
        prefix: 'api',
        protocol: 'http',
        version: 'v1',
    },
    bull: {
        host: '127.0.0.1',
        password: process.env.MEMORY_DB_PASSWORD,
        port: 6379,
    },
}
