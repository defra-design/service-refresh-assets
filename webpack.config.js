const path = require('path')
const env = process.env.NODE_ENV
// const inDev = env === 'dev' || env === 'development'
const inDev = true

module.exports = (env, argv) => ({
  mode: !inDev ? 'production' : 'development',
  devtool: !inDev ? false : 'source-map',
  entry: {
    'station-model': './app/assets/javascripts/models/station',
    'rainfall-model': './app/assets/javascripts/models/rainfall',
    core: './app/src/js/core',
    'river-and-sea-levels': './app/src/js/pages/river-and-sea-levels',
    station: './app/src/js/pages/station',
    rainfall: './app/src/js/pages/rainfall',
    national: './app/src/js/pages/national'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        // Default exclude removes all node_modules but d3 is now distributed es6 so include d3 (& our own src) in transpile
        include: mPath => mPath.indexOf('server/src') > -1 || mPath.indexOf('node_modules/d3') > -1,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 2
                }
              ]
            ]
          }
        }
      }
    ]
  },
  target: ['web', 'es5']
})
