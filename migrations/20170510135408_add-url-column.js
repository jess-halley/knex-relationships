
exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', function (table) {
    table.string('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('profiles', function (table) {
  table.dropColumn('url');
  })
};
