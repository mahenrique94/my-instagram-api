const { upload } = require('../../../utils/file')

module.exports = async ctx => {
    const fileName = await upload(ctx.request.files.media)
    ctx.state.file = fileName
}
