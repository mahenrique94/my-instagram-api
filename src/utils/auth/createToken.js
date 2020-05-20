const { days, formats } = require('../../constants/date')
const env = require('../../env')

const { addDays, format } = require('date-fns')
const jwt = require('jsonwebtoken')

module.exports = payload => jwt.sign(
    {
        expiresIn: format(addDays(new Date(), days.ONE_WEEK), formats.MILLISECONDS),
        payload,
    },
    env.token.secret,
)
