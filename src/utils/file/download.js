const fs = require('fs')
const os = require('os')

const env = require('../../env')

module.exports = file => {
    const filePath = `${os.homedir()}/${env.api.name}/${file}`
    return fs.readFileSync(filePath)
}
