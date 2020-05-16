'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'users',
        {
            code: DataTypes.STRING(8),
            email: DataTypes.STRING(255),
            password: DataTypes.BLOB,
            salt: DataTypes.BLOB,
            username: DataTypes.STRING(30),
        },
        {
            paranoid: true,
            underscored: true,
        },
    )
