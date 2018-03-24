let gulp = require('gulp');
let webpackconfigBuild = require('./webpack.config.js');
let webpackconfigDev = require('./webpack.config.dev.js');
let webpack = require('webpack-stream');
let sass = require('gulp-sass');
let router = './www/';
var minify = require('gulp-minify');

//  1.4 Webpack webpack:dev
// --------------------------------------------------

gulp.task('webpack:dev', () => {
    return webpack(webpackconfigDev)
        .pipe(gulp.dest(router + 'assets/js/'));
});

gulp.task('webpack:build', () => {
    return webpack(webpackconfigBuild)
        .pipe(gulp.dest(router + 'assets/js/'));
});

//  1.5. Sass Compressed
// --------------------------------------------------
gulp.task('sass-front', () => {
    return gulp.src('./front/scss/front.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(router + 'assets/css/'));
});

//  1.6 Watcher
// --------------------------------------------------

gulp.task('watcher', ['sass-front', 'webpack:dev'], () => {
    gulp.watch(['./front/**/*.vue', './front/pages/**/*.vue', './front/**/*.js'], ['webpack:dev']);
    gulp.watch(['./front/scss/**/*.scss', './front/pages/**/*.scss', './front/pages/*.scss'], ['sass-front']);
});