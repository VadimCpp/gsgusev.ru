var gulp = require('gulp');
var del = require('del');

var paths = {
  index: ['src/index.html']
};


gulp.task('clean-index', function() {
  return del('web/index.html');
});


gulp.task('index', ['clean-index'], function() {
  return gulp.src(paths.index)
    .pipe(gulp.dest('web'));
});


gulp.task('watch', function() {
  gulp.watch(paths.index, ['index']);
});


gulp.task('default', ['watch', 'index']);