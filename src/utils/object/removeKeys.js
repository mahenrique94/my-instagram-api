const { isNotEmpty } = require('../array')

const clone = require('./clone')

module.exports = (obj, keys) => {
    if (obj && isNotEmpty(keys)) {
        const cloned = clone(obj)
        keys.forEach(key => delete cloned[key])
        return cloned
    }
    return {}
}
