/*
 * @Author: techer
 * @Date:   2017-03-30 18:51:17
 * @Last Modified by:   techer
 * @Last Modified time: 2017-03-31 10:09:07
 */

'use strict';

const path = require('path');
const webpackMerge = require('webpack-merge');
const base = require('./base');


module.exports = webpackMerge(base, {
    output: {
        filename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',

    module: {
        rules: [{
            test: /\.scss$/,
            exclude: [/node_modules/],
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },

    plugins: [

    ]
});
