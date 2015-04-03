var gulp = require('gulp');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var notifier = require('node-notifier');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sequence = require('run-sequence');
var util = require('gulp-util');
var clean = require('gulp-clean');
var neat = require('node-neat').includePaths;
var historyApiFallback = require('connect-history-api-fallback');


var ROOT = __dirname + '/public'

// Standard error handler
function standardHandler(err) {
  // Notification
  notifier.notify({
  message: 'Error: ' + err.message
  });
  // Log to console
  util.log(util.colors.red('Error'), err.message);
}

function sassErrorHandler(err) {
  standardHandler({
  message: err
  });
}

// Handler for browserify
function browserifyHandler(err) {
  standardHandler(err);
  this.end();
}

gulp.task('clean', function() {
  return gulp.src('public/', {
    read: false
  })
    .pipe(clean({
    force: true
  }));
});

gulp.task('styles', function() {
  var production = util.env.type === 'production';

  gulp.src('app/assets/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
    onError: sassErrorHandler,
    includePaths: ['styles'].concat(neat)
  }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/styles/'))
    .pipe(gulpif(!production, connect.reload()));
});

gulp.task('scripts', function() {
  var production = util.env.type === 'production';

  gulp.src(['app/app.js'])
    .pipe(browserify({
    debug: !production,
    transform: ['reactify', 'react-jade']
  }))
    .on('error', browserifyHandler)
    .pipe(gulpif(production, uglify())) // only minify if production
  .pipe(gulp.dest('public/js/'))
    .pipe(gulpif(!production, connect.reload()));
});

gulp.task('vendor', function() {
  gulp.src(['app/vendor/**/*.js', 'app/vendor/**/*.json'])
    .pipe(gulp.dest('public/js/vendor/'));
});

gulp.task('images', function() {
  gulp.src(['app/assets/img/**/*.png', 'app/assets/img/**/*.jpg', 'app/assets/img/**/*.gif', 'app/assets/img/**/*.svg'])
    .pipe(imagemin())
    .pipe(gulp.dest('public/img/'));
});

gulp.task('copy', function() {
  var production = util.env.type === 'production';

  gulp.src(['app/*.html', 'app/*.appcache', 'app/favicon.ico', 'app/robots.txt', 'app/.htaccess'])
    .pipe(gulp.dest('public/'))
    .pipe(gulpif(!production, connect.reload()));
});

gulp.task('watch', function() {
  // Create LiveReload server
  // livereload.listen();
  gulp.watch('app/*.js', ['scripts']);
  gulp.watch('app/*.jsx', ['scripts']);
  gulp.watch('app/components/**/*.js', ['scripts']);
  gulp.watch('app/components/**/*.jsx', ['scripts']);
  gulp.watch('app/components/**/*.jade', ['scripts']);
  gulp.watch('app/assets/styles/**/*.scss', ['styles']);
  gulp.watch('app/assets/img/**/*', ['images']);
  gulp.watch('app/assets/img/*', ['images']);
  gulp.watch('app/assets/img/**/*', ['vendor']);
  gulp.watch('app/assets/img/*', ['vendor']);
  gulp.watch('app/*.html', ['copy']);
});

gulp.task('livereload', function() {
  gulp.src(['public/styles/*.css', 'public/js/*.js', 'public/img/*', 'public/index.html'])
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8000,
    root: ['public'],
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

gulp.task('dev', ['styles', 'scripts', 'images', 'vendor']);

gulp.task('build', function(done) {
  sequence('clean', 'dev', 'copy', done);
});

gulp.task('default', function(done) {
  sequence('clean', 'dev', 'copy', 'webserver', 'watch', done);
});