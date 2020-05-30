'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('publications_comments'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('publications_comments', {
            createdAt: {
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
            updatedAt: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.UUID,
            },
        }),
}
