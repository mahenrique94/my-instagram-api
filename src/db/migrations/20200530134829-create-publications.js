'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('publications'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('publications', {
            created_at: {
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
            updated_at: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.UUID,
            },
        }),
}
