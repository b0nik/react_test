var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');
var webpack = require('webpack-stream');
gulp.task('connect', function() {
    connect.server({
        root: 'www',
        host:"192.168.14.164",
        port:8082,
        livereload: true
    });
});
gulp.task('watch', function () {
    watch('./build/**/')
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);
