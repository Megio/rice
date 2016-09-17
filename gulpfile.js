'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(''));
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.sass', ['sass']);
});
