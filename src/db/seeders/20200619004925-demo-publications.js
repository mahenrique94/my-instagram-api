'use strict'
const faker = require('faker/locale/pt_BR')
const uuid = require('uuid')

const { usersId } = require('./20200619004910-demo-users')

const publicationsId = {
    fake1: uuid.v4(),
    fake2: uuid.v4(),
    fake3: uuid.v4(),
    fake4: uuid.v4(),
    matheus: uuid.v4(),
}

module.exports = {
    down: queryInterface => queryInterface.bulkDelete('publications', null, {}),
    publicationsId,
    up: queryInterface =>
        queryInterface.bulkInsert('publications', [
            {
                created_at: new Date(),
                describe: 'Minha primeira publicação',
                id: publicationsId.matheus,
                media: 'publications-matheus.jpg',
                updated_at: new Date(),
                user_id: usersId.matheus,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: publicationsId.fake1,
                media: 'publications1.jpg',
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications11.jpg',
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications12.jpg',
                updated_at: new Date(),
                user_id: usersId.fake1,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: publicationsId.fake2,
                media: 'publications2.jpg',
                updated_at: new Date(),
                user_id: usersId.fake2,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: publicationsId.fake3,
                media: 'publications3.jpg',
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications31.jpg',
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications32.jpg',
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications33.jpg',
                updated_at: new Date(),
                user_id: usersId.fake3,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: publicationsId.fake4,
                media: 'publications4.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications41.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications42.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications43.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications44.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
            {
                created_at: new Date(),
                describe: faker.lorem.sentence(),
                id: uuid.v4(),
                media: 'publications45.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
            },
        ]),
}
