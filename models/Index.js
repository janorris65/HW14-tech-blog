import User, { hasMany } from "./Users";
import Blog, { belongsTo, hasMany as _hasMany } from "./Blog";
import Comment from "./Comment";

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