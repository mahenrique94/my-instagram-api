const path = require('path')

const { getEnvironment } = require('../utils/env')

require('dotenv').config({
    path: path.resolve(process.cwd(), `.env.${getEnvironment()}`),
})
