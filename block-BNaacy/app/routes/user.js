// requisitions
var express = require('express');
var router = express.Router();
var User = require('../models/user')

// actual routes

router.get('/new', (req, res) => {
    res.render('userForm');
})

router.post('/', (req, res) => {
    // capture data
    console.log(req.body);
    // send to database
    User.create(req.body, (err, createdUser) => {
        if(err) {
            res.redirect('addForm');
        } else {
            res.redirect('/');
        }
    })
})

// exports
module.exports = router;