const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()

gulp.task('watch', function () {

  browserSync.init({
    notify: false, // keeps gulp watch from crashing every time there is a syntax error in one of the project files
    server: {
      baseDir: 'app'
    }
  })

  watch('./app/index.html', function () {
    browserSync.reload()
  })

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject')
  })
})

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())
})
