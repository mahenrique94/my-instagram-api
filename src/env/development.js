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
    email: {
        host: 'smtp.mailtrap.io',
        password: process.env.EMAIL_PASSWORD,
        port: 2525,
        user: process.env.EMAIL_USER,
    },
    token: {
        prefix: 'Bearer ',
        secret: process.env.TOKEN_SECRET,
    },
}
