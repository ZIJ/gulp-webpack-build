'use strict';

var path = require('path'),
    WebpackConfig = require('webpack-config');

module.exports = WebpackConfig.from({
    gulp: false,
    output: {
        filename: '[name].js'
    },
    resolve: {
        root: [
            __dirname,
            path.join(__dirname, 'test', 'fixtures')
        ]
    }
});
