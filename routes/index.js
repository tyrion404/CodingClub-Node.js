var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { path: '/' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { path: '/about' });
});

router.get('/events', function(req, res, next) {
  res.render('pages/events', { path: '/events' });
});

router.get('/blog', function(req, res, next) {
  res.render('pages/blog', { path: '/blog' });
});

router.get('/gallery', function(req, res, next) {
  res.render('pages/gallery', { path: '/gallery' });
});

router.get('/team', function(req, res, next) {
  res.render('pages/team', { path: '/team' });
});

router.get('/contactus', function(req, res, next) {
  res.render('pages/contactus', { path: '/contactus' });
});

module.exports = router;
