import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import htmlWebpackPlugin from 'html-webpack-plugin';

import config from './webpack.config';

export default merge(
  config,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:[
      path.resolve(__dirname, '../app/index')
    ],
    output: {
      path: path.resolve(__dirname, 'app'),
      publicPath: '/',
      filename: 'bundle.js',
    },
  }
)
