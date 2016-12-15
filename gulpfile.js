var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  index: ['src/index.html'],
  sass: ['src/sass/**/*.scss']
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


gulp.task('watch', function() {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.sass, ['sass']);
});


gulp.task('default', ['index', 'sass', 'watch']);
