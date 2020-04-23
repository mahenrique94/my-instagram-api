'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        website: DataTypes.STRING,
        biography: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.STRING,
        picture: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
