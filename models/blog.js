// const sequelize = require('sequelize');
// const { Model , DataTypes} = require ('sequelize');

// class Blog extends Model{};

// Blog.init(
//     {
//         id:{
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         post_title:{
//             type: DataTypes.STRING,
//             allowNull:false,
//         },
//         post_content:{
//             type: DataTypes.STRING,
//             allowNull:false
//         },
//         creator_name:{
//             type: DataTypes.STRING,
//             allowNull:false,
//         }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'blog',
//     }
//     );

//     module.exports = Blog;