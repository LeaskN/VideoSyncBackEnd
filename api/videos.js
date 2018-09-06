const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search/:term', function(req, res, next) {
  fetch(`https://www.googleapis.com/youtube/v3/search?q=${req.params.term}&maxResults=50&type=video&part=snippet&key=${process.env.YOUTUBE_API_KEY}`)
    .then((res)=> res.json())
    .then(body => {
      if(!body.items){
        return [];
      }
      const ids = body.items.map(item => item.id.videoId).join(',')
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&part=snippet,contentDetails&key=${process.env.YOUTUBE_API_KEY}`)
        .then((res)=> res.json())
        .then(body => {
          res.json(body)
        })
    })
});
router.get('/suggestion/:term', function(req, res, next) {
  fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${req.params.term}`)
    .then((res)=> res.json())
    .then(body => {
      res.json(body[1])
    })
});

module.exports = router;