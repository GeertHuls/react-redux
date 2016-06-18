// This file configures a web server for testing the production build
// on your local machine.

import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) { //serve up index.html for all requests
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
