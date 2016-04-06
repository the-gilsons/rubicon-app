var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'client/public/dist'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module:{
    loaders:[{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
