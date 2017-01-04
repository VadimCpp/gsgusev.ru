var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var paths = {
  html: ['*.html'],
  css: ['src/css/*.css'],
  sass: ['src/sass/**/*.scss'],
  robot: ['src/robots.txt'],
  img: [
    'nanotech.jpg',
    'ford_transit.jpg'
  ],
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
  ],
  'fonts': [
      'FontAwesome.otf',
      'fontawesome-webfont.ttf',
      'fontawesome-webfont.woff',
      'fontawesome-webfont.woff2'
  ]
};


gulp.task('clean-html', function() {
  var dist = paths.html.map(function(path){
    return 'web/' + path;
  });

  return del(dist);

});


gulp.task('html', ['clean-html'], function() {
  var sources = paths.html.map(function(path){
    return 'src/' + path;
  });

  return gulp.src(sources)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-css', function() {
  return del('web/css');
});


gulp.task('css', ['clean-css'], function() {
  return gulp.src(paths.css)
    .pipe(gulp.dest('web/css'));
});


gulp.task('clean-sass', function() {
  return del('src/' + 'css/style.css');
});


gulp.task('sass', ['clean-sass'], function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
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


gulp.task('clean-fonts', function() {
  var dist = paths.fonts.map(function(path){
    return 'web/fonts/' + path;
  });

  return del(dist);
});


gulp.task('fonts', ['clean-fonts'], function() {

  var sources = paths.fonts.map(function(path){
    return 'src/fonts/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/fonts/'));
});


gulp.task('clean-img', function() {
  var dist = paths.img.map(function(path){
    return 'web/img/' + path;
  });

  return del(dist);
});


gulp.task('img', ['clean-img'], function() {

  var sources = paths.img.map(function(path){
    return 'src/img/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/img/'));
});


gulp.task('watch', function() {
  var sources = paths.html.map(function(path){
    return 'src/' + path;
  });
  gulp.watch(paths.robot, ['robot']);
  gulp.watch(sources, ['html', browserSync.reload]);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.css, ['css']);
});


// Run everything
gulp.task('default', ['browserSync', 'img', 'fonts', 'favicons', 'html', 'sass', 'robot', 'watch']);


// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './web'
    }
  })
});

