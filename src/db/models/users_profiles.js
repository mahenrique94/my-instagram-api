'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users_profiles',
        {
            biography: DataTypes.TEXT,
            gender: DataTypes.STRING(1),
            name: DataTypes.STRING(120),
            phone: DataTypes.STRING(30),
            picture: DataTypes.STRING(255),
            user_id: DataTypes.UUID,
            website: DataTypes.STRING(255),
        },
        {
            underscored: true,
        },
    )
