const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    username : {type : 'String'},
    googleId : {type : 'String'},
    image : {type : 'String'}
});

const User= mongoose.model('user',UserSchema);
module.exports = User;