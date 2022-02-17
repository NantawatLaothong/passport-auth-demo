require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const morgan = require('morgan');
const port = process.env.PORT | 5000;
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const { serializeUser } = require('passport');
const flash = require('express-flash')
// const ejsMate = require('ejs-mate');

// routes
const userRoutes = require('./routes/users');
const artRoutes = require('./routes/arts');
async function connect (){
    mongoose.connect(process.env.mongoURL);
}
connect().then(res=>console.log('DB connected'))
    .catch(err=>console.log(err));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan('tiny'));
app.use(session({secret: 'notagoodsecret' }))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// authentication session has to be beofre these 
app.use(passport.initialize());
app.use(passport.session());
// use the User.authenticate method
passport.use(new LocalStrategy(User.authenticate()));

// serializeUser is how to store user in session
passport.serializeUser(User.serializeUser())
// how to take user out of session
passport.deserializeUser(User.deserializeUser())

app.get('/makeUser', async(req, res)=>{
    const user = new User({
        email: 'elaothong@gmail.com',
        username: 'toru1038',
    })
    // to create a password, we use a method on the Model called register, it takes an instance of the User type and a password
    const newUser = await User.register(user, 'password');
    res.send(newUser);
})

app.get('/', async(req, res)=>{
    res.send('hi')
})

app.use('/users', userRoutes);
app.use('/arts', artRoutes);

app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`);
})