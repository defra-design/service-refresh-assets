/*
  webpack.js
  ===========
  Runs webpack and copy compiled javascripts to public dist folder
*/

const gulp = require('gulp')
const path = require('path')
const named = require('vinyl-named')
const config = require('./config.json')
const webpackStream = require('webpack-stream')

gulp.task('webpack', function (done) {
  gulp.src([
    config.paths.src + 'js/core.js',
    config.paths.src + 'js/pages/station.js',
    config.paths.src + 'js/pages/river-and-sea-levels.js'
  ])
    .pipe(named())
    .pipe(webpackStream({
      mode: 'production', // development, production
      devtool: 'none', // source-map, none
      module: {
        rules: [
          {
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(config.paths.dist + 'js/'))
  done()
})
