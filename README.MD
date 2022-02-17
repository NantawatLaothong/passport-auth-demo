# authentication using passport library
    npm i passport passport-local passport-local-mongoose express-session express-flash
    in Model we use passportlocal plugin 
        the plugin will add username and password to the Schema 

# multiple strategies for authentication 
    


# to check if the user is logged in
    it will check the user cookie_id
    if(!req.isAuthenticated()){
        // req.flash('err, 'you must be loggin')
        return res.redirect('/users/login');
    }
    if the user is not authenticated, send them back to /users/login


# to log user out
    req.logout() method is created by passport to clear the session
    req.logout

# Some house keeping middlewares needed in app.js
    const session = require('express-session');
    const passport = require('passport');
    const LocalStrategy = require('passport-local');
    const flash = require('express-flash')
    app.use(session({secret: 'notagoodsecret' }))
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())
