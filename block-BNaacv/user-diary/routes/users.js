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

router.post('/', (req, res) => {
    res.send(req.body);
})

router.get('/:id', (req, res) => {
    res.render("singleUser.ejs", { user: { name: 'Tom', email: 'tom@yahoo.com' } });
})

router.get(':id/edit', (req, res) => {
    res.render("updateForm.ejs");
})

router.put(':/id', (req, res) => {
    res.send(req.body);
})

// export
module.exports = router;