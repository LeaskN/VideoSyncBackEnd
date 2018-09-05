const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config(); //loads all variables in env file to our environment

const app = express();

const playlists = require("./api/playlists")
const videos = require("./api/videos")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/api/v1/playlists', playlists);
app.use('/api/v1/videos', videos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

console.log('howdy from port 5000!');

module.exports = app;
