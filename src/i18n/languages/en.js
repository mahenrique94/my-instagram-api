const messages = {
    en: {
        translations: {
            errors: {
                alreadyFollowingUser: 'You already following this user',
                emailInUse: 'The email {{email}} already in use',
                notFollowingUser: 'You not following this user',
                passwordsAreDifferent: 'Password and confirm password are different',
                publicationNotFound: 'Publication not found',
                tryingSelfFollow: 'You are trying follow yourself',
                unauthorized: 'You not have access to use this endpoint',
                userFollowNotFound: 'You are trying follow a user that not exists',
                userNotFound: 'User not found in our database',
                usernameInUse: 'The username {{username}} already in use',
            },
            success: {
                confirmSignUp: 'Confirmation has been processed with success',
                follow: 'Now you are following a new user',
                resendCode: 'A new email has been sent with your activation code for {{email}}',
                unfollow: 'You left following a user',
            },
        },
    },
}

module.exports = {
    messages,
}
