
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 'starSign'},
        {id: 2, user_id: 'starSign'},
        {id: 3, user_id: 'starSign'}
      ]);
    });
};
