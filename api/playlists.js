const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res, next) => {
  queries
    .getAllPlaylists()
    .then(playlists => {
      res.json(playlists);
    }).catch(next);
});
router.post('/', (req, res, next) => {
  queries
    .createPlaylist()
    .then(res.json(req.body.title)
    .catch(next));
});
router.get('/:id', (req, res, next) => {
  queries
    .getPlaylist(req.params.id)
    .then(playlist => {
      if (playlist) {
        res.json(playlist);
      } else {
        const error = new Error('Not Found');
        res.status(404);
        next(error);
      }
    }).catch(next);
});
router.get('/:id/videos', (req, res, next) => {
  queries
    .getVideosByPlaylist(req.params.id)
    .then(videos => {
      res.json(videos);
    }).catch(next);
});
router.post('/:id/videos', (req, res, next) => {
  queries
    .create(req.body)
    .then(videos => {
      res.json(videos[0])
    })
})
router.put('/:id/videos', (req, res, next) => {
  queries
    .create(req.body)
    .then(videos => {
      res.json(videos[0])
    })
})
module.exports = router;