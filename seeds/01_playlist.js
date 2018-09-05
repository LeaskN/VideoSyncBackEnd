const playlists = require('../views/playlists')
exports.seed = async function(knex) {
  await knex.raw('ALTER SEQUENCE playlist_id_seq RESTART with 7');
  await knex('playlist').del();
  return knex('playlist').insert(playlists);
};