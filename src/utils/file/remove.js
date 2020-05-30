const fs = require('fs')

const getFilePath = require('./getFilePath')

module.exports = file => {
    try {
        const filePath = `${getFilePath()}/${file}`
        fs.unlinkSync(filePath)
    } catch (e) {
        console.log(e.message)
    }
}
