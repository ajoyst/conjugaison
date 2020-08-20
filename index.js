const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getConjugations = (request, response) => {
  var query = 'SELECT * FROM conjugations';
  var type = request.query.type;
  console.log(type);
  var tense = request.query.tense;
  console.log(tense);
  var mood = request.query.mood;
  console.log(mood);
  //case where neither is all
  if (type !== 'all' && tense !== 'all'){
    query = query + ` WHERE type = '${type}' AND tense = '${tense}' AND mood = '${mood}'`
  }
  //case where type is all and tense is not
  else if (type === 'all' && tense !== 'all'){
    query = query + ` WHERE tense = '${tense}' AND mood = '${mood}'`
  }
  //case where type is not all and tense is all
  else if (type !== 'all' && tense === 'all'){
    query = query + ` WHERE type = '${type}'`
  }

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}
const getIrregularConjugations = (request, response) => {
  pool.query('SELECT * FROM conjugations WHERE type = "irregular"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRegularConjugations = (request, response) => {
  pool.query('SELECT * FROM conjugations WHERE type = "regular - ER" OR type = "regular - RE", OR "regular - IR"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var path = require('path');

// viewed at http://localhost:8080
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {});
});
app.get('/review', function(req, res) {
  res.render('review', {});
});
app.get('/quiz', function(req, res) {
    res.render('quiz', {});
});
app.get('/overview', function(req, res) {
    res.render('overview', {});
});
app.get('/irregular', function(req, res) {
    res.render('irregular', {});
});

app
  .route('/conjugations')
  // GET endpoint
  .get(getConjugations)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
