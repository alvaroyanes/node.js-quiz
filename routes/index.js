var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', errors:[]});
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);

//definición de rutas de /quizes
router.get('/quizes',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',         quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);
router.get('/quizes/nuevo',                 quizController.new);
router.post('/quizes/create',               quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',    quizController.edit);
router.put('/quizes/:quizId(\\d+)',         quizController.update);
router.delete('/quizes/:quizId(\\d+)',      quizController.destroy);
//definición de ruta de author
router.get('/author',                       quizController.author);

module.exports = router;