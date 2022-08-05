 const { Comment } = require('../models');

const commentSeedData = 
[
    {
        user_id: 2,
        content: "Yes! I've drank tea with honey and lemon for a couple of years and it cured my depression",
        post_id: 1
        
    },
    {
        user_id: 3,
        content: "I would love to go to space one day.",
        post_id: 2
    },
    {
        user_id: 2,
        content: "Mid post bro!",
        post_id: 3
    }
]

const seedingComment = () => Comment.bulkCreate(commentSeedData)

module.exports = seedingComment


