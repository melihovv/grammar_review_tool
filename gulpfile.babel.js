import gulp from 'gulp';
import util from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

gulp.task('default', () => {
    gulp.start('webpack');
    gulp.start('watch');
});

const runWebpack = (config) => {
    return webpack(config, (error, stats) => {
        if (error) {
            throw new util.PluginError('runWebpack', error);
        }

        return util.log('[runWebpack]', stats.toString({colors: true}));
    });
};

gulp.task('webpack', (cb) => {
    runWebpack(webpackConfig);
    return cb();
});

gulp.task('watch', () => {
    gulp.watch(
        ['./src/**/*.js'],
        ['webpack']
    );
});
