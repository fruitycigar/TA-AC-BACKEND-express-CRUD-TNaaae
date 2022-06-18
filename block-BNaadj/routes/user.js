// requisitions
var express = require('express');
var router = express.Router();
var User = require('../models/user');

// the actual index route

// The main agent list page
router.get('/', (req, res) => {
    // fetch users from the database and insert into user list page
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('agentList', { users : users });
    })
})

// Form for commissioning a new agent
router.get('/new', (req, res) => {
    res.render('addAgent');
})

// Post route for capturing data from form, saving it to database and displaying it onto the main page
router.post('/', (req, res) => {
    // capture data
    // save to database
    User.create(req.body, (err, createdUser) => {
        if(err) return next(err);
        res.redirect('/users');
    })
})

// Specific agent details page
router.get('/:id', (req, res) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('agentDetails', { user : user });
    })
})

// for user edit form
router.get('/:id/edit', (req, res) => {
    // capture user id
    var id = req.params.id;
    // render the edit form
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editAgentForm', { user : user });
    })
})

// post route for the edit form
router.post('/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if(err) return next(err);
        res.redirect("/users/" + id);
    })
})

// deleting a book
router.get('/:id/delete', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, book) => {
        if(err) return next(err);
        res.redirect("/users");
    })
})

// export
module.exports = router;