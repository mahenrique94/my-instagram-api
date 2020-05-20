module.exports = class UnauthorizedError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'UnauthorizedError'
    }
}
