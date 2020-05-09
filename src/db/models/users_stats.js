'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users_stats',
        {
            followers: DataTypes.BIGINT,
            followings: DataTypes.BIGINT,
            publications: DataTypes.BIGINT,
            user_id: DataTypes.UUID,
        },
        {
            paranoid: true,
            underscored: true,
        },
    )
