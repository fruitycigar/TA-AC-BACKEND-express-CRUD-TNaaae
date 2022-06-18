// requisitions
var express = require('express');
var router = express.Router();

// the actual index route
router.get('/', (req, res) => {
    // render the welcome user page
    res.render('index');    // update soon for appropriate user url
})

// export
module.exports = router;