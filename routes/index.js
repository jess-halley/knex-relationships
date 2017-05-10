var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/profile/:id', function (req, res){
  var connection = req.app.get('connection')
  var id = req.params.id
  db.getUser(id, connection)
  .then((results) => {
    console.log({results});
    res.render('profile.hbs', results)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
