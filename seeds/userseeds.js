
const { User } = require('../models');

const userSeedData = 
[
    {
      name: "Yuh",
      email: "Yuh@hotmail.com",
      password: "password12345"
    },
    {
      name: "LarrytheLobster",
      email: "lobster@gmail.com",
      password: "password12345"
    },
    {
      name: "Anika",
      email: "anika@aol.com",
      password: "password12345"
    }
  ]

  const seedingUsers = () => User.bulkCreate(userSeedData,{individualHooks: true }) 
  
module.exports = seedingUsers;
