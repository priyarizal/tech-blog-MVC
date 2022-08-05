
const { Post } = require('../models');

const postSeedData = 

[
  {
    user_id : 1,
    title: "tea with honey and lemon will cure your depression",
    content: "A new scientific dicover suggests that the natural ingredients of honey and Vitamin A,,C, and B6 found in lemon are proven to cure depression!"
  },
  {
    user_id : 2,
    title: "You do not age in space",
    content: "Remember the super popular movie Interstellar? Well.. the whole thing about not aging in space is true. Technically, you could age reall really reallyyy** slow if you traveled at the speed of light"
    
  },
  {
    user_id : 3,
    title: "have you touched grass today?",
    content: "Touching grass is imperative to mental and physical health. Touching grass 5 times a day, keeps depression away!"
  }
]
  
const seedingPost = () => Post.bulkCreate(postSeedData)

module.exports = seedingPost;