const path = require('path')
const inDev = true

module.exports = (env, argv) => ({
  mode: !inDev ? 'production' : 'development',
  devtool: !inDev ? 'none' : 'source-map',
  entry: {
    core: './app/src/js/core',
    station: './app/src/js/pages/station',
    'river-and-sea-levels': './app/src/js/pages/river-and-sea-levels'
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts/dist')
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
})
