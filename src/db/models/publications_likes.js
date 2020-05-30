'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'publications_likes',
        {
            publication_id: DataTypes.UUID,
            user_id: DataTypes.UUID,
        },
        {
            underscored: true,
        },
    )
