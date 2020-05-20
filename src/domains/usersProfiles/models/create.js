const uuid = require('uuid')

module.exports = (name, userId) => ({
    id: uuid.v4(),
    name,
    user_id: userId,
})
