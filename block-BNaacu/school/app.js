// require
var express = require('express');
var path = require('path');

// app instantiation
var app = express();

// view-engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.use('/students', require('./routes/students'));

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is now live.`);
})