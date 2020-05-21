'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users_followers',
        {
            user_follower_id: DataTypes.UUID,
            user_following_id: DataTypes.UUID,
        },
        {
            underscored: true,
        },
    )
