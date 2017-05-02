/*
 * @Author: techer
 * @Date:   2017-03-30 18:52:21
 * @Last Modified by:   techer
 * @Last Modified time: 2017-03-31 10:22:11
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(base, {
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(process.cwd(), './dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: [/node_modules/],
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.[chunkhash].css"
        }),
        new UglifyJSPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd(),
            exclude: []
        })
    ]
});
