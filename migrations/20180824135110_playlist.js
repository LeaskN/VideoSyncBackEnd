
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist', (table) =>{
    table.increments();
    table.text('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('playlist');
};
