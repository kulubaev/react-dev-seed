import express from 'express';
import path from 'path';
import open from 'open';


const port = 3000;
const app = express();

app.get('/', function(req, resp) {
  resp.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (err) => {
  if(err) {

/* eslint-disable no-console */
    console.error(err);

/* eslint-enable no-console */
  } else {
    open('http://localhost:' + port);
  }
});
