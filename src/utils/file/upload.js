const fileType = require('file-type')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const { not } = require('../functions')

const createBuffer = require('./createBuffer')
const getFilePath = require('./getFilePath')

module.exports = async file => {
    const buffer = await createBuffer(file.path)
    const { ext } = await fileType.fromBuffer(buffer)
    const fileName = `${uuid.v4()}.${ext}`
    const filePath = getFilePath()
    const destiny = path.join(filePath, fileName)
    if (not(fs.existsSync(filePath))) {
        fs.mkdirSync(filePath, { recursive: true })
    }
    const streamTo = fs.createWriteStream(destiny)
    streamTo.write(buffer)
    streamTo.end()
    return fileName
}
