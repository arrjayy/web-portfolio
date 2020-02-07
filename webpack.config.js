const webpack = require('webpack');

module.exports = {
    // 1
    entry: './src/index.js',
    // 2
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // 3
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 4
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    // 5
    devServer: {
        contentBase: './dist',
        hot: true
    }
};