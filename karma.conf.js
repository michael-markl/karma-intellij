const path = require('path')

module.exports = function (config) {
    config.set({
        basePath: './src',
        frameworks: ['jasmine', 'webpack'],
        files: [
            {
                pattern: './**/*.test.js',
                // The bug persists if we change this to true:
                watched: false,
            },
        ],
        plugins: ['karma-webpack', 'karma-sourcemap-loader', 'karma-jasmine', 'karma-chrome-launcher'],
        preprocessors: {
            './**/*.test.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            resolve: {
                modules: ['node_modules', 'src'],
                extensions: ['.js', '.ts', '.tsx'],
                alias: {},
            },
            context: path.resolve(__dirname, './src'),
            devtool: 'inline-source-map',
        },
        browsers: ['ChromeHeadless'],
    })
}
