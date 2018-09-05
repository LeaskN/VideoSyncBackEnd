
exports.up = function(knex, Promise) {
  return knex.schema.createTable('video', (table) =>{
    table.increments();
    table.text('video_title').notNullable();
    table.text('video_url').notNullable();
    table.text('video_thumbnail').notNullable();
    table.text('duration').notNullable();
    table.text('youtubeId').notNullable();
    table.integer('playlistId').notNullable().references('id').inTable('playlist')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('video');
};
