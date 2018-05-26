import path from 'path';

export default {

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    alias: {

    },
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: ['(node_modules|dist)'],
      },

      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        exclude: ['(node_modules|dist)'],

        use: ['style-loader', 'css-loader'],
      },

      {
        use: 'url-loader?limit=10000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
