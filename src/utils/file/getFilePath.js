const os = require('os')

const env = require('../../env')

module.exports = () => `${os.homedir()}/${env.api.name}`
