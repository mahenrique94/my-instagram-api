'use strict'
const uuid = require('uuid')

const { usersId } = require('./20200619004910-demo-users')

module.exports = {
    down: queryInterface => queryInterface.bulkDelete('users_followers', null, {}),
    up: queryInterface =>
        queryInterface.bulkInsert('users_followers', [
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.matheus,
                user_following_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.matheus,
                user_following_id: usersId.fake2,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake1,
                user_following_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake2,
                user_following_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake3,
                user_following_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake4,
                user_following_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake1,
                user_following_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake1,
                user_following_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake2,
                user_following_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake2,
                user_following_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake3,
                user_following_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                updated_at: new Date(),
                user_follower_id: usersId.fake4,
                user_following_id: usersId.fake1,
            },
        ]),
}
