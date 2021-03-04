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
    config.paths.webpackSrc + 'core.js',
    config.paths.webpackSrc + 'pages/station.js'
  ])
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.paths.webpackDist))
  done()
})
