const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./user.json');
const blogdata = require('./blog.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogdata);

  process.exit(0);
};

seedDatabase();