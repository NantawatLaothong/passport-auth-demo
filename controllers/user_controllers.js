const User = require('../models/user');
const password = require('passport');


exports.getRegister = async(req, res)=>{
    res.render('users/register')
    // res.send('hi from users');
}

exports.postRegister = async(req, res)=>{
    try {
    const {email, username, password} = req.body;
    const user = new User({
        email,
        username
    });
    const registeredUser = await User.register(user, password);
    } catch(e) {
        // if something wrong redirect the user
        // normally we would use flash
        res.redirect('/users')
    }
    console.log(registeredUser);
    res.send(registeredUser);
}

exports.getLogin = async(req, res)=>{
    res.render('users/login');
}

exports.login = async(req, res)=>{
    // next();
    res.redirect('/arts');
}

exports.logout = async(req, res)=>{
    // clear session for user and log they out
    req.logout();
    res.redirect('/users/login');
}

/*
users = [
    {
        email: tim1234@gmail.com,
        username: 'helloabc',
        password: 'password',
    },
]
*/