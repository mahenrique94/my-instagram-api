'use strict'
module.exports = {
    down: queryInterface => queryInterface.dropTable('users_followers'),
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users_followers', {
            created_at: {
                type: Sequelize.DATE,
            },
            id: {
                type: Sequelize.UUID,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            user_follower_id: {
                type: Sequelize.UUID,
            },
            user_following_id: {
                type: Sequelize.UUID,
            },
        }),
}
