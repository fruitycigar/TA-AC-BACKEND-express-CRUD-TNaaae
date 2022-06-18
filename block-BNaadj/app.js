// require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

// app instantiation
var app = express();


// middleware section

// setup view engine
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views')); // check for error here

// static directory
app.use(express.static(path.join(__dirname, "public")));

// capturing form data
app.use(express.urlencoded({ extended: false }));

// routing middlewares
app.use('/', indexRouter);
app.use('/users', userRouter);

// database connection
mongoose.connect("mongodb://localhost/userlist", 
{ useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log( err ? `Connection failed` : `Connection secured.`);
})

// error handlers

// 404 error handler
app.use((req, res, next) => {
    res.send(`Page not found, you two-timing idiot.`); // Update to a 404 error page in the future.
})

// Custom error handler
app.use((err, req, res, next) => {
    res.send(err); // update to an appropriate error page in the views section.
})

// listener
app.listen(3000, () => {
    console.log(`Server is listening in on Port 3000. What a pervert.`);
})