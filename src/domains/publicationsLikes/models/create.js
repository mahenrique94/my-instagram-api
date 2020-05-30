const uuid = require('uuid')

module.exports = ({ publicationId, userId }) => ({
    id: uuid.v4(),
    publication_id: publicationId,
    user_id: userId,
})
