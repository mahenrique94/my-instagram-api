'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('publications'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('publications', {
            createdAt: {
                type: Sequelize.DATE,
            },
            describe: {
                type: Sequelize.TEXT,
            },
            id: {
                type: Sequelize.UUID,
            },
            media: {
                type: Sequelize.STRING(255),
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.UUID,
            },
        }),
}
