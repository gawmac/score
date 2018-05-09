const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth')

const app = express();

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
        title: title
    });
});

//About
app.get('/about', (req, res) => {
    res.render('about');
});

//Use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});