var path = require('path')

module.exports = {
  entry: './index.js',

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'react-lazy-locales',
    libraryTarget: 'umd'
  },

  externals: {
    'react': 'react'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
