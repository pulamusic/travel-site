const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const rename = require('gulp-rename')
const del = require('del')

const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// deletes older sprite folders before generating new files and folders
gulp.task('beginClean', function () {
  return del(['./app/temp/sprite', './app/assets/images/sprites'])
})

// creates the sprite file in the temp folder
gulp.task('createSprite', ['beginClean'], function () {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'))
})

// copies sprite file to the assets/images/sprites folder
gulp.task('copySpriteGraphic', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'))
})

// renames the file and copies it to the styles/modules folder
gulp.task('copySpriteCSS', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'))
})

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function () {
  return del('./app/temp/sprite')
})

// runs previous tasks in one command: gulp icons
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'])
