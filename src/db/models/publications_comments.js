'use strict'
module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'publications_comments',
        {
            describe: DataTypes.TEXT,
            publication_id: DataTypes.UUID,
            user_id: DataTypes.UUID,
        },
        {
            underscored: true,
        },
    )
