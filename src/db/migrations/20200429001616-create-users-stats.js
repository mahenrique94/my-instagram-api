'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('users_stats'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users_stats', {
            created_at: {
                type: Sequelize.DATE,
            },
            deleted_at: {
                type: Sequelize.DATE,
            },
            followers: {
                type: Sequelize.BIGINT,
            },
            followings: {
                type: Sequelize.BIGINT,
            },
            id: {
                type: Sequelize.UUID,
            },
            publications: {
                type: Sequelize.BIGINT,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
        }),
}
