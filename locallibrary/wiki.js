// wiki.js
const   express = require("express"),
        router = express.Router();
        
// home page route
router.get('/', (req, res) => {
    res.send("wiki home page");
});

// about page route
router.get('/about', (req, res) => {
    res.send('about this wiki');
});

// export module
module.exports = router;