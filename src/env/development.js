module.exports = {
    api: {
        host: 'localhost',
        name: 'my-instagram',
        port: process.env.PORT || 8080,
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
            password: process.env.MY_INSTAGRAM_API_MEMORY_DB_PASSWORD,
            port: 6379,
        },
    },
    email: {
        host: 'smtp.mailtrap.io',
        password: process.env.MY_INSTAGRAM_API_EMAIL_PASSWORD,
        port: 2525,
        user: process.env.MY_INSTAGRAM_API_EMAIL_USER,
    },
    token: {
        prefix: 'Bearer ',
        secret: process.env.MY_INSTAGRAM_API_TOKEN_SECRET,
    },
}
