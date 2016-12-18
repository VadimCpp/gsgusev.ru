var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  index: ['src/index.html'],
  sass: ['src/sass/**/*.scss'],
  robot: ['src/robots.txt'],
  favicons: [
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'apple-touch-icon.png',
    'browserconfig.xml',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'manifest.json',
    'mstile-150x150.png',
    'safari-pinned-tab.svg'
  ]
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


gulp.task('sass', ['clean-sass'], function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('web/css'));
});


gulp.task('clean-robot', function() {
  return del('web/robots.txt');
});


gulp.task('robot', ['clean-robot'], function() {
  return gulp.src(paths.robot)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-favicons', function() {
  var dist = paths.favicons.map(function(path){
    return 'web/' + path;
  });

  return del(dist);
});


gulp.task('favicons', ['clean-favicons'], function() {

  var sources = paths.favicons.map(function(path){
    return 'src/favicons/' + path;
  });

  return gulp.src(sources)
    .pipe(gulp.dest('web'));
});


gulp.task('watch', function() {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.robot, ['robot']);
});


gulp.task('default', ['favicons', 'index', 'sass', 'robot', 'watch']);
