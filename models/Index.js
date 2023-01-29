const User = require("./Users");
const Blog = require("./Blog")

User.hasMany(Blog);
Blog.belongsTo(User);

module.exports = { 
    User,
    Blog 
};