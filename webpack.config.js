var path = require('path')

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  entry: './index.js',

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
  },

  externals: {
    'react': reactExternal,
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },

  output: {
    library: 'ReactLazyLocales',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
