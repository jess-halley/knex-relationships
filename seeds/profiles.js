
exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901,id: 1, starSign: 'cancer', url: 'http://www.stuff.co.nz/world/americas/9241292/fbi-director-james-comey-fired-by-donald-trump'}),
        knex('profiles').insert({user_id: 99902,id: 2, starSign: 'cancer', url: 'http://www.stuff.co.nz/world/americas/9241292/fbi-director-james-comey-fired-by-donald-trump'}),
        knex('profiles').insert({user_id: 99903,id: 3, starSign: 'cancer', url: 'http://www.stuff.co.nz/world/americas/9241292/fbi-director-james-comey-fired-by-donald-trump'}),
        knex('profiles').insert({user_id: 99904,id: 4, starSign: 'cancer', url: 'http://www.stuff.co.nz/world/americas/9241292/fbi-director-james-comey-fired-by-donald-trump'}),
        knex('profiles').insert({user_id: 99905,id: 5, starSign: 'cancer', url: 'http://www.stuff.co.nz/world/americas/9241292/fbi-director-james-comey-fired-by-donald-trump'})

      ]);
    });
  };
