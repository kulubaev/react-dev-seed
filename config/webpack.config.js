import path from 'path';
import CssExtract from 'mini-css-extract-plugin';

export default {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {},
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        use: 'url-loader?limit=10000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: [/node_modules/]
      }
    ]
  }
};
