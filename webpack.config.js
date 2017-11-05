const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );
const PROD = process.env.NODE_ENV == 'production';

module.exports = {
    context: ROOT,

    entry: {
        'main': './main.ts'
    },
    
    output: {
        filename: PROD ? 'js/[name].[hash].min.js' : 'js/[name].js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
            * LOADERS
            *****************/
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
	    new HtmlWebpackPlugin({
	      template: 'index.html'
	    })
    ],

    devtool: PROD ? 'none' : 'cheap-module-source-map',
    devServer: {}
};

