module.exports = {
    development: {
        database: 'instagram_development',
        dialect: 'mysql',
        host: '127.0.0.1',
        password: 'root',
        username: 'root',
    },
    production: {
        database: process.env.MY_INSTAGRAM_API_DATABASE_NAME,
        dialect: 'postgres',
        host: process.env.MY_INSTAGRAM_API_DATABASE_HOST,
        password: process.env.MY_INSTAGRAM_API_DATABASE_PASSWORD,
        username: process.env.MY_INSTAGRAM_API_DATABASE_USER,
    },
    test: {
        database: 'instagram_test',
        dialect: 'mysql',
        host: '127.0.0.1',
        password: 'root',
        username: 'root',
    },
}
