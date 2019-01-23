const router = require('express').Router();
const passport = require('passport');

// auth with google
router.get('/gooogle', passport.authenticate('google', {
  scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
  res.send('lol')
})

module.exports = router;