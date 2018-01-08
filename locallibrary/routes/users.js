var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// new route
router.get('/cool', (req, res) => {
    res.render('cool', { name: 'foobar'} );
});

module.exports = router;
