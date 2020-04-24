'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('Users'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            biography: {
                type: Sequelize.TEXT,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            email: {
                type: Sequelize.STRING(255),
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
            password: {
                type: Sequelize.STRING(255),
            },
            phone: {
                type: Sequelize.STRING(30),
            },
            picture: {
                type: Sequelize.STRING(255),
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
            username: {
                type: Sequelize.STRING(30),
            },
            website: {
                type: Sequelize.STRING(255),
            },
        }),
}
