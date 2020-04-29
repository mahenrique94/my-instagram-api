'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users_followings',
        {
            user_follower_id: DataTypes.UUID,
            user_following_id: DataTypes.UUID,
        },
        {
            paranoid: true,
            underscored: true,
        },
    )
