'use strict';

const path = require('path');
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;

const testFile = process.argv[4] || '*';
const testFilesGlob = `./src/**/${testFile}.spec.ts`;

module.exports = config => {
    config.set({
        basePath: __dirname,

        frameworks: ['jasmine'],

        files: [testFilesGlob],

        preprocessors: {
            [testFilesGlob]: ['webpack', 'sourcemap']
        },

        browsers: ['Chrome'],

        webpack: {
            devtool: 'inline-source-map',

            mode: 'production',

            resolve: {
                extensions: ['.ts'],

                modules: [
                    path.join(__dirname, 'src')
                ]
            },

            module: {
                rules: [{
                    test: /\.ts$/,
                    loader: 'ts-loader'
                }]
            },

            plugins: [
                new SourceMapDevToolPlugin({
                    test: /\.(ts|js)($|\?)/
                })
            ]
        },

        webpackMiddleware: {
            stats: {
                color: true,
                chunks: true
            }
        },

        client: {
            captureConsole: false
        },

        logLevel: config.LOG_INFO,

        mime: {
            'text/x-typescript': ['ts']
        },

        reporters: ['progress', 'coverage'],

        port: 9876,

        colors: true,

        autoWatch: false,

        singleRun: true,

        concurrency: Infinity,

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
