var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/flycatcher', function(req, res, next) {
  res.render('plant', {
  title: "Венерина Мухоловка",
  picture: "images/flycatcher.jpg",
  desc:"Вене́рина мухоло́вка — вид хищных растений из монотипного рода Дионея семейства Росянковые"
  });
});
router.get('/bamboo', function(req, res, next) {
  res.render('plant', {
  title: "Бамбук",
  picture: "images/bamboo.jpg",
  desc:"Бамбу́к — род многолетних вечнозелёных растений семейства Злаки, из подсемейства Бамбуковые."
  });
});
router.get('/goldenrod', function(req, res, next) {
  res.render('plant', {
  title: "Золотарник",
  picture: "images/goldenrod.jpg",
  desc:"Золота́рник обыкнове́нный — многолетнее травянистое растение; вид рода Золотарник семейства Астровые."
  });
});
module.exports = router;
