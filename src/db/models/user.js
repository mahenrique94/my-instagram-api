'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define('users', {
        biography: DataTypes.TEXT,
        email: DataTypes.STRING(255),
        gender: DataTypes.STRING(1),
        name: DataTypes.STRING(120),
        password: DataTypes.STRING(255),
        phone: DataTypes.STRING(30),
        picture: DataTypes.STRING(255),
        username: DataTypes.STRING(30),
        website: DataTypes.STRING(255),
    })
