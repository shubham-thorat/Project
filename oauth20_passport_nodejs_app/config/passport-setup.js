const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')

passport.serializeUser((User,done)=>{
    done(null,User.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
})

passport.use(
    new GoogleStrategy({
        //options for stategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //check if user already exits in our database
        console.log(profile)
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log('User is ',currentUser);
                done(null,currentUser);
            }
            else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    image : profile.photos[0].value
                }).save().then((newUser) => {
                    console.log("New User Created  " + newUser);
                    done(null,newUser);
                })
            }
        })
    })
);