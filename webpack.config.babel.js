export default {
    entry: {
        test: './src/parser/parser.spec.js',
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
