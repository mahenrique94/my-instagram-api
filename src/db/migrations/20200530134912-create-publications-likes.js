'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('publications_likes'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('publications_likes', {
            created_at: {
                type: Sequelize.DATE,
            },
            id: {
                type: Sequelize.UUID,
            },
            publication_id: {
                type: Sequelize.UUID,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.UUID,
            },
        }),
}
