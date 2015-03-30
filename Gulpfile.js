var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    notifier = require('node-notifier'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    sequence = require('run-sequence'),
    util = require('gulp-util'),
    clean = require('gulp-clean')
    neat = require('node-neat').includePaths;

var ROOT = __dirname + '/build'

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
    return gulp.src('build/', {
        read: false
    })
        .pipe(clean({
        force: true
    }));
});

gulp.task('styles', function() {
    var production = util.env.type === 'production';

    gulp.src('app/styles/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
        onError: sassErrorHandler,
        includePaths: ['styles'].concat(neat)
    }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/styles/'))
        .pipe(gulpif(!production, livereload()));
});

gulp.task('scripts', function() {
    var production = util.env.type === 'production';

    gulp.src(['app/js/typewriter.js'])
        .pipe(browserify({
        debug: !production,
        transform: ['reactify']
    }))
        .on('error', browserifyHandler)
        .pipe(gulpif(production, uglify())) // only minify if production
    .pipe(gulp.dest('build/js/'))
        .pipe(gulpif(!production, livereload()));
});

gulp.task('vendor', function() {
    gulp.src(['app/js/vendor/**/*.js', 'app/js/vendor/**/*.json'])
        .pipe(gulp.dest('build/js/vendor/'));
});

gulp.task('images', function() {
    gulp.src(['app/img/**/*.png', 'app/img/**/*.jpg', 'app/img/**/*.gif', 'app/img/**/*.svg'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
});

gulp.task('copy', function() {
    var production = util.env.type === 'production';

    gulp.src(['app/*.html', 'app/*.appcache', 'app/favicon.ico', 'app/robots.txt', 'app/.htaccess'])
        .pipe(gulp.dest('build/'))
        .pipe(gulpif(!production, livereload()));

});


gulp.task('watch', function() {
    // Create LiveReload server
    livereload.listen();
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/js/**/*.jsx', ['scripts']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/img/**/*', ['images']);
    gulp.watch('app/img/*', ['images']);
    gulp.watch('app/img/**/*', ['vendor']);
    gulp.watch('app/img/*', ['vendor']);
    gulp.watch('app/*.html', ['copy']);
});

gulp.task('livereload', function() {
    gulp.src(['build/styles/*.css', 'build/js/*.js', 'build/img/*', 'build/index.html'])
      .pipe(connect.reload());
});

gulp.task('webserver', function() {
    connect.server({
      livereload: true,
      port: 8000,
      root: ['build']
    });
});

gulp.task('dev', ['styles', 'scripts', 'images', 'vendor']);

gulp.task('build', function(done) {
    sequence('clean', 'dev', 'copy', done);
});

gulp.task('default', function(done) {
    sequence('clean', 'dev', 'copy', 'webserver', 'watch', done);
});