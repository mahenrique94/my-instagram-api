const { isNotEmpty } = require('./array')

const _clone = obj => Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

const removeKeys = (obj, keys) => {
    if (obj && isNotEmpty(keys)) {
        const cloned = _clone(obj)
        keys.forEach(key => delete cloned[key])
        return cloned
    }
    return {}
}

module.exports = {
    removeKeys,
}
