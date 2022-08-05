const sequelize = require('../config/connection');

const seedingUsers = require('./userseeds');
const seedingPost = require('./postseeds');
const seedingComment = require('./commentseeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedingUsers();
  console.log("users seeded");

  await seedingPost();
  console.log("posts seeded");

  await seedingComment();
  console.log("comments seeded");

  process.exit(0);
};

seedDatabase();

