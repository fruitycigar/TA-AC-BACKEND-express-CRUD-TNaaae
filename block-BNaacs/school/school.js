// requisitions
var express = require('express');
var mongoose = require('mongoose');

// database connection
mongoose.connect("mongodb://localhost/school", (err) => {
    console.log(err ? err : "Connection secured.");
})

// app instantiation
var app = express();

// middleware
app.use(express.json());

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get('/', (req, res) => {
    res.send("Back to School?!");
})

// listener
app.listen(3000, () => {
    console.log('Server 3000 is alive!');
})