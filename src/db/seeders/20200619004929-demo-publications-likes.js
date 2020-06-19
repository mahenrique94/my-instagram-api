'use strict'
const uuid = require('uuid')

const { usersId } = require('./20200619004910-demo-users')
const { publicationsId } = require('./20200619004925-demo-publications')

module.exports = {
    down: queryInterface => queryInterface.bulkDelete('publications_likes', null, {}),
    up: queryInterface =>
        queryInterface.bulkInsert('publications_likes', [
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.matheus,
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.matheus,
                updated_at: new Date(),
                user_id: usersId.fake2,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.matheus,
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake1,
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake2,
                updated_at: new Date(),
                user_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake2,
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake2,
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake3,
                updated_at: new Date(),
                user_id: usersId.fake2,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake3,
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake4,
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake4,
                updated_at: new Date(),
                user_id: usersId.fake2,
            },
            {
                created_at: new Date(),
                id: uuid.v4(),
                publication_id: publicationsId.fake4,
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
        ]),
}
