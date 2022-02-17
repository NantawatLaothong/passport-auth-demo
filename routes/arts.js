const express = require('express');
const route = express.Router();
const artControllers = require('../controllers/art_controllers')
// middleware to check if the user is loggedin 
const isLoggedin = require('../middlewares/isLoggedIn');



route.get('/', isLoggedin, artControllers.getIndex);
route.get('/make', isLoggedin, artControllers.getMakePost);


module.exports = route;