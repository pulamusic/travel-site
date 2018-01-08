const gulp = require('gulp')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssImport = require('postcss-import')

gulp.task('default', function () {
  console.log('You created a gulp task.')
})

gulp.task('html', function () {
  console.log('Imagine something useful being done here.')
})

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html')
  })

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles')
  })
})
