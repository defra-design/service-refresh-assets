/*
  webpack.js
  ===========
  Runs webpack and copy compiled javascripts to public dist folder
*/

const gulp = require('gulp')
const named = require('vinyl-named')
const config = require('./config.json')
const webpack = require('webpack-stream')
const webpackConfig = require('../webpack.config.js')

gulp.task('webpack', function (done) {
  gulp.src([
    config.paths.src + 'js/core.js',
    config.paths.src + 'js/pages/station.js',
    config.paths.src + 'js/pages/river-and-sea-levels.js'
  ])
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.paths.dist + 'js/'))
  done()
})
