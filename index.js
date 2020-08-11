const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getConjugations = (request, response) => {
  pool.query('SELECT * FROM conjugations', (error, results) => {
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

app
  .route('/conjugations')
  // GET endpoint
  .get(getConjugations)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
