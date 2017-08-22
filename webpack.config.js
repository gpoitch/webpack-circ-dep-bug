var path = require('path')
var webpack = require('webpack')
var CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CircularDependencyPlugin()
  ]
}
