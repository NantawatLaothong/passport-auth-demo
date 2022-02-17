const express = require('express');
const route = express.Router();
const userControllers = require('../controllers/user_controllers.js')
const passport = require('passport');


route.get('/register', userControllers.getRegister);

route.post('/register', userControllers.postRegister);

route.get('/login', userControllers.getLogin);
// user passport middleware 1.param_strategy 2.param_options
route.post('/login', passport.authenticate('local', {/*failureFlash: true, */failureRedirect:'/users/login'}), userControllers.login);
route.get('/logout', userControllers.logout);


module.exports = route;