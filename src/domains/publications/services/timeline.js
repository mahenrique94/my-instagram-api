const { getUserId } = require('../../../utils/auth')
const commentsRepositories = require('../../publicationsComments/repositories')
const likesRepositories = require('../../publicationsLikes/repositories')
const followersRepositories = require('../../usersFollowers/repositories')
const repositories = require('../repositories')

module.exports = async ctx => {
    const followingUsers = await followersRepositories.findAllFollowingsByUserId(getUserId(ctx))
    console.log(followingUsers)
    const publications = await repositories.findAllByFollowing(followingUsers.map(user => user.user_following_id))
    console.log(publications)
    return Promise.all(
        publications.map(async publication => ({
            ...publication,
            comments: await commentsRepositories.findAllByPublicationId(publication.id),
            likes: await likesRepositories.findAllByPublicationId(publication.id),
        })),
    )
}
