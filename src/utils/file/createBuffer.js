const fs = require('fs')

module.exports = path =>
    new Promise(resolve => {
        const chunks = []
        const streamFrom = fs.createReadStream(path)
        streamFrom.on('data', c => chunks.push(c))
        streamFrom.on('end', () => resolve(Buffer.concat(chunks)))
    })
