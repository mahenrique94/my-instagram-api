const fileType = require('file-type')
const fs = require('fs')
const os = require('os')
const path = require('path')
const uuid = require('uuid')

const env = require('../../env')
const { not } = require('../functions')

const createBuffer = require('./createBuffer')

module.exports = async file => {
    const buffer = await createBuffer(file.path)
    const { ext } = await fileType.fromBuffer(buffer)
    const fileName = `${uuid.v4()}.${ext}`
    const filePath = `${os.homedir()}/${env.api.name}/`
    const destiny = path.join(filePath, fileName)
    if (not(fs.existsSync(filePath))) {
        fs.mkdirSync(filePath, { recursive: true })
    }
    const streamTo = fs.createWriteStream(destiny)
    streamTo.write(buffer)
    streamTo.end()
    return fileName
}
