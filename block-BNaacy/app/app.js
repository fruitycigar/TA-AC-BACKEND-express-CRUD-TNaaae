// requisitions
var express = require('express');
var mongoose = require('mongoose');

var path = require('path');

var userRouter = require('./routes/user');
var indexRouter = require('./routes/index');

// database connection
mongoose.connect('mongodb://localhost/user-resource', 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
(err) => {
    console.log(err ? err : `Connection secured.`);
})

// app instantiation
var app = express();

// routing middleware
app.use('/users', userRouter);
app.use('/', indexRouter);

// built-in middleware
app.use(express.urlencoded({ extended: false }));

// setup view engine
app.use("view engine", "ejs");
app.use("views", path.join(__dirname, 'views'));

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is now live.`);
})