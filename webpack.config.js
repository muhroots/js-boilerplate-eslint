module.exports = {
  entry: './src/javascript/index.js',
  output: {
    filename: './javascript/bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
};
