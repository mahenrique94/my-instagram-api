const cors = require('@koa/cors')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const applyRoutes = require('../../config/routes')

module.exports = () => {
    console.log('[Koa] Creating a new server')
    const app = new Koa()
    const router = new Router()

    applyRoutes(router)

    app.use(cors()).use(bodyParser()).use(router.routes()).use(router.allowedMethods())

    return app
}
