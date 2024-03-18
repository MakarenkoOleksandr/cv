const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssbeautify = require("gulp-cssbeautify");

gulp.task("sass", function () {
  return gulp
    .src("src/style/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssbeautify())
    .pipe(gulp.dest("src/style"));
});

gulp.task("watch", function () {
  gulp.watch("src/style/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));
