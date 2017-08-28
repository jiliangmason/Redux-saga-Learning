/**
 * Created by Administrator on 2017/8/25 0025.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        autocomplete: './autocomplete/index.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js',
        publicPath: '/in-memory'
    },

    plugins: (process.env.NODE_ENV === 'production') ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
};