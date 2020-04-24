const request = require('supertest')

const server = require('../../../infrastructure/server')

describe('Tests for Auth controllers', () => {
    it('Should get a valid token when send a POST for /auth/sign-in', async () => {
        const resp = await request(server().callback()).post('/v1/api/auth/sign-in').send({
            password: '123123123',
            username: 'mahenrique94',
        })
        console.log(resp.body.result)
        expect(resp.status).toBe(200)
    })
})
