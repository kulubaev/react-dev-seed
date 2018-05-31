import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './webpack.config';

export default merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../src/app/index')
  ],
  output: {
    path: path.resolve(__dirname, 'src/app'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: true,
              modules: true,
              includePaths: ['src/app'],
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'src/index.html'
    })
  ]
});
