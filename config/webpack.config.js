import path from 'path';

export default {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {},
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [/node_modules/]
      },

      {
        use: 'url-loader?limit=10000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: [/node_modules/]
      }
    ]
  }
};
