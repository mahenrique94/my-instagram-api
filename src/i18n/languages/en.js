const messages = {
    en: {
        translations: {
            errors: {
                emailInUse: 'The email {{email}} already in use',
                unauthorized: 'You not have access to use this endpoint',
                userNotFound: 'User not found in our database',
                usernameInUse: 'The username {{username}} already in use',
            },
            success: {
                confirmSignUp: 'Confirmation has been processed with success',
                resendCode: 'A new email has been sent with your activation code for {{email}}',
            },
        },
    },
}

module.exports = {
    messages,
}
