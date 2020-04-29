'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users_stats',
        {
            followers: DataTypes.BIGINT,
            followings: DataTypes.BIGINT,
            publications: DataTypes.BIGINT,
        },
        {
            paranoid: true,
            underscored: true,
        },
    )
