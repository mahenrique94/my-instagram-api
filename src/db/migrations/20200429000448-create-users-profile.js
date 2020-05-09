'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('users_profile'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users_profile', {
            biography: {
                type: Sequelize.TEXT,
            },
            created_at: {
                type: Sequelize.DATE,
            },
            deleted_at: {
                type: Sequelize.DATE,
            },
            gender: {
                type: Sequelize.STRING(1),
            },
            id: {
                type: Sequelize.UUID,
            },
            name: {
                type: Sequelize.STRING(120),
            },
            phone: {
                type: Sequelize.STRING(30),
            },
            picture: {
                type: Sequelize.STRING(255),
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.UUID,
            },
            website: {
                type: Sequelize.STRING(255),
            },
        }),
}
