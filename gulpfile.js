var gulp = require('gulp');
var autoprefixer = require("gulp-autoprefixer");
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var livereload = require("gulp-livereload");

gulp.task('sass', () => {
  gulp.src('./src/sass/main.scss')
  .pipe(sass().on("error", sass.logError))
  .pipe(sass())
  .pipe(livereload())
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(clean())
  .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('build', () => {
  gulp.start(['sass']); 
});

gulp.task('default', ['build']);