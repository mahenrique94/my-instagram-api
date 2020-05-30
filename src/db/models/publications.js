'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'publications',
        {
            describe: DataTypes.TEXT,
            media: DataTypes.STRING(255),
            user_id: DataTypes.UUID,
        },
        {
            underscored: true,
        },
    )
