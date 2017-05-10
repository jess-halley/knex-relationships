
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
  .join('profiles', 'users.id','=','profiles.user_id')
  .where('users.id', id)
  .select('*', 'users.id as user_id', 'profiles.id as profile_id')
  .first()
}
