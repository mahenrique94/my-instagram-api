'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('publications_comments'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('publications_comments', {
            created_at: {
                type: Sequelize.DATE,
            },
            describe: {
                type: Sequelize.TEXT,
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
