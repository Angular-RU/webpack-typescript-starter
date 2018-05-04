const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const isProduction = process.env.NODE_ENV == 'production';

const modes = {
    [true]: 'production',
    [false]: 'development'
};

const config = {
    context: __dirname,

    entry: './src/main.ts',

    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        pathinfo: true
    },

    target: 'web',

    mode: modes[isProduction],

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            enforce: 'pre',
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'tslint-loader'
        }, {
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

if (isProduction) {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    module.exports = merge(config, {
        optimization: {
            minimize: true,

            minimizer: [
                new UglifyJsPlugin({
                    parallel: require('os').cpus().length,

                    uglifyOptions: {
                        ie8: false,

                        output: {
                            ecma: 8,
                            beautify: false,
                            comments: false
                        }
                    }
                })
            ]
        }
    });
} else {
    module.exports = merge(config, {
        devServer: {
            port: 4200,
            open: true,
            watchContentBase: true,
            historyApiFallback: true
        }
    });
}

