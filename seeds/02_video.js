const videos = require('../views/videos')
exports.seed = async function(knex) {
  await knex.raw('ALTER SEQUENCE video_id_seq RESTART with 12');
  await knex('video').del();
  return knex('video').insert(videos);
};