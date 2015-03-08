var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    watch = require('gulp-watch');
 
gulp.task('sass', function() {
    return sass('assets/src/scss/demo.scss')
      .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('scripts', function(){
  gulp.src('assets/src/js/*.js')
    .pipe(gulp.dest('assets/dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('assets/src/scss/*.scss', ['sass']);
    gulp.watch('assets/src/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);