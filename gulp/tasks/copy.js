// Переносит файлы в папку dist

module.exports = function () {

  $.gulp.task('copy', () => {

    return $.gulp.src([
      'src/*.ico',
      'src/*.webmanifest'
    ], {
      base: 'src/'
    })

      .pipe($.gulp.dest($.config.output.path))
  });
}
