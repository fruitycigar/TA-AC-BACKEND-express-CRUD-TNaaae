// requisitions
// requisitions
var express = require('express');
var router = express.Router();
var User = require('../models/user')

// actual routes

router.get('/', (req, res) => {
    res.render('index');
})

// exports
module.exports = router;