const knex = require('./knex');

module.exports = {
  getAllPlaylists() {
    return knex('playlist');
  },
  getPlaylist(id) {
    return knex('playlist').where({ id }).first();
  },
  getVideosByPlaylist(playlistId){
    return knex('video').where({ playlistId });
  },
  create(video){
    return knex('video').insert(video, '*');
  },
  createPlaylist(playlist){
    return knex('playlist').insert( playlist, '*').then((results) => {
      return results[0];
    });
  }
};