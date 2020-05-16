const pug = require('pug')

module.exports = (templateUrl, templateData) => pug.renderFile(templateUrl, templateData)
