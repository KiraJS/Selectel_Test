var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var nib = require('nib');
var jade = require('gulp-jade');

//stylus
gulp.task('styl', function() {
  return gulp.src('stylus/main.styl' )
    .pipe(sourcemaps.init())
    .pipe(stylus({use:[nib()]}))
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

//webserver
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 8030,
    }));
});

//jade
gulp.task('html', function(){
  gulp.src('jade/index.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('./'));
});
//watch
gulp.task('watch', function() {
gulp.watch('stylus/*styl', ['styl']);
gulp.watch('jade/index.jade', ['html']);
});

//default
gulp.task('default', ['styl', 'watch', 'webserver', 'html'])
