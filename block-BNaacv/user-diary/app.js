// requisitions
var express = require('express');
var path = require('path');

// app instantiation
var app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// view engine set-up
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

// routes
app.use('/users', require('./routes/users'));

// error handler
app.use((req, res, next) => {
    res.status(404).send(`Page Not Found.`);
}) 


// listener
app.listen(3000, () => {
    console.log('Server 3000 is now live.');
})