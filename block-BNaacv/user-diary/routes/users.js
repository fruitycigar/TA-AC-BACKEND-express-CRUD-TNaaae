// requisitions
var express = require('express');
var router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render("users", { users: ["Poppy", "Pell", "Garuda"] });
})


router.get('/new', (req, res) => {
    res.render("userForm.ejs");    
})

router.get('/:id', (req, res) => {
    res.render("singleUser.ejs", { user: { name: 'Tom', email: 'tom@yahoo.com' } });
})
// export
module.exports = router;