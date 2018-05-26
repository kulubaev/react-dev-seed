import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../config/webpack.config.dev';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, resp) => {
  resp.sendFile(path.join(__dirname, '../app/index.html'));
})

app.listen(port, (err) => {
  if(err) {

  /*eslint-disable no-console*/
    console.error(err);
  /*eslint-enable no-console*/

  } else {
    open('http://localhost:' + port);
  }
});

