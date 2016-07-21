export default {
    entry: {
        'parser.spec': './src/parser/parser.spec.js',
        'finder.spec': './src/parser/finder.spec.js',
    },
    output: {
        path: './dist/js',
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    node: {
        fs: 'empty',
    }
};
