// require
var express = require('express');
var router = express.Router();

// Routes
router.get('/new', (req, res) => {
    // get a student form page
})

router.post('/', (req, res) => {
    // capture data
})

router.get('/', (req, res) => {
    res.render("students", { list: [ "ankit", "suraj", "prashant", "ravi" ]});
})

router.get('/:id', (req, res) => {
    res.render("studentDetail", { student: { name: "rahul", email: "rahul@altcampus.io"} })
})

module.exports = router;