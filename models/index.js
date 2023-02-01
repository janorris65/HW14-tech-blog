import User, { hasMany } from "./Users.js";
import Blog, { belongsTo, hasMany as _hasMany } from "./blog2.js";
import Comment from "./Comment.js";

hasMany(Blog);
belongsTo(User);
_hasMany(Comment);
Comment.belongsTo(Blog);
hasMany(Comment);
Comment.belongsTo(User);

export default { 
    User,
    Blog,
    Comment 
};