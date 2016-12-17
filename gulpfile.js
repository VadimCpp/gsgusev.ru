var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  index: ['src/index.html'],
  sass: ['src/sass/**/*.scss'],
  robot: ['src/robots.txt']
};


gulp.task('clean-index', function() {
  return del('web/index.html');
});


gulp.task('index', ['clean-index'], function() {
  return gulp.src(paths.index)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-sass', function() {
  return del('web/css/style.css');
});


gulp.task('sass', ['clean-sass'], function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('web/css'));
});


gulp.task('clean-robot', function() {
  return del('web/robots.txt');
});


gulp.task('robot', ['clean-robot'], function () {
  return gulp.src(paths.robot)
    .pipe(gulp.dest('web'));
});


gulp.task('watch', function() {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.robot, ['robot']);
});


gulp.task('default', ['index', 'sass', 'robot', 'watch']);
