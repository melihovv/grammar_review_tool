import del from 'del';
import webpack from 'webpack';
import glob from 'glob';
import ManifestPlugin from 'webpack-manifest-plugin';

const env = process.env.NODE_ENV;
let config = {};

if (env === 'test') {
    config = {
        entry: glob.sync('./src/**/*.spec.js'),
        output: {
            path: __dirname + '/temp/tests',
            filename: 'tests.js',
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'stage-2'],
                        cacheDirectory: true,
                    },
                },
            ],
        },
        plugins: [
            {
                apply: (compiler) => {
                    del.sync([
                        compiler.options.output.path + '/**',
                    ]);
                },
            },
            new webpack.NoErrorsPlugin(),
        ],
        node: {
            fs: 'empty',
        },
    };
} else {
    config = {
        entry: {
            index: './src/index.js',
        },
        output: {
            path: __dirname + '/public/assets',
            filename: env === 'prod' ? '[name].[chunkhash].js' : '[name].js',
        },
        devtool: env === 'dev' ? 'eval' : null,
        watch: env === 'dev',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'stage-2'],
                        plugins: env === 'prod' ? ['transform-runtime'] : [],
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.y$/,
                    loader: 'raw',
                },
            ],
        },
        plugins: [
            new webpack.NoErrorsPlugin(),
        ],
        node: {
            fs: 'empty',
        },
    };

    if (env === 'prod') {
        config.plugins.push(
            {
                apply: (compiler) => {
                    del.sync([
                        compiler.options.output.path + '/**',
                    ]);
                },
            }
        );
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                    unsafe: true,
                },
            })
        );
        config.plugins.push(
            new ManifestPlugin({
                fileName: 'rev-manifest.json',
            })
        );
    }
}

export default config;
