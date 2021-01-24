const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/login', (req, res) => {
    console.log(req.query);
    res.send('Login Page');
});


router.get('/404', (req, res) => {
    res.send('404 page');
});

module.exports = router;