var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var PATH = {
  html: [
    'src/index.html',
    'src/admin_poselka.html',
    'src/bus_gusev_kgd.html',
    'src/bus_kgd_gusev.html',
    'src/gusev_fok.html',
    'src/karta_poselka.html',
    'src/kino_lumen.html',
    'src/taxi_v_guseve.html',
    'src/taxi_v_kaliningrade.html',
    'src/perevozka_divana.html'
  ],
  css: [
    'src/css/uikit.almost-flat.css',
    'src/css/index.css',
    'src/css/admin-poselka.css',
    'src/css/bus-gusev-kgd.css',
    'src/css/bus-kgd-gusev.css',
    'src/css/gusev-fok.css',
    'src/css/kino-lumen.css',
    'src/css/karta-poselka.css',
    'src/css/taxi-v-guseve.css',
    'src/css/taxi-v-kaliningrade.css',
    'src/css/perevozka-divana.css'
  ],
  cssmin: [
    'src/css/uikit.almost-flat.min.css',
    'src/css/index.min.css',
    'src/css/admin-poselka.min.css',
    'src/css/bus-gusev-kgd.min.css',
    'src/css/bus-kgd-gusev.min.css',
    'src/css/gusev-fok.min.css',
    'src/css/kino-lumen.min.css',
    'src/css/karta-poselka.min.css',
    'src/css/taxi-v-guseve.min.css',
    'src/css/taxi-v-kaliningrade.min.css',
    'src/css/perevozka-divana.min.css'
  ],
  sass: [
    'src/sass/**/*.scss'
  ],
  robot: ['src/robots.txt'],
  htaccess: ['src/.htaccess'],
  img: [
    'src/img/nanotech.jpg',
    'src/img/ford_transit.jpg'
  ],
  favicons: [
    'src/android-chrome-192x192.png',
    'src/android-chrome-512x512.png',
    'src/apple-touch-icon.png',
    'src/browserconfig.xml',
    'src/favicon.ico',
    'src/favicon-16x16.png',
    'src/favicon-32x32.png',
    'src/manifest.json',
    'src/mstile-150x150.png',
    'src/safari-pinned-tab.svg'
  ],
  'fonts': [
      'src/fonts/FontAwesome.otf',
      'src/fonts/fontawesome-webfont.ttf',
      'src/fonts/fontawesome-webfont.woff',
      'src/fonts/fontawesome-webfont.woff2',
      'src/fonts/lobster-cyrillic.woff2',
      'src/fonts/lobster-latin.woff2',
      'src/fonts/lobster-latin-ext.woff2'
  ]
};


var DEST = {
  sass: 'src/css',
  css: 'src/css'
};


//
// Minify compiled CSS
//
gulp.task('minify-css', function() {
  return gulp.src(PATH.css)
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(DEST.css));
});


//
// Compile SASS to CSS
//
gulp.task('sass', function() {
  return gulp.src(PATH.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DEST.sass));
});


//
// Configure the browserSync task
//
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
});


gulp.task('fonts', ['clean-fonts'], function() {

  var sources = PATH.fonts.map(function(path){
    return 'src/fonts/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/fonts/'));
});


gulp.task('clean-img', function() {
  var dist = PATH.img.map(function(path){
    return 'web/img/' + path;
  });

  return del(dist);
});


gulp.task('img', ['clean-img'], function() {

  var sources = PATH.img.map(function(path){
    return 'src/img/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/img/'));
});


gulp.task('watch', function() {
  gulp.watch(PATH.sass, ['sass']);
  gulp.watch(PATH.css, ['minify-css']);
  gulp.watch(PATH.html, browserSync.reload);
});


// Run everything
gulp.task('default', ['browserSync', 'sass', 'minify-css', 'watch']);


// Build for production
gulp.task('build', function() {

  gulp.src(PATH.html)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('web'));

  gulp.src(PATH.cssmin)
      .pipe(gulp.dest('web/css'));

  gulp.src(PATH.favicons)
      .pipe(gulp.dest('web'));

  gulp.src(PATH.fonts)
      .pipe(gulp.dest('web/fonts'));

  gulp.src(PATH.img)
      .pipe(gulp.dest('web/img'));

  gulp.src(PATH.htaccess)
      .pipe(gulp.dest('web'));
});

