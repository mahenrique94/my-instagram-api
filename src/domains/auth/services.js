const repository = require('./repository')

module.exports = {
    signIn: payload => repository.findOne(payload),
}
