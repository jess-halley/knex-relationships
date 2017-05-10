// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = {name:'Ambitious Aardvark', starSign:'cancer'}
  return db.getUser(99901, t.context.connection)
    .then(function (result) {
      var actual = {name:result.name,starSign:result.starSign}
      t.is(expected.name, actual.name)
      t.is(expected.starSign, actual.starSign)
    })
})
