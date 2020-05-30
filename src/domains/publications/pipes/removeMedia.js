const { remove } = require('../../../utils/file')

module.exports = async ctx => remove(ctx.state.file)
