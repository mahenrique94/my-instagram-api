const uuid = require('uuid')

module.exports = ({ describe, publicationId, userId }) => ({
    describe,
    id: uuid.v4(),
    publication_id: publicationId,
    user_id: userId,
})
