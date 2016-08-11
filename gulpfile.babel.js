import gulp from 'gulp';
import gulplog from 'gulplog';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import browserSync from 'browser-sync';

gulp.task('webpack', (cb) => {
  webpack(webpackConfig, (error, stats) => {
    if (error) {
      gulplog.error(error);
    } else {
      gulplog.info(stats.toString({colors: true}));
    }

    if (!webpackConfig.watch && error) {
      cb(error);
    } else {
      cb();
    }
  });
});

gulp.task('serve', () => {
  browserSync.init({
    server: 'public',
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('test', gulp.series('webpack', function watch() {
  gulp.watch('./src/js/**/*.js', gulp.series('webpack'));
}));

gulp.task(
  'dev',
  gulp.series(
    'webpack',
    gulp.parallel(
      'serve',
      function watch() {
        gulp.watch('./src/**/*.{js,y,styl}', gulp.series('webpack'));
      }
    )
  )
);

gulp.task('prod', gulp.series('webpack'));
