const development = require('./development')

const envs = {
    development,
}

module.exports = envs[process.env.API_ENV || 'development']
