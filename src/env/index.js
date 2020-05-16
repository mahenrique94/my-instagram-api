const { getEnvironment } = require('../utils/env')

const envs = {
    development: require('./development'),
}

module.exports = envs[getEnvironment()]
