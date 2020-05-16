const { messages: englishMessages } = require('./en')
const { messages: portugueseMessages } = require('./pt')

const messages = {
    ...englishMessages,
    ...portugueseMessages,
}

module.exports = {
    messages,
}
