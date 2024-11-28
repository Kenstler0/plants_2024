var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/flycatcher', function(req, res, next) {
  res.send("<h1>Страница Мухоловки</h1>")
});

router.get('/goldenrod', function(req, res, next) {
  res.send("<h1>Страница Золотарника</h1>")
});

router.get('/bamboo', function(req, res, next) {
  res.send("<h1>Страница Бамбука</h1>")
});
module.exports = router;
