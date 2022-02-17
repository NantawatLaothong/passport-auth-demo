const Art = require('../models/art');
// middleware to check if the user is loggedin 
const isLoggedin = require('../middlewares/isLoggedIn');


exports.getIndex = async(req, res)=>{
    // need to be authenticate to get this route
    // if(!req.isAuthenticated()){
    //     // req.flash('err, 'you must be loggin')
    //     return res.redirect('/users/login');
    // }
    res.render('arts/index')
}

exports.getMakePost = async(req, res)=>{
    res.send('making a new post');
}