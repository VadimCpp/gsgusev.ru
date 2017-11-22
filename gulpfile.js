var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

var PATH = {
  scripts: [
    'src/scripts/*.php'
  ],
  html: [
    'src/index.html',
    'src/admin_poselka.html',
    'src/bus_gusev_kgd.html',
    'src/bus_kgd_gusev.html',
    'src/bus_gusev_poselok.html',
    'src/bus_poselok_gusev.html',
    'src/gusev_fok.html',
    'src/karta_poselka.html',
    'src/kebab.html',
    'src/kino_lumen.html',
    'src/taxi_v_guseve.html',
    'src/taxi_v_kaliningrade.html',
    'src/perevozka_divana.html',
    'src/voda.html',
    'src/about.html',
    'src/fusion_express.html'
  ],
  css: [
    'src/css/index.css',
    'src/css/admin-poselka.css',
    'src/css/bus-gusev-kgd.css',
    'src/css/bus-kgd-gusev.css',
    'src/css/bus-gusev-poselok.css',
    'src/css/bus-poselok-gusev.css',
    'src/css/gusev-fok.css',
    'src/css/kebab.css',
    'src/css/kino-lumen.css',
    'src/css/karta-poselka.css',
    'src/css/taxi-v-guseve.css',
    'src/css/taxi-v-kaliningrade.css',
    'src/css/perevozka-divana.css',
    'src/css/voda.css',
    'src/css/about.css',
    'src/css/fusion-express.css'
  ],
  cssmin: [
    'src/css/index.min.css',
    'src/css/admin-poselka.min.css',
    'src/css/bus-gusev-kgd.min.css',
    'src/css/bus-kgd-gusev.min.css',
    'src/css/bus-gusev-poselok.min.css',
    'src/css/bus-poselok-gusev.min.css',
    'src/css/gusev-fok.min.css',
    'src/css/kebab.min.css',
    'src/css/kino-lumen.min.css',
    'src/css/karta-poselka.min.css',
    'src/css/taxi-v-guseve.min.css',
    'src/css/taxi-v-kaliningrade.min.css',
    'src/css/perevozka-divana.min.css',
    'src/css/voda.min.css',
    'src/css/about.min.css',
    'src/css/fusion-express.min.css'
  ],
  sass: [
    'src/sass/**/*.scss'
  ],
  robot: [
    'src/robots.txt'
  ],
  htaccess: [
    'src/.htaccess'
  ],
  img: [
    'src/img/nanotech.png',
    'src/img/nanotech_land.png',
    'src/img/ford_transit.jpg',
    'src/img/kebab.jpg',
    'src/img/fusion-logo.png',
    'src/img/header.png'
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
  fonts: [
    'src/fonts/fontello.eot',
    'src/fonts/fontello.svg',
    'src/fonts/fontello.ttf',
    'src/fonts/fontello.woff',
    'src/fonts/fontello.woff2'
  ]
};


var DEST = {
  sass: 'src/css',
  css: 'src/css'
};


//
// Minify compiled CSS
//
gulp.task('minify-css', ['sass'], function() {
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
      .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('watch', function() {
  gulp.watch(PATH.sass, ['sass']).on('change', browserSync.reload);
  gulp.watch(PATH.css, ['minify-css']).on('change', browserSync.reload);
  gulp.watch(PATH.html, browserSync.reload);
});


// Run everything
gulp.task('default', ['browserSync', 'sass', 'minify-css', 'watch']);


// Build for production
gulp.task('build', ['sass', 'minify-css'], function() {

  gulp.src(PATH.html)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));

  gulp.src(PATH.cssmin)
      .pipe(gulp.dest('dist/css'));

  gulp.src(PATH.favicons)
      .pipe(gulp.dest('dist'));

  gulp.src(PATH.fonts)
      .pipe(gulp.dest('dist/fonts'));

  gulp.src(PATH.img)
      .pipe(gulp.dest('dist/img'));

  gulp.src(PATH.htaccess)
      .pipe(gulp.dest('dist'));

  gulp.src(PATH.robot)
      .pipe(gulp.dest('dist'));

  gulp.src(PATH.scripts)
      .pipe(gulp.dest('dist/scripts'));      
});


// Deploy build to github pages
gulp.task('deploy', ['build'], function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});
