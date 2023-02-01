const sequelize = require('../config/connection');
const { Model , DataTypes} = require ('sequelize');

class Comment extends Model{};

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        comment_content:{
            type: DataTypes.STRING,
            allowNull:false
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: "user",
                key: "id"
            }
        },
        blog_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: "blog",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
    );

    module.exports = Comment;