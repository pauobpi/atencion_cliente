var webpack = require('webpack');

module.exports = {
    entry: {
        transfer: './transfer/transfer.js'
    },
    output: { filename: '[name].js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
