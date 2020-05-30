const uuid = require('uuid')

module.exports = ({ describe, media, userId }) => ({
    describe,
    id: uuid.v4(),
    media,
    user_id: userId,
})
