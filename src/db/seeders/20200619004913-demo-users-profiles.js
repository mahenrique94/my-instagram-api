'use strict'
const faker = require('faker/locale/pt_BR')
const uuid = require('uuid')

const { usersId } = require('./20200619004910-demo-users')

module.exports = {
    down: queryInterface => queryInterface.bulkDelete('users_profiles', null, {}),
    up: queryInterface =>
        queryInterface.bulkInsert('users_profiles', [
            {
                biography:
                    'Um eterno estudante.\n' +
                    'Facebook: https://www.facebook.com/matheus.castiglioni.5\n' +
                    'Github: mahenrique94\n' +
                    'Snap: mahenrique94\n' +
                    'Twitter: mahenrique94\n' +
                    'blog.matheuscastiglioni.com.br',
                created_at: new Date(),
                gender: 'M',
                id: uuid.v4(),
                name: 'Matheus Henrique Castiglioni',
                phone: '(19) 98902-1580',
                picture: 'matheus.jpg',
                updated_at: new Date(),
                user_id: usersId.matheus,
                website: 'https://blog.matheuscastiglioni.com.br',
            },
            {
                biography: faker.lorem.text(),
                created_at: new Date(),
                gender: faker.helpers.shuffle(['F', 'M'])[0],
                id: uuid.v4(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                phone: faker.phone.phoneNumber(),
                picture: 'fake1.jpg',
                updated_at: new Date(),
                user_id: usersId.fake1,
                website: faker.internet.url(),
            },
            {
                biography: faker.lorem.text(),
                created_at: new Date(),
                gender: faker.helpers.shuffle(['F', 'M'])[0],
                id: uuid.v4(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                phone: faker.phone.phoneNumber(),
                picture: 'fake2.jpg',
                updated_at: new Date(),
                user_id: usersId.fake2,
                website: faker.internet.url(),
            },
            {
                biography: faker.lorem.text(),
                created_at: new Date(),
                gender: faker.helpers.shuffle(['F', 'M'])[0],
                id: uuid.v4(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                phone: faker.phone.phoneNumber(),
                picture: 'fake3.jpg',
                updated_at: new Date(),
                user_id: usersId.fake3,
                website: faker.internet.url(),
            },
            {
                biography: faker.lorem.text(),
                created_at: new Date(),
                gender: faker.helpers.shuffle(['F', 'M'])[0],
                id: uuid.v4(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                phone: faker.phone.phoneNumber(),
                picture: 'fake4.jpg',
                updated_at: new Date(),
                user_id: usersId.fake4,
                website: faker.internet.url(),
            },
        ]),
}
