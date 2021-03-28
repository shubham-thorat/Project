const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const authroutes = require('./Routes/auth-routes')
const profileroutes = require('./Routes/profile-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSesssion = require('cookie-session');
const passport = require('passport')
const port = 3000;
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(cookieSesssion({
    maxAge : 24*60*60*1000,
    keys :[keys.session.cookiekey]
}))

//initialize cookie with passport
app.use(passport.initialize());
app.use(passport.session())


//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected to mongodb')
})

//set up auth routes
app.use('/auth',authroutes);
app.use('/profile',profileroutes);

//routes
app.get('/',(req,res)=>{
    res.render('home',{
        user : req.user
    });
})

app.listen(port,()=>{
    console.log(`Connected to http://locahost:${port}`);
})

// cmder