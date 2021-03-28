const router = require('express').Router();

const authCheck = (req,res,next)=>{
    if(!req.user){
        //if user is not logged in =>(!req.user) true
        res.redirect('/auth/login')
    }
    else{
        //if user is looged in goto the next
        next();
    }
}
router.get('/',authCheck,(req,res)=>{
    // res.send('You are login in ,this is your profile page - '+ req.user.username);
    // console.log('Router username ' + obj.username)
    // console.log(req.user)
    const Name =req.user.username; 
    const url = req.user.image;
    res.render('profile',{
        user : Name,
        image : url
    });
})

module.exports = router;