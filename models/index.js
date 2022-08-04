//join models 

const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comment')


 //ale can have many posts 
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
 Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  //post hasMany comments
  //Ale can make many comments
  Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
  });

 //Ale can have many comments
 User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });

//comments can be made by anyone on anypost
Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });


//Ale's posts can have many comments 
//user has bunch of posts
//posts has many users
//User can make many comments 
//post belongs to ale cuz she can make a post
//ale can have many posts 
//ale can make many comments
//any comments ale made belongs to ale 

  
  module.exports = { User, Post, Comment };
