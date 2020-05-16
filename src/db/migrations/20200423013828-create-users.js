'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('users'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            code: {
                type: Sequelize.STRING(8),
            },
            created_at: {
                type: Sequelize.DATE,
            },
            deleted_at: {
                type: Sequelize.DATE,
            },
            email: {
                type: Sequelize.STRING(255),
            },
            id: {
                type: Sequelize.UUID,
            },
            password: {
                type: Sequelize.BLOB,
            },
            salt: {
                type: Sequelize.BLOB,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            username: {
                type: Sequelize.STRING(30),
            },
        }),
}
