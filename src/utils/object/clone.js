module.exports = obj => Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
