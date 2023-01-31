import sequelize from '../config/connection';
import { Model, DataTypes } from 'sequelize';

class Blog extends Model{};

Blog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        post_content:{
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
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
    );

    module.exports = Blog;